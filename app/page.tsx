"use client";
import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Briefcase,
  Code2,
  Cpu,
  Server,
  Award,
  Mail,
  Phone,
  MapPin,
  Github,
  Download,
  ExternalLink,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Check,
  Copy,
  Sun,
  Moon,
  Printer,
  X,
  ArrowUpRight,
  ArrowDown,
  Database,
  Layers,
  Compass,
  CheckCircle2,
  MessageSquare,
  Calendar,
  Clock,
  Lightbulb,
  Users,
  Terminal,
  UserCheck,
  Eye
} from 'lucide-react';

/**
 * ============================================================================
 * PATH FOTO PROFIL STATIS UNTUK DEPLOYMENT VERCEL
 * Simpan file foto Anda dengan nama "profile.jpg" di dalam folder "public/"
 * pada project Next.js / Vite Anda (sehingga dapat diakses di "/profile.jpg").
 * ============================================================================
 */
const PROFILE_PHOTO_PATH = "/profile.jpg";

/**
 * ============================================================================
 * KAMUS UI 100% KONSISTEN (BAHASA INDONESIA vs ENGLISH — TANPA CAMPURAN)
 * ============================================================================
 */
const UI_TEXT = {
  id: {
    navDirectory: 'DIREKTORI NAVIGASI',
    navItems: [
      { id: 'home', num: '00', label: 'Beranda' },
      { id: 'about', num: '01', label: 'Tentang Saya' },
      { id: 'experience', num: '02', label: 'Pengalaman & Pendidikan' },
      { id: 'projects', num: '03', label: 'Proyek Terpilih' },
      { id: 'skills', num: '04', label: 'Keahlian & Kompetensi' },
      { id: 'credentials', num: '05', label: 'Sertifikasi Resmi' },
      { id: 'contact', num: '06', label: 'Hubungi Saya' }
    ],
    identityLabel: 'IDENTITAS PROFESIONAL',
    directContactLabel: 'KONTAK LANGSUNG',
    downloadCvBtn: 'Unduh CV',
    portraitCaptionSub: 'S1 Teknik Informatika • IPK 3,80',
    heroBadge: 'Sarjana Komputer (S.Kom.) • IPK 3,80 / 4,00',
    heroRoleLabel: 'PERAN PROFESIONAL',
    heroFocusLabel: 'FOKUS KEAHLIAN',
    heroLocationLabel: 'DOMISILI',
    heroStatusLabel: 'STATUS SAAT INI',
    heroStatusValue: 'Siap Bekerja (Kantor & Lapangan)',
    heroScroll: 'GULIR KE BAWAH',
    heroContactBtn: 'Hubungi Saya',
    heroExploreBtn: 'Jelajahi Profil',
    edgeLeft: 'FRISQY MAULANA • PORTOFOLIO 2026',
    edgeRight: 'KEDIRI • JAWA TIMUR • INDONESIA',

    sec01Tag: '01 // TENTANG SAYA',
    sec01Title: 'Tentang Saya',
    sec01BioCardTitle: 'Ringkasan Identitas',
    sec01Labels: {
      fullName: 'Nama Lengkap',
      degree: 'Gelar Akademik',
      education: 'Pendidikan Terakhir',
      location: 'Domisili',
      interest: 'Bidang Ketertarikan',
      status: 'Status Profesional'
    },
    sec01Values: {
      fullName: 'Frisqy Maulana, S.Kom.',
      degree: 'Sarjana Komputer (S.Kom.)',
      education: 'S1 Teknik Informatika — UNP Kediri (IPK 3,80)',
      location: 'Kediri, Jawa Timur, Indonesia',
      interest: 'IT Support, Infrastruktur Server, Pengolahan Data & Web',
      status: 'Lulusan Baru — Siap Ditempatkan di Kantor & Lapangan'
    },

    sec02Tag: '02 // PENGALAMAN & PENDIDIKAN',
    sec02Title: 'Perjalanan Kerja & Pendidikan',
    sec02Desc:
      'Garis waktu kronologis pengalaman Praktik Kerja Lapangan di Kementerian ATR/BPN Kabupaten Kediri, pendidikan Sarjana Teknik Informatika, serta pembangunan sistem mandiri.',
    hideAchievements: (count) => `Sembunyikan pencapaian utama (${count})`,
    showAchievements: (count) => `Tampilkan pencapaian utama (${count})`,

    sec03Tag: '03 // PROYEK TERPILIH',
    sec03Title: 'Karya & Proyek Sistem',
    sec03Desc:
      'Implementasi nyata pembangunan server Linux mandiri, pusat kendali perangkat layar sentuh, aplikasi web pengelolaan keuangan, serta penelitian machine learning.',
    viewProjectDetailBtn: 'Lihat Detail Proyek',
    projectModalOverview: 'RINGKASAN ARSITEKTUR & SISTEM',
    projectModalFeatures: 'FITUR UTAMA & IMPLEMENTASI TEKNIS',
    projectModalTech: 'TEKNOLOGI & PERANGKAT PENDUKUNG',
    projectModalClose: 'Tutup Detail Proyek',

    sec04Tag: '04 // KEAHLIAN & KOMPETENSI',
    sec04Title: 'Keahlian & Kompetensi Teknis',
    sec04Desc:
      'Pengelompokan kemampuan teknis berdasarkan praktik langsung pada perawatan perangkat keras, konfigurasi jaringan, pengembangan sistem, dan administrasi data.',

    sec05Tag: '05 // SERTIFIKASI RESMI',
    sec05Title: 'Sertifikasi',
    sec05Desc:
      'Sertifikasi kompetensi resmi yang terverifikasi pada pengujian kemampuan Bahasa Inggris (TOEP) dan keterampilan aplikasi perkantoran terapan.',
    verifiedBadge: 'SERTIFIKAT TERVERIFIKASI',
    awardedTo: 'DIBERIKAN KEPADA',
    issuerLabel: 'PENERBIT',
    statusValid: 'STATUS: SAH & TERVERIFIKASI',
    certModalClose: 'Tutup Pratinjau',

    sec06Tag: '06 // HUBUNGI SAYA',
    sec06Title: 'Mari Terhubung Secara Profesional.',
    sec06Desc:
      'Terbuka untuk peluang kerja penuh waktu, penugasan pengolahan data & survei lapangan, maupun pengelolaan infrastruktur IT. Silakan hubungi saya melalui kanal berikut:',
    emailLabel: 'ALAMAT EMAIL',
    waLabel: 'WHATSAPP / TELEPON',
    locationLabel: 'LOKASI DOMISILI',
    githubLabel: 'PROFIL GITHUB',
    copyBtn: 'Salin',
    copiedBtn: 'Tersalin',
    formTitle: 'Kirim Pesan Langsung',
    formSubtitle:
      'Formulir ini menyiapkan draf pesan profesional yang dapat langsung Anda kirimkan melalui aplikasi Email atau WhatsApp.',
    formNameLabel: 'Nama Lengkap Anda',
    formNamePlaceholder: 'Nama Perekrut / Instansi / Perusahaan',
    formEmailLabel: 'Alamat Email Anda',
    formEmailPlaceholder: 'nama@perusahaan.com',
    formSubjectLabel: 'Subjek Pesan',
    formSubjectPlaceholder: 'Undangan Wawancara / Diskusi Posisi Kerja',
    formMessageLabel: 'Isi Pesan',
    formMessagePlaceholder: 'Tuliskan pesan atau informasi lowongan untuk Frisqy Maulana...',
    sendEmailBtn: 'Kirim melalui Email',
    sendWaBtn: 'Kirim melalui WhatsApp',
    footerRights: 'HAK CIPTA DILINDUNGI',
    footerRole: 'SARJANA KOMPUTER (S.KOM.) — KEDIRI, JAWA TIMUR'
  },

  en: {
    navDirectory: 'NAVIGATION DIRECTORY',
    navItems: [
      { id: 'home', num: '00', label: 'Home' },
      { id: 'about', num: '01', label: 'About Me' },
      { id: 'experience', num: '02', label: 'Experience & Education' },
      { id: 'projects', num: '03', label: 'Selected Works' },
      { id: 'skills', num: '04', label: 'Skills & Expertise' },
      { id: 'credentials', num: '05', label: 'Certifications' },
      { id: 'contact', num: '06', label: 'Contact' }
    ],
    identityLabel: 'PROFESSIONAL IDENTITY',
    directContactLabel: 'DIRECT CONTACT',
    downloadCvBtn: 'Download CV',
    portraitCaptionSub: 'B.Sc. Informatics • GPA 3.80',
    heroBadge: 'Bachelor of Computer Science (S.Kom.) • GPA 3.80 / 4.00',
    heroRoleLabel: 'PROFESSIONAL ROLE',
    heroFocusLabel: 'CORE FOCUS',
    heroLocationLabel: 'LOCATION',
    heroStatusLabel: 'CURRENT STATUS',
    heroStatusValue: 'Available for Work (Office & Field)',
    heroScroll: 'SCROLL DOWN',
    heroContactBtn: 'Get in Touch',
    heroExploreBtn: 'Explore Profile',
    edgeLeft: 'FRISQY MAULANA • PORTFOLIO 2026',
    edgeRight: 'KEDIRI • EAST JAVA • INDONESIA',

    sec01Tag: '01 // ABOUT ME',
    sec01Title: 'About Me',
    sec01BioCardTitle: 'Profile Overview',
    sec01Labels: {
      fullName: 'Full Name',
      degree: 'Academic Title',
      education: 'Latest Education',
      location: 'Domicile',
      interest: 'Areas of Interest',
      status: 'Professional Status'
    },
    sec01Values: {
      fullName: 'Frisqy Maulana, S.Kom.',
      degree: 'Bachelor of Computer Science (S.Kom.)',
      education: 'B.Sc. in Informatics Engineering — UNP Kediri (GPA 3.80)',
      location: 'Kediri, East Java, Indonesia',
      interest: 'IT Support, Server Infrastructure, Data Processing & Web',
      status: 'Fresh Graduate — Ready for Office & Field Assignments'
    },

    sec02Tag: '02 // EXPERIENCE & EDUCATION',
    sec02Title: 'Work & Education Journey',
    sec02Desc:
      'A chronological timeline of my field internship at the National Land Agency (ATR/BPN) Kediri Regency, formal Computer Science degree, and independent system engineering.',
    hideAchievements: (count) => `Hide key achievements (${count})`,
    showAchievements: (count) => `Show key achievements (${count})`,

    sec03Tag: '03 // SELECTED WORKS',
    sec03Title: 'Selected Works & Systems',
    sec03Desc:
      'Practical engineering projects spanning self-hosted Linux servers, touchscreen control hubs, personal finance web applications, and machine learning research.',
    viewProjectDetailBtn: 'View Project Details',
    projectModalOverview: 'SYSTEM ARCHITECTURE & OVERVIEW',
    projectModalFeatures: 'KEY FEATURES & TECHNICAL IMPLEMENTATION',
    projectModalTech: 'TECHNOLOGIES & HARDWARE STACK',
    projectModalClose: 'Close Project Details',

    sec04Tag: '04 // SKILLS & EXPERTISE',
    sec04Title: 'Skills & Technical Expertise',
    sec04Desc:
      'Categorized technical competencies grounded in hands-on computer hardware maintenance, network configuration, system development, and data administration.',

    sec05Tag: '05 // CERTIFICATIONS',
    sec05Title: 'Certifications',
    sec05Desc:
      'Verified professional credentials in English language proficiency (TOEP) and applied office productivity software.',
    verifiedBadge: 'VERIFIED CREDENTIAL',
    awardedTo: 'AWARDED TO',
    issuerLabel: 'ISSUER',
    statusValid: 'STATUS: VALID & VERIFIED',
    certModalClose: 'Close Preview',

    sec06Tag: '06 // CONTACT',
    sec06Title: "Let's Connect Professionally.",
    sec06Desc:
      'Open to full-time roles, office/field data operations, and IT infrastructure opportunities. Reach out directly through any of the channels below:',
    emailLabel: 'EMAIL ADDRESS',
    waLabel: 'WHATSAPP / PHONE',
    locationLabel: 'LOCATION',
    githubLabel: 'GITHUB PROFILE',
    copyBtn: 'Copy',
    copiedBtn: 'Copied',
    formTitle: 'Send a Direct Message',
    formSubtitle:
      'This form prepares a structured message draft ready to be sent directly via your Email client or WhatsApp.',
    formNameLabel: 'Your Full Name',
    formNamePlaceholder: 'Recruiter / Organization Name',
    formEmailLabel: 'Your Email Address',
    formEmailPlaceholder: 'name@company.com',
    formSubjectLabel: 'Message Subject',
    formSubjectPlaceholder: 'Interview Invitation / Role Discussion',
    formMessageLabel: 'Message Content',
    formMessagePlaceholder: 'Write your message or role details for Frisqy Maulana...',
    sendEmailBtn: 'Send via Email',
    sendWaBtn: 'Send via WhatsApp',
    footerRights: 'ALL RIGHTS RESERVED',
    footerRole: 'BACHELOR OF COMPUTER SCIENCE (S.KOM.) — KEDIRI, EAST JAVA'
  }
};

/**
 * ============================================================================
 * DATA KONFIGURASI PROFIL — FRISQY MAULANA, S.KOM.
 * ============================================================================
 * - Masa PKL ATR/BPN: 1 Bulan (Februari–Maret 2025)
 * - Sertifikasi: Hanya 2 sertifikat resmi dari Resume (Tanpa SIAPkerja)
 * - Semua teks memiliki versi Bahasa Indonesia (id) dan Bahasa Inggris (en)
 */
