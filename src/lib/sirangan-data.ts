export type PatternId =
  | "pudak"
  | "kacang"
  | "bayam"
  | "kurikit"
  | "ombak"
  | "bintang"
  | "naga"
  | "jumput"
  | "dayang"
  | "manggis"
  | "jaruju"
  | "kangkung"
  | "gigi"
  | "kambang"
  | "ular"
  | "mayang"
  | "sahang"
  | "gelombang"
  | "katu"
  | "gagatas";

export type Kategori = "tradisional" | "modern";

export type Motif = {
  slug: string;
  nama: string;
  emoji: string;
  filosofi: string;
  cerita: string;
  asal: string;
  patternId: PatternId;
  warnaHex: string;
  warnaSaran: string;
  kategori?: Kategori;
};

export const motifs: Motif[] = [
  {
    slug: "hiris-pudak",
    nama: "Hiris Pudak",
    emoji: "🌾",
    asal: "Dari daun pudak (pandan) yang panjang dan wangi.",
    filosofi: "Lambang keharuman nama baik dan kegunaan bagi sesama.",
    cerita:
      "Pudak atau pandan tumbuh di halaman rumah orang Banjar. Daunnya panjang dan wangi, dipakai untuk memberi warna hijau pada kue dan merangkai bunga. Motif Hiris Pudak berbentuk irisan daun yang berjajar rapi.",
    patternId: "pudak",
    warnaHex: "#5c7d3c",
    warnaSaran: "Hijau daun sungkai",
  },
  {
    slug: "kembang-kacang",
    nama: "Kembang Kacang",
    emoji: "🫛",
    asal: "Dari bunga dan polong kacang panjang di kebun rumah.",
    filosofi: "Lambang keakraban dan kebersamaan keluarga.",
    cerita:
      "Kacang panjang sering dimasak bersama labu di dapur orang Banjar. Karena selalu ada di meja makan keluarga, motif ini menjadi lambang keakraban dan rasa persaudaraan.",
    patternId: "kacang",
    warnaHex: "#5c7d3c",
    warnaSaran: "Hijau daun sungkai",
  },
  {
    slug: "bayam-raja",
    nama: "Bayam Raja",
    emoji: "🌿",
    asal: "Dari daun bayam raja yang tersusun melengkung ke atas.",
    filosofi: "Lambang kewibawaan dan hormat kepada leluhur.",
    cerita:
      "Motif Bayam Raja berupa garis-garis melengkung yang berdiri tegak. Biasanya dipakai sebagai bingkai atau pinggiran motif lain, seperti penjaga yang berdiri di tepi kain.",
    patternId: "bayam",
    warnaHex: "#dda01a",
    warnaSaran: "Kuning kunyit",
  },
  {
    slug: "kulat-karikit",
    nama: "Kulat Karikit",
    emoji: "🍄",
    asal: "Dari jamur kecil yang tumbuh menempel di batang pohon.",
    filosofi: "Lambang kemandirian tanpa merugikan orang lain.",
    cerita:
      "Kulat karikit menempel di batang pohon, tetapi tidak membuat pohonnya sakit. Ia bisa hidup sendiri. Motifnya mirip gigi ikan haruan, tetapi bentuknya lebih kecil-kecil.",
    patternId: "kurikit",
    warnaHex: "#8a5a2b",
    warnaSaran: "Cokelat kayu",
  },
  {
    slug: "ombak-sinapur-karang",
    nama: "Ombak Sinapur Karang",
    emoji: "🌊",
    asal: "Dari ombak besar yang menghantam batu karang.",
    filosofi: "Lambang perjuangan menghadapi tantangan hidup.",
    cerita:
      "Angin kencang membuat ombak besar lalu menabrak karang. Karangnya tetap berdiri. Motif ini mengingatkan kita untuk tetap kuat meski ada masalah.",
    patternId: "ombak",
    warnaHex: "#26467f",
    warnaSaran: "Biru indigo",
  },
  {
    slug: "bintang-behambur",
    nama: "Bintang Behambur",
    emoji: "⭐",
    asal: "Dari bintang-bintang yang bertaburan di langit malam.",
    filosofi: "Lambang kebesaran Tuhan Sang Pencipta.",
    cerita:
      "Kalau kita menengadah ke langit malam, bintangnya tak terhitung jumlahnya. Itulah Bintang Behambur — bintang yang berhamburan, mengingatkan betapa besar ciptaan Tuhan.",
    patternId: "bintang",
    warnaHex: "#26467f",
    warnaSaran: "Biru indigo",
  },
  {
    slug: "naga-balimbur",
    nama: "Naga Balimbur",
    emoji: "🐉",
    asal: "Dari cerita rakyat Banjar tentang naga yang mandi di sungai.",
    filosofi: "Lambang kegembiraan dan suka cita.",
    cerita:
      "Cerita rakyat Banjar mengisahkan naga yang mandi (balimbur) dengan riang di sungai saat matahari pagi bersinar. Motif ini melukiskan rasa gembira dan bahagia.",
    patternId: "naga",
    warnaHex: "#b83a72",
    warnaSaran: "Merah muda buah naga",
  },
  {
    slug: "jajumputan",
    nama: "Jajumputan",
    emoji: "💐",
    asal: "Dari kata jumput yang berarti memetik dengan tangan.",
    filosofi: "Lambang persembahan dan sopan santun.",
    cerita:
      "Jajumputan berasal dari kata jumput, yaitu memetik. Barang yang dipetik, biasanya bunga, dibawa dengan tangan sebagai tanda hormat kepada orang lain.",
    patternId: "jumput",
    warnaHex: "#b83a72",
    warnaSaran: "Merah muda buah naga",
  },
  {
    slug: "turun-dayang",
    nama: "Turun Dayang",
    emoji: "🌾",
    asal: "Dari tumbuhan berdaun kecil yang menjuntai panjang di bukit berbatu.",
    filosofi: "Lambang keanggunan para dayang istana.",
    cerita:
      "Dari jauh, daun-daun kecil yang menjuntai itu terlihat seperti rambut panjang yang berombak. Dahulu motif ini dipakai para dayang istana saat upacara kerajaan.",
    patternId: "dayang",
    warnaHex: "#7a4fa3",
    warnaSaran: "Ungu lembut",
  },
  {
    slug: "kembang-tampuk-manggis",
    nama: "Kembang Tampuk Manggis",
    emoji: "🟣",
    asal: "Dari kelopak di pangkal buah manggis yang berbentuk bunga.",
    filosofi: "Lambang kejujuran — luar dan dalam harus sama.",
    cerita:
      "Coba hitung kelopak di bawah buah manggis, ada 5 sampai 7 helai. Kalau buahnya dibelah, jumlah isinya sama persis! Karena itu motif ini menjadi lambang kejujuran.",
    patternId: "manggis",
    warnaHex: "#7a4fa3",
    warnaSaran: "Ungu manggis",
  },
  {
    slug: "daun-jaruju",
    nama: "Daun Jaruju",
    emoji: "🌵",
    asal: "Dari daun jaruju berduri yang tumbuh di tepi sungai.",
    filosofi: "Lambang perlindungan dan tolak bala.",
    cerita:
      "Jaruju tumbuh di tanah becek pinggir sungai. Dahulu orang Banjar meletakkan daun berdurinya di sudut dapur untuk mengusir tikus, sehingga motif ini dianggap pelindung rumah.",
    patternId: "jaruju",
    warnaHex: "#5c7d3c",
    warnaSaran: "Hijau tua",
  },
  {
    slug: "kangkung-kaombakan",
    nama: "Kangkung Kaombakan",
    emoji: "🥬",
    asal: "Dari batang kangkung air yang bergoyang diterjang ombak.",
    filosofi: "Lambang ketangguhan menghadapi kesulitan.",
    cerita:
      "Kangkung hidup di air. Walau airnya beriak dan berombak, batangnya yang panjang tidak patah, hanya ikut bergoyang. Motif ini mengajarkan kita untuk lentur tetapi kuat.",
    patternId: "kangkung",
    warnaHex: "#3f8f6b",
    warnaSaran: "Hijau kangkung",
  },
  {
    slug: "gigi-haruan",
    nama: "Gigi Haruan",
    emoji: "🐟",
    asal: "Dari gigi tajam ikan haruan (ikan gabus) khas rawa Banjar.",
    filosofi: "Lambang ketajaman berpikir dan keberanian.",
    cerita:
      "Ikan haruan berwarna hitam, dagingnya lembut, dan giginya tajam. Karena giginya tajam, motif ini menjadi lambang orang yang tajam pikirannya dan berani.",
    patternId: "gigi",
    warnaHex: "#26467f",
    warnaSaran: "Biru indigo",
  },
  {
    slug: "kambang-sakaki",
    nama: "Kambang Sakaki",
    emoji: "🌺",
    asal: "Kambang berarti bunga dalam bahasa Banjar.",
    filosofi: "Lambang keindahan dan kegembiraan.",
    cerita:
      "Bunga adalah lambang keindahan bagi orang Banjar. Bentuk bunga banyak diukir pada rumah adat Banjar sebagai hiasan, dan juga muncul di kain Sasirangan.",
    patternId: "kambang",
    warnaHex: "#b83a72",
    warnaSaran: "Merah muda buah naga",
  },
  {
    slug: "ular-lidi",
    nama: "Ular Lidi",
    emoji: "🐍",
    asal: "Dari ular lidi kecil yang ada dalam cerita rakyat Banjar.",
    filosofi: "Lambang kecerdikan, kecepatan, dan kewaspadaan.",
    cerita:
      "Ular lidi bentuknya kecil dan ramping. Ia gesit dan cepat, pandai menjaga diri. Motif ini mengajarkan kita untuk cerdik dan waspada.",
    patternId: "ular",
    warnaHex: "#2f6f5e",
    warnaSaran: "Hijau tosca",
  },
  {
    slug: "mayang-maurai",
    nama: "Mayang Maurai",
    emoji: "🌴",
    asal: "Dari mayang pinang yang dipakai pada upacara badudus.",
    filosofi: "Lambang kehormatan dalam adat.",
    cerita:
      "Pada upacara mandi pengantin (badudus), mayang pinang dicelupkan ke air bunga lalu disiramkan ke pengantin dari kepala sampai kaki. Motif ini melambangkan penghormatan.",
    patternId: "mayang",
    warnaHex: "#dda01a",
    warnaSaran: "Kuning kunyit",
  },
  {
    slug: "ramak-sahang",
    nama: "Ramak Sahang",
    emoji: "🌶️",
    asal: "Dari sahang (lada) yang ditumbuk halus di cobek.",
    filosofi: "Lambang kerja keras dan ketelitian.",
    cerita:
      "Ramak artinya remuk, sahang artinya lada. Ramak Sahang berarti lada yang ditumbuk. Motifnya mirip Hiris Pudak yang digandakan, tetapi bentuknya terpecah-pecah kecil.",
    patternId: "sahang",
    warnaHex: "#8a5a2b",
    warnaSaran: "Cokelat rempah",
  },
  {
    slug: "gelombang",
    nama: "Gelombang",
    emoji: "〰️",
    asal: "Dari gelombang air yang naik dan turun.",
    filosofi: "Lambang kesabaran menjalani naik turunnya hidup.",
    cerita:
      "Hidup itu seperti roda dan gelombang: kadang di atas, kadang di bawah. Motif Gelombang mengingatkan kita untuk sabar dan tekun melewati semuanya.",
    patternId: "gelombang",
    warnaHex: "#26467f",
    warnaSaran: "Biru indigo",
  },
  {
    slug: "daun-katu",
    nama: "Daun Katu",
    emoji: "🍃",
    asal: "Dari daun katu yang ditanam di kebun rumah.",
    filosofi: "Lambang tanaman yang banyak manfaatnya bagi orang lain.",
    cerita:
      "Daun katu bisa dimasak jadi sayur, membantu ibu menyusui, menambah daya tahan tubuh, dan menyehatkan mata. Motif ini mengajak kita menjadi orang yang bermanfaat.",
    patternId: "katu",
    warnaHex: "#3f8f6b",
    warnaSaran: "Hijau daun",
  },
  {
    slug: "hiris-gagatas",
    nama: "Hiris Gagatas",
    emoji: "🍰",
    asal: "Dari potongan kue tradisional Banjar seperti amparan tatak dan kue lapis.",
    filosofi: "Lambang keindahan dan kelembutan.",
    cerita:
      "Kue Banjar seperti amparan tatak, sarimuka, dan kue lapis dipotong miring dengan rapi. Bentuk irisan itulah yang menjadi motif Hiris Gagatas.",
    patternId: "gagatas",
    warnaHex: "#dda01a",
    warnaSaran: "Kuning kunyit",
  },
];

