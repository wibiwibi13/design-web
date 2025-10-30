async function setLanguage(lang) {
  try {
    const response = await fetch(`assets/lang/${lang}.json`);
    const translations = await response.json();

    // Terapkan ke semua elemen yang memiliki data-key
    document.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.getAttribute("data-key");
      if (translations[key]) {
        el.textContent = translations[key];
      }
    });

    // Simpan bahasa pilihan
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  } catch (error) {
    console.error("Gagal memuat file bahasa:", error);
  }
}

// Saat halaman selesai dimuat, ambil bahasa terakhir yang disimpan
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "id";
  setLanguage(savedLang);
});
