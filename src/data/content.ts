/**
 * SUMBER KONTEN TUNGGAL — JANGAN DIUBAH ISINYA.
 * Semua teks yang tampil di portofolio berasal dari berkas ini.
 * Path gambar relatif terhadap /public/img/.
 */

export type Lang = "id" | "en";
export type T = Record<Lang, string>;
export type TL = Record<Lang, string[]>;

export type Row = { k: T; v: T };
export type Media = { src: string; alt: T };
export type Pill = { label: string; note: T };

export type Item = {
  id: string;
  logo: string;
  title: string;
  subtitle: T;
  place: T;
  period: T;
  live?: T;
  desc: T;
  bullets?: TL;
  pills?: Pill[];
  tags?: string[];
  gallery?: Media[];
  side: { title: T; caption: T; avatars: string[]; rows: Row[] };
};

export type Section = {
  key: string;
  group: "profil" | "karya";
  icon: string;
  label: T;
  items: Item[];
};

export const profile = {
  name: "Ammar Asysyakur",
  avatar: "profil/ammar.jpg",
  role: { id: "Full Stack Developer", en: "Full Stack Developer" },
  location: { id: "Tangerang Selatan, Banten", en: "Tangerang Selatan, Indonesia" },
  summary: {
    id: "Lebih dari satu tahun membangun produk secara utuh, dari perancangan basis data sampai rilis. Pernah menangani sistem HRIS berskala sekitar 1.000 pengguna, aplikasi internal perusahaan, dan produk untuk klien eksternal, salah satunya terdaftar sebagai Hak Cipta Program Komputer.",
    en: "Over a year of building products end to end, from database design through release. Work includes an HRIS serving around 1,000 users, internal company applications, and products for external clients, one of which is registered as a software copyright in Indonesia.",
  },
  cta: { id: "Hubungi saya", en: "Get in touch" },
  downloadCv: { id: "Unduh CV", en: "Download CV" },
  highlights: [
    { src: "sorotan/aqua-access.jpg", alt: { id: "Aqua Access", en: "Aqua Access" } },
    { src: "sorotan/sobat-sehat.jpg", alt: { id: "Sobat Sehat", en: "Sobat Sehat" } },
    { src: "sorotan/aiskin.jpg", alt: { id: "AISkin", en: "AISkin" } },
    { src: "sorotan/sentiment-checker.jpg", alt: { id: "Sentiment Checker", en: "Sentiment Checker" } },
  ],
  links: {
    email: "ammarasysyakur723@gmail.com",
    phone: "081289777970",
    github: "https://github.com/Amrasykr",
    linkedin: "GANTI_DENGAN_CUSTOM_URL",
    cv: "/cv/CV_Ammar_Asysyakur.pdf",
  },
};

export const nav: { key: string; label: T }[] = [
  { key: "beranda", label: { id: "Beranda", en: "Home" } },
  { key: "proyek", label: { id: "Proyek", en: "Work" } },
  { key: "kontak", label: { id: "Kontak", en: "Contact" } },
  { key: "github", label: { id: "GitHub", en: "GitHub" } },
];

export const groups: { key: "profil" | "karya"; label: T }[] = [
  { key: "profil", label: { id: "Profil", en: "Profile" } },
  { key: "karya", label: { id: "Karya", en: "Work" } },
];