/** Motif modern/kreasi baru — sumber: Buku Profil Produk Unggulan Sasirangan Kalsel (Disperindag & BRIDA Kalsel, 2024) */
export const motifModern: Motif[] = [
  {
    slug: "berlian",
    nama: "Berlian",
    emoji: "💎",
    asal: "Motif khas Kabupaten Banjar, terinspirasi julukan Martapura Kota Intan.",
    filosofi: "Lambang kemilau dan kekayaan alam Banua.",
    cerita:
      "Motif Berlian sudah didaftarkan hak ciptanya di Kementerian Hukum dan HAM dan boleh dipakai semua pengrajin di Kabupaten Banjar. Bentuknya terinspirasi dari intan Martapura yang berkilau.",
    patternId: "bintang",
    warnaHex: "#26467f",
    warnaSaran: "Biru indigo",
    kategori: "modern",
  },
  {
    slug: "ketupat",
    nama: "Ketupat",
    emoji: "🍚",
    asal: "Motif khas Hulu Sungai Selatan, dari ketupat Kandangan.",
    filosofi: "Lambang persatuan, kerendahan hati, dan harapan bersama.",
    cerita:
      "Ketupat Kandangan dibuat dari beras yang dibungkus anyaman janur, biasa disantap dengan ikan haruan bersantan. Anyamannya melambangkan hidup yang saling terhubung menuju kebaikan bersama.",
    patternId: "kurikit",
    warnaHex: "#3f8f6b",
    warnaSaran: "Hijau kangkung",
    kategori: "modern",
  },
  {
    slug: "gradasi",
    nama: "Gradasi",
    emoji: "🌈",
    asal: "Kreasi baru pengrajin dengan perpaduan beberapa warna.",
    filosofi: "Lambang keindahan dan keceriaan.",
    cerita:
      "Motif Gradasi memadukan beberapa warna sehingga menyatu lembut dari terang ke gelap. Cocok dipakai untuk acara meriah, baik untuk atasan maupun bawahan.",
    patternId: "gelombang",
    warnaHex: "#b83a72",
    warnaSaran: "Perpaduan warna cerah",
    kategori: "modern",
  },
  {
    slug: "sarigading",
    nama: "Sarigading",
    emoji: "✨",
    asal: "Motif kreasi dengan bentuk kecil-kecil yang sangat rapat.",
    filosofi: "Lambang kekuatan dan kewibawaan.",
    cerita:
      "Motif Sarigading berukuran kecil dan rumit sehingga pengerjaannya lebih lama dan teliti. Karena itu kain Sasirangan Sarigading biasanya lebih mahal.",
    patternId: "jumput",
    warnaHex: "#26467f",
    warnaSaran: "Biru indigo",
    kategori: "modern",
  },
  {
    slug: "pelangi",
    nama: "Pelangi",
    emoji: "🎏",
    asal: "Salah satu kreasi terbaru pengrajin Sasirangan.",
    filosofi: "Lambang semangat anak muda yang dinamis.",
    cerita:
      "Motif Pelangi memakai warna yang lebih banyak dan beragam dibanding motif Sasirangan biasa, mirip corak kain Palembang. Dibuat mengikuti selera anak muda masa kini.",
    patternId: "ombak",
    warnaHex: "#7a4fa3",
    warnaSaran: "Aneka warna cerah",
    kategori: "modern",
  },
  {
    slug: "sasirangan-bordir",
    nama: "Sasirangan Bordir",
    emoji: "🧵",
    asal: "Inovasi teknik: kain Sasirangan yang dibordir setelah jadi.",
    filosofi: "Lambang inovasi tanpa meninggalkan tradisi.",
    cerita:
      "Setelah kain Sasirangan selesai, garis motifnya dibordir sehingga terlihat lebih tegas dan cerah. Motif tradisionalnya tetap dipakai, yang berubah hanya cara pembuatannya. Permintaan kain ini terus meningkat.",
    patternId: "gigi",
    warnaHex: "#dda01a",
    warnaSaran: "Kuning kunyit",
    kategori: "modern",
  },
  {
    slug: "saringkel-pandan",
    nama: "Saringkel Pandan",
    emoji: "🌀",
    asal: "Motif baru dari Kabupaten Tanah Laut (Sasirangan Ringkel Tuntung Pandang).",
    filosofi: "Lambang kreativitas dan kerja sama teknik.",
    cerita:
      "Saringkel Pandan menggabungkan tiga teknik sekaligus: membuat pola, menjelujur, dan mencubit (smock). Setelah dicelup muncul tekstur berkerut (ringkel) yang dipadukan dengan motif Sasirangan seperti kijang, jagung, atau anggrek.",
    patternId: "dayang",
    warnaHex: "#2f6f5e",
    warnaSaran: "Hijau tosca",
    kategori: "modern",
  },
];

