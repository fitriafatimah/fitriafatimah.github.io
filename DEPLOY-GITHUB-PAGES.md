# 🚀 Panduan Deploy ke GitHub Pages

## Langkah-langkah Deploy

### 1. Siapkan Repository GitHub

1. **Buat repository baru di GitHub**
   - Buka https://github.com/new
   - Isi nama repository (contoh: `fitria-portfolio`)
   - Pilih **Public** (untuk GitHub Pages gratis)
   - Jangan centang README, .gitignore, atau license (kita sudah punya)
   - Klik **Create repository**

### 2. Inisialisasi Git di Local

Buka terminal di folder project dan jalankan:

```bash
# Inisialisasi git
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit: Portfolio website"

# Rename branch ke main (jika belum)
git branch -M main

# Tambahkan remote repository
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Push ke GitHub
git push -u origin main
```

**Ganti:**
- `USERNAME` dengan username GitHub Anda
- `REPO-NAME` dengan nama repository yang dibuat

### 3. Aktifkan GitHub Pages

**Cara 1: Via Settings (Manual)**

1. Buka repository di GitHub
2. Klik tab **Settings**
3. Scroll ke bagian **Pages** (di sidebar kiri)
4. Di bagian **Source**:
   - Pilih **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Klik **Save**
6. Tunggu beberapa menit
7. Website akan tersedia di: `https://USERNAME.github.io/REPO-NAME/`

**Cara 2: Via GitHub Actions (Otomatis)**

File `.github/workflows/deploy.yml` sudah disediakan. Setelah push ke GitHub:

1. GitHub Actions akan otomatis deploy
2. Buka tab **Actions** di repository
3. Tunggu workflow selesai
4. Website akan tersedia di: `https://USERNAME.github.io/REPO-NAME/`

### 4. Update Setelah Perubahan

Setelah mengubah file, push lagi:

```bash
git add .
git commit -m "Update portfolio data"
git push
```

GitHub Pages akan otomatis update (butuh beberapa menit).

## 🔧 Konfigurasi Khusus

### Jika Repository Name Bukan Username

Jika URL website Anda seperti: `https://username.github.io/repo-name/`

Maka perlu update base path. Tambahkan di `<head>` file `index.html`:

```html
<head>
    <base href="/repo-name/">
    <!-- ... lainnya ... -->
</head>
```

**Ganti `repo-name` dengan nama repository Anda.**

### Custom Domain (Opsional)

Jika punya domain sendiri:

1. Buat file `CNAME` di root project:
   ```
   yourdomain.com
   ```

2. Push ke GitHub:
   ```bash
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

3. Di GitHub Settings → Pages, custom domain akan muncul
4. Update DNS di provider domain Anda

## ✅ Checklist Sebelum Deploy

- [ ] Semua data sudah diupdate di `js/data.js`
- [ ] Semua gambar ada di folder `img/`
- [ ] File musik ada di folder `audio/` (jika digunakan)
- [ ] Test di localhost dengan `npm run dev`
- [ ] Semua link berfungsi
- [ ] Tidak ada error di console browser
- [ ] Responsive di mobile device

## 🐛 Troubleshooting

### Website tidak muncul

1. **Cek Settings → Pages**
   - Pastikan branch sudah dipilih
   - Pastikan folder sudah dipilih

2. **Cek Actions tab**
   - Lihat apakah ada error
   - Pastikan workflow berhasil

3. **Tunggu beberapa menit**
   - Deploy butuh waktu 1-5 menit

4. **Clear cache browser**
   - Tekan Ctrl+Shift+R (Windows/Linux)
   - Tekan Cmd+Shift+R (Mac)

### Path tidak benar (404 error)

1. **Cek console browser** (F12)
   - Lihat error 404
   - Pastikan path file benar

2. **Update base path** jika perlu
   - Lihat bagian "Konfigurasi Khusus" di atas

### Musik tidak diputar

1. **Cek path file musik**
   - Pastikan file ada di `audio/`
   - Pastikan path di `js/data.js` benar

2. **Cek console browser**
   - Lihat apakah ada error loading file

## 📝 Tips

1. **Gunakan HTTPS**
   - GitHub Pages otomatis menggunakan HTTPS
   - Pastikan semua resource menggunakan HTTPS

2. **Optimasi Gambar**
   - Kompres gambar sebelum upload
   - Gunakan format WebP untuk ukuran lebih kecil

3. **Test di Berbagai Browser**
   - Chrome, Firefox, Safari, Edge
   - Test di mobile device

4. **Update Secara Berkala**
   - Push perubahan secara rutin
   - GitHub Pages akan otomatis update

## 🔗 Link Berguna

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

**Selamat! Website portfolio Anda sudah online! 🎉**

