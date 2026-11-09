# Student Task Planner

Aplikasi web sederhana untuk membantu mahasiswa baru mencatat tugas dan tenggatnya. Dibuat sebagai tugas pada materi **"Building with AI, Managing Change with GitHub"** (Nugi Farhan).

- **Nama:** (isi nama kamu)
- **Link repository:** (isi URL repo GitHub kamu)

## Fitur

- Menampilkan daftar tugas contoh (judul, tenggat, status).
- Menandai tugas sebagai selesai atau belum selesai lewat checkbox.
- Filter: **Semua**, **Belum selesai**, **Selesai**.
- Menambah tugas baru lewat formulir.
- Penanda **Terlambat** untuk tugas yang lewat tenggat.
- Tampilan responsif (nyaman di HP maupun laptop).
- Data tersimpan di browser (`localStorage`), tanpa library eksternal.

## Teknologi

HTML, CSS, dan JavaScript murni (vanilla). Tidak ada dependensi.

## Struktur File

| File | Fungsi |
| --- | --- |
| `index.html` | Kerangka halaman: formulir, filter, dan daftar tugas |
| `style.css` | Tampilan dan layout responsif |
| `script.js` | Logika: render daftar, tandai selesai, filter, tambah tugas |
| `README.md` | Dokumentasi kegiatan |

## Cara Menjalankan

1. Clone repository ini:
   ```bash
   git clone <url-repository-kamu>
   cd student-task-planner
   ```
2. Buka `index.html` di browser (klik dua kali, atau di VS Code gunakan ekstensi Live Server).

## Cara Menguji

1. Daftar tugas contoh tampil dengan judul, tenggat, dan status.
2. Centang sebuah tugas: statusnya berubah menjadi **Selesai** dan judul tercoret.
3. Klik filter **Belum selesai** dan **Selesai**: daftar menyesuaikan.
4. Tambahkan tugas baru lewat formulir: tugas muncul di daftar.
5. Muat ulang halaman: data tetap ada.

## Dokumentasi Kegiatan

### 1. Prompt AI

Prompt disusun dengan struktur **Role, Task, Context, Format** seperti pada materi:

```text
You are helping me build a beginner-friendly student task planner as a simple
web application.

## Goal
Create a task planner that helps first-year university students keep track of
assignments and deadlines.

## Requirements
- Display a list of sample assignments.
- Each assignment must show its title, due date, and completion status.
- Allow users to mark assignments as completed.
- Include a filter for all, pending, and completed assignments.
- Make the interface clean, readable, and responsive.

## Constraints
- Use HTML, CSS, and vanilla JavaScript.
- Keep the implementation simple enough for a beginner to understand.
- Avoid unnecessary libraries and external dependencies.
- Keep the code organized and explain the purpose of each file.

## Output
Provide the complete code for each file, explain how to run the application, and
describe how to test the main interactions.

Do not claim that the application works until you have verified its behavior.
```

AI yang digunakan: Claude.

### 2. Alur Git dan GitHub

```bash
git init
git add .
git commit -m "Initial commit: student task planner"
git branch -M main
git remote add origin git@github.com:<username>/student-task-planner.git
git push -u origin main
```

Setelah itu dilakukan perubahan (contoh: memperbarui README) lalu di-commit dan di-push lagi:

```bash
git add .
git commit -m "Update README"
git push origin main
```

### 3. Yang Dipelajari

(Isi dengan 2-3 kalimat dari pengalamanmu: apa yang paling membantu dari prompt yang spesifik, dan apa yang baru kamu pahami tentang Git dan GitHub.)
