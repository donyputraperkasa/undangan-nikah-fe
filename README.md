# Undangan Nikah — Nugroho & Agata

Frontend undangan pernikahan digital berbasis Next.js. Aplikasi memiliki halaman undangan personal berdasarkan `slug`, nama tamu dari URL, generator tautan, pengiriman melalui WhatsApp, RSVP, dan ucapan tamu.

## Apakah backend wajib?

Tidak semua fitur membutuhkan backend.

### Bisa digunakan tanpa backend

- Membuka dan melihat undangan.
- Menampilkan nama tamu pada sampul.
- Memutar musik dan menggunakan countdown.
- Membuka lokasi, rekening, galeri, dan informasi acara.
- Membuat tautan personal untuk setiap tamu.
- Membuat pesan dan mengirim undangan melalui WhatsApp.

### Membutuhkan backend

- Menyimpan konfirmasi kehadiran atau RSVP.
- Mengambil dan menyimpan ucapan dari tamu.
- Menyimpan data undangan secara dinamis jika nantinya ada banyak pasangan atau tema.
- Dashboard admin, daftar tamu, statistik, autentikasi, dan pembayaran jika aplikasi dikembangkan menjadi produk.

Jadi, aplikasi dapat dipublikasikan tanpa backend jika hanya digunakan sebagai undangan statis dan alat kirim WhatsApp. Namun, form RSVP dan ucapan tidak dapat menyimpan data apabila backend tidak dijalankan.

## Menjalankan aplikasi

Pastikan Node.js dan npm sudah tersedia, kemudian jalankan:

```bash
npm install
npm run dev
```

Buka aplikasi melalui:

```text
http://localhost:3000
```

Perintah lain yang tersedia:

```bash
npm run lint
npm run build
npm run start
```

## Mengirim undangan melalui WhatsApp

1. Jalankan frontend.
2. Buka `http://localhost:3000/hay-apin-mochi`.
3. Isi slug undangan, misalnya `nugroho-agata`.
4. Isi nama tamu, misalnya `Bapak Budi & Keluarga`.
5. Isi nomor WhatsApp tamu, misalnya `081234567890`.
6. Tekan **Preview** untuk memeriksa nama tamu pada undangan.
7. Tekan **Kirim lewat WhatsApp** untuk membuka percakapan beserta pesan yang sudah dibuat otomatis.

Nomor yang diawali `08` otomatis diubah ke format Indonesia `62`.

## Format tautan tamu

Nama tamu disimpan pada parameter `to` di URL:

```text
http://localhost:3000/nugroho-agata?to=Bapak%20Budi%20dan%20Keluarga
```

Strukturnya adalah:

```text
https://domain-anda.com/{slug}?to={nama-tamu}
```

Gunakan halaman `/hay-apin-mochi` agar nama dan karakter khusus diubah ke format URL secara otomatis. Tidak perlu menulis `%20` secara manual.

## Menjalankan dengan backend

Secara default frontend menghubungi backend di:

```text
http://localhost:4000
```

Alamat tersebut digunakan oleh fitur RSVP dan ucapan. Untuk memakai alamat API lain, buat atau isi `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

Setelah mengubah environment variable, mulai ulang development server.

Struktur pengembangan lokal:

```text
undangan-nikah/
├── undangan-nikah-fe/  # Next.js frontend
└── undangan-nikah-be/  # Backend RSVP dan ucapan
```

## Mengganti data dan foto

Foto ilustrasi prewedding demo saat ini berada di:

```text
public/images/naruto-hinata-prewed.png
```

Foto tersebut dapat diganti menggunakan nama file yang sama. Jika menggunakan nama berbeda, sesuaikan path gambar pada komponen di `components/sections`.

Data pasangan, tanggal, lokasi, rekening, dan cerita sementara masih ditulis langsung pada komponen terkait. Sebelum deployment, periksa bagian berikut:

- `components/sections/HeroSection.tsx`
- `components/sections/CoupleSection.tsx`
- `components/sections/CountdownSection.tsx`
- `components/sections/EventSection.tsx`
- `components/sections/JourneySection.tsx`
- `components/sections/MapSection.tsx`
- `components/sections/GiftSection.tsx`
- `components/sections/GallerySection.tsx`

## Catatan deployment

- Deploy frontend ke layanan yang mendukung Next.js, misalnya Vercel.
- Setelah deployment, generator otomatis menggunakan domain tempat frontend dibuka.
- Jika menggunakan backend, deploy backend secara terpisah dan atur `NEXT_PUBLIC_API_URL` ke alamat backend production.
- Pastikan backend mengizinkan request dari domain frontend melalui konfigurasi CORS.
- Jangan menyimpan secret key di environment variable yang diawali `NEXT_PUBLIC_` karena nilainya dapat dibaca oleh browser.

## Rencana pengembangan produk

Jika proyek ini ingin dijadikan sumber penghasilan, pengembangan selanjutnya dapat mencakup:

- Dashboard admin dan pengelolaan daftar tamu.
- Impor tamu dari Excel atau CSV.
- Pengiriman WhatsApp secara bertahap.
- Banyak tema undangan.
- Editor data pasangan tanpa mengubah kode.
- Domain atau subdomain khusus pelanggan.
- Paket berbayar dan pembayaran online.
- Statistik kunjungan, RSVP, dan ucapan.
