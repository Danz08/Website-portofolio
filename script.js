// script.js
// TRANSLATION DICTIONARY
const translations = {
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_contact: "Contact",
    nav_status: "Available for work",
    hero_tag: "Full-Stack Developer · Pekanbaru, Indonesia",
    hero_desc: "Final-year Informatics Engineering student building elegant, high-impact web systems. React, CodeIgniter 4 & Python — code that solves real problems.",
    hero_cta: "Let's Connect <span>→</span>",
    hero_scroll: "<div class=\"scroll-line\"></div> Scroll to explore",
    sec_about_label: "01 — About Me",
    about_heading: "Building the<br>web, one<br><em>system</em> at a time.",
    about_text_1: "I'm a final-year Informatics Engineering student at Universitas Riau with a strong passion for crafting clean, functional web applications. I recently built an Activity Documentation System using CodeIgniter 4, streamlining real administrative workflows at PT Bumi Siak Pusako.",
    about_text_2: "Beyond code, I authored an IEEE-standard scientific paper on that exact system — bridging engineering and academic research. A graduate of Coding Camp by DBS Foundation, nominated as Best Student, I bring both technical depth and leadership experience from student organizations.",
    stat_1: "Months at Coding Camp",
    stat_2: "Years in Organizations",
    stat_3: "Certifications",
    sec_skills_label: "02 — Tech Stack",
    skill_frontend_desc: "Building interactive, responsive interfaces with modern frameworks.",
    skill_backend_desc: "Developing robust server-side systems and RESTful APIs.",
    skill_mobile_desc: "Exploring connected systems and Android app development.",
    skill_prog_desc: "Strong foundation in programming paradigms and logic.",
    skill_mgmt_name: "Management",
    skill_mgmt_desc: "Leading teams, coordinating programs, administrative management.",
    skill_research_name: "Research & Writing",
    skill_research_desc: "IEEE-standard scientific paper author. Academic writing in English.",
    sec_projects_label: "03 — Projects",
    proj_hapi_desc: "A mental health and habit-tracking web application featuring secure Google OAuth onboarding, interactive dashboards, and light/dark theme toggle.",
    proj_kampusku_desc: "A robust scholarship management system supporting role-based access (Admin/User), secure document uploads, and real-time application tracking for BNSP certification.",
    proj_bsp_name: "Activity Documentation System",
    proj_bsp_desc: "An end-to-end information system built to digitize and streamline administrative workflows for PT Bumi Siak Pusako.",
    sec_exp_label: "04 — Experience",
    exp_dur_1: "4 months",
    exp_desc_1: "Participated in an intensive full-stack web development training program with strong focus on back-end technologies. Implemented industry-standard practices throughout. Nominated as Best Student candidate for outstanding performance.",
    exp_dur_2: "Management Staff",
    exp_desc_2: "Serving as Management Staff (Nov 2025 – present) after one year as Human Resource Staff (Jan–Nov 2025). Overseeing organizational operations, member welfare, and club programs. Total tenure: 1 year 5 months.",
    exp_dur_3: "2 months",
    exp_desc_3: "Built an end-to-end Activity Documentation Information System using CodeIgniter 4, digitizing and improving administrative workflows. Authored an IEEE-standard scientific paper on the system's architecture, submitted to the Informatics Today journal.",
    exp_dur_4: "1 year 2 months",
    exp_role_4: "Secretary General → Head of Education → Staff",
    exp_desc_4: "Rose through the student association under the Kesatria Cabinet — from Education Staff to Head of Education, culminating as Secretary General. Managed administrative tasks, bridged communication between departments, and coordinated major programs including the university-level LKMO Leadership Training.",
    sec_certs_label: "05 — Certifications",
    cert_1: "Learning to Build Android Apps for Beginners",
    cert_2: "Introduction to Programming Logic (Programming Logic 101)",
    cert_3: "Certificate Stage 2 – Module 2: IoT (Device & Hardware Discovery)",
    cert_4: "Getting Started with Basic Programming to Become a Software Developer",
    cert_5: "Fundamental Project Management",
    sec_edu_label: "06 — Education",
    edu_expected: "Expected",
    edu_degree: "Bachelor of Engineering in Informatics",
    edu_desc: "Final-year student in S1 Teknik Informatika with a focus on web development, systems engineering, and IoT. Active in multiple student organizations, academic research, and external training programs.",
    sec_contact_label: "07 — Get in Touch",
    contact_heading: "Let's build<br>something <em>great</em><br>together.",
    contact_sub_1: "Email · Let's talk",
    contact_sub_2: "LinkedIn · Connect with me",
    contact_sub_3: "Phone / WhatsApp",
    footer_copy: "© 2026 Safrin Nada Ramdani · Pekanbaru, Indonesia",
    footer_back: "↑ Back to top"
  },
  id: {
    nav_about: "Tentang",
    nav_skills: "Keahlian",
    nav_projects: "Proyek",
    nav_experience: "Pengalaman",
    nav_education: "Pendidikan",
    nav_contact: "Kontak",
    nav_status: "Siap Bekerja",
    hero_tag: "Full-Stack Developer · Pekanbaru, Indonesia",
    hero_desc: "Mahasiswa Teknik Informatika tingkat akhir yang membangun sistem web elegan dan berdampak tinggi. React, CodeIgniter 4 & Python — kode yang memecahkan masalah nyata.",
    hero_cta: "Mari Terhubung <span>→</span>",
    hero_scroll: "<div class=\"scroll-line\"></div> Gulir ke bawah",
    sec_about_label: "01 — Tentang Saya",
    about_heading: "Membangun web,<br>satu <em>sistem</em><br>dalam satu waktu.",
    about_text_1: "Saya adalah mahasiswa tingkat akhir Teknik Informatika di Universitas Riau dengan *passion* yang kuat dalam membuat aplikasi web yang bersih dan fungsional. Baru-baru ini saya membangun Sistem Informasi Dokumentasi Kegiatan menggunakan CodeIgniter 4, yang merampingkan alur kerja administratif di PT Bumi Siak Pusako.",
    about_text_2: "Selain *coding*, saya juga menulis karya ilmiah berstandar IEEE mengenai sistem tersebut — menjembatani dunia rekayasa perangkat lunak dan penelitian akademis. Sebagai lulusan Coding Camp oleh DBS Foundation dan dinominasikan sebagai kandidat Siswa Terbaik, saya membawa pengalaman teknis dan kepemimpinan dari berbagai organisasi mahasiswa.",
    stat_1: "Bulan di Coding Camp",
    stat_2: "Tahun di Organisasi",
    stat_3: "Sertifikasi",
    sec_skills_label: "02 — Teknologi",
    skill_frontend_desc: "Membangun antarmuka yang interaktif dan responsif dengan *framework* modern.",
    skill_backend_desc: "Mengembangkan sistem *server-side* yang kuat dan RESTful API.",
    skill_mobile_desc: "Mengeksplorasi sistem terhubung dan pengembangan aplikasi Android.",
    skill_prog_desc: "Pondasi yang kuat dalam paradigma pemrograman dan algoritma.",
    skill_mgmt_name: "Manajemen",
    skill_mgmt_desc: "Memimpin tim, mengoordinasikan program, dan manajemen administrasi.",
    skill_research_name: "Riset & Penulisan",
    skill_research_desc: "Penulis karya ilmiah standar IEEE. Penulisan akademik dalam bahasa Inggris.",
    sec_projects_label: "03 — Proyek",
    proj_hapi_desc: "Aplikasi web pelacakan kebiasaan dan kesehatan mental yang dilengkapi onboarding aman via Google OAuth, dasbor interaktif, dan fitur tema terang/gelap.",
    proj_kampusku_desc: "Sistem manajemen beasiswa yang tangguh mendukung akses berbasis peran (Admin/User), unggah dokumen yang aman, dan pelacakan pendaftaran *real-time* untuk sertifikasi BNSP.",
    proj_bsp_name: "Sistem Dokumentasi Kegiatan",
    proj_bsp_desc: "Sistem informasi *end-to-end* yang dibangun untuk mendigitalkan dan menyederhanakan alur kerja administratif di PT Bumi Siak Pusako.",
    sec_exp_label: "04 — Pengalaman",
    exp_dur_1: "4 bulan",
    exp_desc_1: "Berpartisipasi dalam program pelatihan *full-stack web development* intensif dengan fokus kuat pada teknologi *back-end*. Mengimplementasikan standar industri secara menyeluruh. Dinominasikan sebagai kandidat Siswa Terbaik atas performa yang luar biasa.",
    exp_dur_2: "Staf Pengurus",
    exp_desc_2: "Menjabat sebagai Staf Pengurus (Nov 2025 – sekarang) setelah satu tahun menjadi Staf HR (Jan–Nov 2025). Mengawasi operasional organisasi, kesejahteraan anggota, dan program klub. Total masa jabatan: 1 tahun 5 bulan.",
    exp_dur_3: "2 bulan",
    exp_desc_3: "Membangun Sistem Informasi Dokumentasi Kegiatan dari awal hingga akhir menggunakan CodeIgniter 4, mendigitalkan dan meningkatkan alur kerja administratif. Menulis karya ilmiah berstandar IEEE tentang arsitektur sistem, disubmit ke jurnal Informatics Today.",
    exp_dur_4: "1 tahun 2 bulan",
    exp_role_4: "Sekretaris Jenderal → Kepala Divisi Pendidikan → Staf",
    exp_desc_4: "Meniti karir di himpunan mahasiswa (Kabinet Kesatria) — dari Staf Pendidikan hingga Kepala Divisi, dan puncaknya sebagai Sekretaris Jenderal. Mengelola tugas administratif, menjembatani komunikasi antar divisi, dan mengoordinasikan program besar termasuk Latihan Kepemimpinan (LKMO) tingkat universitas.",
    sec_certs_label: "05 — Sertifikasi",
    cert_1: "Belajar Membuat Aplikasi Android untuk Pemula",
    cert_2: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    cert_3: "Sertifikat Stage 2 – Module 2: IoT (Device & Hardware Discovery)",
    cert_4: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    cert_5: "Fundamental Project Management",
    sec_edu_label: "06 — Pendidikan",
    edu_expected: "Lulus",
    edu_degree: "Sarjana Teknik Informatika",
    edu_desc: "Mahasiswa tingkat akhir di S1 Teknik Informatika dengan fokus pada pengembangan web, rekayasa sistem, dan IoT. Aktif di berbagai organisasi kemahasiswaan, penelitian akademik, dan program pelatihan eksternal.",
    sec_contact_label: "07 — Hubungi Saya",
    contact_heading: "Mari bangun<br>sesuatu yang <em>luar biasa</em><br>bersama.",
    contact_sub_1: "Email · Mari berdiskusi",
    contact_sub_2: "LinkedIn · Terhubung dengan saya",
    contact_sub_3: "Telepon / WhatsApp",
    footer_copy: "© 2026 Safrin Nada Ramdani · Pekanbaru, Indonesia",
    footer_back: "↑ Kembali ke atas"
  }
};

