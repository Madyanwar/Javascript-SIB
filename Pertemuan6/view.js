import { index, store, destroy } from './controller.js';

// Tambah minimal 2 data baru
store({ nama: "Rina", umur: 23, alamat: "Jl. Lontar 11, Yogyakarta", email: "rina@example.com" });
store({ nama: "Beni", umur: 22, alamat: "Jl. Kopo 12, Bandung",       email: "beni@example.com" });

// Tampilkan semua data
index();

// Hapus data berdasarkan nama
destroy("Citra");

// Tampilkan lagi setelah hapus
index();
