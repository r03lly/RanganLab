import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/sirangan/PageHeader";
import { Mascot } from "@/components/sirangan/Mascot";
import { MotifFabric } from "@/components/sirangan/MotifFabric";
import { MotifImage } from "@/components/sirangan/MotifImage";
import { motifImages } from "@/lib/motif-images";
import { dyes, motifs } from "@/lib/sirangan-data";
import { useT } from "@/lib/i18n";
import { dyeText, motifText } from "@/lib/content-i18n";

const title = "Virtual Sasirangan Designer — Desain Kain Sebelum Praktik | Si Rangan";
const desc =
  "Rancang Sasiranganmu secara digital sebelum membuat kain sungguhan: pilih motif, pilih warna pewarna alam, lihat pratinjau kain, lalu praktikkan tahapannya di koper Si Rangan.";

export const Route = createFileRoute("/designer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Designer,
});

/** Motif yang punya gambar buku — dipakai agar pratinjau kainnya akurat. */
const pilihanMotif = motifs.filter((m) => motifImages[m.slug]);

function Designer() {
  const { lang, t } = useT();
  const d10n = t.designer;

  const [motifIdx, setMotifIdx] = useState(0);
  const [dyeId, setDyeId] = useState(dyes[0]!.id);
  const [level, setLevel] = useState(2);

  const motif = motifText(pilihanMotif[motifIdx]!, lang);
  const dye = dyeText(dyes.find((d) => d.id === dyeId)!, lang);
  const warna = dye.warna[(level - 1) as 0 | 1 | 2];
  const namaWarna = dye.namaWarna[(level - 1) as 0 | 1 | 2];

  return (
    <div>
      <PageHeader eyebrow={d10n.eyebrow} title={d10n.title} desc={d10n.desc} />

      <div className="mx-auto max-w-5xl px-4 py-10">
        <Mascot eager>{d10n.mascot}</Mascot>

        {/* Langkah 1: Pilih motif */}
        <h2 className="mt-8 text-xl font-bold">{d10n.s1}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{d10n.s1desc}</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {pilihanMotif.map((raw, i) => {
            const m = motifText(raw, lang);
            return (
              <button
                key={m.slug}
                type="button"
                onClick={() => setMotifIdx(i)}
                aria-pressed={i === motifIdx}
                className={`surface-card overflow-hidden p-2 text-left transition-transform hover:-translate-y-1 ${
                  i === motifIdx ? "ring-2 ring-primary" : ""
                }`}
              >
                <MotifImage
                  slug={m.slug}
                  nama={m.nama}
                  patternId={m.patternId}
                  className="aspect-square w-full rounded-xl object-cover"
                />
                <p className="mt-2 flex items-center gap-1 font-display text-sm font-bold">
                  <span>{m.emoji}</span> {m.nama}
                </p>
                <p className="text-xs text-muted-foreground">{m.warnaSaran}</p>
              </button>
            );
          })}
        </div>

        {/* Langkah 2: Pilih warna */}
        <h2 className="mt-10 text-xl font-bold">{d10n.s2}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {dyes.map((raw) => {
            const d = dyeText(raw, lang);
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setDyeId(d.id)}
                className={`surface-card p-4 text-left transition-transform hover:-translate-y-1 ${
                  d.id === dyeId ? "ring-2 ring-primary" : ""
                }`}
              >
                <span className="text-3xl">{d.emoji}</span>
                <p className="mt-1 font-display font-bold">{d.nama}</p>
                <p className="text-xs text-muted-foreground">{d.bagian}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-muted-foreground">{d10n.density}</span>
          {[1, 2, 3].map((lv) => (
            <button
              key={lv}
              type="button"
              onClick={() => setLevel(lv)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                level === lv
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground"
              }`}
            >
              {t.common.levels[lv - 1]}
            </button>
          ))}
        </div>

        {/* Langkah 3: Pratinjau */}
        <h2 className="mt-10 text-xl font-bold">{d10n.s3}</h2>
        <div className="surface-card mt-4 grid gap-6 p-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              {d10n.original}
            </p>
            <MotifImage
              slug={motif.slug}
              nama={motif.nama}
              patternId={motif.patternId}
              className="mt-2 w-full rounded-2xl shadow-[var(--shadow-lift)]"
            />
            <p className="mt-2 font-display text-sm font-bold">
              {motif.emoji} {motif.nama}
            </p>
            <p className="text-xs text-muted-foreground">{motif.filosofi}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              {d10n.afterDye(dye.nama)}
            </p>
            <MotifFabric
              slug={motif.slug}
              nama={motif.nama}
              patternId={motif.patternId}
              color={warna}
              className="mt-2 aspect-square w-full rounded-2xl shadow-[var(--shadow-lift)]"
            />
            <p className="mt-3 font-display text-2xl font-extrabold" style={{ color: warna }}>
              {namaWarna}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {d10n.dyeLabel} <strong>{dye.nama}</strong> · {d10n.densityWord}{" "}
              {t.common.levelsLower[level - 1]}.
            </p>
            <p className="mt-3 rounded-xl bg-secondary p-4 text-sm text-secondary-foreground">
              💡 {dye.fakta}
            </p>
          </div>
        </div>

        {/* CTA: Desain digital → Praktik fisik */}
        <div className="mt-8 rounded-2xl bg-gradient-to-br from-primary to-accent p-6 text-center text-primary-foreground shadow-[var(--shadow-lift)] sm:p-8">
          <p className="font-display text-2xl font-extrabold sm:text-3xl">{d10n.ctaTitle}</p>
          <p className="mx-auto mt-2 max-w-xl text-sm opacity-90">{d10n.ctaDesc}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              to="/tutorial"
              className="inline-block rounded-full bg-primary-foreground px-6 py-3 text-sm font-bold text-primary"
            >
              {d10n.ctaGuide}
            </Link>
            <Link
              to="/color-lab"
              className="inline-block rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-bold text-primary-foreground"
            >
              {d10n.ctaLab}
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <Mascot>{d10n.mascotEnd}</Mascot>
        </div>
      </div>
    </div>
  );
}
