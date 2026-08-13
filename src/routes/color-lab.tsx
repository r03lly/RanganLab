import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/sirangan/PageHeader";
import { MotifSwatch } from "@/components/sirangan/MotifSwatch";
import { dyes, motifs } from "@/lib/sirangan-data";
import { useT } from "@/lib/i18n";
import { dyeText } from "@/lib/content-i18n";

const title = "Digital Color Lab — Pewarna Alam Sasirangan | Si Rangan";
const desc =
  "Eksperimen digital sebelum mencelup kain: pilih bahan pewarna alam seperti indigofera, kunyit, daun sungkai, atau buah naga, atur konsentrasi, lalu lihat prediksi warna kain.";

export const Route = createFileRoute("/color-lab")({
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
  component: ColorLab,
});

function ColorLab() {
  const { lang, t } = useT();
  const l10n = t.lab;
  const tahapan = l10n.steps;

  const [dyeId, setDyeId] = useState(dyes[0]!.id);
  const [level, setLevel] = useState(2);
  const [motifIdx, setMotifIdx] = useState(0);

  const dye = dyeText(dyes.find((d) => d.id === dyeId)!, lang);
  const motif = motifs[motifIdx]!;
  const warna = dye.warna[(level - 1) as 0 | 1 | 2];
  const namaWarna = dye.namaWarna[(level - 1) as 0 | 1 | 2];

  return (
    <div>
      <PageHeader eyebrow={l10n.eyebrow} title={l10n.title} desc={l10n.desc} />

      <div className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-xl font-bold">{l10n.s1}</h2>
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

        <h2 className="mt-10 text-xl font-bold">{l10n.s2}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
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

        <h2 className="mt-10 text-xl font-bold">{l10n.s3}</h2>
        <ol className="mt-4 flex flex-wrap items-center gap-2 text-sm">
          {tahapan.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span
                className="rounded-full px-3 py-1.5 font-semibold"
                style={{
                  backgroundColor: i === 0 ? "var(--secondary)" : warna,
                  color: i === 0 ? "var(--secondary-foreground)" : level === 1 ? "#333" : "#fff",
                }}
              >
                {i === 0 ? `${dye.emoji} ${dye.nama}` : step}
              </span>
              {i < tahapan.length - 1 && <span className="text-muted-foreground">→</span>}
            </li>
          ))}
        </ol>

        <div className="surface-card mt-6 grid gap-6 p-6 md:grid-cols-[240px_1fr]">
          <div>
            <MotifSwatch
              patternId={motif.patternId}
              color={warna}
              className="w-full rounded-2xl shadow-[var(--shadow-lift)] transition-all duration-500"
            />
            <div className="mt-3 flex flex-wrap gap-2">
              {motifs.slice(0, 6).map((m, i) => (
                <button
                  key={m.slug}
                  type="button"
                  onClick={() => setMotifIdx(i)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    i === motifIdx ? "bg-primary text-primary-foreground" : "bg-secondary"
                  }`}
                >
                  {m.nama}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{l10n.predict}</p>
            <p className="font-display text-3xl font-extrabold" style={{ color: warna }}>
              {namaWarna}
            </p>
            <p className="mt-3 text-sm">
              <strong>{l10n.didYouKnow}</strong> {dye.fakta}
            </p>
            <p className="mt-3 rounded-xl bg-secondary p-4 text-sm text-secondary-foreground">
              {l10n.note}
            </p>
            <Link
              to="/tutorial"
              className="mt-5 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground"
            >
              {l10n.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
