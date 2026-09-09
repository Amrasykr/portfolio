# Portofolio — Ammar Asysyakur

Situs portofolio satu halaman: Next.js 15 (App Router), React, TypeScript, Tailwind CSS v4.
Glassmorphism gelap, dua bahasa (EN bawaan, ID), tanpa backend.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build produksi
npm run typecheck  # tsc --noEmit
```

## Struktur singkat

- `src/data/content.ts` — sumber tunggal semua teks (jangan ubah isinya).
- `src/data/ui.ts` — label antarmuka, judul menu, statistik, tautan sosmed, override status.
- `src/components/` — kartu profil, rail navigasi, linimasa, proyek + dialog detail, keterampilan, formulir kontak.
- `public/img/` — gambar; berkas yang belum ada tampil sebagai placeholder berisi path yang diharapkan.

## Deploy

Zero-config di Vercel: import repo ini, framework terdeteksi sebagai Next.js, lalu Deploy.