let currentLang = localStorage.getItem('language') || 'en';

function applyTranslation(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  // Update toggle UI
  const btnEn = document.getElementById('lang-en');
  const btnId = document.getElementById('lang-id');
  if(btnEn && btnId) {
    btnEn.classList.toggle('active', lang === 'en');
    btnId.classList.toggle('active', lang === 'id');
  }
  
  // Update texts
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Handle the text replacement carefully
      // We use innerHTML to support embedded tags like <br> or <em>
      el.innerHTML = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const btnEn = document.getElementById('lang-en');
  const btnId = document.getElementById('lang-id');
  
  if (btnEn && btnId) {
    btnEn.addEventListener('click', () => applyTranslation('en'));
    btnId.addEventListener('click', () => applyTranslation('id'));
  }
  
  // Init translation
  applyTranslation(currentLang);
});


// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  if(cursor) {
    cursor.style.left = mx - 6 + 'px';
    cursor.style.top = my - 6 + 'px';
  }
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  if(ring) {
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
  }
  requestAnimationFrame(animateRing);
}
if(ring) {
  animateRing();
}

document.querySelectorAll('a, button, .skill-card, .cert-card, .exp-item, .stat-item, .project-card, .lang-toggle span').forEach(el => {
  el.addEventListener('mouseenter', () => { if(ring) ring.classList.add('hovered'); });
  el.addEventListener('mouseleave', () => { if(ring) ring.classList.remove('hovered'); });
});

// SCROLL REVEAL
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => observer.observe(el));

// STAGGER reveals inside grids
document.querySelectorAll('.skills-grid, .certs-grid, .about-stats, .projects-grid').forEach(grid => {
  grid.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i * 80) + 'ms';
  });
});

// COUNTER ANIMATION
function animateCount(el, target, suffix = '') {
  let start = 0;
  const step = target / 40;
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target + suffix; clearInterval(timer); return; }
    el.textContent = Math.floor(start) + suffix;
  }, 30);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-number');
      nums.forEach(n => {
        const text = n.textContent;
        const num = parseInt(text);
        const suffix = text.replace(/\d/g, '');
        animateCount(n, num, suffix);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.about-stats');
if (statsEl) statsObserver.observe(statsEl);

// NAV highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--white)' : '';
  });
});