export const sections: Section[] = [
  /* ─────────────────────────── PENDIDIKAN ─────────────────────────── */
  {
    key: "pendidikan",
    group: "profil",
    icon: "ikon/pendidikan.png",
    label: { id: "Pendidikan", en: "Education" },
    items: [
      {
        id: "sttnf",
        logo: "logo/sttnf.png",
        title: "STT Terpadu Nurul Fikri",
        subtitle: { id: "S1 Teknik Informatika", en: "BSc Informatics Engineering" },
        place: { id: "Depok, Jawa Barat", en: "Depok, West Java" },
        period: { id: "September 2022 – 2026", en: "September 2022 – 2026" },
        live: { id: "Lulus 2026", en: "Graduated 2026" },
        desc: {
          id: "Program sarjana dengan fokus rekayasa perangkat lunak. Sebagian besar karya di portofolio ini lahir dari mata kuliah dan program kampus, bukan hanya dari tempat kerja.",
          en: "An undergraduate program focused on software engineering. Much of the work in this portfolio started as coursework and campus programs rather than employment.",
        },
        bullets: {
          id: [
            "Mata kuliah yang menghasilkan karya nyata: Pemrograman IoT, Dasar AI, dan Backend Development.",
            "Syarat cum laude di kampus mewajibkan karya ilmiah atau hak cipta, dipenuhi lewat Sobat Sehat.",
            "Menjadi asisten dosen Backend Development pada semester ganjil 2024.",
          ],
          en: [
            "Courses that produced shipped work: IoT Programming, Introduction to AI, and Backend Development.",
            "Cum laude at this campus requires a paper or a registered copyright, met through Sobat Sehat.",
            "Served as Backend Development teaching assistant in the 2024 odd semester.",
          ],
        },
        gallery: [
          { src: "pendidikan/kampus.jpg", alt: { id: "Kampus STT NF", en: "STT NF campus" } },
          { src: "pendidikan/wisuda.jpg", alt: { id: "Wisuda", en: "Graduation" } },
          { src: "pendidikan/transkrip.jpg", alt: { id: "Transkrip nilai", en: "Academic transcript" } },
        ],
        side: {
          title: { id: "Capaian akademik", en: "Academic record" },
          caption: { id: "Terverifikasi transkrip", en: "Verified by transcript" },
          avatars: ["logo/sttnf.png"],
          rows: [
            {
              k: { id: "IPK 3,84 dari 4,00", en: "GPA 3.84 of 4.00" },
              v: { id: "Predikat cum laude", en: "Cum laude" },
            },
            {
              k: { id: "Hak Cipta Program Komputer", en: "Registered software copyright" },
              v: { id: "Terbit di DJKI lewat Sobat Sehat", en: "Issued by DJKI for Sobat Sehat" },
            },
          ],
        },
      },
    ],
  },

  /* ────────────────────────── PENGALAMAN KERJA ────────────────────────── */
  {
    key: "pengalaman",
    group: "profil",
    icon: "ikon/pengalaman.png",
    label: { id: "Pengalaman Kerja", en: "Experience" },
    items: [
      {
        id: "jis",
        logo: "logo/jis.png",
        title: "PT Jarvis Integrasi Solusi",
        subtitle: { id: "Full Stack Developer — Remote", en: "Full Stack Developer — Remote" },
        place: { id: "Jakarta Selatan — Remote", en: "South Jakarta — Remote" },
        period: { id: "Maret 2025 – sekarang", en: "March 2025 – present" },
        live: { id: "Masih berjalan", en: "Current role" },
        desc: {
          id: "Membangun dan merawat perangkat lunak internal perusahaan sekaligus mengerjakan produk untuk klien eksternal, dari perancangan basis data sampai rilis ke pengguna.",
          en: "Building and maintaining the company's internal software while also delivering products for external clients, from database design through release.",
        },
        bullets: {
          id: [
            "Membangun dan memelihara sistem HRIS serta aplikasi internal berbasis ERP yang dipakai puluhan karyawan setiap hari.",
            "Mengerjakan produk klien dan proyek riset, dari layanan backend sampai antarmuka web dan mobile.",
            "Berhasil merilis sistem HRIS untuk instansi pemerintah dengan sekitar 1.000 pengguna sebagai bagian dari tim inti tiga orang.",
            "Mengajar kelas Backend Development di Jarvis Academy selama dua angkatan.",
          ],
          en: [
            "Built and maintained an HRIS and internal ERP style applications used daily by dozens of staff.",
            "Delivered client products and research projects, covering backend services through web and mobile interfaces.",
            "Shipped an HRIS for a government client serving around 1,000 users as part of a three person core team.",
            "Taught Backend Development at Jarvis Academy across two cohorts.",
          ],
        },
        tags: ["Laravel", "Next.js", "NestJS", "React Native", "PostgreSQL", "Docker"],
        gallery: [
          { src: "pengalaman/jis-hris.jpg", alt: { id: "Tampilan HRIS dengan data contoh", en: "HRIS interface with sample data" } },
          { src: "pengalaman/jis-arsitektur.jpg", alt: { id: "Diagram arsitektur", en: "Architecture diagram" } },
        ],
        side: {
          title: { id: "Tim dan skala", en: "Team and scale" },
          caption: { id: "Konteks pengerjaan", en: "Delivery context" },
          avatars: ["logo/jis.png"],
          rows: [
            { k: { id: "Tim inti 3 orang", en: "Three person core team" }, v: { id: "1 PM dan 2 developer", en: "One PM and two developers" } },
            { k: { id: "Kolaborasi tim jaringan", en: "Network team collaboration" }, v: { id: "Untuk proyek riset hotspot", en: "For the hotspot research project" } },
            { k: { id: "Sekitar 1.000 pengguna", en: "Around 1,000 users" }, v: { id: "Pada sistem HRIS klien", en: "On the client HRIS" } },
          ],
        },
      },
      {
        id: "asdos",
        logo: "logo/sttnf.png",
        title: "STT Terpadu Nurul Fikri",
        subtitle: { id: "Asisten Dosen Backend Development", en: "Backend Development Teaching Assistant" },
        place: { id: "Depok, Jawa Barat", en: "Depok, West Java" },
        period: { id: "September 2024 – Januari 2025", en: "September 2024 – January 2025" },
        desc: {
          id: "Mendampingi kelas praktikum Backend Development dan menyusun bahan ajar berbasis praktik langsung.",
          en: "Ran Backend Development lab sessions and wrote hands on teaching material for the course.",
        },
        bullets: {
          id: [
            "Memfasilitasi sesi praktikum dan mendampingi mahasiswa mengerjakan proyek kuliah.",
            "Menyusun modul praktikum terstruktur sebagai panduan pembelajaran.",
            "Berhasil mengantarkan mahasiswa membangun REST API sederhana sampai akhir semester.",
          ],
          en: [
            "Facilitated lab sessions and coached students through their course projects.",
            "Wrote a structured lab module used as the course learning guide.",
            "Brought students to a working REST API of their own by the end of the semester.",
          ],
        },
        gallery: [
          { src: "pengalaman/asdos-praktikum.jpg", alt: { id: "Sesi praktikum", en: "Lab session" } },
          { src: "pengalaman/asdos-modul.jpg", alt: { id: "Modul praktikum", en: "Lab module" } },
        ],
        side: {
          title: { id: "Pembimbing", en: "Supervision" },
          caption: { id: "Dosen pengampu mata kuliah", en: "Course lecturer" },
          avatars: ["logo/sttnf.png"],
          rows: [
            { k: { id: "Dosen pengampu", en: "Course lecturer" }, v: { id: "Backend Development", en: "Backend Development" } },
            { k: { id: "Satu kelas per semester", en: "One class per semester" }, v: { id: "Pendampingan mingguan", en: "Weekly coaching" } },
          ],
        },
      },
      {
        id: "fixin",
        logo: "logo/fixin.png",
        title: "Fixin Solutions",
        subtitle: { id: "Web Developer", en: "Web Developer" },
        place: { id: "Depok, Jawa Barat", en: "Depok, West Java" },
        period: { id: "Desember 2023 – Juli 2024", en: "December 2023 – July 2024" },
        desc: {
          id: "Membangun sistem operasional harian untuk layanan servis laptop, dari pemesanan pelanggan sampai panel admin.",
          en: "Built the day to day operating system for a laptop repair service, from customer booking through the admin panel.",
        },
        bullets: {
          id: [
            "Membangun sistem admin terintegrasi untuk manajemen pesanan, penjadwalan layanan, dan inventaris.",
            "Mengembangkan situs pemesanan layanan servis serta menangani pemeliharaan dan perbaikan bug.",
            "Berhasil menyatukan pencatatan pesanan, jadwal, dan stok yang terpisah ke dalam satu sistem harian tim.",
          ],
          en: [
            "Built an integrated admin system for order management, service scheduling, and inventory.",
            "Developed the service booking site and handled ongoing maintenance and bug fixes.",
            "Merged three separate records of orders, schedules, and stock into one daily system for the team.",
          ],
        },
        gallery: [
          { src: "pengalaman/fixin-admin.jpg", alt: { id: "Panel admin", en: "Admin panel" } },
          { src: "pengalaman/fixin-pemesanan.jpg", alt: { id: "Halaman pemesanan", en: "Booking page" } },
        ],
        side: {
          title: { id: "Konteks", en: "Context" },
          caption: { id: "Pengguna sistem", en: "System users" },
          avatars: ["logo/fixin.png"],
          rows: [
            { k: { id: "Tim operasional harian", en: "Daily operations team" }, v: { id: "Pemakai utama sistem admin", en: "Primary users of the admin system" } },
          ],
        },
      },
    ],
  },

  /* ───────────────────────────── PROYEK ───────────────────────────── */
  {
    key: "proyek",
    group: "karya",
    icon: "ikon/proyek.png",
    label: { id: "Proyek", en: "Projects" },
    items: [
      {
        id: "aqua-access",
        logo: "logo/aqua-access.png",
        title: "Aqua Access",
        subtitle: { id: "Proyek Mata Kuliah Pemrograman IoT", en: "IoT Programming course project" },
        place: { id: "Depok, Jawa Barat", en: "Depok, West Java" },
        period: { id: "Desember 2025 – Januari 2026", en: "December 2025 – January 2026" },
        live: { id: "Proyek terbaik", en: "Best project award" },
        desc: {
          id: "Sistem akses air minum berbasis kartu RFID, dikerjakan utuh dari perangkat keras sampai aplikasi mobile pengendalinya.",
          en: "An RFID based drinking water access system, built end to end from the hardware to the mobile app that controls it.",
        },
        bullets: {
          id: [
            "Membangun aplikasi mobile, layanan backend, dan firmware perangkat.",
            "Terpilih sebagai proyek terbaik pada mata kuliah tersebut.",
          ],
          en: [
            "Built the mobile app, the backend service, and the device firmware.",
            "Selected as the best project in the course.",
          ],
        },
        tags: ["React Native", "Express", "Arduino", "Firebase"],
        gallery: [
          { src: "proyek/aqua-access-video.jpg", alt: { id: "Video presentasi", en: "Presentation video" } },
          { src: "proyek/aqua-access-perangkat.jpg", alt: { id: "Perangkat RFID", en: "RFID device" } },
          { src: "proyek/aqua-access-aplikasi.jpg", alt: { id: "Tampilan aplikasi", en: "App interface" } },
        ],
        side: {
          title: { id: "Kontributor", en: "Contributors" },
          caption: { id: "Tim mata kuliah dan pembimbing", en: "Course team and supervisor" },
          avatars: ["logo/sttnf.png"],
          rows: [
            { k: { id: "Dosen pengampu", en: "Course lecturer" }, v: { id: "Pemrograman IoT", en: "IoT Programming" } },
            { k: { id: "Tim 4 orang", en: "Team of four" }, v: { id: "Peran saya: aplikasi dan backend", en: "My role: app and backend" } },
          ],
        },
      },
      {
        id: "sobat-sehat",
        logo: "logo/sobat-sehat.png",
        title: "Sobat Sehat",
        subtitle: { id: "Magang Riset STT NF bersama KORMI Depok", en: "STT NF research internship with KORMI Depok" },
        place: { id: "Depok, Jawa Barat", en: "Depok, West Java" },
        period: { id: "September 2024 – September 2025", en: "September 2024 – September 2025" },
        live: { id: "Terdaftar hak cipta", en: "Copyright registered" },
        desc: {
          id: "Platform web informasi dan kegiatan olahraga masyarakat Kota Depok, dipakai publik oleh komunitas olahraga setempat.",
          en: "A public web platform for community sports information and events in Depok, used by local sports communities.",
        },
        bullets: {
          id: [
            "Membangun platform web informasi dan kegiatan olahraga untuk KORMI Depok.",
            "Terbit sebagai Hak Cipta Program Komputer di DJKI.",
          ],
          en: [
            "Built the information and events platform for KORMI Depok.",
            "Registered as a software copyright with the Indonesian intellectual property office.",
          ],
        },
        tags: ["Laravel", "MySQL"],
        gallery: [
          { src: "proyek/sobat-sehat-beranda.jpg", alt: { id: "Beranda situs", en: "Site home page" } },
          { src: "proyek/sobat-sehat-kegiatan.jpg", alt: { id: "Halaman kegiatan", en: "Events page" } },
          { src: "proyek/sobat-sehat-hki.jpg", alt: { id: "Sertifikat hak cipta", en: "Copyright certificate" } },
        ],
        side: {
          title: { id: "Kontributor", en: "Contributors" },
          caption: { id: "Mitra dan pembimbing", en: "Partner and supervisor" },
          avatars: ["logo/kormi.png", "logo/sttnf.png"],
          rows: [
            { k: { id: "KORMI Depok", en: "KORMI Depok" }, v: { id: "Mitra dan pengguna akhir", en: "Partner and end user" } },
            { k: { id: "Dosen pembimbing", en: "Faculty supervisor" }, v: { id: "Program magang riset", en: "Research internship program" } },
            { k: { id: "Seminar 15–30 peserta", en: "Seminar for 15 to 30 people" }, v: { id: "Sosialisasi ke komunitas", en: "Rollout to the community" } },
          ],
        },
      },
      {
        id: "aiskin",
        logo: "logo/aiskin.png",
        title: "AISkin",
        subtitle: { id: "Proyek Akhir Bangkit Academy", en: "Bangkit Academy capstone project" },
        place: { id: "Daring — Bangkit Academy", en: "Remote — Bangkit Academy" },
        period: { id: "November 2024 – Januari 2025", en: "November 2024 – January 2025" },
        desc: {
          id: "Aplikasi Android pendeteksi penyakit kulit berbasis machine learning. Peran saya di layanan API dan integrasinya ke aplikasi.",
          en: "An Android app that detects skin conditions using machine learning. My role covered the API service and its integration into the app.",
        },
        bullets: {
          id: [
            "Membangun layanan API dan menyambungkannya dengan model machine learning.",
            "Menjadi proyek akhir kelulusan dengan nilai akhir 91,07.",
          ],
          en: [
            "Built the API service and connected it to the machine learning model.",
            "Served as the graduation capstone, scoring 91.07.",
          ],
        },
        tags: ["Android", "Machine Learning", "REST API"],
        gallery: [
          { src: "proyek/aiskin-aplikasi.jpg", alt: { id: "Tampilan aplikasi", en: "App interface" } },
          { src: "proyek/aiskin-api.jpg", alt: { id: "Alur API", en: "API flow" } },
        ],
        side: {
          title: { id: "Kontributor", en: "Contributors" },
          caption: { id: "Tim capstone dan mentor", en: "Capstone team and mentor" },
          avatars: ["logo/bangkit.png"],
          rows: [
            { k: { id: "Tim capstone", en: "Capstone team" }, v: { id: "Peran saya: backend dan API", en: "My role: backend and API" } },
            { k: { id: "Mentor industri", en: "Industry mentor" }, v: { id: "Pendampingan Bangkit", en: "Bangkit mentoring" } },
            { k: { id: "Nilai akhir 91,07", en: "Final score 91.07" }, v: { id: "Kelulusan capstone", en: "Capstone completion" } },
          ],
        },
      },
      {
        id: "sentiment-checker",
        logo: "logo/sentiment-checker.png",
        title: "Sentiment Checker",
        subtitle: { id: "Proyek Mata Kuliah Dasar AI", en: "Introduction to AI course project" },
        place: { id: "Depok, Jawa Barat", en: "Depok, West Java" },
        period: { id: "Juni 2024", en: "June 2024" },
        live: { id: "Demo masih hidup", en: "Live demo" },
        desc: {
          id: "Aplikasi web analisis sentimen teks, dikerjakan dari layanan backend sampai antarmuka pengguna. Masih bisa diakses publik.",
          en: "A web app for text sentiment analysis, built from the backend service through the user interface. Still publicly accessible.",
        },
        bullets: {
          id: [
            "Membangun layanan analisis sentimen dan antarmukanya.",
            "Sudah dirilis dan dapat diakses publik.",
          ],
          en: [
            "Built the sentiment analysis service and its interface.",
            "Released and publicly accessible.",
          ],
        },
        tags: ["JavaScript", "Vercel"],
        gallery: [
          { src: "proyek/sentiment-aplikasi.jpg", alt: { id: "Tampilan aplikasi", en: "App interface" } },
          { src: "proyek/sentiment-hasil.jpg", alt: { id: "Contoh hasil analisis", en: "Sample analysis output" } },
        ],
        side: {
          title: { id: "Kontributor", en: "Contributors" },
          caption: { id: "Pembimbing mata kuliah", en: "Course supervisor" },
          avatars: ["logo/sttnf.png"],
          rows: [{ k: { id: "Dosen pengampu", en: "Course lecturer" }, v: { id: "Dasar AI", en: "Introduction to AI" } }],
        },
      },
    ],
  },

  /* ─────────────────────────── KETERAMPILAN ─────────────────────────── */
  {
    key: "keterampilan",
    group: "karya",
    icon: "ikon/keterampilan.png",
    label: { id: "Keterampilan", en: "Skills" },
    items: [
      {
        id: "bahasa",
        logo: "logo/kode.png",
        title: "Bahasa Pemrograman",
        subtitle: { id: "Dipakai harian di pekerjaan", en: "Used daily at work" },
        place: { id: "—", en: "—" },
        period: { id: "Sejak 2023", en: "Since 2023" },
        desc: {
          id: "Tiga bahasa yang benar benar saya pakai di produk yang sudah rilis, bukan sekadar pernah dicoba.",
          en: "Three languages I actually use in shipped products, not ones I have merely tried.",
        },
        pills: [
          { label: "PHP", note: { id: "tulang punggung aplikasi internal", en: "backbone of the internal applications" } },
          { label: "JavaScript", note: { id: "backend dan antarmuka", en: "backend and interfaces" } },
          { label: "TypeScript", note: { id: "proyek NestJS dan Next.js", en: "NestJS and Next.js projects" } },
        ],
        side: {
          title: { id: "Dipakai di", en: "Used in" },
          caption: { id: "Lompat ke proyek terkait", en: "Jump to related work" },
          avatars: ["logo/kode.png"],
          rows: [
            { k: { id: "Sistem HRIS dan ERP", en: "HRIS and ERP systems" }, v: { id: "PT Jarvis Integrasi Solusi", en: "PT Jarvis Integrasi Solusi" } },
            { k: { id: "Sobat Sehat", en: "Sobat Sehat" }, v: { id: "Platform KORMI Depok", en: "KORMI Depok platform" } },
          ],
        },
      },
      {
        id: "framework",
        logo: "logo/framework.png",
        title: "Framework",
        subtitle: { id: "Web dan mobile", en: "Web and mobile" },
        place: { id: "—", en: "—" },
        period: { id: "Sejak 2023", en: "Since 2023" },
        desc: {
          id: "Kerangka kerja yang saya pakai menyesuaikan kebutuhan produk, bukan preferensi pribadi.",
          en: "Frameworks chosen to fit what the product needs rather than personal preference.",
        },
        pills: [
          { label: "Laravel", note: { id: "aplikasi internal dan Sobat Sehat", en: "internal apps and Sobat Sehat" } },
          { label: "NestJS", note: { id: "layanan backend terstruktur", en: "structured backend services" } },
          { label: "Express.js", note: { id: "layanan ringan dan IoT", en: "lightweight and IoT services" } },
          { label: "React.js", note: { id: "antarmuka web", en: "web interfaces" } },
          { label: "Next.js", note: { id: "antarmuka produk klien", en: "client product interfaces" } },
          { label: "React Native", note: { id: "Aqua Access, lalu versi PWA", en: "Aqua Access, later a PWA version" } },
        ],
        side: {
          title: { id: "Dipakai di", en: "Used in" },
          caption: { id: "Lompat ke proyek terkait", en: "Jump to related work" },
          avatars: ["logo/framework.png"],
          rows: [
            { k: { id: "Aqua Access", en: "Aqua Access" }, v: { id: "React Native dan Express", en: "React Native and Express" } },
            { k: { id: "Produk klien", en: "Client products" }, v: { id: "Next.js dan NestJS", en: "Next.js and NestJS" } },
          ],
        },
      },
      {
        id: "basis-data",
        logo: "logo/basis-data.png",
        title: "Basis Data",
        subtitle: { id: "Relasional dan layanan terkelola", en: "Relational and managed services" },
        place: { id: "—", en: "—" },
        period: { id: "Sejak 2023", en: "Since 2023" },
        desc: {
          id: "Perancangan skema sampai kueri untuk sistem yang dipakai harian.",
          en: "Schema design through queries for systems in daily use.",
        },
        pills: [
          { label: "MySQL", note: { id: "aplikasi lama dan Sobat Sehat", en: "legacy apps and Sobat Sehat" } },
          { label: "PostgreSQL", note: { id: "sistem internal baru", en: "newer internal systems" } },
          { label: "Firestore", note: { id: "AISkin", en: "AISkin" } },
          { label: "Supabase", note: { id: "prototipe cepat", en: "rapid prototypes" } },
        ],
        side: {
          title: { id: "Dipakai di", en: "Used in" },
          caption: { id: "Lompat ke proyek terkait", en: "Jump to related work" },
          avatars: ["logo/basis-data.png"],
          rows: [
            { k: { id: "Sistem HRIS", en: "HRIS system" }, v: { id: "PostgreSQL", en: "PostgreSQL" } },
            { k: { id: "AISkin", en: "AISkin" }, v: { id: "Firestore", en: "Firestore" } },
          ],
        },
      },
      {
        id: "tools",
        logo: "logo/tools.png",
        title: "Tools dan Infrastruktur",
        subtitle: { id: "Pengembangan dan penyebaran", en: "Development and deployment" },
        place: { id: "—", en: "—" },
        period: { id: "Sejak 2023", en: "Since 2023" },
        desc: {
          id: "Perkakas harian dan hal hal yang saya urus sendiri sampai aplikasi berjalan di server.",
          en: "Daily tooling and the parts I handle myself to get an application running on a server.",
        },
        pills: [
          { label: "Git dan GitHub", note: { id: "alur kerja tim", en: "team workflow" } },
          { label: "Docker", note: { id: "penyebaran di VPS", en: "deployment on VPS" } },
          { label: "Postman", note: { id: "pengujian API", en: "API testing" } },
          { label: "Linux, VM, VPS", note: { id: "pengelolaan server", en: "server management" } },
          { label: "Notion", note: { id: "dokumentasi kerja", en: "work documentation" } },
        ],
        side: {
          title: { id: "Ringkasan", en: "At a glance" },
          caption: { id: "Angka singkat", en: "Quick numbers" },
          avatars: ["logo/tools.png"],
          rows: [
            { k: { id: "Satu tahun lebih", en: "Over one year" }, v: { id: "Pengalaman profesional", en: "Professional experience" } },
            { k: { id: "Empat proyek dirilis", en: "Four projects shipped" }, v: { id: "Dapat diakses publik", en: "Publicly accessible" } },
            { k: { id: "14 sertifikat", en: "14 certificates" }, v: { id: "Dicoding Indonesia", en: "Dicoding Indonesia" } },
          ],
        },
      },
    ],
  },

  /* ──────────────────── PELATIHAN DAN SERTIFIKASI ──────────────────── */
  {
    key: "pelatihan",
    group: "karya",
    icon: "ikon/pelatihan.png",
    label: { id: "Pelatihan dan Sertifikasi", en: "Training and Certification" },
    items: [
      {
        id: "bangkit",
        logo: "logo/bangkit.png",
        title: "Bangkit Academy",
        subtitle: { id: "Jalur Android Development", en: "Android Development track" },
        place: { id: "Daring", en: "Remote" },
        period: { id: "September 2024 – Januari 2025", en: "September 2024 – January 2025" },
        desc: {
          id: "Program intensif bersama mentor industri, ditutup dengan proyek capstone AISkin.",
          en: "An intensive program with industry mentors, closing with the AISkin capstone project.",
        },
        bullets: {
          id: ["Menempuh jalur Android Development selama satu angkatan penuh.", "Lulus dengan nilai akhir 91,07."],
          en: ["Completed the full Android Development track for one cohort.", "Graduated with a final score of 91.07."],
        },
        gallery: [
          { src: "pelatihan/bangkit-sertifikat.jpg", alt: { id: "Sertifikat kelulusan", en: "Completion certificate" } },
          { src: "pelatihan/bangkit-mentoring.jpg", alt: { id: "Sesi mentoring", en: "Mentoring session" } },
        ],
        side: {
          title: { id: "Penyelenggara", en: "Provider" },
          caption: { id: "Bangkit Academy", en: "Bangkit Academy" },
          avatars: ["logo/bangkit.png"],
          rows: [
            { k: { id: "Nilai akhir 91,07", en: "Final score 91.07" }, v: { id: "Capstone AISkin", en: "AISkin capstone" } },
            { k: { id: "Berlaku sampai 2028", en: "Valid until 2028" }, v: { id: "Tautan verifikasi tersedia", en: "Verification link available" } },
          ],
        },
      },
      {
        id: "dicoding",
        logo: "logo/dicoding.png",
        title: "Dicoding Indonesia",
        subtitle: { id: "Sertifikat kompetensi bidang IT", en: "IT competency certificates" },
        place: { id: "Daring", en: "Remote" },
        period: { id: "Mei 2024 – Maret 2025", en: "May 2024 – March 2025" },
        desc: {
          id: "Empat belas kelas bersertifikat di bidang backend, pemrograman, Android, dan data.",
          en: "Fourteen certified courses across backend, programming, Android, and data.",
        },
        bullets: {
          id: ["Menyelesaikan 14 kelas bersertifikat sepanjang Mei 2024 sampai Maret 2025."],
          en: ["Completed 14 certified courses between May 2024 and March 2025."],
        },
        gallery: [
          { src: "pelatihan/dicoding-backend.jpg", alt: { id: "Sertifikat backend", en: "Backend certificate" } },
          { src: "pelatihan/dicoding-android.jpg", alt: { id: "Sertifikat Android", en: "Android certificate" } },
          { src: "pelatihan/dicoding-data.jpg", alt: { id: "Sertifikat data", en: "Data certificate" } },
        ],
        side: {
          title: { id: "Penyelenggara", en: "Provider" },
          caption: { id: "Dicoding Indonesia", en: "Dicoding Indonesia" },
          avatars: ["logo/dicoding.png"],
          rows: [{ k: { id: "14 sertifikat", en: "14 certificates" }, v: { id: "Berlaku sampai 2028", en: "Valid until 2028" } }],
        },
      },
      {
        id: "jarvis-academy",
        logo: "logo/jarvis-academy.png",
        title: "Jarvis Academy",
        subtitle: { id: "Pelatihan Web Developer", en: "Web Developer training" },
        place: { id: "Jakarta Selatan", en: "South Jakarta" },
        period: { id: "Mei – Juli 2024", en: "May – July 2024" },
        live: { id: "Proyek terbaik", en: "Best project award" },
        desc: {
          id: "Pelatihan Laravel yang ditutup dengan proyek akhir, dan proyek saya terpilih sebagai yang terbaik.",
          en: "Laravel training closing with a final project, where mine was selected as the best in the cohort.",
        },
        bullets: {
          id: ["Menempuh pelatihan Web Developer berbasis Laravel.", "Terpilih sebagai proyek akhir terbaik pada angkatan tersebut."],
          en: ["Completed the Laravel based Web Developer training.", "Selected as the best final project in the cohort."],
        },
        gallery: [
          { src: "pelatihan/jarvis-sertifikat.jpg", alt: { id: "Sertifikat", en: "Certificate" } },
          { src: "pelatihan/jarvis-proyek.jpg", alt: { id: "Proyek akhir", en: "Final project" } },
        ],
        side: {
          title: { id: "Penyelenggara", en: "Provider" },
          caption: { id: "Jarvis Academy", en: "Jarvis Academy" },
          avatars: ["logo/jarvis-academy.png"],
          rows: [{ k: { id: "Proyek akhir terbaik", en: "Best final project" }, v: { id: "Penghargaan angkatan", en: "Cohort award" } }],
        },
      },
    ],
  },
];
