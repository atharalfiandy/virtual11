# Penyimpanan VM

Buat virtual disk baru melalui hypervisor. File disk virtual dan snapshot tidak disimpan di repository ini. Simpan di volume lokal yang memiliki ruang cukup dan cadangkan data penting secara terpisah.

Snapshot berguna untuk titik pemulihan sementara, tetapi bukan pengganti backup. Hapus snapshot lama dengan fitur hypervisor agar rantai disk tetap konsisten. Jangan memindahkan atau mengedit file disk VM saat mesin masih berjalan.