export const semuaMotif: Motif[] = [...motifs, ...motifModern];

export type MotifDaerah = { daerah: string; motif: string[] };

/** Motif khas 13 kabupaten/kota di Kalimantan Selatan (Tabel 2.1 buku profil) */
export const motifDaerah: MotifDaerah[] = [
  {
    daerah: "Kota Banjarmasin",
    motif: [
      "Sungai Pelangi",
      "Kalakai di Pahumaan",
      "Katuja Kembang Tigarun",
      "Daun Pakis di Belukar",
      "Sahang Bajuntai di Bantaran Sungai",
      "Kurikit Kandang Rasi",
      "Indonesia Jaya",
      "Sahang & Jalur Rempah",
      "Ukiran Kalakai di Rumah Banjar",
      "Langkarnya Padu Padan si Kambang Kacang",
    ],
  },
  { daerah: "Kota Banjarbaru", motif: ["Daun Bangkal", "Variasi Bordir"] },
  {
    daerah: "Kabupaten Banjar",
    motif: [
      "Berlian",
      "Anggrek & Daun Jaruju",
      "Kembang Melati, Berlian, dan Kantung Semar",
      "Pintu Gerbang Bumi Selamat & Bubungan Atap Rumah Banjar",
      "Tanaman Pakis (Kelakai)",
    ],
  },
  { daerah: "Kabupaten Tanah Laut", motif: ["Kijang", "Anggrek", "Jagung", "Saringkel Pandan"] },
  { daerah: "Kabupaten Tanah Bumbu", motif: ["Biota Laut", "Kapal, Ombak, dan Rumput Laut"] },
  { daerah: "Kabupaten Kotabaru", motif: ["Ikan Todak"] },
  {
    daerah: "Kabupaten Tapin",
    motif: [
      "Naga Balahendang",
      "Halang Menyaung",
      "Anak Bajang Bagandeng Tangan",
      "Daun Salam",
      "Bawang Tunggal",
      "Buhan Tikup",
      "Gasing Kemuning",
      "Ayunan Raja Datu Ujung",
      "Panting Polantan",
      "Papan Surui",
      "Layang-layang Bakacak Pinggang",
      "Tugu Sirang Pitu",
      "Dandang Badangung",
      "Daun Sirih",
      "Wayang Topeng",
      "Parang Balingan",
      "Papakuan",
      "Purun",
    ],
  },
  { daerah: "Kabupaten Hulu Sungai Selatan", motif: ["Ketupat"] },
  { daerah: "Kabupaten Hulu Sungai Tengah", motif: ["Perisai", "Mega Mendung", "Talabang Halus"] },
  { daerah: "Kabupaten Hulu Sungai Utara", motif: ["Nyiur di Pulau", "Anyaman Purun"] },
  {
    daerah: "Kabupaten Tabalong",
    motif: [
      "Buah Langsat",
      "Telabang Dayak",
      "Obor",
      "Tangkai Daun Bunga Tanjung",
      "Pakis",
      "Bunga Pengantin",
      "Lukut (Anggrek Hutan)",
    ],
  },
  {
    daerah: "Kabupaten Balangan",
    motif: ["Cempedak Kupas", "Paring", "Anyaman", "Anyaman Tirik Besambut"],
  },
  { daerah: "Kabupaten Barito Kuala", motif: ["Padi dan Purun"] },
];

