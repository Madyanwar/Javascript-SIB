// data produk toko awar
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// fungsi untuk tampilkan, tambahkan, dan hapus produk dari toko
function tampilkanProduk() {
  console.log("Daftar Produk Toko");
  produkToko.forEach((produk) => {
    console.log(
      `ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp${produk.harga} | Stok: ${produk.stok}`
    );
  });
  console.log("-----------\n");
}

function tambahProduk(nama, harga, stok) {
  let newId = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;

  let produkBaru = { id: newId, nama: nama, harga: harga, stok: stok };
  produkToko.push(produkBaru);
  console.log(`Produk "${nama}" berhasil ditambahkan!\n`);
}

function hapusProduk(id) {
  let index = produkToko.findIndex((produk) => produk.id === id); // hapus produk 
  if (index !== -1) {
    console.log(`Produk "${produkToko[index].nama}" berhasil dihapus!\n`);
    produkToko.splice(index, 1); // splice berguna untuk meanbhakan/menghapus aray yang ada di tengah
  } else {
    console.log(`Produk dengan ID ${id} tidak ditemukan!\n`);
  }
}

// data pelanggan toko awar
let pelangganToko = [
  { id: 1, nama: "awar", email: "awar@email.com" },
  { id: 2, nama: "away", email: "away@email.com" }
];

// fungsi untuk menampikan, menambahkan dan menghapus data pelanggan toko awar
function tampilkanPelanggan() {
  console.log("Daftar Pelanggan");
  pelangganToko.forEach((pelanggan) => { // me looping array pelanggan
    console.log(`ID: ${pelanggan.id} | Nama: ${pelanggan.nama} | Email: ${pelanggan.email}`);
  });
  console.log("--------\n");
}

function tambahPelanggan(nama, email) {
  let idBaru = pelangganToko.length > 0 ? pelangganToko[pelangganToko.length - 1].id + 1 : 1;

  let pelangganBaru = { id: idBaru, nama: nama, email: email };
  pelangganToko.push(pelangganBaru);
  console.log(`Pelanggan "${nama}" berhasil ditambahkan!\n`);
}

// untuk pesanana pelanggan toko
let pesananToko = [];

// fungsi pesanan pelanggan
function buatPesanan(idPelanggan, idProduk, jumlah) {
  let pelanggan = pelangganToko.find((p) => p.id === idPelanggan); // find berguna mencari pelanggan berdasarkan id
  let produk = produkToko.find((p) => p.id === idProduk);

  if (!pelanggan) {
    console.log("Pelanggan tidak ditemukan!\n");
    return;
  }
  if (!produk) {
    console.log("Produk tidak ditemukan!\n");
    return;
  }
  if (produk.stok < jumlah) {
    console.log(`Stok produk "${produk.nama}" tidak mencukupi!\n`);
    return;
  }

  // Kurangi stok produk
  produk.stok -= jumlah;

  // Hitung total
  let totalHarga = produk.harga * jumlah;

  // membuat pesanan
  let idPesanan = pesananToko.length > 0 ? pesananToko[pesananToko.length - 1].id + 1 : 1;
  let pesananBaru = {
    id: idPesanan,
    pelanggan: pelanggan.nama,
    produk: produk.nama,
    jumlah: jumlah,
    total: totalHarga
  };

  pesananToko.push(pesananBaru); // push berguna untuk menambah dari pesananBaru
  console.log(`Pesanan berhasil dibuat oleh ${pelanggan.nama} untuk produk ${produk.nama}!\n`);
}

function tampilkanPesanan() {
  console.log("Daftar Pesanan");
  if (pesananToko.length === 0) {
    console.log("Belum ada pesanan.\n");
    return;
  }
  pesananToko.forEach((pesanan) => {
    console.log(
      `ID Pesanan: ${pesanan.id} | Pelanggan: ${pesanan.pelanggan} | Produk: ${pesanan.produk} | Jumlah: ${pesanan.jumlah} | Total: Rp${pesanan.total}`
    );
  });
  console.log("------------\n");
}


// output tampilan
// tampilan awal daftar produk toko awar
tampilkanProduk();

// tambahkan produk headset
tambahProduk("Headset", 150000, 8);
tampilkanProduk(); // tampilkan produk setelah penambahan

// hapus produk 2 by id
hapusProduk(2);
tampilkanProduk(); // tampilan produk setelah hapus

// segemn pelanggan
tampilkanPelanggan();
tambahPelanggan("Citra", "citra@email.com"); // menambahkan data pelanggan
tampilkanPelanggan(); // tampilan after tambah data pelanggan

// membuat pesanan pesanan
buatPesanan(1, 1, 2); // awar pesan 2 Laptop
buatPesanan(2, 3, 1); // away pesan 1 Keyboard
tampilkanPesanan();

// output atau menampilkan produk setelah pemesanan
tampilkanProduk();
