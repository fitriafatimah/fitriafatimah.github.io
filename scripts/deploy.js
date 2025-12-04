#!/usr/bin/env node

/**
 * Script untuk deploy otomatis ke GitHub Pages
 * Usage: yarn deploy [commit message]
 */

const { execSync } = require('child_process');
const readline = require('readline');

// Get commit message from command line argument or prompt user
const commitMessage = process.argv[2] || null;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function deploy() {
  try {
    console.log('🚀 Starting deployment to GitHub Pages...\n');

    // Check if git is initialized
    try {
      execSync('git rev-parse --git-dir', { stdio: 'ignore' });
    } catch (error) {
      console.error('❌ Error: Git repository not found!');
      console.error('   Please run: git init');
      process.exit(1);
    }

    // Check if there are changes
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf-8' });
      if (!status.trim()) {
        console.log('ℹ️  No changes to commit.');
        console.log('   Everything is up to date!');
        rl.close();
        return;
      }
    } catch (error) {
      console.error('❌ Error checking git status');
      process.exit(1);
    }

    // Get commit message
    let message = commitMessage;
    if (!message) {
      message = await question('📝 Enter commit message (or press Enter for default): ');
      if (!message.trim()) {
        const timestamp = new Date().toLocaleString('id-ID');
        message = `Update portfolio - ${timestamp}`;
      }
    }

    console.log('\n📦 Staging changes...');
    execSync('git add .', { stdio: 'inherit' });

    console.log('💾 Committing changes...');
    execSync(`git commit -m "${message}"`, { stdio: 'inherit' });

    console.log('📤 Pushing to GitHub...');
    execSync('git push origin main', { stdio: 'inherit' });

    console.log('\n✅ Deployment successful!');
    console.log('⏳ GitHub Pages will update in 1-5 minutes.');
    console.log('🌐 Check your website after a few minutes.\n');

  } catch (error) {
    console.error('\n❌ Deployment failed!');
    
    if (error.message.includes('not a git repository')) {
      console.error('   Error: Not a git repository');
      console.error('   Run: git init');
    } else if (error.message.includes('no upstream branch')) {
      console.error('   Error: No upstream branch configured');
      console.error('   Run: git push -u origin main');
    } else if (error.message.includes('nothing to commit')) {
      console.log('ℹ️  No changes to commit.');
      console.log('   Everything is up to date!');
    } else {
      console.error('   Error:', error.message);
    }
    
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run deploy
deploy();