export function getMotif(slug: string) {
  return semuaMotif.find((m) => m.slug === slug);
}

export type Dye = {
  id: string;
  nama: string;
  emoji: string;
  bagian: string;
  fakta: string;
  /** warna kain pada konsentrasi 1..3 */
  warna: [string, string, string];
  namaWarna: [string, string, string];
};

export const dyes: Dye[] = [
  {
    id: "indigofera",
    nama: "Indigofera",
    emoji: "🌱",
    bagian: "Daun direndam semalam",
    fakta: "Daun indigofera hijau, tapi setelah bertemu udara larutannya berubah menjadi biru!",
    warna: ["#bcd3ec", "#6a92c4", "#26467f"],
    namaWarna: ["Biru langit", "Biru sedang", "Biru indigo"],
  },
  {
    id: "kunyit",
    nama: "Kunyit",
    emoji: "🟡",
    bagian: "Rimpang diparut lalu direbus",
    fakta: "Kunyit dipakai juga untuk memasak. Warnanya kuning karena zat kurkumin.",
    warna: ["#fbe9b0", "#f4cf5a", "#dda01a"],
    namaWarna: ["Kuning muda", "Kuning kunyit", "Kuning tua"],
  },
  {
    id: "sungkai",
    nama: "Daun Sungkai",
    emoji: "🌿",
    bagian: "Daun muda direbus",
    fakta: "Daun sungkai banyak tumbuh di Kalimantan dan memberi warna hijau kecoklatan.",
    warna: ["#d8e6c4", "#9dbb77", "#5c7d3c"],
    namaWarna: ["Hijau muda", "Hijau daun", "Hijau tua"],
  },
  {
    id: "buah-naga",
    nama: "Buah Naga",
    emoji: "🌺",
    bagian: "Kulit dan daging buah dihaluskan",
    fakta: "Warna merah muda buah naga berasal dari zat betasianin.",
    warna: ["#f8d3e2", "#e588b0", "#b83a72"],
    namaWarna: ["Merah muda", "Pink cerah", "Magenta"],
  },
];

