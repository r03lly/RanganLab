import type { Dye, Motif, QuizQuestion } from "@/lib/sirangan-data";
import type { Lang } from "@/lib/tutorial-i18n";

/** Terjemahan Inggris untuk konten motif (kunci: slug). */
type MotifEn = { asal: string; filosofi: string; cerita: string; warnaSaran: string };

export const motifEn: Record<string, MotifEn> = {
  "hiris-pudak": {
    asal: "From the long, fragrant pudak (pandan) leaf.",
    filosofi: "A symbol of a good name and of being useful to others.",
    cerita:
      "Pudak, or pandan, grows in the yards of Banjar homes. Its leaves are long and fragrant, used to colour cakes green and to arrange flowers. The Hiris Pudak motif looks like neatly lined-up leaf slices.",
    warnaSaran: "Sungkai leaf green",
  },
  "kembang-kacang": {
    asal: "From the flowers and pods of long beans in the home garden.",
    filosofi: "A symbol of family closeness and togetherness.",
    cerita:
      "Long beans are often cooked with pumpkin in Banjar kitchens. Because they are always on the family table, this motif became a symbol of warmth and kinship.",
    warnaSaran: "Sungkai leaf green",
  },
  "bayam-raja": {
    asal: "From the king spinach leaf that curves upward.",
    filosofi: "A symbol of dignity and respect for ancestors.",
    cerita:
      "The Bayam Raja motif is made of curved lines standing upright. It is usually used as a frame or border for other motifs, like a guard standing at the edge of the cloth.",
    warnaSaran: "Turmeric yellow",
  },
  "kulat-karikit": {
    asal: "From the tiny mushrooms that grow on tree trunks.",
    filosofi: "A symbol of independence without harming others.",
    cerita:
      "Kulat karikit clings to a tree trunk but never makes the tree sick — it can live on its own. The motif resembles haruan fish teeth, only much smaller.",
    warnaSaran: "Wood brown",
  },
  "ombak-sinapur-karang": {
    asal: "From big waves crashing against coral rock.",
    filosofi: "A symbol of struggle against life's challenges.",
    cerita:
      "Strong wind raises big waves that strike the coral, yet the coral still stands. This motif reminds us to stay strong even when problems come.",
    warnaSaran: "Indigo blue",
  },
  "bintang-behambur": {
    asal: "From the stars scattered across the night sky.",
    filosofi: "A symbol of the greatness of God the Creator.",
    cerita:
      "When we look up at the night sky, the stars are countless. That is Bintang Behambur — scattered stars, a reminder of how vast creation is.",
    warnaSaran: "Indigo blue",
  },
  "naga-balimbur": {
    asal: "From the Banjar folk tale of a dragon bathing in the river.",
    filosofi: "A symbol of joy and happiness.",
    cerita:
      "A Banjar folk tale tells of a dragon bathing (balimbur) merrily in the river under the morning sun. This motif paints that feeling of joy.",
    warnaSaran: "Dragon fruit pink",
  },
  jajumputan: {
    asal: "From the word jumput, meaning to pick with the hand.",
    filosofi: "A symbol of offering and good manners.",
    cerita:
      "Jajumputan comes from jumput, to pick. What is picked — usually flowers — is carried in the hand as a sign of respect for others.",
    warnaSaran: "Dragon fruit pink",
  },
  "turun-dayang": {
    asal: "From a small-leafed plant that hangs down over rocky hills.",
    filosofi: "A symbol of the grace of palace maidens.",
    cerita:
      "From afar, the little hanging leaves look like long wavy hair. Long ago this motif was worn by palace maidens during royal ceremonies.",
    warnaSaran: "Soft purple",
  },
  "kembang-tampuk-manggis": {
    asal: "From the flower-shaped calyx at the base of a mangosteen.",
    filosofi: "A symbol of honesty — outside and inside must match.",
    cerita:
      "Count the petals under a mangosteen: there are five to seven. Slice the fruit open and the number of segments matches exactly! That is why this motif stands for honesty.",
    warnaSaran: "Mangosteen purple",
  },
  "daun-jaruju": {
    asal: "From the thorny jaruju leaf that grows along riverbanks.",
    filosofi: "A symbol of protection and warding off misfortune.",
    cerita:
      "Jaruju grows in muddy ground by the river. Banjar people used to place its thorny leaves in kitchen corners to chase away mice, so the motif is seen as a house protector.",
    warnaSaran: "Deep green",
  },
  "kangkung-kaombakan": {
    asal: "From water spinach stems swaying in the waves.",
    filosofi: "A symbol of resilience in hardship.",
    cerita:
      "Water spinach lives in water. Even when the water ripples and waves, its long stems do not break — they simply sway. The motif teaches us to be flexible yet strong.",
    warnaSaran: "Water spinach green",
  },
  "gigi-haruan": {
    asal: "From the sharp teeth of the haruan (snakehead) fish of Banjar swamps.",
    filosofi: "A symbol of sharp thinking and courage.",
    cerita:
      "The haruan fish is black, its flesh soft and its teeth sharp. Because of those sharp teeth, the motif became a symbol of a sharp mind and bravery.",
    warnaSaran: "Indigo blue",
  },
  "kambang-sakaki": {
    asal: "Kambang means flower in the Banjar language.",
    filosofi: "A symbol of beauty and cheerfulness.",
    cerita:
      "Flowers are a symbol of beauty for Banjar people. Flower shapes are carved on traditional Banjar houses as decoration, and they appear on Sasirangan cloth too.",
    warnaSaran: "Dragon fruit pink",
  },
  "ular-lidi": {
    asal: "From the small lidi snake in Banjar folk tales.",
    filosofi: "A symbol of cleverness, speed, and alertness.",
    cerita:
      "The lidi snake is small and slender. It is quick and nimble and good at protecting itself. This motif teaches us to be clever and watchful.",
    warnaSaran: "Teal green",
  },
  "mayang-maurai": {
    asal: "From the areca blossom used in the badudus ceremony.",
    filosofi: "A symbol of honour in tradition.",
    cerita:
      "In the bridal bathing ceremony (badudus), an areca blossom is dipped in flower water and poured over the bride and groom from head to toe. The motif symbolises that act of honour.",
    warnaSaran: "Turmeric yellow",
  },
  "ramak-sahang": {
    asal: "From sahang (pepper) ground finely in a mortar.",
    filosofi: "A symbol of hard work and care.",
    cerita:
      "Ramak means crushed and sahang means pepper, so Ramak Sahang is ground pepper. The motif looks like a doubled Hiris Pudak broken into small pieces.",
    warnaSaran: "Spice brown",
  },
  gelombang: {
    asal: "From water waves rising and falling.",
    filosofi: "A symbol of patience through life's ups and downs.",
    cerita:
      "Life is like a wheel and like waves: sometimes up, sometimes down. The Gelombang motif reminds us to be patient and persistent through it all.",
    warnaSaran: "Indigo blue",
  },
  "daun-katu": {
    asal: "From the katuk leaf grown in home gardens.",
    filosofi: "A symbol of a plant that brings many benefits to others.",
    cerita:
      "Katuk leaves can be cooked as a vegetable, help nursing mothers, boost immunity, and are good for the eyes. This motif invites us to be useful to others.",
    warnaSaran: "Leaf green",
  },
  "hiris-gagatas": {
    asal: "From slices of traditional Banjar cakes such as amparan tatak and layer cake.",
    filosofi: "A symbol of beauty and gentleness.",
    cerita:
      "Banjar cakes like amparan tatak, sarimuka, and layer cake are cut neatly on the diagonal. Those slices became the Hiris Gagatas motif.",
    warnaSaran: "Turmeric yellow",
  },
  berlian: {
    asal: "A motif of Banjar Regency, inspired by Martapura the City of Diamonds.",
    filosofi: "A symbol of the sparkle and natural wealth of the Banua.",
    cerita:
      "The Berlian motif is copyright-registered with the Ministry of Law and Human Rights and may be used by all artisans in Banjar Regency. Its shape is inspired by the glittering diamonds of Martapura.",
    warnaSaran: "Indigo blue",
  },
  ketupat: {
    asal: "A motif of Hulu Sungai Selatan, from the Kandangan rice dumpling.",
    filosofi: "A symbol of unity, humility, and shared hope.",
    cerita:
      "Ketupat Kandangan is rice wrapped in woven young coconut leaves, usually eaten with haruan fish in coconut milk. The weave symbolises lives connected to each other toward a common good.",
    warnaSaran: "Water spinach green",
  },
  gradasi: {
    asal: "A new artisan creation blending several colours.",
    filosofi: "A symbol of beauty and cheer.",
    cerita:
      "The Gradasi motif blends several colours that flow softly from light to dark. It suits festive occasions, for both tops and bottoms.",
    warnaSaran: "Bright colour blend",
  },
  sarigading: {
    asal: "A creative motif of tiny, tightly packed shapes.",
    filosofi: "A symbol of strength and dignity.",
    cerita:
      "The Sarigading motif is small and intricate, so it takes longer and needs more care to make. That is why Sarigading Sasirangan cloth is usually more expensive.",
    warnaSaran: "Indigo blue",
  },
  pelangi: {
    asal: "One of the newest artisan creations.",
    filosofi: "A symbol of dynamic youthful spirit.",
    cerita:
      "The Pelangi motif uses many more colours than usual Sasirangan, similar to Palembang fabrics. It is made to match the taste of today's young people.",
    warnaSaran: "Bright rainbow colours",
  },
  "sasirangan-bordir": {
    asal: "A technique innovation: Sasirangan cloth embroidered after dyeing.",
    filosofi: "A symbol of innovation without leaving tradition behind.",
    cerita:
      "Once the Sasirangan cloth is finished, the motif lines are embroidered so they look bolder and brighter. The traditional motifs stay the same; only the making changes. Demand keeps rising.",
    warnaSaran: "Turmeric yellow",
  },
  "saringkel-pandan": {
    asal: "A new motif from Tanah Laut Regency (Sasirangan Ringkel Tuntung Pandang).",
    filosofi: "A symbol of creativity and teamwork of techniques.",
    cerita:
      "Saringkel Pandan combines three techniques at once: patterning, basting, and smocking. After dyeing, a crinkled (ringkel) texture appears, paired with Sasirangan motifs such as deer, corn, or orchid.",
    warnaSaran: "Teal green",
  },
};

