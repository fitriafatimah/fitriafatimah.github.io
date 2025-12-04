# 🚀 Deploy dengan Yarn

## Quick Deploy

Setelah mengubah data portfolio, deploy dengan satu command:

```bash
yarn deploy
```

Atau dengan commit message:

```bash
yarn deploy "Update portfolio - add new projects"
```

## Cara Kerja

1. **Otomatis add semua perubahan**
2. **Commit dengan message** (atau prompt jika tidak ada)
3. **Push ke GitHub**
4. **GitHub Pages otomatis update** dalam 1-5 menit

## Setup Awal (Hanya Sekali)

### 1. Inisialisasi Git

```bash
git init
```

### 2. Tambahkan Remote Repository

```bash
git remote add origin https://github.com/USERNAME/REPO-NAME.git
```

Ganti:
- `USERNAME` = username GitHub Anda
- `REPO-NAME` = nama repository

### 3. Commit & Push Pertama Kali

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```

### 4. Aktifkan GitHub Pages

1. Buka repository di GitHub
2. **Settings** → **Pages**
3. **Source**: Pilih branch **main** dan folder **/ (root)**
4. **Save**

## Setelah Setup

Cukup gunakan:

```bash
yarn deploy
```

Website akan otomatis ter-update! 🎉

## Contoh Workflow

```bash
# 1. Edit data portfolio
# Buka js/data.js dan ubah data

# 2. Test di localhost (opsional)
yarn dev
# Buka http://localhost:3000

# 3. Deploy ke GitHub Pages
yarn deploy "Update portfolio - new projects"

# 4. Tunggu 1-5 menit
# Website otomatis ter-update!
```

## Troubleshooting

### Error: "Not a git repository"
```bash
git init
```

### Error: "No upstream branch"
```bash
git push -u origin main
```

### Error: "Nothing to commit"
Tidak ada perubahan yang perlu di-deploy. Semua sudah up-to-date!

### Perubahan tidak muncul
1. Tunggu 1-5 menit (GitHub Pages butuh waktu)
2. Hard refresh browser: `Ctrl+Shift+R` (Windows) atau `Cmd+Shift+R` (Mac)
3. Cek GitHub Actions tab untuk melihat status deploy

---

**Selamat deploy! 🚀**

