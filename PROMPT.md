# Prompt — Portofolio Ammar Asysyakur

Salin seluruh isi berkas ini ke Claude Code. Taruh `content.ts` di folder proyek lebih dulu.

---

Bangun sebuah situs portofolio pribadi satu halaman dengan Next.js App Router.

## Berkas wajib

- `content.ts` sudah ada di root proyek. **Seluruh teks yang tampil harus berasal dari berkas ini.** Pindahkan ke `src/data/content.ts`, jangan ubah satu kata pun di dalamnya, jangan tambah entri baru, jangan hapus entri yang ada.
- Foto latar ada di `public/img/latar/ruangan.jpg`. Kalau belum ada, buat berkas kosong sebagai penanda dan lanjutkan.

## Batasan mutlak

1. Dilarang mengarang konten. Kalau sebuah teks tidak ada di `content.ts`, jangan tampilkan apa pun di tempat itu.
2. Dilarang mengganti warna, radius, blur, atau ukuran huruf dengan nilai lain di luar tabel token di bawah.
3. Dilarang memakai pustaka UI (shadcn, MUI, Chakra) dan pustaka animasi. Cukup Tailwind CSS v4 dan CSS biasa.
4. Dilarang memakai pustaka i18n. Pergantian bahasa cukup dengan React context.
5. Dilarang memakai gambar dari internet. Semua gambar dirujuk dari `public/img/`.

## Stack

Next.js 15+ App Router, React, TypeScript, Tailwind CSS v4. Satu halaman saja di `app/page.tsx`. Mode gelap saja, tidak ada mode terang. Font Plus Jakarta Sans lewat `next/font/google`.

## Design token

Definisikan sebagai CSS variable di `globals.css`, lalu pakai lewat Tailwind. Nilai ini final.

| Token | Nilai |
|---|---|
| `--bg` | `#141416` |
| `--glass` | `rgba(255,255,255,.055)` |
| `--glass-hi` | `rgba(255,255,255,.09)` |
| `--line` | `rgba(255,255,255,.09)` |
| `--txt` | `#f2f3f5` |
| `--txt2` | `#a8adb5` |
| `--txt3` | `#7d828a` |
| `--accent` | `#3b82f6` |
| `--live` | `#22c55e` |
| blur kaca | `22px` |
| radius panel | `20px` |
| radius baris dalam panel | `14px` |
| radius ikon persegi | `10px` |
| radius pil | `999px` |

Skala huruf: judul grup sidebar 19px/600, judul kartu 16px/600, isi 14px/1.62, metadata 13px, item sidebar 14.5px.

Jarak: grid `gap-5`, padding panel 18px sampai 20px.

## Efek kaca

Referensinya glassmorphism di atas foto ruangan gelap. Aturan pemakaian, patuhi persis:

- Foto latar dipasang `fixed inset-0` dengan overlay gelap di atasnya supaya teks tetap terbaca.
- Maksimal **satu lapis** `backdrop-filter` per area. **Dilarang menaruh elemen ber-`backdrop-filter` di dalam elemen ber-`backdrop-filter`.** Baris di dalam panel cukup pakai `background: rgba(255,255,255,.035)` tanpa blur.
- Sediakan fallback: `@supports not (backdrop-filter: blur(1px))` mengganti permukaan kaca dengan `rgba(28,28,30,.9)` solid.
- Di bawah 768px, matikan `backdrop-filter` seluruhnya dan pakai permukaan solid. Ini demi kelancaran gulir, bukan pilihan estetika.
- Hormati `prefers-reduced-motion`.

## Struktur halaman

```
┌──────────────────────────────────────────────────────────┐
│              navigasi pil mengambang (tengah)            │
├────────────┬────────────────────────────┬────────────────┤
│  sidebar   │  kartu perkenalan          │  tempat &      │
│  (sticky)  │  (selalu tampil)           │  tanggal       │
│            ├────────────────────────────┤                │
│  grup      │  kartu isi 1  ← aktif      ├────────────────┤
│  Profil    │  kartu isi 2               │  kontributor   │
│  Karya     │  kartu isi 3               │  atau capaian  │
│            │                            │  (sticky)      │
│  Unduh CV  │                            │                │
└────────────┴────────────────────────────┴────────────────┘
```

Grid tiga kolom: `270px minmax(0,1fr) 320px`, lebar maksimal 1560px, jarak 20px.

### Navigasi pil

Satu pil kaca berisi item dari `nav` di `content.ts`, di tengah atas. Di sisi kanan pil taruh tombol ganti bahasa `ID / EN`. Item pertama berstatus aktif.

### Sidebar kiri

Sticky. Dua grup dari `groups`, masing masing berisi `sections` yang cocok dengan `section.group`. Tiap item menampilkan ikon persegi berisi gambar dari `section.icon` lalu label. Item aktif memakai `--glass-hi`. Di bawahnya tombol Unduh CV dengan garis putus putus mengarah ke `profile.links.cv`.

Mengklik item sidebar mengganti isi kolom tengah dan mereset kartu aktif ke kartu pertama.

### Kolom tengah