const INITIAL_PROFILE_DATA = {
  identity: {
    firstName: 'Frisqy',
    lastName: 'Maulana',
    fullName: 'Frisqy Maulana',
    titleSuffix: 'S.Kom.',
    gpa: '3,80 / 4,00',
    emailPrimary: 'fmkiki11@gmail.com',
    emailSecondary: 'frisqymaulana9@gmail.com',
    whatsappDisplay: '0851-9008-3619',
    whatsappNumber: '6285190083619',
    phoneAlt: '0821-9849-4834',
    githubUrl: 'https://github.com/Frisqy31',
    githubHandle: 'github.com/Frisqy31',
    location: {
      id: 'Kediri, Jawa Timur, Indonesia',
      en: 'Kediri, East Java, Indonesia'
    },
    addressDetail: {
      id: 'Jl. Natuna, Kota Kediri, Jawa Timur, Indonesia',
      en: 'Jl. Natuna, Kediri City, East Java, Indonesia'
    },
    roleLines: {
      id: ['IT Support & Infrastruktur Sistem', 'Pengolahan Data & Pengembangan Web'],
      en: ['IT Support & System Infrastructure', 'Data Processing & Web Development']
    },
    focusLines: {
      id: ['Perangkat Keras, Server Linux, Aplikasi Web', '& Administrasi Data Presisi Tinggi'],
      en: ['Hardware, Linux Server, Web Applications', '& High-Precision Data Administration']
    },
    heroSummary: {
      id: 'Membangun gagasan, menciptakan nilai, dan bertumbuh melalui teknologi. Lulusan S1 Teknik Informatika (S.Kom.) yang mengutamakan ketelitian dalam pengelolaan perangkat komputer, infrastruktur server, pengembangan web, dan pengolahan data.',
      en: 'Building ideas, creating value, and growing through technology. Bachelor of Computer Science (S.Kom.) dedicated to precision in computer hardware maintenance, server infrastructure, web development, and administrative data processing.'
    }
  },

  about: {
    headline: {
      id: 'Halo, saya Frisqy Maulana — lulusan Teknik Informatika yang senang membangun sistem dan solusi yang benar-benar bermanfaat.',
      en: "Hi, I'm Frisqy Maulana — an Informatics Engineering graduate who enjoys building systems and solutions that truly work."
    },
    paragraphs: {
      id: [
        'Saya merupakan lulusan S1 Teknik Informatika (S.Kom.) dari Universitas Nusantara PGRI Kediri (periode 2022–2026) dengan IPK 3,80. Saya memiliki ketertarikan yang kuat pada dunia teknologi, pengembangan sistem, pengelolaan perangkat keras komputer dan jaringan, serta pengembangan solusi digital yang rapi dan andal.',
        'Pengalaman Praktik Kerja Lapangan selama 1 bulan di Kantor Pertanahan ATR/BPN Kabupaten Kediri mengasah ketelitian saya dalam penginputan serta pengolahan data berkas masyarakat menggunakan Microsoft Excel, penataan arsip dokumen, dan kegiatan sosialisasi langsung di lapangan. Saya memiliki semangat belajar yang tinggi, cepat beradaptasi dengan perangkat lunak teknis maupun pemetaan digital, serta siap berkontribusi baik di kantor maupun di lapangan.'
      ],
      en: [
        'I am a Bachelor of Computer Science (S.Kom.) graduate in Informatics Engineering from Universitas Nusantara PGRI Kediri (2022–2026) with a cumulative GPA of 3.80/4.00. My core interests span technology operations, system development, computer hardware and network management, and building practical digital solutions.',
        'My 1-month field internship at the National Land Agency (ATR/BPN) in Kediri Regency strengthened my discipline in meticulous administrative data entry and recapitulation using Microsoft Excel, structured document archiving, and public socialization across sub-districts. I am committed to continuous learning, adapt quickly to technical and digital mapping software, and am ready for both office and field assignments.'
      ]
    },
    pillars: [
      {
        icon: 'server',
        titleId: 'Perangkat Keras & Jaringan IT',
        titleEn: 'Computer Hardware & Networking',
        descId:
          'Terbiasa melakukan perakitan dan bongkar-pasang laptop/PC, instalasi RAM/SSD/HDD, konfigurasi Windows & Debian Linux, instalasi driver, perbaikan masalah boot, hingga konfigurasi router dan kabel LAN.',
        descEn:
          'Experienced in PC/laptop disassembly and assembly, RAM/SSD/HDD upgrades, Windows & Debian Linux configuration, driver setup, boot troubleshooting, router setup, and LAN cable crimping.'
      },
      {
        icon: 'lightbulb',
        titleId: 'Pembangunan Server & Sistem Mandiri',
        titleEn: 'Self-Hosted Server & System Building',
        descId:
          'Merancang dan mengelola server pribadi berbasis Debian Linux, dashboard kontrol layar sentuh berbasis Python GTK, pencadangan otomatis (backup), serta akses jarak jauh dengan Tailscale.',
        descEn:
          'Designing and managing Debian Linux home servers, Python GTK touchscreen control hubs, automated backup workflows, and secure remote access via Tailscale.'
      },
      {
        icon: 'users',
        titleId: 'Ketelitian Data & Sosialisasi Lapangan',
        titleEn: 'Data Precision & Field Socialization',
        descId:
          'Berpengalaman mengolah dan merekapitulasi data administrasi menggunakan Microsoft Excel secara presisi, menata arsip berkas instansi, serta mendampingi kegiatan sosialisasi masyarakat.',
        descEn:
          'Skilled in accurate administrative data processing and recapitulation using Microsoft Excel, systematic physical document archiving, and community socialization in the field.'
      },
      {
        icon: 'layers',
        titleId: 'Pengembangan Aplikasi Web & Data',
        titleEn: 'Web Application & Data Development',
        descId:
          'Mengembangkan aplikasi web modern menggunakan Next.js dan Supabase, serta membangun sistem prediksi risiko berbasis machine learning (Random Forest) dengan Python dan Streamlit.',
        descEn:
          'Developing modern web applications with Next.js and Supabase, as well as building machine learning risk prediction systems (Random Forest) using Python and Streamlit.'
      }
    ]
  },

  // PENGALAMAN & PENDIDIKAN (MASA PKL BPN = 1 BULAN)
  journey: [
    {
      id: 'exp-bpn',
      type: 'work',
      organizationId: 'Kementerian Agraria dan Tata Ruang / Badan Pertanahan Nasional (ATR/BPN) Kab. Kediri',
      organizationEn: 'Ministry of Agrarian Affairs & Spatial Planning / National Land Agency (ATR/BPN) Kediri',
      roleId: 'Praktik Kerja Lapangan — Pengolahan Data & Administrasi Pertanahan',
      roleEn: 'Field Work Internship — Land Data Processing & Administration',
      locationId: 'Kediri, Jawa Timur',
      locationEn: 'Kediri, East Java',
      periodId: 'Februari 2025 — Maret 2025',
      periodEn: 'February 2025 — March 2025',
      durationId: '1 Bulan',
      durationEn: '1 Month',
      achievementsId: [
        'Melakukan penginputan, pengolahan, serta rekapitulasi data berkas administrasi masyarakat secara teliti menggunakan Microsoft Excel.',
        'Mengelola penataan arsip dokumen pertanahan agar tersusun rapi dan mudah ditelusuri sesuai prosedur instansi.',
        'Mendampingi tim instansi dalam kegiatan sosialisasi program percepatan sertifikasi tanah wakaf ke berbagai kelurahan.',
        'Bekerja mengikuti standar prosedur operasional instansi serta berkoordinasi aktif dalam penyelesaian tugas pelayanan data.'
      ],
      achievementsEn: [
        'Performed accurate administrative data input, processing, and recapitulation of community land files using Microsoft Excel.',
        'Organized and maintained physical land document archives systematically in accordance with agency procedures.',
        'Assisted the institutional team during field socialization activities for the acceleration of waqf land certification across local sub-districts.',
        'Worked strictly within institutional standard operating procedures and coordinated effectively on data and service tasks.'
      ]
    },
    {
      id: 'edu-unp',
      type: 'education',
      organizationId: 'Universitas Nusantara PGRI Kediri',
      organizationEn: 'Universitas Nusantara PGRI Kediri',
      roleId: 'Sarjana Komputer (S.Kom.) — Program Studi S1 Teknik Informatika',
      roleEn: 'Bachelor of Computer Science (S.Kom.) — B.Sc. in Informatics Engineering',
      locationId: 'Kediri, Jawa Timur',
      locationEn: 'Kediri, East Java',
      periodId: '2022 — 2026',
      periodEn: '2022 — 2026',
      durationId: '4 Tahun • IPK 3,80 / 4,00',
      durationEn: '4 Years • GPA 3.80 / 4.00',
      achievementsId: [
        'Menempuh pendidikan Sarjana (S1) Teknik Informatika dan lulus dengan perolehan Indeks Prestasi Kumulatif (IPK) 3,80 dari 4,00.',
        'Menyelesaikan Skripsi / Tugas Akhir berjudul "Sistem Prediksi Risiko Penyakit Diabetes Sejak Dini" menggunakan algoritma Random Forest dan Streamlit.',
        'Mengembangkan berbagai proyek sistem perangkat keras dan server Linux mandiri di luar perkuliahan, termasuk Server POCO dan Toshiba Touch Hub.'
      ],
      achievementsEn: [
        'Completed Bachelor of Computer Science degree in Informatics Engineering, graduating with a cumulative GPA of 3.80 / 4.00.',
        'Authored an Undergraduate Thesis titled "Sistem Prediksi Risiko Penyakit Diabetes Sejak Dini" utilizing the Random Forest algorithm and Streamlit.',
        'Built independent hardware-to-server infrastructure projects including Server POCO (Debian 13) and the Toshiba Touch Hub.'
      ]
    }
  ],

  // 4 PROYEK TERPILIH (TANPA TAUTAN KE GITHUB)
  projects: [
    {
      id: 'server-poco',
      index: '01',
      year: '2025',
      titleId: 'Personal Server — Server POCO',
      titleEn: 'Personal Server — Server POCO',
      subtitleId: 'Server Berkas Pribadi, Galeri Media & Pencadangan Otomatis Berbasis Debian 13',
      subtitleEn: 'Debian 13 Personal File Server, Media Gallery & Automated Backup Infrastructure',
      hardwareId: 'Acer Aspire E1-410 • Debian GNU/Linux 13',
      hardwareEn: 'Acer Aspire E1-410 • Debian GNU/Linux 13',
      summaryId:
        'Proyek membangun server pribadi mandiri menggunakan perangkat Acer Aspire E1-410 dengan Debian GNU/Linux 13 untuk manajemen berkas, galeri media, sistem backup, dan akses jarak jauh Tailscale.',
      summaryEn:
        'Engineered a self-hosted personal server using an Acer Aspire E1-410 running Debian GNU/Linux 13 for file management, media gallery hosting, backup automation, and Tailscale remote access.',
      descriptionId:
        'Proyek ini mengoptimalkan kembali perangkat laptop Acer Aspire E1-410 menjadi sebuah server rumah pribadi (home server) yang beroperasi penuh menggunakan sistem operasi Debian GNU/Linux 13. Layanan inti dibangun menggunakan pemrograman Python untuk menangani manajemen berkas terpusat, galeri media, serta sistem pencadangan otomatis (backup system). Seluruh layanan dapat diakses secara aman dari jaringan luar menggunakan integrasi Tailscale.',
      descriptionEn:
        'This project repurposes an Acer Aspire E1-410 laptop into an energy-efficient, always-on personal server powered by Debian GNU/Linux 13. A custom Python-based server service handles centralized file management, a web media gallery, and an automated backup system, while Tailscale enables encrypted remote access from outside the local network.',
      techId: [
        'Personal File Server',
        'Debian GNU/Linux 13',
        'Remote Access Tailscale',
        'Server Berbasis Python',
        'Manajemen Berkas & Galeri Media',
        'Sistem Backup Otomatis'
      ],
      techEn: [
        'Personal File Server',
        'Debian GNU/Linux 13',
        'Tailscale Remote Access',
        'Python-Based Server',
        'File Management & Media Gallery',
        'Automated Backup System'
      ],
      featuresId: [
        'Personal file server terpusat untuk penyimpanan dan pengelolaan dokumen lintas perangkat.',
        'Konfigurasi remote access aman menggunakan jaringan privat virtual Tailscale.',
        'Layanan backend Python-based server yang ringan, stabil, dan hemat sumber daya.',
        'Fitur File Management, Media Gallery terindeks, serta Backup System terjadwal.'
      ],
      featuresEn: [
        'Centralized personal file server for cross-device storage and document organization.',
        'Secure remote access across external networks configured via Tailscale.',
        'Lightweight and dependable Python-based server backend daemon.',
        'Integrated File Management, Media Gallery viewer, and scheduled Backup System.'
      ],
      visualType: 'server'
    },
    {
      id: 'toshiba-touch-hub',
      index: '02',
      year: '2025',
      titleId: 'Toshiba Touch Hub',
      titleEn: 'Toshiba Touch Hub',
      subtitleId: 'Pusat Kendali Layar Sentuh & Monitoring Server Berbasis Debian Linux',
      subtitleEn: 'Debian Linux Touchscreen Control Hub & Real-Time Server Monitor',
      hardwareId: 'Toshiba Satellite S40Dt-A • Python GTK & Openbox',
      hardwareEn: 'Toshiba Satellite S40Dt-A • Python GTK & Openbox',
      summaryId:
        'Proyek mengubah laptop layar sentuh Toshiba Satellite S40Dt-A menjadi sebuah touchscreen control hub berbasis Debian Linux, Python GTK, dan Openbox yang terintegrasi dengan Lenovo PC.',
      summaryEn:
        'Transformed a Toshiba Satellite S40Dt-A touchscreen laptop into a dedicated control hub using Debian Linux, Python GTK, and Openbox with live server monitoring and Lenovo PC integration.',
      descriptionId:
        'Mengubah laptop layar sentuh Toshiba Satellite S40Dt-A menjadi panel pusat kendali meja (touchscreen control hub). Sistem ini berjalan di atas Debian Linux dengan manajer jendela ringan Openbox yang langsung membuka antarmuka dashboard sentuh berbasis Python GTK saat dinyalakan. Berfungsi memantau kesehatan server secara real-time, melakukan remote PC control, dan terintegrasi langsung dengan perangkat Lenovo PC.',
      descriptionEn:
        'Converted a Toshiba Satellite S40Dt-A touchscreen laptop into a dedicated desktop control station. Running Debian Linux with the lightweight Openbox window manager, the device boots directly into a custom Python GTK touch dashboard. It provides real-time server telemetry, remote PC control, and seamless integration with a primary Lenovo PC.',
      techId: [
        'Debian Linux',
        'Python GTK',
        'Openbox Window Manager',
        'Dashboard Touchscreen',
        'Monitoring Server',
        'Kendali PC Jarak Jauh (Lenovo PC)'
      ],
      techEn: [
        'Debian Linux',
        'Python GTK',
        'Openbox Window Manager',
        'Touchscreen Dashboard',
        'Server Monitoring',
        'Remote PC Control (Lenovo PC)'
      ],
      featuresId: [
        'Antarmuka dashboard touchscreen kustom yang dirancang menggunakan Python GTK.',
        'Konfigurasi Openbox ringan dengan fitur autostart langsung menuju layar kontrol.',
        'Pemantauan status server (CPU, RAM, penyimpanan, dan jaringan) secara real-time.',
        'Fitur Remote PC Control yang terintegrasi penuh dengan unit Lenovo PC utama.'
      ],
      featuresEn: [
        'Custom touch-friendly dashboard interface engineered with Python GTK.',
        'Minimal Openbox window manager configured for direct kiosk autostart.',
        'Live server health monitoring covering CPU, RAM, storage, and network status.',
        'Direct Remote PC Control integrated with a primary Lenovo PC workstation.'
      ],
      visualType: 'touchhub'
    },
    {
      id: 'personal-finance-web',
      index: '03',
      year: '2025',
      titleId: 'Aplikasi Web Keuangan Pribadi',
      titleEn: 'Personal Finance Web Application',
      subtitleId: 'Platform Web Pencatatan Transaksi, Pengelolaan Anggaran & Statistik Keuangan',
      subtitleEn: 'Web Platform for Transaction Tracking, Budget Management & Financial Analytics',
      hardwareId: 'Next.js • Supabase • Vercel',
      hardwareEn: 'Next.js • Supabase • Vercel',
      summaryId:
        'Aplikasi berbasis web untuk membantu pengelolaan keuangan pribadi yang mencakup pencatatan transaksi, pengelolaan anggaran, statistik keuangan, dan pengaturan akun.',
      summaryEn:
        'A web application built with Next.js, Supabase, and Vercel designed to streamline personal finance management through transaction logging, budgeting, and financial statistics.',
      descriptionId:
        'Aplikasi web modern yang dirancang untuk memudahkan pencatatan arus kas pribadi secara rapi dan terukur. Dibangun menggunakan kerangka kerja Next.js dengan dukungan basis data cloud serta autentikasi dari Supabase, dan dipublikasikan melalui Vercel. Pengguna dapat mencatat pemasukan dan pengeluaran, menyusun anggaran bulanan, membaca grafik statistik keuangan, serta mengelola pengaturan akun.',
      descriptionEn:
        'A clean, responsive web application engineered to simplify personal cash-flow management. Built with Next.js, backed by Supabase for PostgreSQL database storage and user authentication, and deployed on Vercel. Users can record daily transactions, set category budgets, inspect visual financial statistics, and manage account preferences.',
      techId: [
        'Next.js',
        'Supabase Database & Auth',
        'Vercel Cloud Deployment',
        'Pencatatan Transaksi',
        'Pengelolaan Anggaran',
        'Statistik Keuangan'
      ],
      techEn: [
        'Next.js',
        'Supabase Database & Auth',
        'Vercel Cloud Deployment',
        'Transaction Recording',
        'Budget Management',
        'Financial Statistics'
      ],
      featuresId: [
        'Pencatatan transaksi pemasukan dan pengeluaran harian secara terstruktur.',
        'Pengelolaan anggaran (budgeting) untuk mengendalikan batas pengeluaran per kategori.',
        'Ringkasan statistik keuangan visual untuk memantau kesehatan arus kas.',
        'Manajemen pengaturan akun pengguna yang tersinkronisasi dengan basis data Supabase.'
      ],
      featuresEn: [
        'Structured daily income and expense transaction logging.',
        'Category budget management to monitor and control monthly spending.',
        'Visual financial statistics and cash-flow summaries.',
        'User account settings and secure cloud synchronization powered by Supabase.'
      ],
      visualType: 'finance'
    },
    {
      id: 'undergraduate-thesis-diabetes',
      index: '04',
      year: '2026',
      titleId: ' Tugas Akhir — Sistem Prediksi Risiko Penyakit Diabetes Sejak Dini',
      titleEn: 'Undergraduate Thesis — Early Stage Diabetes Risk Prediction System',
      subtitleId: 'Implementasi Machine Learning dengan Algoritma Random Forest & Streamlit',
      subtitleEn: 'Machine Learning Implementation with Random Forest Algorithm & Streamlit',
      hardwareId: 'Python • Random Forest • Streamlit',
      hardwareEn: 'Python • Random Forest • Streamlit',
      summaryId:
        'Pengembangan sistem prediksi risiko penyakit diabetes sejak dini menggunakan pendekatan machine learning dengan algoritma Random Forest dan dataset Early Stage Diabetes Risk Prediction.',
      summaryEn:
        'Development of an early-stage diabetes risk prediction system using machine learning with the Random Forest algorithm and the Early Stage Diabetes Risk Prediction dataset.',
      descriptionId:
        'Proyek penelitian Skripsi / Tugas Akhir S1 Teknik Informatika yang berfokus pada deteksi dini risiko diabetes. Sistem ini mengolah dataset Early Stage Diabetes Risk Prediction menggunakan bahasa pemrograman Python dan melatih model klasifikasi algoritma Random Forest. Dilengkapi dengan visualisasi data faktor risiko serta antarmuka web interaktif berbasis Streamlit agar mudah digunakan.',
      descriptionEn:
        'Conducted as my Undergraduate Thesis in Informatics Engineering, focusing on early-stage diabetes risk screening. The system processes the Early Stage Diabetes Risk Prediction dataset in Python and trains a Random Forest classification model, complete with analytical data visualizations and an interactive Streamlit web interface.',
      techId: [
        'Python',
        'Machine Learning',
        'Algoritma Random Forest',
        'Streamlit',
        'Visualisasi Data',
        'Dataset Early Stage Diabetes'
      ],
      techEn: [
        'Python',
        'Machine Learning',
        'Random Forest Algorithm',
        'Streamlit',
        'Data Visualization',
        'Early Stage Diabetes Dataset'
      ],
      featuresId: [
        'Pengolahan dan analisis atribut gejala klinis pada dataset Early Stage Diabetes Risk Prediction.',
        'Penerapan algoritma klasifikasi ensemble Random Forest untuk prediksi risiko yang akurat.',
        'Visualisasi data tingkat kepentingan fitur (feature importance) dan distribusi gejala.',
        'Aplikasi web interaktif berbasis Streamlit untuk pengujian prediksi risiko secara langsung.'
      ],
      featuresEn: [
        'Preprocessing and analysis of clinical symptom attributes from the Early Stage Diabetes Risk Prediction dataset.',
        'Implementation of the Random Forest ensemble classification algorithm for reliable risk prediction.',
        'Data visualization of feature importance and symptom distribution.',
        'Interactive Streamlit web interface enabling real-time risk screening.'
      ],
      visualType: 'thesis'
    }
  ],

  // KATEGORI KEAHLIAN (BAHASA INDONESIA & INGGRIS LENGKAP)
  skills: [
    {
      id: 'technical-hardware',
      codeId: '01 // KEAHLIAN TEKNIS PERANGKAT KERAS & SISTEM',
      codeEn: '01 // COMPUTER HARDWARE & SYSTEM SKILLS',
      titleId: 'Perangkat Keras, Sistem Operasi & Periferal',
      titleEn: 'Computer Hardware, OS & Peripherals',
      itemsId: [
        'Pemeriksaan & Perbaikan Perangkat Keras Komputer (Troubleshooting)',
        'Bongkar-Pasang Laptop & PC (Disassembly and Assembly)',
        'Instalasi & Upgrade RAM, SSD, dan HDD',
        'Instalasi dan Konfigurasi Sistem Operasi Windows',
        'Instalasi dan Perbaikan Masalah Driver Perangkat',
        'Penanganan Masalah Booting dan Sistem Operasi',
        'Instalasi, Pengaturan, dan Perbaikan Printer'
      ],
      itemsEn: [
        'Computer Hardware Troubleshooting',
        'Laptop Disassembly and Assembly',
        'RAM, SSD, and HDD Installation',
        'Windows Installation and Configuration',
        'Driver Installation and Troubleshooting',
        'Boot and System Troubleshooting',
        'Printer Setup and Troubleshooting'
      ]
    },
    {
      id: 'technical-network',
      codeId: '02 // JARINGAN KOMPUTER & INFRASTRUKTUR SERVER',
      codeEn: '02 // NETWORKING & SERVER INFRASTRUCTURE',
      titleId: 'Jaringan Dasar, Router & Server Linux',
      titleEn: 'Basic Networking, Router & Linux Server',
      itemsId: [
        'Dasar Jaringan Komputer (LAN & TCP/IP)',
        'Konfigurasi Router dan Perangkat Jaringan Lokal',
        'Pembuatan & Crimping Kabel LAN (RJ45)',
        'Instalasi dan Pengelolaan Server Debian GNU/Linux',
        'Konfigurasi Akses Jarak Jauh (Tailscale Remote Access)',
        'Sistem Monitoring Perangkat & Backup Otomatis'
      ],
      itemsEn: [
        'Basic Networking (LAN & TCP/IP)',
        'Router Configuration',
        'LAN Cable Crimping',
        'Debian GNU/Linux Server Administration',
        'Remote Access Configuration (Tailscale)',
        'System Monitoring & Automated Backup'
      ]
    },
    {
      id: 'development-digital',
      codeId: '03 // PENGEMBANGAN APLIKASI & KETERAMPILAN DIGITAL',
      codeEn: '03 // DEVELOPMENT & DIGITAL SKILLS',
      titleId: 'Pengembangan Web, Pemrograman & Basis Data',
      titleEn: 'Web Development, Programming & Databases',
      itemsId: [
        'Pengembangan Aplikasi Web (Next.js & Tek. Web Modern)',
        'Pemrograman Python (Server, Python GTK, Analisis Data)',
        'Pengembangan Sistem & Integrasi REST API',
        'Fundamental Basis Data (SQLite, PostgreSQL / Supabase)',
        'Penerapan Dasar Machine Learning (Random Forest & Streamlit)',
        'Manajemen Versi Kode dengan Git dan GitHub'
      ],
      itemsEn: [
        'Web Application Development',
        'Python Programming',
        'System Development',
        'Database Fundamentals',
        'Applied Machine Learning (Random Forest & Streamlit)',
        'Git and GitHub'
      ]
    },
    {
      id: 'data-administration',
      codeId: '04 // PENGOLAHAN DATA & OPERASIONAL LAPANGAN',
      codeEn: '04 // DATA PROCESSING & FIELD OPERATIONS',
      titleId: 'Administrasi Data, Arsip & Kesiapan Survei',
      titleEn: 'Data Administration, Archiving & Field Readiness',
      itemsId: [
        'Pengolahan & Rekapitulasi Data dengan Microsoft Excel',
        'Administrasi Data & Penataan Arsip Dokumen Instansi',
        'Komunikasi Sosialisasi Lapangan & Koordinasi Tim',
        'Cepat Beradaptasi dengan Aplikasi Pemetaan Digital / GIS'
      ],
      itemsEn: [
        'Data Processing & Recapitulation with Microsoft Excel',
        'Administrative Data & Document Archive Management',
        'Field Socialization & Team Coordination',
        'Fast Adaptation to Digital Mapping & GIS Software'
      ]
    }
  ],

  // SERTIFIKASI RESMI (HANYA 2 SERTIFIKAT DARI RESUME — TANPA SIAPKERJA)
  certifications: [
    {
      id: 'cert-toefl-2026',
      year: '2026',
      titleId: 'Test of English Proficiency (TOEP) — Skor 457',
      titleEn: 'Test of English Proficiency (TOEP) — Score 457',
      issuer: 'Royal English',
      dateId: 'Mei 2026',
      dateEn: 'May 2026',
      credentialTypeId: 'Sertifikasi Kemampuan Bahasa Inggris',
      credentialTypeEn: 'English Proficiency Certification',
      recipient: 'FRISQY MAULANA, S.Kom.',
      descriptionId:
        'Sertifikasi resmi pengujian kemampuan Bahasa Inggris (Test of English Proficiency) yang diselenggarakan oleh Royal English pada Mei 2026 dengan capaian skor 457.',
      descriptionEn:
        'Official Test of English Proficiency certification administered by Royal English in May 2026 with an achieved score of 457.'
    },
    {
      id: 'cert-office-2025',
      year: '2025',
      titleId: 'Sertifikasi Applied Microsoft Office',
      titleEn: 'Applied Microsoft Office Certification',
      issuer: 'Trust Training Partners',
      dateId: 'November 2025',
      dateEn: 'November 2025',
      credentialTypeId: 'Kompetensi Aplikasi Perkantoran & Pengolahan Data',
      credentialTypeEn: 'Applied Office Productivity & Data Processing',
      recipient: 'FRISQY MAULANA, S.Kom.',
      descriptionId:
        'Sertifikasi kompetensi terapan penggunaan perangkat lunak Microsoft Office untuk pengolahan data administrasi, rekapitulasi lembar kerja Excel, dan penyusunan dokumen profesional.',
      descriptionEn:
        'Verified competency certification in Applied Microsoft Office covering structured Excel data processing, spreadsheet recapitulation, and professional document formatting.'
    }
  ]
};

