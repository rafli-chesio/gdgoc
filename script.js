// Kita tunggu sampai semua konten HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

  // 1. Pilih elemen-elemen yang kita butuhkan dari HTML
  const formAbsen = document.getElementById('formAbsen');
  const inputNim = document.getElementById('nim');
  const inputNama = document.getElementById('nama');
  const daftarHadir = document.getElementById('daftarHadiraaaa');

  // 2. Tambahkan 'event listener' ke formulir
  // Ini akan menjalankan fungsi ketika formulir di-submit (tombol 'Tambah' diklik)
  formAbsen.addEventListener('submit', function(event) {
      
      // 3. Mencegah perilaku default formulir (yang akan me-refresh halaman)
      event.preventDefault();

      // 4. Ambil nilai dari input
      const nim = inputNim.value.trim(); // .trim() untuk menghapus spasi di awal/akhir
      const nama = inputNama.value.trim();

      // 5. Validasi sederhana (pastikan tidak kosong)
      // (HTML 'required' sudah membantu, tapi ini lapisan kedua)
      if (nim === '' || nama === '') {
          alert('NIM dan Nama tidak boleh kosong!');
          return; // Hentikan fungsi
      }

      // 6. Buat elemen 'li' (list item) baru
      const itemMahasiswaBaru = document.createElement('li');

      // 7. Isi teks untuk elemen 'li' baru
      itemMahasiswaBaru.textContent = `(${nim}) ${nama}`;

      // 8. Tambahkan elemen 'li' baru ke dalam daftar 'ul' (daftarHadir)
      daftarHadir.appendChild(itemMahasiswaBaru);

      // 9. Kosongkan kembali input form agar siap untuk data berikutnya
      inputNim.value = '';
      inputNama.value = '';
      inputNim.focus(); // Fokuskan kursor kembali ke input NIM
  });

});