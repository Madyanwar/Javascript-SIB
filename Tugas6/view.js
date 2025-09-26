import { index, store, destroy } from './controller.js';

// Tombol tampilkan data
document.getElementById("btnTampil").addEventListener("click", () => {
  index();
});

// Tambah 2 data baru
document.getElementById("btnTambah").addEventListener("click", () => {
  store({ nama: "Rina", umur: 23, alamat: "Jl. Lontar 11, Yogyakarta", email: "rina@example.com" });
  store({ nama: "Beni", umur: 22, alamat: "Jl. Kopo 12, Bandung",       email: "beni@example.com" });
  alert("2 Data berhasil ditambahkan!");
});

// Hapus data bernama "Citra"
document.getElementById("btnHapus").addEventListener("click", () => {
  destroy("Citra");
  alert("Data Citra dihapus!");
});
