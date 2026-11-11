# Jaringan VM

- **NAT** biasanya pilihan awal yang lebih terisolasi: guest dapat mengakses jaringan luar melalui host, tetapi tidak langsung menjadi perangkat LAN.
- **Bridged** menempatkan guest pada jaringan lokal seperti perangkat terpisah. Gunakan hanya jika diperlukan dan sesuai kebijakan jaringan.
- **Host-only** dapat digunakan untuk komunikasi terbatas antara host dan guest tanpa akses langsung ke jaringan luar, bergantung pada hypervisor.

Batasi port forwarding, nonaktifkan layanan yang tidak dibutuhkan, dan jangan mengekspos RDP atau layanan administratif ke internet. Nama opsi berbeda antar hypervisor.