Kartu pertama selalu kartu perkenalan dari `profile`: foto bulat, nama, peran dan lokasi, ringkasan, empat gambar sorotan dalam satu baris, lalu tombol biru `profile.cta`.

Di bawahnya, seluruh `items` dari section yang aktif, ditampilkan sekaligus sebagai tumpukan kartu.

Susunan isi tiap kartu, urut dari atas: logo persegi, judul, subjudul dan periode dipisah titik tengah, deskripsi, daftar butir, pil keterampilan bila ada, tagar bila ada, lalu galeri gambar.

Kartu dapat diklik dan dapat difokuskan dengan papan ketik. Kartu aktif diberi tepi biru tipis dan latar `rgba(59,130,246,.05)`.

### Kolom kanan

Sticky, dua kartu, isinya mengikuti kartu aktif di kolom tengah.

Kartu atas berjudul tetap "Tempat dan Tanggal" dalam bahasa aktif. Isinya satu baris berisi `item.place` dan `item.period`. Bila `item.live` ada, baris itu diberi titik hijau di pojok kanan atas dan ditambah satu baris berisi teks `item.live`.

Kartu bawah memakai `item.side`: judul, keterangan, tumpukan logo bundar dari `side.avatars` dengan tepi gelap dan saling menumpuk sekitar 9px, lalu baris baris dari `side.rows`.

## Gambar dan placeholder

Semua gambar dirujuk lewat `src` di `content.ts`, relatif terhadap `public/img/`.

Buat komponen `<Media>` yang berperilaku begini: kalau berkas gambar tidak ada atau gagal dimuat, tampilkan kotak placeholder dengan latar `linear-gradient(140deg, rgba(255,255,255,.075), rgba(255,255,255,.025))`, tepi garis putus putus, dan **teks kecil berisi path berkas yang diharapkan**, misalnya `img/proyek/aqua-access-01.jpg`. Ini supaya pemilik situs tahu persis berkas apa yang harus ditaruh di mana.

Rasio dikunci supaya tata letak tidak bergeser saat gambar asli masuk:

- galeri `16/10`
- sertifikat di section pelatihan `4/3`
- gambar sorotan di kartu perkenalan `16/10`
- foto profil, logo, dan ikon `1/1`

Galeri dua gambar memakai dua kolom, tiga gambar memakai tiga kolom.

## Bahasa

Semua nilai bertipe `T` adalah objek `{ id, en }`. Buat `LangContext` dengan nilai awal `"id"`, simpan pilihan di `localStorage`, dan buat pembantu `t(value)` yang mengembalikan teks sesuai bahasa aktif.

Label antarmuka yang tidak ada di `content.ts` (misalnya judul "Tempat dan Tanggal") ditaruh di satu objek `ui` terpisah di `src/data/ui.ts`, juga bilingual.

Set `lang` pada elemen `<html>` mengikuti bahasa aktif.

## Responsif

- Di atas 1180px: tiga kolom seperti di atas.
- 768px sampai 1180px: dua kolom, sidebar tetap di kiri, kolom kanan turun masuk ke dalam tiap kartu.
- Di bawah 768px: satu kolom. Sidebar berubah jadi baris pil yang dapat digulir mendatar di bawah navigasi. **Isi kolom kanan masuk ke dalam kartu masing masing sebagai bagian yang dapat dibuka tutup**, berjudul "Detail", tertutup secara bawaan. Dilarang menumpuk isi kolom kanan di bagian paling bawah halaman.

## Aksesibilitas

Teks sekunder wajib mencapai rasio kontras minimal 4,5 banding 1 terhadap permukaan tergelap. Kalau `--txt2` belum cukup, terangkan nilainya dan catat perubahannya. Semua elemen yang dapat diklik harus berupa `button` atau `a` sungguhan dengan `:focus-visible` biru yang terlihat jelas. Setiap gambar memakai `alt` dari `content.ts`.

## Metadata

Judul halaman "Ammar Asysyakur — Full Stack Developer". Isi deskripsi dari `profile.summary.id`. Sediakan `opengraph-image` sederhana.

## Kriteria selesai

Periksa satu per satu sebelum melapor selesai:

- [ ] `npm run build` lolos tanpa galat TypeScript.
- [ ] Kelima section dapat dibuka dari sidebar dan isinya berbeda beda.
- [ ] Mengklik kartu di kolom tengah mengubah kedua kartu di kolom kanan.
- [ ] Tombol ID dan EN mengganti seluruh teks, termasuk label antarmuka.
- [ ] Tidak ada `backdrop-filter` yang bersarang di dalam `backdrop-filter`.
- [ ] Setiap kotak placeholder menampilkan path berkas yang diharapkan.
- [ ] Pada lebar 375px, isi kolom kanan muncul sebagai bagian yang dapat dibuka tutup di dalam kartu.
- [ ] Navigasi penuh dengan papan ketik saja berfungsi dan cincin fokus terlihat.
- [ ] Tidak ada teks yang tidak berasal dari `content.ts` atau `ui.ts`.

Kerjakan sampai seluruh daftar periksa terpenuhi. Kalau ada keputusan yang tidak tercakup di dokumen ini, tanyakan lebih dulu, jangan diputuskan sendiri.
