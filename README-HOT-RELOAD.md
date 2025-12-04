# Hot Reload Setup

## Cara Menggunakan Hot Reload

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

4. **Edit Data**
   - Buka file `js/data.js`
   - Ubah data sesuai kebutuhan
   - Simpan file
   - Browser akan otomatis reload!

## Struktur Data

Semua data portfolio ada di file `js/data.js`. Anda bisa mengubah:

- **Header**: Nama, title, typed text, CV link, video URL
- **About**: Tahun pengalaman, deskripsi, fitur, statistik
- **Skills**: Daftar skill, experience, education
- **Services**: Daftar layanan
- **Projects**: Daftar proyek
- **Team**: Anggota tim
- **Testimonials**: Testimoni
- **Contact**: Informasi kontak, social media
- **Footer**: Informasi footer

## Catatan

- Hot reload hanya bekerja saat menggunakan development server (`npm run dev`)
- Jika membuka file HTML langsung, hot reload tidak akan bekerja
- Perubahan pada CSS akan di-reload tanpa refresh halaman
- Perubahan pada data.js atau HTML akan trigger full page reload

