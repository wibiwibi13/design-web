// Inisialisasi AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Navbar hide saat scroll down, show saat scroll up
let prevScrollpos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px"; // sembunyikan
  }
  prevScrollpos = currentScrollPos;
};

// Tambahkan efek perubahan warna navbar saat scroll
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.add('bg-transparent');
  }
});