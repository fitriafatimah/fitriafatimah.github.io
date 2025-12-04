const express = require('express');
const path = require('path');
const chokidar = require('chokidar');
const http = require('http');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Watch for file changes
const watcher = chokidar.watch([
    path.join(__dirname, 'js/data.js'),
    path.join(__dirname, 'index.html'),
    path.join(__dirname, 'css'),
    path.join(__dirname, 'js/main.js')
], {
    ignored: /node_modules/,
    persistent: true
});

// Store connected clients for hot reload
const clients = new Set();

// SSE endpoint for hot reload
app.get('/hot-reload', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    clients.add(res);
    
    req.on('close', () => {
        clients.delete(res);
    });
});

// Notify all clients when file changes
watcher.on('change', (filePath) => {
    console.log(`File changed: ${filePath}`);
    const message = `data: ${JSON.stringify({ file: filePath, timestamp: Date.now() })}\n\n`;
    clients.forEach(client => {
        try {
            client.write(message);
        } catch (error) {
            clients.delete(client);
        }
    });
});

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`\n🚀 Server running at http://localhost:${PORT}`);
    console.log(`📝 Edit data in js/data.js to see changes`);
    console.log(`🔄 Hot reload is active!\n`);
});

