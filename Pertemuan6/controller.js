import { users } from './data.js';

// Melihat data
const index = () => {
  console.log("=== Daftar Data ===");
  users.map((user, i) => {
    console.log(`${i + 1}. Nama: ${user.nama} — Umur: ${user.umur} — Alamat: ${user.alamat} — Email: ${user.email}`);
  });
};

// Menambah data
const store = (newUser) => {
  users.push(newUser);
  console.log(`Data "${newUser.nama}" berhasil ditambahkan.`);
  console.log("\n")
};

// Menghapus data by nama
const destroy = (nama) => {
  const idx = users.findIndex((user) => user.nama.toLowerCase() === nama.toLowerCase());
  if (idx === -1) {
    console.log(`Data dengan nama "${nama}" tidak ditemukan.`);
    return;
  }
  const removed = users.splice(idx, 1)[0];
  console.log("\n")
  console.log(`Data "${removed.nama}" berhasil dihapus.`);
};

// Export sesuai dokumen
export { index, store, destroy };
