// Data produk
let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Mouse", harga: 200000 },
  { id: 4, nama: "Headphone", harga: 3000000 },
  { id: 5, nama: "Smartwatch", harga: 1500000 }
];

// fungsi tampilkan semua produk pakai destructuring
function tampilkanProduk() {
  console.log("Daftar Produk ");
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id} | ${nama} - Rp${harga}`);
  });
  console.log("\n");
}

// fungsi tambah produk 
function tambahProduk(id, nama, harga) {
  const produkBaru = { id, nama, harga };
  produkList = [...produkList, produkBaru]; //spread operator
  console.log(`Produk "${nama}" berhasil ditambahkan!`);
}

// fungsi tambah banyak produk sekaligus pakai rest parameter
function tambahBanyakProduk(...produkBaru) { //rest parameter
  produkList = [...produkList, ...produkBaru];
  console.log(`Produk baru (${produkBaru.length}) berhasil ditambahkan!`);
}

// Fungsi hapus produk
function hapusProduk(id) {
  const index = produkList.findIndex((p) => p.id === id);
  if (index !== -1) {
    const hapus = produkList.splice(index, 1);
    console.log(`Produk "${hapus[0].nama}" berhasil dihapus!`);
  } else {
    console.log(`Produk dengan ID ${id} tidak ditemukan!`);
  }
}

// contoh menggunakan event handler untuk tambar produk banyak
const eventHandlerTambahBanyak = () => {
  tambahBanyakProduk(
    { id: 7, nama: "Camera", harga: 4000000 },
    { id: 8, nama: "Printer", harga: 2500000 }
  );
};



tampilkanProduk();
tambahProduk(6, "Tablet", 4000000);
tampilkanProduk();

eventHandlerTambahBanyak(); // tambah banyak produk sekaligus dengan rest parameter by handler
tampilkanProduk();

hapusProduk(2);
tampilkanProduk();                         
