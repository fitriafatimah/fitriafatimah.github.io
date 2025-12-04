# Fitria Fatimah - Fashion Designer Portfolio

Portfolio website untuk Fashion Designer dengan fitur hot reload dan musik background.

## 🚀 Fitur

- ✅ Responsive Design
- ✅ Hot Reload untuk Development
- ✅ Background Music Player
- ✅ Data Terpusat di `js/data.js`
- ✅ Modern UI/UX

## 📁 Struktur Project

```
proman-1.0.0/
├── audio/              # File musik
├── css/                # Stylesheet
├── img/                # Gambar portfolio
├── js/
│   ├── data.js        # Data portfolio (EDIT DI SINI!)
│   └── main.js        # Logic aplikasi
├── lib/                # Library eksternal
├── index.html          # Halaman utama
├── package.json        # Dependencies
├── server.js           # Development server
└── README.md           # Dokumentasi
```

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Jalankan Development Server

```bash
npm run dev
```

Buka http://localhost:3000 di browser.

## 📝 Mengubah Data Portfolio

Edit file `js/data.js` untuk mengubah semua konten portfolio:
- Header/Hero section
- About section
- Skills & Experience
- Services
- Projects
- Contact

## 🚀 Deploy ke GitHub Pages

### Deploy Otomatis

Setelah mengubah data, deploy dengan satu command:

```bash
yarn deploy
```

Atau dengan commit message custom:

```bash
yarn deploy "Update portfolio - add new projects"
```

**Cara kerja:**
1. Otomatis add semua perubahan
2. Commit dengan message
3. Push ke GitHub
4. GitHub Pages akan otomatis update dalam 1-5 menit

### Setup Awal (Hanya Sekali)

Jika belum setup git repository:

```bash
# 1. Inisialisasi git
git init

# 2. Tambahkan remote repository
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# 3. Commit pertama
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main

# 4. Aktifkan GitHub Pages
# Buka repository → Settings → Pages → Pilih branch main
```

Setelah setup awal, cukup gunakan `yarn deploy` untuk update!

## 🌐 Deploy ke GitHub Pages

### Cara 1: Manual Deploy

1. **Buat Repository di GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO-NAME.git
   git push -u origin main
   ```

2. **Aktifkan GitHub Pages**
   - Buka repository di GitHub
   - Klik **Settings** → **Pages**
   - Di bagian **Source**, pilih branch **main** dan folder **/ (root)**
   - Klik **Save**
   - Website akan tersedia di: `https://USERNAME.github.io/REPO-NAME/`

### Cara 2: Menggunakan GitHub Actions (Otomatis)

File `.github/workflows/deploy.yml` sudah disediakan untuk auto-deploy.

Setelah push ke GitHub, GitHub Actions akan otomatis deploy ke GitHub Pages.

## 📋 Checklist Sebelum Deploy

- [ ] Update data di `js/data.js`
- [ ] Pastikan semua gambar ada di folder `img/`
- [ ] Pastikan file musik ada di folder `audio/` (jika digunakan)
- [ ] Test di localhost dengan `npm run dev`
- [ ] Test semua link dan fungsi
- [ ] Pastikan path relatif sudah benar (tidak ada path absolut)

## 🔧 Konfigurasi GitHub Pages

### Base Path (Jika repo bukan root)

Jika repository name bukan username, GitHub Pages akan menggunakan subfolder.

Contoh: `https://username.github.io/repo-name/`

Jika ini terjadi, update path di `index.html`:
- Ubah semua path dari `css/` menjadi `./css/` atau `/repo-name/css/`
- Atau gunakan base tag di `<head>`:
  ```html
  <base href="/repo-name/">
  ```

## 📦 File yang Perlu di-Deploy

Pastikan file berikut ada di repository:
- ✅ `index.html`
- ✅ `css/` (folder dan semua file CSS)
- ✅ `js/` (folder dan semua file JS)
- ✅ `img/` (folder dan semua gambar)
- ✅ `lib/` (folder dan semua library)
- ✅ `audio/` (folder dan file musik, jika digunakan)

## ⚠️ Catatan Penting

1. **Hot Reload hanya bekerja di development** (`npm run dev`)
2. **Di GitHub Pages, hot reload tidak bekerja** (ini normal)
3. **File `node_modules/` tidak perlu di-deploy** (sudah di .gitignore)
4. **File `server.js` dan `package.json` tidak diperlukan** di GitHub Pages (tapi tidak masalah jika ikut ter-deploy)

## 🐛 Troubleshooting

### Website tidak muncul di GitHub Pages
- Pastikan branch sudah di-push ke GitHub
- Pastikan GitHub Pages sudah diaktifkan di Settings
- Tunggu beberapa menit (deploy butuh waktu)
- Cek Actions tab untuk melihat status deploy

### Path tidak benar (404 error)
- Pastikan semua path menggunakan relative path
- Jika repo name ada, tambahkan base path
- Cek console browser untuk error

### Musik tidak diputar
- Pastikan file musik ada di folder `audio/`
- Pastikan path di `js/data.js` benar
- Beberapa browser memblokir auto-play audio

## 📞 Support

Jika ada masalah, silakan buat issue di GitHub repository.

## 📄 License

Template ini bebas digunakan untuk portfolio pribadi.

---

**Happy Coding! 🎉**

