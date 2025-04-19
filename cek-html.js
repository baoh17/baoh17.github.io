window.onload = function() {
    const idsWajib = ['header', 'layanan', 'keunggulan', 'testimoni', 'galeri', 'kontak'];
  
    // Cek section ID
    idsWajib.forEach(function(id) {
      const el = document.getElementById(id);
      if (el) {
        console.log(`✅ Elemen dengan id="${id}" ditemukan.`);
      } else {
        console.warn(`❌ Elemen dengan id="${id}" TIDAK ditemukan!`);
      }
    });
  
    // Cek gambar alt
    const gambar = document.querySelectorAll("img");
    gambar.forEach((img, i) => {
      if (!img.hasAttribute("alt")) {
        console.warn(`⚠️ Gambar ke-${i + 1} tidak punya atribut alt.`);
      }
    });
  
    // Cek form dan isinya
    const form = document.querySelector("form");
    if (form) {
      console.log("✅ Form ditemukan.");
  
      const inputJenisServis = document.getElementById("jenis-Servis");
      const tombolSubmit = form.querySelector('button[type="submit"]');
  
      if (inputJenisServis) {
        console.log("✅ Select jenis layanan ditemukan.");
      } else {
        console.warn("❌ Select jenis layanan TIDAK ditemukan.");
      }
  
      if (tombolSubmit) {
        console.log("✅ Tombol submit ditemukan.");
      } else {
        console.warn("❌ Tombol submit TIDAK ditemukan.");
      }
    } else {
      console.warn("❌ Form TIDAK ditemukan.");
    }
  
    // Cek tombol WhatsApp
    const waButton = document.querySelector('a[href*="wa.me"], a[href*="api.whatsapp.com"]');
    if (waButton) {
      console.log(`✅ Tombol WhatsApp ditemukan: ${waButton.href}`);
    } else {
      console.warn("❌ Tombol WhatsApp TIDAK ditemukan!");
    }
  
    // Cek menu navigasi
    const navLinks = ['Layanan', 'Keunggulan', 'Testimoni', 'Galeri', 'Kontak'];
    navLinks.forEach(teks => {
      const link = document.querySelector(`nav a:contains("${teks}")`);
      if (link) {
        console.log(`✅ Link navigasi "${teks}" ditemukan.`);
      } else {
        console.warn(`⚠️ Link navigasi "${teks}" mungkin tidak ditemukan.`);
      }
    });
  };
  