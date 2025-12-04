# Panduan Penggunaan Portfolio dengan Hot Reload

## 🚀 Cara Memulai

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Jalankan Development Server**
   ```bash
   npm run dev
   ```

3. **Buka Browser**
   Buka http://localhost:3000 di browser Anda

## 📝 Mengubah Data Portfolio

Semua data portfolio ada di file **`js/data.js`**. Edit file ini untuk mengubah konten:

### Data yang Bisa Diubah:

1. **Header/Hero Section**
   - Nama, title, typed text
   - Link CV, video URL
   - Foto profile

2. **About Section**
   - Tahun pengalaman
   - Deskripsi
   - Fitur-fitur
   - Statistik (Happy Clients, Projects Completed)

3. **Skills Section**
   - Daftar skill dengan persentase
   - Experience (pengalaman kerja)
   - Education (pendidikan)

4. **Services Section**
   - Daftar layanan dengan harga

5. **Projects Section**
   - Daftar proyek dengan gambar
   - Filter kategori

6. **Team Section**
   - Anggota tim

7. **Testimonials Section**
   - Testimoni dari klien

8. **Contact Section**
   - Alamat, telepon, email
   - Link social media

9. **Footer Section**
   - Informasi footer

## 🔄 Hot Reload

Setelah mengubah data di `js/data.js`:
1. Simpan file (Ctrl+S / Cmd+S)
2. Browser akan **otomatis reload** dalam 1-2 detik
3. Perubahan langsung terlihat!

## 💡 Tips

- Hot reload hanya bekerja saat menggunakan development server (`npm run dev`)
- Jika membuka file HTML langsung, hot reload tidak akan bekerja
- Perubahan pada CSS akan di-reload tanpa refresh halaman penuh
- Perubahan pada `data.js` atau `index.html` akan trigger full page reload

## 📁 Struktur File

```
proman-1.0.0/
├── js/
│   ├── data.js      ← Edit data di sini!
│   └── main.js      ← Logic rendering
├── index.html       ← Template HTML
├── server.js        ← Development server dengan hot reload
└── package.json     ← Dependencies
```

## 🎯 Contoh Mengubah Data

Buka `js/data.js` dan cari bagian yang ingin diubah, contoh:

```javascript
header: {
    prefix: "I'm",
    name: "Kate Winslet",  // ← Ubah nama di sini
    typedText: ["Web Designer", "Web Developer"],  // ← Ubah typed text
    // ...
}
```

Simpan file, dan browser akan otomatis reload!

