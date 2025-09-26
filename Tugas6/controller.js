import { users } from './data.js';

// Melihat data → render ke DOM
const index = () => {
  const container = document.getElementById("output");
  container.innerHTML = ""; // reset isi
  users.map((user, i) => {
    container.innerHTML += `
      <div class="card">
        <strong>${i + 1}. ${user.nama}</strong><br>
        Umur: ${user.umur} <br>
        Alamat: ${user.alamat} <br>
        Email: ${user.email}
      </div>
    `;
  });
};

// Menambah data
const store = (newUser) => {
  users.push(newUser);
};

// Hapus data by nama
const destroy = (nama) => {
  const idx = users.findIndex((user) => user.nama.toLowerCase() === nama.toLowerCase());
  if (idx !== -1) {
    users.splice(idx, 1);
  }
};

export { index, store, destroy };