export type Step = {
  no: number;
  nama: string;
  emoji: string;
  ringkas: string;
  deskripsi: string;
  tujuan: string[];
  langkah: string[];
  tips: string;
};

export const steps: Step[] = [
  {
    no: 1,
    nama: "Mengenal Motif",
    emoji: "🔍",
    ringkas: "Pilih kartu motif dan kenali ceritanya.",
    deskripsi: "Pada tahap ini siswa berkenalan dengan aneka motif Sasirangan khas Kalimantan Selatan dan makna di baliknya sebelum mulai praktik.",
    tujuan: [
      "Menyebutkan minimal 3 nama motif Sasirangan.",
      "Menjelaskan makna atau cerita satu motif pilihan.",
      "Menggambar ulang bentuk dasar motif dengan rapi.",
    ],
    langkah: [
      "Ambil kartu motif dari koper Si Rangan.",
      "Amati bentuk gambarnya bersama teman sebangku.",
      "Pindai QR pada kartu untuk mendengar cerita motif.",
      "Gambar ulang motif di kertas latihan.",
    ],
    tips: "Ajak siswa menebak: motif ini mirip benda apa di sekitar kita?",
  },
  {
    no: 2,
    nama: "Menjelujur",
    emoji: "🪡",
    ringkas: "Menjahit garis motif dengan jarum tumpul.",
    deskripsi: "Siswa belajar teknik jahit jelujur, yaitu menjahit maju-mundur mengikuti garis motif sebagai penahan warna nanti.",
    tujuan: [
      "Memasang benang pada jarum tumpul dengan benar.",
      "Menjahit jelujur mengikuti garis motif.",
      "Bekerja hati-hati dan aman saat memakai jarum.",
    ],
    langkah: [
      "Gambar garis motif pada kain latihan dengan pensil.",
      "Masukkan benang ke jarum tumpul, ikat ujungnya.",
      "Jahit maju-mundur mengikuti garis (jelujur).",
      "Jangan tarik benang dulu sampai satu garis selesai.",
    ],
    tips: "Gunakan benang warna cerah agar jahitan mudah terlihat siswa.",
  },
  {
    no: 3,
    nama: "Menyisit",
    emoji: "🎗️",
    ringkas: "Menarik benang agar kain berkerut rapat.",
    deskripsi: "Menyisit adalah menarik benang jelujur sampai kain berkerut rapat lalu diikat kuat agar warna tidak masuk ke bagian itu.",
    tujuan: [
      "Menarik dan merapatkan kerutan kain secara merata.",
      "Membuat simpul ikat yang kuat.",
      "Menjelaskan mengapa bagian terikat tetap putih.",
    ],
    langkah: [
      "Tarik ujung benang perlahan sampai kain berkerut.",
      "Rapatkan kerutan supaya warna tidak masuk.",
      "Ikat ujung benang dengan simpul kuat.",
      "Periksa: bagian yang terikat akan tetap putih.",
    ],
    tips: "Inilah rahasia Sasirangan — 'sirang' berarti dijahit dan diikat.",
  },
  {
    no: 4,
    nama: "Mewarnai",
    emoji: "🎨",
    ringkas: "Mencelup kain ke larutan pewarna alam.",
    deskripsi: "Siswa mencelup kain yang sudah diikat ke larutan pewarna alam dan mengamati bagaimana warna meresap ke serat kain.",
    tujuan: [
      "Mencelup kain dengan takaran dan waktu yang tepat.",
      "Membandingkan hasil warna celupan sekali dan berulang.",
      "Menjaga kebersihan dan keselamatan saat bekerja dengan pewarna.",
    ],
    langkah: [
      "Basahi kain dengan air bersih.",
      "Celupkan kain ke wadah pewarna, tekan pelan 3-5 menit.",
      "Angkat dan angin-anginkan, ulangi bila ingin warna lebih tua.",
      "Bilas sampai air tidak keruh.",
    ],
    tips: "Coba dulu di Digital Color Lab sebelum mencelup kain sungguhan.",
  },
  {
    no: 5,
    nama: "Membuka & Menjemur",
    emoji: "☀️",
    ringkas: "Melepas benang dan melihat hasil motif.",
    deskripsi: "Tahap terakhir: membuka jahitan, melihat motif yang muncul, lalu menjemur kain di tempat teduh.",
    tujuan: [
      "Melepas benang jelujur tanpa merusak kain.",
      "Mengidentifikasi motif yang terbentuk pada kain.",
      "Menjemur dan merawat kain hasil karya dengan benar.",
    ],
    langkah: [
      "Gunting simpul benang dengan hati-hati.",
      "Lepas benang jelujur dari kain.",
      "Buka kain pelan-pelan — motif muncul!",
      "Jemur di tempat teduh sampai kering.",
    ],
    tips: "Momen paling seru: minta siswa berteriak 'wow' bersama saat kain dibuka.",
  },
];

