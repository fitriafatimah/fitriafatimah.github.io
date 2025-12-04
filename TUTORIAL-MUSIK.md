# Tutorial Memasukkan Musik ke Website Portfolio

## 📁 Langkah 1: Siapkan File Musik

1. **Format File yang Didukung:**
   - MP3 (`.mp3`) - **Direkomendasikan** (kompatibel dengan semua browser)
   - WAV (`.wav`) - Kualitas tinggi tapi file besar
   - OGG (`.ogg`) - Alternatif untuk browser modern

2. **Ukuran File:**
   - Usahakan file musik tidak terlalu besar (di bawah 5MB)
   - Gunakan kompresi MP3 dengan bitrate 128-192 kbps untuk keseimbangan kualitas dan ukuran

3. **Hak Cipta:**
   - Pastikan Anda memiliki izin untuk menggunakan musik tersebut
   - Gunakan musik bebas royalti atau musik yang Anda buat sendiri
   - Sumber musik gratis: Free Music Archive, Incompetech, Bensound

## 📂 Langkah 2: Buat Folder dan Simpan File

1. Buat folder `audio` di root project Anda:
   ```
   proman-1.0.0/
   ├── audio/
   │   └── music.mp3
   ├── css/
   ├── img/
   ├── js/
   └── index.html
   ```

2. Simpan file musik Anda di folder `audio/`
   - Contoh: `audio/music.mp3`
   - Atau: `audio/background-music.mp3`

## ⚙️ Langkah 3: Update File data.js

Buka file `js/data.js` dan update bagian `header`:

```javascript
header: {
    prefix: "I'm",
    name: "Fitria Fatimah",
    typedText: [
        "Fashion Designer",
        "Fashion Stylist",
        "Creative Director",
        "Fashion Consultant",
        "Design Consultant",
    ],
    cvLink: "",
    musicUrl: "audio/music.mp3",  // ← Path ke file musik Anda
    musicTitle: "Background Music", // ← Judul musik (opsional)
    profileImage: "img/profile.png",
},
```

**Contoh path yang berbeda:**
- Jika file di `audio/background.mp3` → `musicUrl: "audio/background.mp3"`
- Jika file di root → `musicUrl: "music.mp3"`
- Jika menggunakan URL eksternal → `musicUrl: "https://example.com/music.mp3"`

## 🎵 Langkah 4: Cara Menggunakan

1. **Klik tombol "Play Music"** di halaman utama
2. Modal akan terbuka dengan audio player
3. Klik tombol play di audio player untuk memutar musik
4. Musik akan berhenti otomatis saat modal ditutup

## 🔧 Opsi Lanjutan

### Auto-play saat modal dibuka

Jika Anda ingin musik langsung diputar saat modal dibuka, edit file `js/main.js`:

Cari bagian ini:
```javascript
// Optional: Auto-play music when modal opens (uncomment if desired)
// $('#musicModal').on('shown.bs.modal', function (e) {
//     const audioPlayer = document.getElementById('audioPlayer');
//     if (audioPlayer) {
//         audioPlayer.play();
//     }
// });
```

Hapus tanda `//` untuk mengaktifkan auto-play:
```javascript
$('#musicModal').on('shown.bs.modal', function (e) {
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        audioPlayer.play();
    }
});
```

**Catatan:** Beberapa browser memblokir auto-play audio. User harus berinteraksi dengan halaman terlebih dahulu.

### Menggunakan Musik dari URL Eksternal

Anda juga bisa menggunakan musik dari URL eksternal:

```javascript
musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
```

### Menggunakan Multiple Format (Fallback)

Untuk kompatibilitas maksimal, Anda bisa menyediakan beberapa format:

Edit `index.html`, cari bagian audio player dan tambahkan multiple source:

```html
<audio id="audioPlayer" controls class="w-100">
    <source id="audioSource" src="" type="audio/mpeg">
    <source src="audio/music.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>
```

## 📝 Tips

1. **Optimasi File:**
   - Gunakan tool seperti Audacity untuk mengompres file musik
   - Target ukuran: 2-5 MB untuk musik 2-3 menit

2. **Kualitas vs Ukuran:**
   - 128 kbps: Kualitas cukup, ukuran kecil
   - 192 kbps: Kualitas baik, ukuran sedang (direkomendasikan)
   - 320 kbps: Kualitas sangat baik, ukuran besar

3. **Testing:**
   - Test di berbagai browser (Chrome, Firefox, Safari, Edge)
   - Test di mobile device
   - Pastikan file bisa diakses dan diputar

4. **Alternatif:**
   - Jika file terlalu besar, pertimbangkan menggunakan streaming service
   - Atau gunakan musik yang lebih pendek (30 detik - 1 menit)

## ❓ Troubleshooting

**Musik tidak diputar:**
- Pastikan path file benar
- Cek console browser untuk error
- Pastikan format file didukung
- Cek ukuran file (terlalu besar bisa lambat loading)

**Musik tidak muncul di modal:**
- Pastikan `musicUrl` sudah diisi di `data.js`
- Refresh browser setelah mengubah `data.js`
- Cek apakah file benar-benar ada di path yang ditentukan

**Auto-play tidak bekerja:**
- Browser modern memblokir auto-play
- User harus klik tombol play manual
- Atau user harus berinteraksi dengan halaman terlebih dahulu

## 🎼 Sumber Musik Gratis

1. **Free Music Archive** - https://freemusicarchive.org/
2. **Incompetech** - https://incompetech.com/music/royalty-free/
3. **Bensound** - https://www.bensound.com/
4. **YouTube Audio Library** - https://www.youtube.com/audiolibrary
5. **Pixabay Music** - https://pixabay.com/music/

Pastikan untuk membaca lisensi sebelum menggunakan musik dari sumber tersebut.

