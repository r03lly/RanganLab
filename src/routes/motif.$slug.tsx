import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MotifFabric } from "@/components/sirangan/MotifFabric";
import { MotifImage } from "@/components/sirangan/MotifImage";
import { Mascot } from "@/components/sirangan/Mascot";
import { getMotif, semuaMotif, steps } from "@/lib/sirangan-data";
import { useState } from "react";

export const Route = createFileRoute("/motif/$slug")({
  loader: ({ params }) => {
    const motif = getMotif(params.slug);
    if (!motif) throw notFound();
    return { motif };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Motif tidak ditemukan | Si Rangan" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = `Motif ${loaderData.motif.nama} — Cerita & Filosofi | Si Rangan`;
    const d = `${loaderData.motif.filosofi} ${loaderData.motif.asal}`;
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: MotifDetail,
});

const palette = [
  { nama: "Biru indigo", hex: "#26467f" },
  { nama: "Kuning kunyit", hex: "#dda01a" },
  { nama: "Hijau sungkai", hex: "#5c7d3c" },
  { nama: "Merah buah naga", hex: "#b83a72" },
];

function MotifDetail() {
  const { motif } = Route.useLoaderData();
  const [warna, setWarna] = useState(palette[0]!.hex);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Link to="/motif" className="text-sm font-semibold text-primary">
        ← Semua motif
      </Link>

      <div className="mt-4 grid gap-6 md:grid-cols-[260px_1fr]">
        <div>
          <MotifImage
            slug={motif.slug}
            nama={motif.nama}
            patternId={motif.patternId}
            color={warna}
            eager
            className="w-full rounded-2xl shadow-[var(--shadow-lift)]"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Gambar motif dari Buku Profil Produk Unggulan Sasirangan Kalsel.
          </p>
          <p className="mt-4 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            🎨 Warnai versi kain
          </p>
          <MotifFabric
            slug={motif.slug}
            nama={motif.nama}
            patternId={motif.patternId}
            color={warna}
            className="mt-2 w-full rounded-2xl"
          />
          <div className="mt-2 flex gap-2">
            {palette.map((p) => (
              <button
                key={p.hex}
                type="button"
                onClick={() => setWarna(p.hex)}
                aria-label={p.nama}
                aria-pressed={warna === p.hex}
                className={`h-10 w-10 rounded-full ring-offset-2 ring-offset-background transition-transform hover:scale-110 ${
                  warna === p.hex ? "ring-2 ring-primary" : "ring-1 ring-border"
                }`}
                style={{ backgroundColor: p.hex }}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-extrabold">
            {motif.emoji} {motif.nama}
          </h1>
          <p className="mt-2 text-base text-muted-foreground">{motif.asal}</p>

          <div className="surface-card mt-5 p-5">
            <p className="font-display font-bold text-primary">Makna motif</p>
            <p className="mt-1 text-sm">{motif.filosofi}</p>
          </div>

          <div className="surface-card mt-4 p-5">
            <p className="font-display font-bold text-primary">🔊 Cerita motif</p>
            <p className="mt-1 text-sm leading-relaxed">{motif.cerita}</p>
            <ListenButton text={`${motif.nama}. ${motif.cerita}`} />
          </div>

          <div className="mt-4 rounded-2xl bg-secondary p-4 text-sm text-secondary-foreground">
            Warna yang cocok: <strong>{motif.warnaSaran}</strong>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/color-lab"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
            >
              🧪 Coba warnanya
            </Link>
            <Link
              to="/kuis"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-bold"
            >
              🎮 Mainkan kuis
            </Link>
          </div>
        </div>
      </div>

      <div className="surface-card mt-10 p-5">
        <p className="font-display font-bold text-primary">🧵 Praktikkan motif ini di tutorial</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Langkah panduan bergambar untuk mewujudkan motif {motif.nama} pada kain.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {steps.map((s) => (
            <li key={s.no}>
              <Link
                to="/tutorial"
                search={{ langkah: s.no }}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:bg-secondary"
              >
                <span className="text-xl">{s.emoji}</span>
                <span>
                  <span className="block text-sm font-bold">
                    Tahap {s.no}: {s.nama}
                  </span>
                  <span className="block text-xs text-muted-foreground">{s.ringkas}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <Mascot>
          <p>Sudah kenal motifnya? Sekarang ambil kain latihan dan mulai menjelujur ya!</p>
        </Mascot>
      </div>

      <div className="mt-10">
        <p className="text-sm font-bold text-muted-foreground">
          Motif {motif.kategori === "modern" ? "modern" : "tradisional"} lainnya
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {semuaMotif
            .filter(
              (m) =>
                m.slug !== motif.slug &&
                (m.kategori === "modern") === (motif.kategori === "modern"),
            )
            .map((m) => (
              <Link
                key={m.slug}
                to="/motif/$slug"
                params={{ slug: m.slug }}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
              >
                {m.emoji} {m.nama}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

function ListenButton({ text }: { text: string }) {
  const [playing, setPlaying] = useState(false);

  const speak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "id-ID";
    utter.rate = 0.95;
    utter.onend = () => setPlaying(false);
    setPlaying(true);
    window.speechSynthesis.speak(utter);
  };

  return (
    <button
      type="button"
      onClick={speak}
      className="mt-4 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground"
    >
      {playing ? "⏹ Hentikan" : "🔊 Dengarkan cerita"}
    </button>
  );
}