export type QuizQuestion = {
  pertanyaan: string;
  pilihan: string[];
  jawaban: number;
  penjelasan: string;
};

export const quiz: QuizQuestion[] = [
  {
    pertanyaan: "Kain Sasirangan berasal dari daerah mana?",
    pilihan: ["Kalimantan Selatan", "Bali", "Papua"],
    jawaban: 0,
    penjelasan: "Sasirangan adalah kain khas suku Banjar, Kalimantan Selatan.",
  },
  {
    pertanyaan: "Kata 'sirang' pada Sasirangan artinya...",
    pilihan: ["Dilukis", "Dijahit dan diikat", "Dicetak mesin"],
    jawaban: 1,
    penjelasan: "Sasirangan berasal dari kata 'sirang' yang berarti dijahit lalu diikat.",
  },
  {
    pertanyaan: "Mengapa kain harus dijelujur dan diikat kuat?",
    pilihan: [
      "Supaya kain tidak sobek",
      "Supaya warna tidak masuk sehingga muncul motif",
      "Supaya kain wangi",
    ],
    jawaban: 1,
    penjelasan: "Bagian yang terikat rapat tidak kena pewarna, jadi tetap putih dan membentuk motif.",
  },
  {
    pertanyaan: "Bahan alam yang menghasilkan warna biru adalah...",
    pilihan: ["Kunyit", "Indigofera", "Buah naga"],
    jawaban: 1,
    penjelasan: "Daun indigofera menghasilkan warna biru indigo yang khas.",
  },
  {
    pertanyaan: "Kunyit menghasilkan warna...",
    pilihan: ["Kuning", "Hijau", "Hitam"],
    jawaban: 0,
    penjelasan: "Kunyit mengandung kurkumin yang memberi warna kuning.",
  },
  {
    pertanyaan: "Motif Gigi Haruan terinspirasi dari...",
    pilihan: ["Gigi ikan haruan", "Gigi buaya", "Daun bayam"],
    jawaban: 0,
    penjelasan: "Haruan adalah ikan gabus, hewan khas rawa Kalimantan.",
  },
  {
    pertanyaan: "Urutan membuat Sasirangan yang benar adalah...",
    pilihan: [
      "Mewarnai → menjelujur → menyisit",
      "Menjelujur → menyisit → mewarnai",
      "Menyisit → mewarnai → menjelujur",
    ],
    jawaban: 1,
    penjelasan: "Jahit dulu (jelujur), tarik benang (sisit), baru dicelup pewarna.",
  },
  {
    pertanyaan: "Motif Bayam Raja melambangkan...",
    pilihan: ["Kesuburan dan pertumbuhan", "Kemarahan", "Kesedihan"],
    jawaban: 0,
    penjelasan: "Bayam mudah tumbuh, jadi lambang kehidupan yang terus tumbuh.",
  },
];