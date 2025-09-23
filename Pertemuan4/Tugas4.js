class Kendaraan {
  constructor(merek, model, tahun) {
    this.merek = merek;
    this.model = model;
    this.tahun = tahun; 
  }

  // method umum untuk semua kendaraan
  getInfo() {
    return `${this.merek} ${this.model} (${this.tahun})`;
  }
}

class Mobil extends Kendaraan {
  constructor(merek, model, tahun, doors) {
    super(merek, model, tahun); // panggil constructor parent (Kendaraan)
    this.doors = doors;
  }

  getInfo() {
    return `${super.getInfo()} - Pintu: ${this.doors}`;
  }
}

class Motor extends Kendaraan {
  constructor(merek, model, tahun, tipe) { 
    super(merek, model, tahun);
    this.tipe = tipe;
  }

  getInfo() {
    return `${super.getInfo()} - Tipe: ${this.tipe}`;
  }
}


class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null; // default nya belum sewa kendaraan
  }

  // method untuk mencatat penyewaan kendaraan
  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log("- Informasi Peyewaan Kendaraan -") // notifikasi siapa yang menyewa
    console.log(`${this.nama} menyewa ${kendaraan.getInfo()}`);
  }

  // tampilkan info pelanggan
  getInfoPelanggan() {
    if (this.kendaraanDisewa) {
      return `Nama: ${this.nama}, Telp: ${this.nomorTelepon}, Kendaraan: ${this.kendaraanDisewa.getInfo()}`;
    } else {
      return `Nama: ${this.nama}, Telp: ${this.nomorTelepon}, Belum menyewa kendaraan.`;
    }
  }
}

class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilkanPelanggan() {
    console.log("");
    console.log("- Daftar Pelanggan yang Menyewa Kendaraan -");
    this.daftarPelanggan.forEach((p) => {
      console.log(p.getInfoPelanggan());
    });
  }
}


// membuat beberapa kendaraan
let avanza = new Mobil("Toyota", "Avanza", 2022, 4); 
let ninja = new Motor("Kawasaki", "Ninja ZX-6R", 2023, "Sport"); 

// membuat pelanggan
let pelanggan1 = new Pelanggan("Yanwar", "08123456789");
let pelanggan2 = new Pelanggan("Awar", "08234567890");

// Pelanggan yang menyewa kendaraan
pelanggan1.sewaKendaraan(avanza);
pelanggan2.sewaKendaraan(ninja);

// meanambahkan nya ke sistem 
let sistem = new SistemTransportasi();
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

// menampilkan pelanggan yang menyewa
sistem.tampilkanPelanggan();