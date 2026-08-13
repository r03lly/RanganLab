# Rangan Explorer

buatkan web

Si Rangan EduKit—alat peraga edukasi Sasirangan berbentuk koper yang mengajarkan tahapan membuat Sasirangan kepada siswa SD, mulai dari mengenal motif, menjelujur, menyisit, mewarnai, sampai memahami sumber pewarna alami.

Dan menurut saya, unsur digitalisasi justru bisa menjadi penguat utama Si Rangan, asalkan digitalnya tidak menggantikan aktivitas praktik. Karena kekuatan Si Rangan ada pada pengalaman hands-on. Digital sebaiknya menjadi pendamping pembelajaran fisik (phygital learning).

Saya membayangkan pengembangannya seperti ini.

Konsep: Si Rangan EduKit – Phygital Sasirangan Learning Experience

Alurnya:

Kenali → Eksplorasi Digital → Praktik → Refleksi → Apresiasi

Ada beberapa fitur yang sangat realistis diterapkan:

Fitur DigitalCara KerjaNilai EdukasiQR Motif ExplorerQR pada kartu motif dipindai siswaMengenal nama, filosofi, dan cerita motifDigital Color LabSiswa memilih bahan pewarna alam di layarBelajar hubungan tanaman dengan warnaVirtual Sasirangan DesignerSiswa memilih motif + warna sebelum praktikKreativitas dan perencanaan desainVideo TutorialQR pada tahapan kegiatanMembantu siswa mengikuti prosesMini Quiz/GameKuis setelah kegiatanEvaluasi pemahamanDigital CertificateSertifikat setelah menyelesaikan aktivitasApresiasi dan motivasiGallery Si RanganHasil karya siswa difoto dan diunggahDokumentasi serta apresiasi karya

Namun ada 3 fitur yang menurut saya paling potensial menjadi identitas inovasi Si Rangan.

1. Scan & Learn – Kartu Motif Interaktif

Kartu motif yang sebelumnya kita rancang bisa diberi QR Code kecil.

Misalnya siswa mengambil kartu:

Motif Bayam Raja

Lalu scan QR → muncul:

🌿 Bayam Raja
Motif tradisional Sasirangan yang terinspirasi dari bentuk tumbuhan.

🔊 Dengarkan cerita motif
🎨 Warnai motif
🎮 Mainkan kuis

Untuk siswa kelas 3 SD, kontennya sebaiknya visual + audio, jangan terlalu banyak teks.

Ini relatif murah dan mudah dibuat, karena tidak harus membuat aplikasi Android. Bisa berupa web application yang dibuka melalui browser.

2. Si Rangan Digital Color Lab

Ini menurut saya paling cocok dengan konsep pewarna alam yang sudah kita bangun.

Di layar muncul beberapa pilihan bahan:

🌿 Daun sungkai
🟡 Kunyit
🌺 Buah naga
🌱 Indigofera

Siswa memilih salah satunya.

Misalnya:

Aku memilih: Indigofera

Kemudian muncul animasi:

Daun → ekstraksi → larutan warna → kain → warna biru

Bahkan bisa dibuat seperti simulasi:

Pilih bahan pewarna → pilih tingkat konsentrasi → lihat prediksi warna kain.

Jadi sebelum benar-benar mencelup kain, siswa melakukan eksperimen digital terlebih dahulu.

Ini memberikan unsur STEM yang cukup kuat.

3. Virtual Sasirangan Designer

Ini bisa menjadi fitur unggulan.

Sebelum membuat Sasirangan fisik, siswa membuat desain digital sederhana.

Misalnya layar menunjukkan:

Pilih Motif

◯ Gigi Haruan
◯ Kambang Raja
◯ Bayam Raja
◯ Kulit Kurikit

↓

Pilih Warna

🟡 🟢 🔵 🟣

↓

Preview My Sasirangan

Kemudian sistem menampilkan visual kain berdasarkan kombinasi siswa.

Setelah itu muncul:

Sekarang buat desainmu menjadi Sasirangan sungguhan!

Barulah siswa mengambil kain dari Si Rangan EduKit dan melakukan praktik.

Ini membuat integrasi digital–fisiknya sangat kuat:

DESIGN DIGITAL → CREATE PHYSICAL

Bahkan bisa ditambahkan AI, tetapi secara sederhana

Saya tidak menyarankan langsung membuat AI yang terlalu rumit.

AI bisa ditempatkan sebagai karakter pendamping, misalnya:

“Tanya Si Rangan” 🤖

Anak bisa memilih pertanyaan:

Kenapa kain harus diikat?

Dari mana warna biru berasal?

Kenapa Sasirangan disebut Sasirangan?

Motif apa yang cocok dengan warna kuning?

Sistem memberikan jawaban dengan bahasa anak-anak.

Lebih menarik lagi jika ada maskot Si Rangan yang berbicara.

Misalnya:

“Hai! Aku Si Rangan 👋
Hari ini kita akan membuat kain Sasirangan.
Tapi sebelum mulai, yuk pilih motifmu!”

Dengan demikian Si Rangan bukan hanya nama produk, tetapi menjadi digital learning companion.

Saya justru tidak menyarankan membuat aplikasi Android khusus pada tahap awal

Untuk tahap prototipe dan uji coba ±30 siswa kelas 3 SD, menurut saya lebih efektif menggunakan:

Si Rangan EduKit + QR Code + Web App responsive

karena:

 tidak perlu instal aplikasi;

 dapat dibuka dari HP guru/tablet;

 biaya pengembangan lebih murah;

 mudah diperbarui;

 satu platform dapat digunakan banyak sekolah;

 mudah dikembangkan menjadi aplikasi di masa depan.

Jadi arsitekturnya kira-kira:

SI RANGAN EDUKIT
↓
Physical Learning

 kain latihan

 jarum tumpul

 benang

 kartu motif

 pewarna alam

 wadah pewarna

 roda warna

↕️

Digital Learning

 QR Motif Explorer

 Video Tutorial

 Digital Color Lab

 Virtual Sasirangan Designer

 Quiz

 Digital Gallery

 Certificate

↕️

Optional AI Layer

 Tanya Si Rangan

 rekomendasi motif

 rekomendasi kombinasi warna

 cerita budaya interaktif

Menurut saya ini bahkan menaikkan positioning Si Rangan secara signifikan. Ia tidak lagi sekadar alat peraga Sasirangan, tetapi bisa kita definisikan sebagai:

Si Rangan EduKit: Phygital Cultural Learning Kit for Sasirangan Education

atau dalam bahasa Indonesia:

Si Rangan EduKit: Media Pembelajaran Figital Berbasis Budaya untuk Edukasi Sasirangan

Yang menarik, digitalisasinya tetap memiliki alasan pedagogis, bukan sekadar menempel QR agar terlihat modern.

Untuk versi pertama yang akan diuji ke ±30 siswa kelas 3 SD, saya akan memilih hanya 4 fitur digital utama: QR Motif Explorer + Video Tutorial + Digital Color Lab + Mini Quiz. Virtual Designer dan AI bisa menjadi tahap pengembangan berikutnya. Dengan begitu prototipe masih realistis dibuat, tetapi unsur inovasi digitalnya sudah sangat jelas dan bisa diukur efektivitasnya saat uji coba.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/8fe4478d-61fd-40cd-abb6-7a3ee9a25b30).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
