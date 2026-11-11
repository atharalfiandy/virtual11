# Setup Windows 11 VM

## Prasyarat

- Komputer host yang memenuhi kebutuhan hypervisor pilihan Anda.
- Hypervisor terpasang dan diperbarui.
- Media instalasi Windows 11 yang diperoleh secara sah dari Microsoft.
- Ruang penyimpanan yang cukup untuk virtual disk dan snapshot.

## Persiapan

1. Baca `../config/vm-defaults.json`; nilai di sana hanya contoh.
2. Buat VM baru di hypervisor dan pilih guest OS Windows 11 64-bit.
3. Aktifkan UEFI, Secure Boot, dan perangkat TPM 2.0 virtual sesuai dukungan hypervisor.
4. Alokasikan memori, CPU, dan disk berdasarkan kapasitas host. Jangan mengalokasikan semua resource host ke VM.
5. Pasang ISO dari lokasi lokal sebagai optical drive.
6. Boot VM, ikuti installer, lalu lepaskan ISO setelah instalasi jika diperlukan.

## Catatan

Nama menu dan dukungan fitur berbeda antar hypervisor. Ikuti dokumentasi resmi hypervisor Anda. Jangan gunakan konfigurasi ini sebagai pengganti persyaratan lisensi Microsoft.
