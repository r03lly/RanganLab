export type Lang = "id" | "en";

export type StepText = {
  nama: string;
  ringkas: string;
  deskripsi: string;
  tujuan: string[];
  langkah: string[];
  tips: string;
};

/** Terjemahan Inggris untuk tiap tahap praktik (nomor tahap sebagai kunci). */
export const stepsEn: Record<number, StepText> = {
  1: {
    nama: "Getting to Know the Motifs",
    ringkas: "Pick a motif card and learn its story.",
    deskripsi:
      "In this stage students get to know the various Sasirangan motifs of South Kalimantan and the meaning behind them before starting the practice.",
    tujuan: [
      "Name at least 3 Sasirangan motifs.",
      "Explain the meaning or story of one chosen motif.",
      "Redraw the basic shape of a motif neatly.",
    ],
    langkah: [
      "Take a motif card from Si Rangan's suitcase.",
      "Observe its shape together with your deskmate.",
      "Scan the QR code on the card to hear the motif's story.",
      "Redraw the motif on practice paper.",
    ],
    tips: "Ask students to guess: what everyday object does this motif look like?",
  },
  2: {
    nama: "Basting Stitch",
    ringkas: "Sewing the motif lines with a blunt needle.",
    deskripsi:
      "Students learn the basting (jelujur) technique: sewing back and forth along the motif lines, which will later resist the dye.",
    tujuan: [
      "Thread a blunt needle correctly.",
      "Sew a basting stitch following the motif line.",
      "Work carefully and safely while using a needle.",
    ],
    langkah: [
      "Draw the motif lines on the practice cloth with a pencil.",
      "Thread the blunt needle and knot the end.",
      "Sew back and forth along the line (basting).",
      "Do not pull the thread until one line is finished.",
    ],
    tips: "Use brightly coloured thread so students can see their stitches clearly.",
  },
  3: {
    nama: "Gathering & Tying",
    ringkas: "Pulling the thread so the fabric gathers tightly.",
    deskripsi:
      "Menyisit means pulling the basting thread until the fabric gathers tightly, then tying it firmly so dye cannot reach that area.",
    tujuan: [
      "Pull and tighten the gathers evenly.",
      "Make a strong knot.",
      "Explain why the tied parts stay white.",
    ],
    langkah: [
      "Slowly pull the thread end until the fabric gathers.",
      "Tighten the gathers so the dye cannot enter.",
      "Tie the thread end with a strong knot.",
      "Check: the tied parts will remain white.",
    ],
    tips: "This is the secret of Sasirangan — 'sirang' means sewn and tied.",
  },
  4: {
    nama: "Dyeing",
    ringkas: "Dipping the cloth into natural dye.",
    deskripsi:
      "Students dip the tied cloth into a natural dye bath and observe how the colour soaks into the fibres.",
    tujuan: [
      "Dye the cloth with the right measure and timing.",
      "Compare the result of a single dip and repeated dips.",
      "Keep the work area clean and safe while handling dye.",
    ],
    langkah: [
      "Wet the cloth with clean water.",
      "Dip it into the dye and press gently for 3-5 minutes.",
      "Lift and air it, repeat for a darker colour.",
      "Rinse until the water runs clear.",
    ],
    tips: "Try the Digital Color Lab first before dyeing real fabric.",
  },
  5: {
    nama: "Opening & Drying",
    ringkas: "Removing the thread and revealing the motif.",
    deskripsi:
      "The final stage: open the stitches, see the motif appear, then dry the cloth in a shaded place.",
    tujuan: [
      "Remove the basting thread without damaging the cloth.",
      "Identify the motif formed on the cloth.",
      "Dry and care for the finished cloth correctly.",
    ],
    langkah: [
      "Carefully cut the thread knots.",
      "Remove the basting thread from the cloth.",
      "Open the cloth slowly — the motif appears!",
      "Dry it in the shade until completely dry.",
    ],
    tips: "The most exciting moment: ask students to shout 'wow' together as the cloth opens.",
  },
};

/** Label antarmuka halaman tutorial dalam dua bahasa. */
export const ui = {
  id: {
    eyebrow: "Fitur 3 · Panduan Bergambar",
    title: "Panduan Tahapan Praktik",
    desc: "Ikuti tahapan satu per satu. Ketuk gambar untuk memperbesar detail langkahnya.",
    stepOf: (a: number, b: number) => `Tahap ${a} dari ${b}`,
    stage: "Tahap",
    zoom: "🔍 Perbesar",
    tapCaption: "Ketuk untuk membaca langkah lebih detail",
    hideDetail: "Sembunyikan detail",
    goal: "🎯 Tujuan belajar",
    steps: "🧵 Langkah kegiatan",
    tips: "Tips guru:",
    markDone: "Tandai tahap selesai",
    unmark: "Batalkan tanda selesai",
    prev: "← Sebelumnya",
    next: "Selanjutnya →",
    mascot: (a: number, b: number) =>
      `Hebat! ${a} dari ${b} tahap selesai. Kalau semua sudah, yuk kerjakan mini kuisnya.`,
    quiz: "🎮 Mulai Mini Kuis",
    langLabel: "Bahasa",
  },
  en: {
    eyebrow: "Feature 3 · Illustrated Guide",
    title: "Step-by-Step Practice Guide",
    desc: "Follow the stages one by one. Tap an image to zoom in on the details.",
    stepOf: (a: number, b: number) => `Stage ${a} of ${b}`,
    stage: "Stage",
    zoom: "🔍 Zoom in",
    tapCaption: "Tap to read the steps in more detail",
    hideDetail: "Hide details",
    goal: "🎯 Learning goals",
    steps: "🧵 Activity steps",
    tips: "Teacher tips:",
    markDone: "Mark stage as done",
    unmark: "Undo completed mark",
    prev: "← Previous",
    next: "Next →",
    mascot: (a: number, b: number) =>
      `Great! ${a} of ${b} stages done. Once you finish them all, try the mini quiz.`,
    quiz: "🎮 Start Mini Quiz",
    langLabel: "Language",
  },
} as const;