/**
 * ============================================================================
 * KOMPONEN POTRET PROFIL FORMAL (STATIS & BERSIH TANPA TOMBOL CRUD/EDIT)
 * ============================================================================
 */
const ProfilePortraitFrame = ({
  photoSrc,
  lang,
  darkMode,
  compact = false
}) => {
  const t = UI_TEXT[lang];
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [photoSrc]);

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <div
      className={`rounded-2xl border-[1.5px] overflow-hidden transition-all ${
        darkMode
          ? 'bg-[#121216] border-zinc-700 shadow-2xl'
          : 'bg-white border-[#18181B] shadow-[0_14px_34px_rgba(15,23,42,0.08)]'
      }`}
    >
      {/* Header Bingkai Foto Statis */}
      <div
        className={`px-4 py-2.5 border-b flex items-center justify-between text-[11px] font-mono-tech ${
          darkMode ? 'border-zinc-800 bg-zinc-900/70 text-zinc-300' : 'border-zinc-200 bg-zinc-50 text-zinc-600'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-semibold tracking-wider">FRISQY MAULANA, S.KOM.</span>
        </div>
        <span className="text-[10px] font-semibold text-zinc-400">UNP KEDIRI</span>
      </div>

      {/* Area Gambar Potret Formal (#D31A22) */}
      <div
        className={`relative w-full ${
          compact ? 'aspect-[4/4.5]' : 'aspect-[4/4.8]'
        } flex items-end justify-center overflow-hidden`}
        style={{ backgroundColor: '#D31A22' }}
      >
        {/* Kisi Halus Studio di Belakang Potret */}
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 25%, rgba(255,255,255,0.55), transparent 65%), linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)',
            backgroundSize: '100% 100%, 24px 24px, 24px 24px'
          }}
        />

        {!imgError && photoSrc ? (
          <img
            src={photoSrc}
            onError={handleImageError}
            alt="Frisqy Maulana, S.Kom."
            className="relative z-10 w-full h-full object-cover object-top"
          />
        ) : (
          /* Fallback Ilustrasi Potret Formal Presisi Tinggi (Kemeja Putih, Dasi Hitam, Latar Merah Formal #D31A22) */
          <svg viewBox="0 0 340 400" className="relative z-10 w-full h-full object-cover object-bottom">
            <defs>
              <linearGradient id="shirtGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F1F3F6" />
              </linearGradient>
              <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E3B892" />
                <stop offset="100%" stopColor="#CFA07A" />
              </linearGradient>
            </defs>

            <rect x="138" y="200" width="64" height="62" rx="16" fill="#C99972" />
            <path d="M138 225 Q170 245 202 225 L202 260 L138 260 Z" fill="#B98862" opacity="0.5" />

            <path
              d="M24 400 L42 292 Q52 256 102 246 L138 236 L202 236 L238 246 Q288 256 298 292 L316 400 Z"
              fill="url(#shirtGrad)"
              stroke="#E2E8F0"
              strokeWidth="1.5"
            />

            <rect x="216" y="334" width="54" height="58" rx="2" fill="none" stroke="#E2E8F0" strokeWidth="1.5" />

            <polygon points="136,232 108,274 156,292 170,260" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
            <polygon points="204,232 232,274 184,292 170,260" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />

            <polygon points="157,258 183,258 177,284 163,284" fill="#18181B" />
            <polygon points="163,284 177,284 186,400 154,400" fill="#0F0F12" />

            <ellipse cx="102" cy="146" rx="11" ry="22" fill="#D4A47E" />
            <ellipse cx="238" cy="146" rx="11" ry="22" fill="#D4A47E" />

            <rect x="106" y="66" width="128" height="156" rx="58" fill="url(#skinGrad)" />

            <path
              d="M98 134 C92 76, 126 44, 170 46 C214 44, 248 76, 242 134 C236 102, 212 78, 172 72 C134 78, 106 102, 98 134 Z"
              fill="#141416"
            />
            <path
              d="M170 50 C145 55, 112 78, 102 122 C118 96, 144 82, 170 76 C196 82, 222 96, 238 122 C228 78, 195 55, 170 50 Z"
              fill="#1C1C1F"
            />

            <path d="M124 124 Q142 117 156 123" stroke="#18181B" strokeWidth="4.2" strokeLinecap="round" fill="none" />
            <path d="M184 123 Q198 117 216 124" stroke="#18181B" strokeWidth="4.2" strokeLinecap="round" fill="none" />

            <ellipse cx="141" cy="137" rx="11" ry="6" fill="#FFFFFF" />
            <circle cx="141" cy="137" r="5.2" fill="#1E1815" />
            <circle cx="139.5" cy="135.5" r="1.6" fill="#FFFFFF" />

            <ellipse cx="199" cy="137" rx="11" ry="6" fill="#FFFFFF" />
            <circle cx="199" cy="137" r="5.2" fill="#1E1815" />
            <circle cx="197.5" cy="135.5" r="1.6" fill="#FFFFFF" />

            <path d="M170 134 L167 162 Q170 168 177 163" stroke="#B68660" strokeWidth="2.4" strokeLinecap="round" fill="none" />

            <path d="M147 177 Q170 170 193 177" stroke="#272422" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.68" />
            <path d="M150 185 Q170 191 190 185" stroke="#9A6850" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            <path d="M160 194 Q170 197 180 194" stroke="#BA8A67" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </svg>
        )}

        {/* Label Identitas Statis di Bagian Bawah Foto */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-black/80 text-white backdrop-blur-md border border-white/15">
          <div>
            <p className="text-xs font-extrabold tracking-tight leading-none">Frisqy Maulana, S.Kom.</p>
            <p className="font-mono-tech text-[10px] text-zinc-300 mt-1">{t.portraitCaptionSub}</p>
          </div>
          <span className="font-mono-tech text-[10px] font-semibold px-2 py-0.5 rounded bg-white/15 text-white">
            S.Kom.
          </span>
        </div>
      </div>
    </div>
  );
};

/**
 * ============================================================================
 * KOMPONEN DIAGRAM ARSITEKTUR PROYEK (DENGAN DUKUNGAN BAHASA ID / EN)
 * ============================================================================
 */
const ProjectArchitectureDiagram = ({ type, darkMode, lang }) => {
  const bg = darkMode ? '#121215' : '#F8FAFC';
  const card = darkMode ? '#18181C' : '#FFFFFF';
  const border = darkMode ? '#2E2E36' : '#18181B';
  const mutedBorder = darkMode ? '#27272A' : '#E2E8F0';
  const text = darkMode ? '#FAFAFA' : '#09090B';
  const subtext = darkMode ? '#A1A1AA' : '#475569';
  const accent = '#4F46E5';

  if (type === 'server') {
    return (
      <svg viewBox="0 0 520 260" className="w-full h-full object-cover" fill="none">
        <rect width="520" height="260" fill={bg} />
        <g opacity="0.55">
          <line x1="0" y1="52" x2="520" y2="52" stroke={mutedBorder} strokeDasharray="4 4" />
          <line x1="0" y1="130" x2="520" y2="130" stroke={mutedBorder} strokeDasharray="4 4" />
          <line x1="0" y1="208" x2="520" y2="208" stroke={mutedBorder} strokeDasharray="4 4" />
          <line x1="130" y1="0" x2="130" y2="260" stroke={mutedBorder} strokeDasharray="4 4" />
          <line x1="260" y1="0" x2="260" y2="260" stroke={mutedBorder} strokeDasharray="4 4" />
          <line x1="390" y1="0" x2="390" y2="260" stroke={mutedBorder} strokeDasharray="4 4" />
        </g>

        <rect x="34" y="42" width="186" height="176" rx="14" fill={card} stroke={border} strokeWidth="1.5" />
        <rect x="52" y="60" width="118" height="20" rx="4" fill="#EEF2FF" />
        <text x="60" y="73" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">
          DEBIAN GNU/LINUX 13
        </text>
        <text x="52" y="102" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="15" fontWeight="700">
          Server POCO
        </text>
        <text x="52" y="118" fill={subtext} fontFamily="JetBrains Mono, monospace" fontSize="10">
          Acer Aspire E1-410
        </text>
        <rect x="52" y="134" width="150" height="28" rx="6" fill={bg} stroke={mutedBorder} />
        <circle cx="66" cy="148" r="4" fill={accent} />
        <text x="78" y="152" fill={text} fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="500">
          {lang === 'id' ? 'Server Berbasis Python' : 'Python-Based Server'}
        </text>
        <rect x="52" y="170" width="150" height="28" rx="6" fill={bg} stroke={mutedBorder} />
        <circle cx="66" cy="184" r="4" fill="#10B981" />
        <text x="78" y="188" fill={text} fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="500">
          {lang === 'id' ? 'Sistem Backup Otomatis' : 'Automated Backup'}
        </text>

        <path d="M220 130 H300" stroke={border} strokeWidth="1.5" strokeDasharray="4 4" />
        <rect x="228" y="108" width="64" height="22" rx="11" fill={border} />
        <text x="260" y="122" textAnchor="middle" fill="#FFFFFF" fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">
          Tailscale
        </text>

        <rect x="300" y="42" width="186" height="52" rx="10" fill={card} stroke={border} strokeWidth="1.5" />
        <text x="318" y="65" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700">
          {lang === 'id' ? 'Server Berkas Pribadi' : 'Personal File Server'}
        </text>
        <text x="318" y="81" fill={subtext} fontFamily="JetBrains Mono, monospace" fontSize="9.5">
          {lang === 'id' ? 'Manajemen Berkas Terpusat' : 'Centralized File Management'}
        </text>

        <rect x="300" y="104" width="186" height="52" rx="10" fill={card} stroke={border} strokeWidth="1.5" />
        <text x="318" y="127" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700">
          {lang === 'id' ? 'Galeri Media Web' : 'Web Media Gallery'}
        </text>
        <text x="318" y="143" fill={subtext} fontFamily="JetBrains Mono, monospace" fontSize="9.5">
          {lang === 'id' ? 'Koleksi Foto & Video' : 'Indexed Photo & Video Hub'}
        </text>

        <rect x="300" y="166" width="186" height="52" rx="10" fill={card} stroke={border} strokeWidth="1.5" />
        <text x="318" y="189" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="700">
          {lang === 'id' ? 'Akses Jarak Jauh Aman' : 'Secure Remote Access'}
        </text>
        <text x="318" y="205" fill={subtext} fontFamily="JetBrains Mono, monospace" fontSize="9.5">
          {lang === 'id' ? 'Jaringan Privat Tailscale' : 'Tailscale Mesh Tunnel'}
        </text>
      </svg>
    );
  }

  if (type === 'touchhub') {
    return (
      <svg viewBox="0 0 520 260" className="w-full h-full object-cover" fill="none">
        <rect width="520" height="260" fill={bg} />
        <rect x="36" y="32" width="280" height="196" rx="14" fill={card} stroke={border} strokeWidth="1.5" />
        <rect x="52" y="48" width="248" height="24" rx="6" fill={bg} />
        <circle cx="66" cy="60" r="4" fill={accent} />
        <text x="78" y="64" fill={text} fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">
          TOSHIBA TOUCH HUB • PYTHON GTK + OPENBOX
        </text>

        <rect x="52" y="82" width="118" height="68" rx="8" fill={bg} stroke={mutedBorder} />
        <text x="64" y="100" fill={subtext} fontFamily="JetBrains Mono, monospace" fontSize="9">
          {lang === 'id' ? 'CPU / MEMORI' : 'CPU / MEMORY'}
        </text>
        <text x="64" y="122" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="16" fontWeight="800">
          21% • 3.1 GB
        </text>
        <rect x="64" y="132" width="92" height="5" rx="2.5" fill={mutedBorder} />
        <rect x="64" y="132" width="44" height="5" rx="2.5" fill={accent} />

        <rect x="182" y="82" width="118" height="68" rx="8" fill={bg} stroke={mutedBorder} />
        <text x="194" y="100" fill={subtext} fontFamily="JetBrains Mono, monospace" fontSize="9">
          {lang === 'id' ? 'STATUS SERVER' : 'SERVER STATUS'}
        </text>
        <text x="194" y="122" fill="#10B981" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="15" fontWeight="800">
          {lang === 'id' ? 'AKTIF • NORMAL' : 'ONLINE • HEALTHY'}
        </text>
        <text x="194" y="138" fill={subtext} fontFamily="JetBrains Mono, monospace" fontSize="9">
          Debian Linux
        </text>

        <rect x="52" y="160" width="76" height="52" rx="8" fill={border} />
        <text x="90" y="184" textAnchor="middle" fill="#FFFFFF" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700">
          {lang === 'id' ? 'Kendali PC' : 'Remote PC'}
        </text>
        <text x="90" y="198" textAnchor="middle" fill="#A1A1AA" fontFamily="JetBrains Mono, monospace" fontSize="8.5">
          {lang === 'id' ? 'Jarak Jauh' : 'Control'}
        </text>

        <rect x="138" y="160" width="76" height="52" rx="8" fill={bg} stroke={mutedBorder} />
        <text x="176" y="184" textAnchor="middle" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700">
          {lang === 'id' ? 'Layar Sentuh' : 'Touchscreen'}
        </text>
        <text x="176" y="198" textAnchor="middle" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="8.5">
          Dashboard
        </text>

        <rect x="224" y="160" width="76" height="52" rx="8" fill={bg} stroke={mutedBorder} />
        <text x="262" y="184" textAnchor="middle" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10" fontWeight="700">
          Monitoring
        </text>
        <text x="262" y="198" textAnchor="middle" fill={subtext} fontFamily="JetBrains Mono, monospace" fontSize="8.5">
          Real-Time
        </text>

        <path d="M316 130 H364" stroke={border} strokeWidth="1.5" strokeDasharray="4 4" />
        <rect x="364" y="66" width="120" height="128" rx="14" fill={card} stroke={border} strokeWidth="1.5" />
        <text x="424" y="106" textAnchor="middle" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">
          {lang === 'id' ? 'INTEGRASI PC' : 'LINKED HOST'}
        </text>
        <text x="424" y="130" textAnchor="middle" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fontWeight="800">
          Lenovo PC
        </text>
        <text x="424" y="148" textAnchor="middle" fill={subtext} fontFamily="JetBrains Mono, monospace" fontSize="9.5">
          {lang === 'id' ? 'Terhubung' : 'Connected'}
        </text>
      </svg>
    );
  }

  if (type === 'finance') {
    return (
      <svg viewBox="0 0 520 260" className="w-full h-full object-cover" fill="none">
        <rect width="520" height="260" fill={bg} />
        <rect x="36" y="30" width="448" height="200" rx="14" fill={card} stroke={border} strokeWidth="1.5" />
        <line x1="36" y1="66" x2="484" y2="66" stroke={mutedBorder} />
        <circle cx="58" cy="48" r="4" fill={accent} />
        <text x="72" y="52" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="700">
          {lang === 'id'
            ? 'Aplikasi Web Keuangan Pribadi — Next.js & Supabase'
            : 'Personal Finance Web Application — Next.js & Supabase'}
        </text>
        <text x="404" y="52" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">
          VERCEL
        </text>

        <rect x="56" y="84" width="166" height="62" rx="10" fill={bg} stroke={mutedBorder} />
        <text x="72" y="104" fill={subtext} fontFamily="JetBrains Mono, monospace" fontSize="9">
          {lang === 'id' ? 'ANGGARAN & TRANSAKSI' : 'BUDGET & TRANSACTIONS'}
        </text>
        <text x="72" y="128" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="15" fontWeight="800">
          {lang === 'id' ? 'Catatan Keuangan' : 'Cashflow Ledger'}
        </text>

        <rect x="56" y="156" width="166" height="56" rx="10" fill={bg} stroke={mutedBorder} />
        <text x="72" y="178" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700">
          Supabase Database
        </text>
        <text x="72" y="196" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="9.5">
          {lang === 'id' ? 'Pengaturan Akun & Data' : 'Account & Cloud Sync'}
        </text>

        <rect x="240" y="84" width="224" height="128" rx="10" fill={bg} stroke={mutedBorder} />
        <text x="258" y="106" fill={subtext} fontFamily="JetBrains Mono, monospace" fontSize="9">
          {lang === 'id' ? 'STATISTIK KEUANGAN' : 'FINANCIAL STATISTICS'}
        </text>
        <rect x="266" y="154" width="22" height="42" rx="4" fill={mutedBorder} />
        <rect x="300" y="136" width="22" height="60" rx="4" fill={accent} opacity="0.55" />
        <rect x="334" y="120" width="22" height="76" rx="4" fill={accent} />
        <rect x="368" y="144" width="22" height="52" rx="4" fill={accent} opacity="0.4" />
        <rect x="402" y="112" width="22" height="84" rx="4" fill={border} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 520 260" className="w-full h-full object-cover" fill="none">
      <rect width="520" height="260" fill={bg} />
      <rect x="36" y="32" width="448" height="196" rx="14" fill={card} stroke={border} strokeWidth="1.5" />
      <text x="60" y="62" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="9.5" fontWeight="600">
        {lang === 'id'
          ? 'TUGAS AKHIR S1 • ALGORITMA RANDOM FOREST'
          : 'UNDERGRADUATE THESIS • RANDOM FOREST ALGORITHM'}
      </text>
      <text x="60" y="84" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="14" fontWeight="800">
        {lang === 'id'
          ? 'Sistem Prediksi Risiko Penyakit Diabetes Sejak Dini'
          : 'Early Stage Diabetes Risk Prediction System'}
      </text>

      <rect x="60" y="106" width="118" height="96" rx="10" fill={bg} stroke={mutedBorder} />
      <text x="74" y="128" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">
        01 // DATASET
      </text>
      <text x="74" y="148" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11" fontWeight="700">
        {lang === 'id' ? 'Gejala Klinis' : 'Clinical Symptoms'}
      </text>
      <text x="74" y="165" fill={subtext} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10">
        {lang === 'id' ? 'Pra-pemrosesan' : 'Preprocessing'}
      </text>
      <text x="74" y="186" fill={subtext} fontFamily="JetBrains Mono, monospace" fontSize="9">
        Python
      </text>

      <path d="M178 154 H200" stroke={border} strokeWidth="1.5" />

      <rect x="200" y="106" width="124" height="96" rx="10" fill={card} stroke={border} strokeWidth="1.5" />
      <text x="214" y="128" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">
        02 // MODEL
      </text>
      <text x="214" y="148" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="12" fontWeight="800">
        Random Forest
      </text>
      <text x="214" y="165" fill={subtext} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10">
        Machine Learning
      </text>
      <text x="214" y="186" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">
        {lang === 'id' ? 'Klasifikasi Risiko' : 'Risk Classifier'}
      </text>

      <path d="M324 154 H346" stroke={border} strokeWidth="1.5" />

      <rect x="346" y="106" width="114" height="96" rx="10" fill={bg} stroke={mutedBorder} />
      <text x="360" y="128" fill={accent} fontFamily="JetBrains Mono, monospace" fontSize="9" fontWeight="600">
        03 // WEB APP
      </text>
      <text x="360" y="148" fill={text} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="11.5" fontWeight="700">
        Streamlit
      </text>
      <text x="360" y="165" fill={subtext} fontFamily="Plus Jakarta Sans, sans-serif" fontSize="10">
        {lang === 'id' ? 'Visualisasi Data' : 'Data Visualization'}
      </text>
      <text x="360" y="186" fill={subtext} fontFamily="JetBrains Mono, monospace" fontSize="9">
        {lang === 'id' ? 'Antarmuka Web' : 'Interactive UI'}
      </text>
    </svg>
  );
};

/**
 * ============================================================================
 * KOMPONEN UTAMA PORTFOLIO ARSITEKTURAL FRISQY MAULANA (PRODUCTION READY)
 * ============================================================================
 */
export default function App() {
  // Bahasa aktif ('id' atau 'en' — 100% konsisten tanpa pencampuran)
  const [lang, setLang] = useState('id');
  const t = UI_TEXT[lang];

  // Tema terang sebagai tampilan utama
  const [darkMode, setDarkMode] = useState(false);

  // Menu Navigasi Drawer
  const [menuOpen, setMenuOpen] = useState(false);

  // Data Profil Statis
  const profileData = INITIAL_PROFILE_DATA;

  // Sumber Foto Profil: Membaca localStorage secara otomatis jika sudah dipasang di pratinjau,
  // atau menggunakan PROFILE_PHOTO_PATH ("/profile.jpg") saat di-deploy ke Vercel.
  const [photoSrc] = useState(() => {
    try {
      const saved = localStorage.getItem('frisqy_portfolio_photo');
      return saved || PROFILE_PHOTO_PATH;
    } catch {
      return PROFILE_PHOTO_PATH;
    }
  });

  // State Buka/Tutup Pencapaian di Timeline
  const [expandedJourney, setExpandedJourney] = useState({
    'exp-bpn': true,
    'edu-unp': true
  });

  // State Hover & Klik Sertifikasi
  const [hoveredCertId, setHoveredCertId] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  // State Modal Detail Proyek (Tanpa link GitHub)
  const [selectedProject, setSelectedProject] = useState(null);

  // State Modal Download / Cetak CV
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [cvVariant, setCvVariant] = useState('comprehensive');

  // State Form Kontak & Clipboard
  const [copiedKey, setCopiedKey] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [contactNotice, setContactNotice] = useState(null);

  // Memuat Font Swiss Neo-Grotesque ('Plus Jakarta Sans', 'Inter', & 'JetBrains Mono')
  useEffect(() => {
    document.title =
      lang === 'id'
        ? 'Frisqy Maulana, S.Kom. — Portofolio Profesional'
        : 'Frisqy Maulana, S.Kom. — Professional Portfolio';
    const linkId = 'frisqy-neogrotesque-fonts';
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
      document.head.appendChild(link);
    }
  }, [lang]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleJourneyItem = (id) => {
    setExpandedJourney((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyToClipboard = (text, key) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      contactForm.subject ||
        (lang === 'id'
          ? `Pesan Portofolio dari ${contactForm.name || 'Pengunjung'}`
          : `Portfolio Inquiry from ${contactForm.name || 'Visitor'}`)
    );
    const body = encodeURIComponent(
      lang === 'id'
        ? `Halo Frisqy Maulana,\n\nNama: ${contactForm.name || '-'}\nEmail: ${contactForm.email || '-'}\n\nPesan:\n${contactForm.message || '-'}`
        : `Hello Frisqy Maulana,\n\nName: ${contactForm.name || '-'}\nEmail: ${contactForm.email || '-'}\n\nMessage:\n${contactForm.message || '-'}`
    );
    window.open(`mailto:${profileData.identity.emailPrimary}?subject=${subject}&body=${body}`, '_blank');
    setContactNotice(
      lang === 'id'
        ? 'Membuka aplikasi email Anda dengan draf pesan ke fmkiki11@gmail.com.'
        : 'Opening your email client with a pre-filled draft to fmkiki11@gmail.com.'
    );
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      lang === 'id'
        ? `Halo Frisqy Maulana, saya *${contactForm.name || 'Pengunjung Portofolio'}* (${contactForm.email || '-'}).\nSubjek: *${contactForm.subject || 'Menghubungi melalui Website Portofolio'}*\n\n${contactForm.message || 'Saya tertarik untuk berdiskusi lebih lanjut.'}`
        : `Hello Frisqy Maulana, I am *${contactForm.name || 'Portfolio Visitor'}* (${contactForm.email || '-'}).\nSubject: *${contactForm.subject || 'Reaching out via Portfolio Website'}*\n\n${contactForm.message || 'I would like to connect with you regarding a professional opportunity.'}`
    );
    window.open(`https://wa.me/${profileData.identity.whatsappNumber}?text=${text}`, '_blank');
    setContactNotice(
      lang === 'id'
        ? 'Mengarahkan pesan ke WhatsApp Frisqy Maulana (0851-9008-3619).'
        : 'Redirecting your message to WhatsApp (+62 851-9008-3619).'
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-[#0A0A0C] text-[#FAFAFA]' : 'bg-[#FFFFFF] text-[#09090B]'
      } selection:bg-[#09090B] selection:text-white`}
      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      {/* CSS Khusus */}
      <style>{`
        .font-mono-tech {
          font-family: 'JetBrains Mono', monospace;
        }
        .vertical-text-left {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        .vertical-text-right {
          writing-mode: vertical-rl;
        }
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-cv-sheet, #printable-cv-sheet * {
            visibility: visible;
          }
          #printable-cv-sheet {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: #FFFFFF !important;
            color: #09090B !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>

      {/* =====================================================================
          HEADER TETAP ARSITEKTURAL (KIRI: MONOGRAM FM | KANAN: ID/EN & MENU)
      ===================================================================== */}
      <header className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 h-24 flex items-center justify-between">
          {/* Segel Monogram Bulat "FM" */}
          <button
            onClick={() => scrollToSection('home')}
            className={`pointer-events-auto group relative w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 ${
              darkMode ? 'bg-[#141418]/90 border border-zinc-800' : 'bg-white/90 border border-zinc-200/90'
            } backdrop-blur-md shadow-xs`}
            title="Frisqy Maulana, S.Kom."
          >
            <svg viewBox="0 0 100 100" className="w-12 h-12">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                />
              </defs>
              <text
                fill={darkMode ? '#A1A1AA' : '#52525B'}
                fontSize="7.3"
                fontWeight="600"
                letterSpacing="2.1px"
                className="font-mono-tech uppercase"
              >
                <textPath href="#circlePath">
                  FRISQY MAULANA • S.KOM • PORTFOLIO •
                </textPath>
              </text>
            </svg>
            <span className="absolute text-xs font-extrabold tracking-tighter">FM</span>
          </button>

          {/* Navigasi Cepat Tengah (Desktop) */}
          <nav
            className={`pointer-events-auto hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full border backdrop-blur-md shadow-2xs ${
              darkMode ? 'bg-[#141418]/85 border-zinc-800' : 'bg-white/85 border-zinc-200/90'
            }`}
          >
            {t.navItems.slice(1).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                  darkMode
                    ? 'text-zinc-300 hover:text-white hover:bg-zinc-800/70'
                    : 'text-zinc-700 hover:text-[#09090B] hover:bg-zinc-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Kanan Atas: Sakelar Bahasa ID / EN + Tema + Menu Drawer */}
          <div className="pointer-events-auto flex items-center gap-2.5">
            {/* Sakelar Bahasa ID / EN */}
            <div
              className={`inline-flex items-center p-1 rounded-full border backdrop-blur-md ${
                darkMode ? 'bg-[#141418]/90 border-zinc-800' : 'bg-white/95 border-zinc-200'
              } shadow-xs`}
            >
              <button
                onClick={() => setLang('id')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight transition ${
                  lang === 'id'
                    ? darkMode
                      ? 'bg-white text-black'
                      : 'bg-[#09090B] text-white'
                    : darkMode
                    ? 'text-zinc-400 hover:text-white'
                    : 'text-zinc-500 hover:text-black'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-tight transition ${
                  lang === 'en'
                    ? darkMode
                      ? 'bg-white text-black'
                      : 'bg-[#09090B] text-white'
                    : darkMode
                    ? 'text-zinc-400 hover:text-white'
                    : 'text-zinc-500 hover:text-black'
                }`}
              >
                EN
              </button>
            </div>

            {/* Tombol Mode Terang / Gelap */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-10 h-10 rounded-full flex items-center justify-center border backdrop-blur-md transition ${
                darkMode
                  ? 'bg-[#141418]/90 border-zinc-800 text-zinc-200 hover:border-zinc-600'
                  : 'bg-white/95 border-zinc-200 text-zinc-800 hover:border-zinc-900'
              }`}
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Tombol Menu Bulat '=' */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`w-11 h-11 rounded-full flex items-center justify-center border backdrop-blur-md transition ${
                darkMode
                  ? 'bg-[#141418]/90 border-zinc-800 text-white hover:border-zinc-600'
                  : 'bg-white/95 border-zinc-200 text-[#09090B] hover:border-zinc-900'
              } shadow-xs`}
              aria-label="Menu"
            >
              {menuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <div className="flex flex-col gap-1.5 items-center justify-center">
                  <span className={`w-4 h-[1.5px] ${darkMode ? 'bg-white' : 'bg-[#09090B]'}`} />
                  <span className={`w-4 h-[1.5px] ${darkMode ? 'bg-white' : 'bg-[#09090B]'}`} />
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================================
          DRAWER NAVIGASI LAYAR PENUH
      ===================================================================== */}
      {menuOpen && (
        <div
          className={`fixed inset-0 z-30 flex flex-col justify-between p-8 sm:p-16 transition-all ${
            darkMode ? 'bg-[#0A0A0C]/98 text-white' : 'bg-white/98 text-[#09090B]'
          } backdrop-blur-xl`}
        >
          <div className="h-16" />
          <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-3">
              <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-indigo-600">
                {t.navDirectory}
              </p>
              {t.navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-baseline gap-4 text-left w-full py-1.5"
                >
                  <span className="font-mono-tech text-xs text-indigo-600">{item.num}</span>
                  <span className="text-3xl sm:text-5xl font-extrabold tracking-tight group-hover:translate-x-3 transition-transform">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="md:col-span-5 space-y-6 border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-800 pt-6 md:pt-0 md:pl-10">
              <div className="space-y-1">
                <p className="font-mono-tech text-xs uppercase tracking-widest text-zinc-400">
                  {t.identityLabel}
                </p>
                <p className="text-lg font-bold">Frisqy Maulana, S.Kom.</p>
                <p className="text-sm text-zinc-500">
                  Universitas Nusantara PGRI Kediri ({lang === 'id' ? 'IPK 3,80' : 'GPA 3.80'})
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-mono-tech text-xs uppercase tracking-widest text-zinc-400">
                  {t.directContactLabel}
                </p>
                <p className="text-sm font-medium">{profileData.identity.emailPrimary}</p>
                <p className="text-sm font-medium">WhatsApp: {profileData.identity.whatsappDisplay}</p>
              </div>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setCvModalOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#09090B] text-white dark:bg-white dark:text-black flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.downloadCvBtn}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto w-full flex items-center justify-between text-xs font-mono-tech text-zinc-400">
            <span>{t.edgeLeft}</span>
            <span>{t.edgeRight}</span>
          </div>
        </div>
      )}

      {/* =====================================================================
          HERO SECTION DENGAN CORAK PERMANEN SILVER-PEARL TOPOGRAPHIC & SWISS DOT-MATRIX
      ===================================================================== */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-between overflow-hidden"
        style={{
          backgroundColor: darkMode ? '#0B0C10' : '#F4F6F9'
        }}
      >
        {/* LATAR BELAKANG PERMANEN SILVER-PEARL ARCHITECTURAL TOPOGRAPHIC & SWISS DOT-MATRIX */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: darkMode
                ? 'radial-gradient(circle at 18% 22%, rgba(79, 70, 229, 0.12), transparent 48%), radial-gradient(circle at 82% 75%, rgba(148, 163, 184, 0.08), transparent 52%), linear-gradient(180deg, #0B0C10 0%, #101218 100%)'
                : 'radial-gradient(circle at 15% 18%, rgba(255, 255, 255, 0.98) 0%, rgba(241, 245, 249, 0.6) 45%, transparent 70%), radial-gradient(circle at 85% 25%, rgba(226, 232, 240, 0.75) 0%, transparent 55%), radial-gradient(circle at 50% 90%, rgba(255, 255, 255, 0.95) 0%, transparent 60%), linear-gradient(165deg, #F4F6F9 0%, #EEF2F6 52%, #F4F6F9 100%)'
            }}
          />

          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern id="swissDotGrid" width="36" height="36" patternUnits="userSpaceOnUse">
                <circle
                  cx="2"
                  cy="2"
                  r="1"
                  fill={darkMode ? 'rgba(255,255,255,0.10)' : 'rgba(15, 23, 42, 0.11)'}
                />
              </pattern>
              <pattern id="swissCrossGrid" width="144" height="144" patternUnits="userSpaceOnUse">
                <path
                  d="M 140 144 L 148 144 M 144 140 L 144 148"
                  stroke={darkMode ? 'rgba(255,255,255,0.16)' : 'rgba(15, 23, 42, 0.16)'}
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#swissDotGrid)" />
            <rect width="100%" height="100%" fill="url(#swissCrossGrid)" />

            <g
              fill="none"
              stroke={darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(100, 116, 139, 0.14)'}
              strokeWidth="1.2"
            >
              <path d="M-100,180 C220,60 480,320 820,160 C1160,0 1380,240 1650,110" />
              <path d="M-100,260 C250,140 510,400 850,240 C1190,80 1410,320 1650,190" />
              <path d="M-100,340 C280,220 540,480 880,320 C1220,160 1440,400 1650,270" />
              <path d="M-100,520 C320,380 640,640 980,460 C1280,300 1480,520 1650,410" />
              <path d="M-100,600 C350,460 670,720 1010,540 C1310,380 1510,600 1650,490" />
            </g>
          </svg>
        </div>

        {/* Teks Vertikal Kiri & Kanan */}
        <div className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <span className="vertical-text-left font-mono-tech text-[10px] tracking-[0.32em] uppercase text-zinc-400">
            {t.edgeLeft}
          </span>
        </div>
        <div className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <span className="vertical-text-right font-mono-tech text-[10px] tracking-[0.32em] uppercase text-zinc-400">
            {t.edgeRight}
          </span>
        </div>

        {/* Spacer Atas */}
        <div className="h-24" />

        {/* KONTEN UTAMA HERO: NAMA BESAR + FOTO PROFIL STATIS + PERAN/FOKUS */}
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 sm:px-14 my-auto py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Kolom Kiri (6 Kolom): Badge Gelar, Nama Besar, Ringkasan */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                <span className="font-mono-tech text-[11px] font-semibold tracking-wider uppercase text-zinc-700 dark:text-zinc-300">
                  {t.heroBadge}
                </span>
              </div>

              <h1 className="text-[52px] sm:text-[78px] xl:text-[92px] font-extrabold tracking-[-0.045em] leading-[0.94]">
                <span className="block">{profileData.identity.firstName}</span>
                <span className="block">
                  {profileData.identity.lastName}
                  <span className="text-2xl sm:text-4xl font-bold text-zinc-400 dark:text-zinc-500 ml-3 tracking-tight">
                    {profileData.identity.titleSuffix}
                  </span>
                </span>
              </h1>

              <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xl">
                {profileData.identity.heroSummary[lang]}
              </p>

              {/* Tombol Utama di Hero */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  onClick={() => scrollToSection('about')}
                  className={`px-5 py-3 rounded-full text-xs font-bold tracking-tight transition inline-flex items-center gap-2 shadow-xs ${
                    darkMode
                      ? 'bg-white text-[#09090B] hover:bg-zinc-200'
                      : 'bg-[#09090B] text-white hover:bg-zinc-800'
                  }`}
                >
                  <span>{t.heroExploreBtn}</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setCvModalOpen(true)}
                  className={`px-5 py-3 rounded-full text-xs font-bold border transition inline-flex items-center gap-2 ${
                    darkMode
                      ? 'border-zinc-700 bg-zinc-900/80 text-zinc-100 hover:border-white'
                      : 'border-[#18181B] bg-white text-[#09090B] hover:bg-zinc-100'
                  }`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.downloadCvBtn}</span>
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-4 py-3 rounded-full text-xs font-semibold border transition inline-flex items-center gap-1.5 ${
                    darkMode
                      ? 'border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-zinc-600'
                      : 'border-zinc-300 bg-white/80 text-zinc-800 hover:border-[#09090B]'
                  }`}
                >
                  <span>{t.heroContactBtn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={profileData.identity.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-3 rounded-full text-xs font-semibold border transition inline-flex items-center gap-1.5 ${
                    darkMode
                      ? 'border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-zinc-600'
                      : 'border-zinc-300 bg-white/80 text-zinc-800 hover:border-[#09090B]'
                  }`}
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Kolom Tengah (3 Kolom): BINGKAI FOTO PROFIL BERSIH TANPA TOMBOL EDIT */}
            <div className="lg:col-span-3 max-w-[290px] sm:max-w-[310px] mx-auto w-full">
              <ProfilePortraitFrame
                photoSrc={photoSrc}
                lang={lang}
                darkMode={darkMode}
                compact
              />
            </div>

            {/* Kolom Kanan (3 Kolom): ROLE, FOCUS, LOCATION, STATUS */}
            <div className="lg:col-span-3 flex flex-col lg:items-end lg:text-right justify-center space-y-5">
              <div className="space-y-1">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400 font-semibold">
                  {t.heroRoleLabel}
                </p>
                {profileData.identity.roleLines[lang].map((line, idx) => (
                  <p key={idx} className="text-sm sm:text-base font-extrabold tracking-tight">
                    {line}
                  </p>
                ))}
              </div>

              <div className="w-24 h-[1px] bg-zinc-300 dark:bg-zinc-800" />

              <div className="space-y-1">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                  {t.heroFocusLabel}
                </p>
                {profileData.identity.focusLines[lang].map((line, idx) => (
                  <p key={idx} className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {line}
                  </p>
                ))}
              </div>

              <div className="w-24 h-[1px] bg-zinc-300 dark:bg-zinc-800" />

              <div className="space-y-1">
                <p className="font-mono-tech text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                  {t.heroLocationLabel}
                </p>
                <p className="text-xs sm:text-sm font-bold">{profileData.identity.location[lang]}</p>
                <p className="text-[11px] font-mono-tech text-emerald-600 dark:text-emerald-400">
                  ● {t.heroStatusValue}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BAR BAWAH HERO: INDIKATOR GULIR BERSIH */}
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 sm:px-14 pb-8 pt-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center gap-2 font-mono-tech text-[11px] tracking-[0.22em] uppercase text-zinc-500 hover:text-black dark:hover:text-white transition"
            >
              <span>{t.heroScroll}</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </button>

            <span className="font-mono-tech text-[11px] text-zinc-400 hidden sm:inline">
              {profileData.identity.location[lang]}
            </span>
          </div>

          <div className="mt-6 border-b border-zinc-200/90 dark:border-zinc-800" />
        </div>
      </section>

      {/* =====================================================================
          01 // TENTANG SAYA (ABOUT ME)
      ===================================================================== */}
      <section id="about" className="py-24 sm:py-32">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono-tech text-xs font-semibold tracking-[0.18em] uppercase text-indigo-600 dark:text-indigo-400">
              {t.sec01Tag}
            </span>
            <div className="w-16 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            {/* Kolom Kiri (5 Kolom): Headline, Narasi, dan Ringkasan Biodata */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-[38px] font-extrabold tracking-[-0.03em] leading-[1.14]">
                {profileData.about.headline[lang]}
              </h2>

              <div className="space-y-4 text-sm sm:text-[15px] leading-[1.75] text-zinc-600 dark:text-zinc-400">
                {profileData.about.paragraphs[lang].map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>

              {/* Tabel Ringkasan Identitas Singkat */}
              <div
                className={`p-5 rounded-2xl border-[1.5px] space-y-3 ${
                  darkMode ? 'bg-[#121215] border-zinc-800' : 'bg-zinc-50/70 border-[#18181B]'
                }`}
              >
                <p className="font-mono-tech text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {t.sec01BioCardTitle}
                </p>
                <dl className="grid grid-cols-1 gap-2.5 text-xs">
                  {[
                    { label: t.sec01Labels.fullName, val: t.sec01Values.fullName },
                    { label: t.sec01Labels.degree, val: t.sec01Values.degree },
                    { label: t.sec01Labels.education, val: t.sec01Values.education },
                    { label: t.sec01Labels.location, val: t.sec01Values.location },
                    { label: t.sec01Labels.interest, val: t.sec01Values.interest },
                    { label: t.sec01Labels.status, val: t.sec01Values.status }
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:justify-between border-b border-zinc-200/70 dark:border-zinc-800 pb-2 last:border-b-0 last:pb-0"
                    >
                      <dt className="text-zinc-500 font-medium">{row.label}</dt>
                      <dd className="font-bold sm:text-right">{row.val}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Kolom Kanan (7 Kolom): 2x2 Grid Kartu Kompetensi Inti */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {profileData.about.pillars.map((pillar, idx) => {
                const IconComponent =
                  pillar.icon === 'server'
                    ? Server
                    : pillar.icon === 'lightbulb'
                    ? Lightbulb
                    : pillar.icon === 'users'
                    ? Users
                    : Layers;
                return (
                  <div
                    key={idx}
                    className={`p-7 rounded-2xl border-[1.5px] transition-transform duration-200 hover:-translate-y-0.5 ${
                      darkMode
                        ? 'bg-[#121215] border-zinc-700 hover:border-white'
                        : 'bg-white border-[#18181B] shadow-[0_2px_10px_rgba(0,0,0,0.02)]'
                    }`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight mb-2.5">
                      {lang === 'id' ? pillar.titleId : pillar.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {lang === 'id' ? pillar.descId : pillar.descEn}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02 // PENGALAMAN & PENDIDIKAN (MASA PKL = 1 BULAN)
      ===================================================================== */}
      <section
        id="experience"
        className={`py-24 sm:py-32 border-t ${darkMode ? 'border-zinc-900' : 'border-zinc-100'}`}
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Kolom Kiri Sticky */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-mono-tech text-xs font-semibold tracking-[0.18em] uppercase text-indigo-600 dark:text-indigo-400">
                  {t.sec02Tag}
                </span>
                <div className="w-12 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.035em] leading-[1.08]">
                {t.sec02Title}
              </h2>

              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 pt-1">
                {t.sec02Desc}
              </p>
            </div>

            {/* Kolom Kanan: Timeline Vertikal */}
            <div className="lg:col-span-8">
              <div className="relative pl-8 sm:pl-12 border-l border-zinc-200 dark:border-zinc-800 space-y-16">
                {profileData.journey.map((item) => {
                  const isExpanded = expandedJourney[item.id] !== false;
                  const achievements = lang === 'id' ? item.achievementsId : item.achievementsEn;
                  const orgName = lang === 'id' ? item.organizationId : item.organizationEn;
                  const roleName = lang === 'id' ? item.roleId : item.roleEn;
                  const locName = lang === 'id' ? item.locationId : item.locationEn;
                  const periodName = lang === 'id' ? item.periodId : item.periodEn;
                  const durationName = lang === 'id' ? item.durationId : item.durationEn;

                  return (
                    <div key={item.id} className="relative">
                      {/* Titik Node */}
                      <span
                        className={`absolute -left-[37px] sm:-left-[53px] top-1.5 w-3 h-3 rounded-full border-2 ${
                          darkMode
                            ? 'bg-zinc-400 border-[#0A0A0C]'
                            : 'bg-zinc-400 border-white ring-4 ring-white'
                        }`}
                      />

                      <div className="space-y-3">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
                          <span className="font-extrabold">{orgName}</span>{' '}
                          <span className="font-normal text-zinc-400">—</span>{' '}
                          <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                            {roleName}
                          </span>
                        </h3>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{locName}</span>
                          </span>
                          <span className="text-zinc-300 dark:text-zinc-700">|</span>
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{periodName}</span>
                          </span>
                        </div>

                        {/* Badge Durasi (1 Bulan untuk PKL BPN) */}
                        <div>
                          <span
                            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold ${
                              darkMode
                                ? 'bg-zinc-900 text-zinc-200 border border-zinc-800'
                                : 'bg-zinc-100 text-zinc-800'
                            }`}
                          >
                            <Clock className="w-3 h-3 text-indigo-600" />
                            <span>{durationName}</span>
                          </span>
                        </div>

                        {/* Tombol Buka/Tutup Pencapaian */}
                        <div className="pt-2">
                          <button
                            onClick={() => toggleJourneyItem(item.id)}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-3.5 h-3.5 text-indigo-600" />
                            ) : (
                              <ChevronDown className="w-3.5 h-3.5 text-indigo-600" />
                            )}
                            <span>
                              {isExpanded
                                ? t.hideAchievements(achievements.length)
                                : t.showAchievements(achievements.length)}
                            </span>
                          </button>

                          {isExpanded && (
                            <ul className="mt-4 space-y-3">
                              {achievements.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                                >
                                  <span
                                    className={`mt-1 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                                      darkMode ? 'bg-zinc-900 text-zinc-400' : 'bg-zinc-100 text-zinc-500'
                                    }`}
                                  >
                                    <ChevronRight className="w-2.5 h-2.5" />
                                  </span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03 // PROYEK TERPILIH (TANPA TAUTAN GITHUB — FOKUS MODAL DETAIL SISTEM)
      ===================================================================== */}
      <section
        id="projects"
        className={`py-24 sm:py-32 border-t ${darkMode ? 'border-zinc-900' : 'border-zinc-100'}`}
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="font-mono-tech text-xs font-semibold tracking-[0.18em] uppercase text-indigo-600 dark:text-indigo-400">
                  {t.sec03Tag}
                </span>
                <div className="w-16 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.035em]">
                {t.sec03Title}
              </h2>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">{t.sec03Desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {profileData.projects.map((project) => {
              const title = lang === 'id' ? project.titleId : project.titleEn;
              const hardware = lang === 'id' ? project.hardwareId : project.hardwareEn;
              const summary = lang === 'id' ? project.summaryId : project.summaryEn;
              const techList = lang === 'id' ? project.techId : project.techEn;

              return (
                <article
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`group cursor-pointer rounded-2xl border-[1.5px] overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                    darkMode
                      ? 'bg-[#121215] border-zinc-800 hover:border-zinc-500'
                      : 'bg-white border-[#18181B] hover:shadow-xl'
                  }`}
                >
                  <div>
                    <div className="aspect-[16/9] w-full border-b border-zinc-200 dark:border-zinc-800 overflow-hidden relative">
                      <ProjectArchitectureDiagram
                        type={project.visualType}
                        darkMode={darkMode}
                        lang={lang}
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono-tech font-semibold bg-white/95 text-[#09090B] border border-zinc-300 shadow-2xs">
                          {project.index} // {project.year}
                        </span>
                      </div>
                    </div>

                    <div className="p-7 space-y-4">
                      <div className="space-y-1">
                        <p className="font-mono-tech text-xs font-medium text-indigo-600 dark:text-indigo-400">
                          {hardware}
                        </p>
                        <h3 className="text-2xl font-extrabold tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {title}
                        </h3>
                      </div>

                      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {techList.map((techItem, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-[11px] font-mono-tech font-medium ${
                              darkMode
                                ? 'bg-zinc-900 text-zinc-300 border border-zinc-800'
                                : 'bg-zinc-100 text-zinc-800'
                            }`}
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`px-7 py-4 border-t flex items-center justify-between ${
                      darkMode ? 'border-zinc-800 bg-zinc-950/50' : 'border-zinc-200 bg-zinc-50/70'
                    }`}
                  >
                    <span className="text-xs font-bold tracking-tight inline-flex items-center gap-2 group-hover:text-indigo-600 transition">
                      <Eye className="w-4 h-4" />
                      <span>{t.viewProjectDetailBtn}</span>
                    </span>

                    <span className="w-8 h-8 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center group-hover:bg-[#09090B] group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          04 // KEAHLIAN & KOMPETENSI TEKNIS
      ===================================================================== */}
      <section
        id="skills"
        className={`py-24 sm:py-32 border-t ${darkMode ? 'border-zinc-900' : 'border-zinc-100'}`}
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="font-mono-tech text-xs font-semibold tracking-[0.18em] uppercase text-indigo-600 dark:text-indigo-400">
                  {t.sec04Tag}
                </span>
                <div className="w-16 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.035em]">
                {t.sec04Title}
              </h2>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md">{t.sec04Desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.skills.map((group) => {
              const code = lang === 'id' ? group.codeId : group.codeEn;
              const title = lang === 'id' ? group.titleId : group.titleEn;
              const items = lang === 'id' ? group.itemsId : group.itemsEn;

              return (
                <div
                  key={group.id}
                  className={`p-7 sm:p-8 rounded-2xl border-[1.5px] ${
                    darkMode ? 'bg-[#121215] border-zinc-800' : 'bg-white border-[#18181B]'
                  } space-y-5`}
                >
                  <div className="space-y-1 border-b border-zinc-200 dark:border-zinc-800 pb-4">
                    <span className="font-mono-tech text-[11px] font-semibold text-indigo-600 dark:text-indigo-400">
                      {code}
                    </span>
                    <h3 className="text-xl font-extrabold tracking-tight">{title}</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {items.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`px-3.5 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2.5 ${
                          darkMode
                            ? 'bg-zinc-900/70 border-zinc-800 text-zinc-200'
                            : 'bg-zinc-50 border-zinc-200/90 text-zinc-800'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          05 // SERTIFIKASI RESMI (STATIS & BERSIH TANPA TOMBOL CRUD)
      ===================================================================== */}
      <section
        id="credentials"
        className={`py-24 sm:py-32 border-t ${darkMode ? 'border-zinc-900' : 'border-zinc-100'}`}
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono-tech text-xs font-semibold tracking-[0.18em] uppercase text-indigo-600 dark:text-indigo-400">
              {t.sec05Tag}
            </span>
            <div className="w-16 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="text-5xl sm:text-6xl font-extrabold tracking-[-0.04em]">
              {t.sec05Title}
            </h2>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm sm:text-right">
              {t.sec05Desc}
            </p>
          </div>

          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {profileData.certifications.map((cert) => {
              const isHovered = hoveredCertId === cert.id;
              const certTitle = lang === 'id' ? cert.titleId : cert.titleEn;
              const certDate = lang === 'id' ? cert.dateId : cert.dateEn;

              return (
                <div
                  key={cert.id}
                  onMouseEnter={() => setHoveredCertId(cert.id)}
                  onMouseLeave={() => setHoveredCertId(null)}
                  onClick={() => setSelectedCert(cert)}
                  className={`relative py-8 sm:py-10 px-4 sm:px-6 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl ${
                    isHovered
                      ? darkMode
                        ? 'bg-zinc-900/60'
                        : 'bg-zinc-50/90 shadow-xs'
                      : ''
                  }`}
                >
                  {/* Pratinjau Kartu Sertifikat Melayang saat Hover */}
                  {isHovered && (
                    <div className="hidden lg:block pointer-events-none absolute -top-14 left-6 z-30 w-64 rounded-2xl bg-white text-[#09090B] p-4 shadow-2xl border border-zinc-200 transition-all animate-in fade-in duration-200">
                      <div
                        className="w-full h-36 rounded-xl p-3.5 flex flex-col justify-between relative overflow-hidden border border-zinc-200"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(238,242,255,0.95) 0%, rgba(255,255,255,1) 55%, rgba(224,231,255,0.85) 100%)'
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono-tech text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-indigo-600 text-white">
                            {t.verifiedBadge}
                          </span>
                          <span className="font-mono-tech text-[9px] font-bold text-zinc-500">
                            {cert.year}
                          </span>
                        </div>

                        <div className="text-center my-auto space-y-0.5">
                          <p className="text-[8px] uppercase tracking-widest text-zinc-400">
                            {t.awardedTo}
                          </p>
                          <p className="text-xs font-extrabold tracking-tight text-indigo-950">
                            {cert.recipient}
                          </p>
                          <p className="text-[9.5px] font-bold text-zinc-800 line-clamp-1">
                            {certTitle}
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-indigo-100 pt-1.5 text-[8px] font-mono-tech text-zinc-500">
                          <span className="truncate max-w-[130px]">{cert.issuer}</span>
                          <span>{certDate}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-baseline gap-6 sm:gap-12">
                    <span className="font-mono-tech text-sm sm:text-base font-medium text-zinc-500 shrink-0">
                      [{cert.year}]
                    </span>
                    <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                      {certTitle}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-5 pl-16 sm:pl-0">
                    <span className="text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-400">
                      {cert.issuer}
                    </span>
                    <span
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${
                        isHovered
                          ? 'bg-[#09090B] text-white border-[#09090B] dark:bg-white dark:text-black'
                          : 'border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          06 // HUBUNGI SAYA (CONTACT)
      ===================================================================== */}
      <section
        id="contact"
        className={`py-24 sm:py-32 border-t ${darkMode ? 'border-zinc-900' : 'border-zinc-100'}`}
      >
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono-tech text-xs font-semibold tracking-[0.18em] uppercase text-indigo-600 dark:text-indigo-400">
              {t.sec06Tag}
            </span>
            <div className="w-16 h-[1px] bg-zinc-200 dark:bg-zinc-800" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.035em] leading-[1.08]">
                {t.sec06Title}
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t.sec06Desc}
              </p>

              <div className="space-y-3 pt-2">
                {/* Email */}
                <div
                  className={`p-4 rounded-2xl border-[1.5px] flex items-center justify-between gap-3 ${
                    darkMode ? 'bg-[#121215] border-zinc-800' : 'bg-white border-[#18181B]'
                  }`}
                >
                  <div className="min-w-0">
                    <span className="block font-mono-tech text-[10px] uppercase tracking-wider text-indigo-600">
                      {t.emailLabel}
                    </span>
                    <a
                      href={`mailto:${profileData.identity.emailPrimary}`}
                      className="text-sm sm:text-base font-bold hover:underline truncate block"
                    >
                      {profileData.identity.emailPrimary}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profileData.identity.emailPrimary, 'email')}
                    className="px-3 py-1.5 rounded-full text-xs font-mono-tech border border-zinc-300 dark:border-zinc-700 hover:border-black transition flex items-center gap-1.5"
                  >
                    {copiedKey === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedKey === 'email' ? t.copiedBtn : t.copyBtn}</span>
                  </button>
                </div>

                {/* WhatsApp */}
                <div
                  className={`p-4 rounded-2xl border-[1.5px] flex items-center justify-between gap-3 ${
                    darkMode ? 'bg-[#121215] border-zinc-800' : 'bg-white border-[#18181B]'
                  }`}
                >
                  <div className="min-w-0">
                    <span className="block font-mono-tech text-[10px] uppercase tracking-wider text-indigo-600">
                      {t.waLabel}
                    </span>
                    <a
                      href={`https://wa.me/${profileData.identity.whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm sm:text-base font-bold hover:underline block"
                    >
                      {profileData.identity.whatsappDisplay}
                    </a>
                  </div>
                  <button
                    onClick={() => copyToClipboard('085190083619', 'wa')}
                    className="px-3 py-1.5 rounded-full text-xs font-mono-tech border border-zinc-300 dark:border-zinc-700 hover:border-black transition flex items-center gap-1.5"
                  >
                    {copiedKey === 'wa' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>{copiedKey === 'wa' ? t.copiedBtn : t.copyBtn}</span>
                  </button>
                </div>

                {/* Lokasi */}
                <div
                  className={`p-4 rounded-2xl border-[1.5px] flex items-center justify-between gap-3 ${
                    darkMode ? 'bg-[#121215] border-zinc-800' : 'bg-white border-[#18181B]'
                  }`}
                >
                  <div className="min-w-0">
                    <span className="block font-mono-tech text-[10px] uppercase tracking-wider text-indigo-600">
                      {t.locationLabel}
                    </span>
                    <p className="text-sm sm:text-base font-bold">{profileData.identity.location[lang]}</p>
                  </div>
                  <MapPin className="w-5 h-5 text-zinc-400 shrink-0" />
                </div>

                {/* GitHub */}
                <div
                  className={`p-4 rounded-2xl border-[1.5px] flex items-center justify-between gap-3 ${
                    darkMode ? 'bg-[#121215] border-zinc-800' : 'bg-white border-[#18181B]'
                  }`}
                >
                  <div className="min-w-0">
                    <span className="block font-mono-tech text-[10px] uppercase tracking-wider text-indigo-600">
                      {t.githubLabel}
                    </span>
                    <a
                      href={profileData.identity.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm sm:text-base font-bold hover:underline block"
                    >
                      github.com/Frisqy31
                    </a>
                  </div>
                  <a
                    href={profileData.identity.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Formulir Kontak */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSendEmail}
                className={`p-7 sm:p-10 rounded-2xl border-[1.5px] space-y-5 ${
                  darkMode ? 'bg-[#121215] border-zinc-800' : 'bg-white border-[#18181B]'
                }`}
              >
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold tracking-tight">{t.formTitle}</h3>
                  <p className="text-xs text-zinc-500">{t.formSubtitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                      {t.formNameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder={t.formNamePlaceholder}
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none ${
                        darkMode
                          ? 'bg-zinc-900 border-zinc-700 focus:border-white'
                          : 'bg-zinc-50 border-zinc-300 focus:border-[#09090B]'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                      {t.formEmailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder={t.formEmailPlaceholder}
                      className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none ${
                        darkMode
                          ? 'bg-zinc-900 border-zinc-700 focus:border-white'
                          : 'bg-zinc-50 border-zinc-300 focus:border-[#09090B]'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                    {t.formSubjectLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    placeholder={t.formSubjectPlaceholder}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none ${
                      darkMode
                        ? 'bg-zinc-900 border-zinc-700 focus:border-white'
                        : 'bg-zinc-50 border-zinc-300 focus:border-[#09090B]'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5">
                    {t.formMessageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder={t.formMessagePlaceholder}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none ${
                      darkMode
                        ? 'bg-zinc-900 border-zinc-700 focus:border-white'
                        : 'bg-zinc-50 border-zinc-300 focus:border-[#09090B]'
                    }`}
                  />
                </div>

                {contactNotice && (
                  <div className="p-3.5 rounded-xl text-xs font-medium bg-indigo-50 text-indigo-900 dark:bg-indigo-950/60 dark:text-indigo-200">
                    {contactNotice}
                  </div>
                )}

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className={`px-6 py-3.5 rounded-full text-xs font-bold tracking-tight transition inline-flex items-center gap-2 ${
                      darkMode ? 'bg-white text-black hover:bg-zinc-200' : 'bg-[#09090B] text-white hover:bg-zinc-800'
                    }`}
                  >
                    <span>{t.sendEmailBtn}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="px-6 py-3.5 rounded-full text-xs font-bold tracking-tight border border-zinc-300 dark:border-zinc-700 hover:border-black dark:hover:border-white transition inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>{t.sendWaBtn}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FOOTER
      ===================================================================== */}
      <footer className={`py-12 border-t ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-zinc-500">
          <div>
            <span className="font-bold text-zinc-900 dark:text-white">FRISQY MAULANA, S.KOM.</span> — {t.footerRole}
          </div>
          <div>
            © {new Date().getFullYear()} FRISQY MAULANA • {t.footerRights}
          </div>
        </div>
      </footer>

      {/* =====================================================================
          MODAL 1: DETAIL PROYEK (TANPA TAUTAN GITHUB)
      ===================================================================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-xs">
          <div
            className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border-[1.5px] ${
              darkMode ? 'bg-[#121215] border-zinc-700 text-white' : 'bg-white border-[#18181B] text-[#09090B]'
            } shadow-2xl`}
          >
            <div className="sticky top-0 z-10 px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-inherit flex items-center justify-between">
              <div>
                <span className="font-mono-tech text-xs text-indigo-600">
                  {selectedProject.index} //{' '}
                  {lang === 'id' ? selectedProject.hardwareId : selectedProject.hardwareEn}
                </span>
                <h3 className="text-xl font-extrabold tracking-tight">
                  {lang === 'id' ? selectedProject.titleId : selectedProject.titleEn}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                <ProjectArchitectureDiagram
                  type={selectedProject.visualType}
                  darkMode={darkMode}
                  lang={lang}
                />
              </div>

              <div className="space-y-2">
                <h4 className="font-mono-tech text-xs uppercase tracking-wider text-indigo-600 font-bold">
                  {t.projectModalOverview}
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {lang === 'id' ? selectedProject.descriptionId : selectedProject.descriptionEn}
                </p>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-mono-tech text-xs uppercase tracking-wider text-indigo-600 font-bold">
                  {t.projectModalFeatures}
                </h4>
                <ul className="space-y-2">
                  {(lang === 'id' ? selectedProject.featuresId : selectedProject.featuresEn).map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-indigo-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-mono-tech text-xs uppercase tracking-wider text-zinc-400">
                  {t.projectModalTech}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(lang === 'id' ? selectedProject.techId : selectedProject.techEn).map((techItem, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono-tech bg-zinc-100 dark:bg-zinc-900"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#09090B] text-white dark:bg-white dark:text-black"
                >
                  {t.projectModalClose}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 2: DETAIL SERTIFIKASI
      ===================================================================== */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
          <div
            className={`w-full max-w-lg rounded-2xl border-[1.5px] p-6 sm:p-8 space-y-6 ${
              darkMode ? 'bg-[#121215] border-zinc-700 text-white' : 'bg-white border-[#18181B] text-[#09090B]'
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="font-mono-tech text-xs font-semibold text-indigo-600">
                  [{selectedCert.year}] //{' '}
                  {lang === 'id' ? selectedCert.credentialTypeId : selectedCert.credentialTypeEn}
                </span>
                <h3 className="text-2xl font-extrabold tracking-tight mt-1">
                  {lang === 'id' ? selectedCert.titleId : selectedCert.titleEn}
                </h3>
                <p className="text-sm text-zinc-500 mt-0.5">
                  {selectedCert.issuer} • {lang === 'id' ? selectedCert.dateId : selectedCert.dateEn}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div
              className="w-full rounded-xl p-6 border border-zinc-200 text-[#09090B] space-y-4"
              style={{
                background:
                  'linear-gradient(135deg, rgba(238,242,255,1) 0%, rgba(255,255,255,1) 50%, rgba(224,231,255,0.9) 100%)'
              }}
            >
              <div className="flex items-center justify-between text-[10px] font-mono-tech text-indigo-700 font-bold">
                <span>{t.verifiedBadge}</span>
                <span>{lang === 'id' ? selectedCert.dateId : selectedCert.dateEn}</span>
              </div>
              <div className="py-2 text-center space-y-1">
                <p className="text-[10px] font-mono-tech uppercase tracking-widest text-zinc-400">
                  {t.awardedTo}
                </p>
                <p className="text-lg font-extrabold tracking-tight text-zinc-900">
                  {selectedCert.recipient}
                </p>
                <p className="text-xs font-bold text-indigo-700">
                  {lang === 'id' ? selectedCert.titleId : selectedCert.titleEn}
                </p>
              </div>
              <div className="pt-2 border-t border-indigo-100 flex items-center justify-between text-[11px] font-mono-tech text-zinc-600">
                <span>
                  {t.issuerLabel}: {selectedCert.issuer}
                </span>
                <span>{t.statusValid}</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {lang === 'id' ? selectedCert.descriptionId : selectedCert.descriptionEn}
            </p>
          </div>
        </div>
      )}

      {/* =====================================================================
          MODAL 3: DOWNLOAD / CETAK CV ATS-FRIENDLY (MASA PKL 1 BULAN & TANPA SIAPKERJA)
      ===================================================================== */}
      {cvModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-xs">
          <div
            className={`w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border-[1.5px] overflow-hidden ${
              darkMode ? 'bg-[#121215] border-zinc-700 text-white' : 'bg-white border-[#18181B] text-[#09090B]'
            }`}
          >
            <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg font-extrabold">
                  Curriculum Vitae — Frisqy Maulana, S.Kom.
                </h3>
                <p className="text-xs text-zinc-500">
                  {lang === 'id'
                    ? 'Pilih varian CV di bawah ini, lalu tekan tombol Cetak / Simpan PDF.'
                    : 'Select a CV variant below, then click Print / Save PDF.'}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-full text-xs font-bold bg-[#09090B] text-white dark:bg-white dark:text-black flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>{lang === 'id' ? 'Cetak / Simpan PDF' : 'Print / Save PDF'}</span>
                </button>
                <button
                  onClick={() => setCvModalOpen(false)}
                  className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="px-6 py-2.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex flex-wrap items-center gap-2">
              {[
                {
                  id: 'comprehensive',
                  label: lang === 'id' ? '1. CV Lengkap (Umum S.Kom.)' : '1. Comprehensive CV (General)'
                },
                {
                  id: 'atr-bpn',
                  label:
                    lang === 'id'
                      ? '2. CV Fokus Data & Pertanahan (ATR/BPN)'
                      : '2. Data & Land Administration Focus (ATR/BPN)'
                },
                {
                  id: 'it-support',
                  label:
                    lang === 'id'
                      ? '3. CV Fokus IT Support & Server Linux'
                      : '3. IT Support & Linux Server Focus'
                }
              ].map((v) => (
                <button
                  key={v.id}
                  onClick={() => setCvVariant(v.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                    cvVariant === v.id
                      ? 'bg-[#09090B] text-white dark:bg-white dark:text-black'
                      : 'text-zinc-600 dark:text-zinc-400'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>

            <div className="p-4 sm:p-8 overflow-y-auto bg-zinc-100 dark:bg-zinc-950">
              <div
                id="printable-cv-sheet"
                className="max-w-[210mm] mx-auto bg-white text-[#09090B] p-8 sm:p-10 rounded-xl shadow-xs space-y-5 text-[13px] leading-relaxed"
              >
                <div className="border-b-2 border-[#09090B] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <h1 className="text-2xl font-extrabold tracking-tight uppercase">
                      FRISQY MAULANA, S.Kom.
                    </h1>
                    <p className="text-xs font-bold text-indigo-700 mt-0.5">
                      {cvVariant === 'atr-bpn'
                        ? 'Pengolahan Data & Sistem Informasi | Administrasi Pertanahan | Kesiapan Survei Lapangan'
                        : cvVariant === 'it-support'
                        ? 'IT Support | System & Network Support | Linux & Server Infrastructure'
                        : 'Sarjana Komputer (S.Kom.) — IT Support, Pengolahan Data & Pengembangan Sistem'}
                    </p>
                  </div>
                  <div className="text-xs sm:text-right text-zinc-600 space-y-0.5">
                    <p>Jl. Natuna, Kota Kediri, Jawa Timur</p>
                    <p>WA: 0851-9008-3619 | Email: fmkiki11@gmail.com</p>
                    <p>GitHub: github.com/Frisqy31</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xs font-extrabold uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2">
                    PROFIL PROFESIONAL
                  </h2>
                  <p>
                    Sarjana Komputer (S.Kom.) lulusan S1 Teknik Informatika Universitas Nusantara PGRI Kediri dengan IPK
                    3,80/4,00. Memiliki pengalaman praktis di bidang pengelolaan perangkat keras komputer, instalasi sistem
                    operasi Windows & Debian Linux, konfigurasi jaringan lokal, pembangunan server mandiri, serta
                    pengalaman Praktik Kerja Lapangan (1 bulan) di Kantor Pertanahan ATR/BPN Kabupaten Kediri dalam
                    penginputan data berkas masyarakat menggunakan Microsoft Excel, penataan arsip dokumen, dan kegiatan
                    sosialisasi di lapangan.
                  </p>
                </div>

                <div>
                  <h2 className="text-xs font-extrabold uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2">
                    PENDIDIKAN
                  </h2>
                  <div className="flex justify-between font-bold">
                    <span>Universitas Nusantara PGRI Kediri — S1 Teknik Informatika (S.Kom.)</span>
                    <span>2022 – 2026</span>
                  </div>
                  <p className="text-xs text-zinc-600">
                    IPK: 3,80 / 4,00 | Tugas Akhir: Sistem Prediksi Risiko Penyakit Diabetes Sejak Dini (Random Forest & Streamlit)
                  </p>
                </div>

                <div>
                  <h2 className="text-xs font-extrabold uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2">
                    PENGALAMAN
                  </h2>
                  <div className="flex justify-between font-bold">
                    <span>Kementerian Agraria dan Tata Ruang / Badan Pertanahan Nasional (ATR/BPN) Kab. Kediri</span>
                    <span>Februari 2025 – Maret 2025 (1 Bulan)</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs mt-1">
                    <li>
                      Melakukan penginputan, pengolahan, serta rekapitulasi data berkas administrasi masyarakat secara
                      teliti menggunakan Microsoft Excel.
                    </li>
                    <li>
                      Mengelola penataan arsip dokumen pertanahan serta mendampingi tim dalam kegiatan sosialisasi
                      percepatan sertifikasi tanah wakaf ke berbagai kelurahan.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xs font-extrabold uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2">
                    PROYEK TEKNIS RELEVAN
                  </h2>
                  <ul className="space-y-1 text-xs">
                    <li>
                      <strong>Personal Server — Server POCO (Debian Linux 13, Python, Tailscale):</strong> Membangun
                      server pribadi pada Acer Aspire E1-410 untuk file server, media gallery, dan automated backup.
                    </li>
                    <li>
                      <strong>Toshiba Touch Hub (Debian Linux, Python GTK, Openbox):</strong> Mengubah laptop touchscreen
                      Toshiba Satellite S40Dt-A menjadi dashboard kontrol layar sentuh dan monitoring server.
                    </li>
                    <li>
                      <strong>Personal Finance Web Application (Next.js, Supabase, Vercel):</strong> Aplikasi web
                      pencatatan transaksi, pengelolaan anggaran, dan statistik keuangan pribadi.
                    </li>
                    <li>
                      <strong>Sistem Prediksi Risiko Penyakit Diabetes Sejak Dini (Python, Random Forest, Streamlit):</strong>{' '}
                      Sistem prediksi dini risiko diabetes berbasis machine learning.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xs font-extrabold uppercase tracking-wider border-b border-zinc-300 pb-1 mb-2">
                    SERTIFIKASI RESMI
                  </h2>
                  <ul className="list-disc list-inside space-y-0.5 text-xs">
                    <li>
                      <strong>Test of English Proficiency (Score: 457):</strong> Royal English (Mei 2026)
                    </li>
                    <li>
                      <strong>Applied Microsoft Office:</strong> Trust Training Partners (November 2025)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}