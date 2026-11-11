# Virtual11 workspace

Workspace starter untuk menyiapkan mesin virtual Windows 11. Berisi dasbor HTML/CSS/JavaScript statis, contoh konfigurasi JSON, dokumentasi, data contoh, dan checklist ISO.

## Jalankan dasbor

Jalankan server HTTP statis dari direktori `files/` (misalnya `python -m http.server 8000`), lalu buka `http://localhost:8000`. Server diperlukan agar browser dapat memuat `data/files.json`.

## Struktur

- `assets/` — stylesheet dan JavaScript dasbor.
- `config/` — contoh profil VM dan checklist keamanan.
- `data/` — indeks file dan inventory contoh.
- `docs/` — panduan setup, jaringan, dan storage.
- `iso/` — instruksi dan checklist metadata ISO; tidak berisi ISO.

## Penting

Konfigurasi JSON merupakan contoh dokumentasi, bukan file yang otomatis membuat VM. Sesuaikan pengaturan dengan host dan hypervisor, dan ikuti ketentuan lisensi. ISO Windows 11 **tidak disertakan**. Unduh media instalasi dari Microsoft dan simpan di luar repository. File ISO, virtual disk, snapshot, credentials, dan secrets tidak boleh di-commit.
