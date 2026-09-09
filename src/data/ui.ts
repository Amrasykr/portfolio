/**
 * Label antarmuka yang tidak ada di content.ts.
 * Semua bilingual, kecuali kode bahasa dan judul halaman yang ditetapkan PROMPT.md.
 */
import type { Lang, T } from "./content";

export const ui = {
  /** Bahasa awal sebelum ada pilihan tersimpan (permintaan pemilik: Inggris; PROMPT.md asal: "id"). */
  defaultLang: "en" as Lang,
  pageTitle: "Ammar Asysyakur — Full Stack Developer",
  /** Deskripsi meta/OG pendek (≤120 karakter) — pratinjau WhatsApp/LinkedIn memotong yang panjang. */
  metaDescription: {
    id: "Full Stack Developer — Laravel, Next.js, NestJS. Merilis HRIS untuk ±1.000 pengguna, aplikasi internal, dan produk klien.",
    en: "Full Stack Developer — Laravel, Next.js, NestJS. Shipped an HRIS for ~1,000 users, internal apps, and client products.",
  } as T,
  langCode: { id: "ID", en: "EN" } as const,

  workWithMe: { id: "Kerja sama dengan saya", en: "Work with me" } as T,
  /** Sapaan judul hero; nama & peran dari content.ts. */
  greeting: { id: "Halo, saya", en: "Say hi from" } as T,
  /**
   * Judul menu — pil di luar kartu, satu per section; "home" = panel awal.
   * Menimpa label section di content.ts atas permintaan pemilik (mis. Academic, Certifications).
   */
  menuTitles: {
    home: { id: "Perkenalan", en: "Introduce" },
    pendidikan: { id: "Akademik", en: "Academic" },
    pengalaman: { id: "Pengalaman", en: "Experience" },
    proyek: { id: "Proyek", en: "Projects" },
    keterampilan: { id: "Keterampilan", en: "Skills" },
    pelatihan: { id: "Sertifikasi", en: "Certifications" },
  } as Record<string, T>,
  /**
   * Ubin statistik di panel awal. Angkanya mencerminkan baris "Ringkasan" item Tools di
   * content.ts (satu tahun lebih, empat proyek dirilis); labelnya
   * versi pendek untuk tampilan angka besar.
   */
  stats: [
    { value: 1, suffix: "+", label: { id: "Tahun pengalaman", en: "Years of experience" } as T },
    { value: 4, suffix: "", label: { id: "Proyek dirilis", en: "Projects shipped" } as T },
  ],
  /** Baris hak cipta di bawah kolom kiri; Inggris saja atas permintaan pemilik. */
  rights: "All rights reserved.",

  /**
   * URL media sosial yang belum ada di content.ts (content.ts tidak boleh diubah).
   * Kosong = ikon tampil nonaktif sampai diisi. GitHub diambil dari profile.links.github;
   * LinkedIn memakai profile.links.linkedin bila sudah berupa URL, kalau tidak dari sini.
   */
  /**
   * SEMENTARA — contoh gambar dari internet (Lorem Picsum, foto stok acak) atas permintaan
   * pemilik, dipetakan dari path content.ts. Hapus entrinya begitu berkas asli ada di public/img/.
   */
  sampleImages: {} as Record<string, string>,

  /** Status per item.id dari pemilik: menimpa content.ts; null = sembunyikan status. */
  liveOverrides: {
    bangkit: { id: "Lulusan Distinction", en: "Distinction Graduation" },
    "sentiment-checker": null, // "Live demo" tidak ditampilkan
  } as Record<string, T | null>,

  /** Item yang disematkan paling depan per section (item.id), sebelum aturan berstatus-dulu. */
  pinnedFirst: {
    proyek: ["sobat-sehat"],
  } as Record<string, string[]>,

  /**
   * Spesialisasi di bawah kisi Skills (meniru "My Specializations" di referensi). Teks baru,
   * berpijak pada fakta content.ts: Development dari ringkasan profil, Teaching dari asisten dosen
   * dan Jarvis Academy; Design ditulis netral atas permintaan pemilik.
   */
  services: [
    {
      title: { id: "Design", en: "Design" } as T,
      desc: {
        id: "Merancang antarmuka dan alur produk sebelum dikodekan, supaya yang dibangun memang yang dibutuhkan.",
        en: "Designing interfaces and product flows before they are coded, so what gets built is what is needed.",
      } as T,
    },
    {
      title: { id: "Development", en: "Development" } as T,
      desc: {
        id: "Membangun produk secara utuh: basis data, API, antarmuka web dan mobile, sampai rilis di server.",
        en: "Building products end to end: database, API, web and mobile interfaces, through release on a server.",
      } as T,
    },
    {
      title: { id: "Teaching", en: "Teaching" } as T,
      desc: {
        id: "Mengajar Backend Development di kelas praktikum kampus dan dua angkatan Jarvis Academy.",
        en: "Teaching Backend Development in campus lab classes and two Jarvis Academy cohorts.",
      } as T,
    },
  ],

  viewDetails: { id: "Lihat detail", en: "View details" } as T,
  close: { id: "Tutup", en: "Close" } as T,

  /** Formulir "Work with me": membuka aplikasi email dengan isi terisi (mailto:), tanpa backend. */
  contact: {
    name: { id: "Nama lengkap", en: "Full name" } as T,
    email: { id: "Email", en: "Email" } as T,
    message: { id: "Pesan", en: "Message" } as T,
    send: { id: "Kirim lewat email", en: "Send via email" } as T,
    hint: {
      id: "Membuka aplikasi email Anda dengan pesan yang sudah terisi.",
      en: "Opens your email app with the message prefilled.",
    } as T,
    subject: { id: "Ajakan kerja sama dari", en: "Work inquiry from" } as T,
  },

  /** CV per bahasa; yang tidak terdaftar memakai profile.links.cv (versi Indonesia). */
  cvByLang: {
    en: "/cv/CV_Ammar_Asysyakur_EN.pdf",
  } as Partial<Record<Lang, string>>,

  socialLinks: {
    linkedin: "https://www.linkedin.com/in/ammar-asysyakur-876065252/",
    instagram: "https://www.instagram.com/amrasykr/",
  },

  a11y: {
    social: { id: "Media sosial", en: "Social media" } as T,
    linkNotSet: { id: "tautan belum diisi", en: "link not set yet" } as T,
    sectionNav: { id: "Navigasi bagian", en: "Section navigation" } as T,
    switchLang: { id: "Ganti bahasa", en: "Switch language" } as T,
    langName: {
      id: { id: "Bahasa Indonesia", en: "Indonesian" } as T,
      en: { id: "Bahasa Inggris", en: "English" } as T,
    },
    newTab: { id: "buka di tab baru", en: "opens in a new tab" } as T,
    missingImage: { id: "Gambar belum tersedia", en: "Image not available" } as T,
    gallery: { id: "Galeri", en: "Gallery" } as T,
    skills: { id: "Keterampilan", en: "Skills" } as T,
    tags: { id: "Tagar", en: "Tags" } as T,
  },
};