/** Ambil teks motif sesuai bahasa aktif. */
export function motifText(m: Motif, lang: Lang) {
  if (lang === "id") return m;
  const en = motifEn[m.slug];
  return en ? { ...m, ...en } : m;
}

/** Terjemahan Inggris untuk bahan pewarna (kunci: id). */
type DyeEn = { nama: string; bagian: string; fakta: string; namaWarna: [string, string, string] };

export const dyeEn: Record<string, DyeEn> = {
  indigofera: {
    nama: "Indigofera",
    bagian: "Leaves soaked overnight",
    fakta: "Indigofera leaves are green, but once the solution meets air it turns blue!",
    namaWarna: ["Sky blue", "Medium blue", "Indigo blue"],
  },
  kunyit: {
    nama: "Turmeric",
    bagian: "Rhizome grated then boiled",
    fakta: "Turmeric is also used in cooking. Its yellow comes from curcumin.",
    namaWarna: ["Light yellow", "Turmeric yellow", "Deep yellow"],
  },
  sungkai: {
    nama: "Sungkai Leaf",
    bagian: "Young leaves boiled",
    fakta: "Sungkai grows widely in Kalimantan and gives a brownish green colour.",
    namaWarna: ["Light green", "Leaf green", "Deep green"],
  },
  "buah-naga": {
    nama: "Dragon Fruit",
    bagian: "Skin and flesh mashed",
    fakta: "The pink of dragon fruit comes from betacyanin.",
    namaWarna: ["Soft pink", "Bright pink", "Magenta"],
  },
};

/** Ambil teks bahan pewarna sesuai bahasa aktif. */
export function dyeText(d: Dye, lang: Lang) {
  if (lang === "id") return d;
  const en = dyeEn[d.id];
  return en ? { ...d, ...en } : d;
}

/** Terjemahan Inggris soal kuis (urutan sama dengan `quiz`). */
export const quizEn: QuizQuestion[] = [
  {
    pertanyaan: "Which region does Sasirangan cloth come from?",
    pilihan: ["South Kalimantan", "Bali", "Papua"],
    jawaban: 0,
    penjelasan: "Sasirangan is the traditional cloth of the Banjar people of South Kalimantan.",
  },
  {
    pertanyaan: "The word 'sirang' in Sasirangan means...",
    pilihan: ["Painted", "Sewn and tied", "Machine printed"],
    jawaban: 1,
    penjelasan: "Sasirangan comes from 'sirang', which means sewn and then tied.",
  },
  {
    pertanyaan: "Why must the cloth be basted and tied tightly?",
    pilihan: [
      "So the cloth does not tear",
      "So the dye cannot enter and the motif appears",
      "So the cloth smells nice",
    ],
    jawaban: 1,
    penjelasan:
      "Tightly tied parts are not reached by the dye, so they stay white and form the motif.",
  },
  {
    pertanyaan: "Which natural material produces a blue colour?",
    pilihan: ["Turmeric", "Indigofera", "Dragon fruit"],
    jawaban: 1,
    penjelasan: "Indigofera leaves produce the distinctive indigo blue.",
  },
  {
    pertanyaan: "Turmeric produces the colour...",
    pilihan: ["Yellow", "Green", "Black"],
    jawaban: 0,
    penjelasan: "Turmeric contains curcumin, which gives a yellow colour.",
  },
  {
    pertanyaan: "The Gigi Haruan motif is inspired by...",
    pilihan: ["Haruan fish teeth", "Crocodile teeth", "Spinach leaves"],
    jawaban: 0,
    penjelasan: "Haruan is the snakehead fish, a typical animal of Kalimantan swamps.",
  },
  {
    pertanyaan: "The correct order for making Sasirangan is...",
    pilihan: [
      "Dyeing → basting → gathering",
      "Basting → gathering → dyeing",
      "Gathering → dyeing → basting",
    ],
    jawaban: 1,
    penjelasan: "Sew first (basting), pull the thread (gathering), then dip in dye.",
  },
  {
    pertanyaan: "The Bayam Raja motif symbolises...",
    pilihan: ["Fertility and growth", "Anger", "Sadness"],
    jawaban: 0,
    penjelasan: "Spinach grows easily, so it symbolises a life that keeps growing.",
  },
];
