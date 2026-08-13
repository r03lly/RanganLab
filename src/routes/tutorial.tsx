import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/sirangan/PageHeader";
import { Mascot } from "@/components/sirangan/Mascot";
import { ImageLightbox } from "@/components/sirangan/ImageLightbox";
import { steps } from "@/lib/sirangan-data";
import { tutorialImages } from "@/lib/tutorial-images";
import { stepsEn, ui, type StepText } from "@/lib/tutorial-i18n";
import { useLang } from "@/lib/lang-context";

const title = "Panduan Bergambar Tahapan Membuat Sasirangan | Si Rangan";
const desc =
  "Lima tahap praktik Sasirangan untuk siswa SD lengkap dengan foto peraga, tujuan belajar, navigasi langkah, pilihan bahasa Indonesia/Inggris, dan zoom gambar.";

export const Route = createFileRoute("/tutorial")({
  validateSearch: (search: Record<string, unknown>): { langkah?: number } => {
    const raw = Number(search["langkah"]);
    return Number.isFinite(raw) && raw >= 1 && raw <= 5 ? { langkah: raw } : {};
  },

  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tutorial,
});

function Tutorial() {
  const { langkah } = Route.useSearch();
  const { lang } = useLang();
  const [aktif, setAktif] = useState(langkah ?? 1);

  const [selesai, setSelesai] = useState<number[]>([]);
  const [zoomBuka, setZoomBuka] = useState(false);
  const [detailBuka, setDetailBuka] = useState(false);

  const t = ui[lang];
  const base = steps.find((s) => s.no === aktif)!;
  const step: StepText = lang === "en" ? (stepsEn[base.no] ?? base) : base;

  const toggle = (no: number) =>
    setSelesai((prev) => (prev.includes(no) ? prev.filter((x) => x !== no) : [...prev, no]));
  const goto = (no: number) => {
    setAktif(Math.min(steps.length, Math.max(1, no)));
    setDetailBuka(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const namaTahap = (no: number) => {
    const id = steps.find((s) => s.no === no)?.nama ?? "";
    return lang === "en" ? (stepsEn[no]?.nama ?? id) : id;
  };

  const gambar = tutorialImages[base.no] ?? "";
  const caption = `${t.stage} ${base.no}: ${step.nama} — ${step.ringkas}`;

  return (
    <div>
      <PageHeader eyebrow={t.eyebrow} title={t.title} desc={t.desc} />

      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Indikator nomor langkah */}
        <nav aria-label={t.title} className="flex flex-wrap items-center gap-2">
          {steps.map((s) => {
            const done = selesai.includes(s.no);
            const current = s.no === aktif;
            return (
              <button
                key={s.no}
                type="button"
                onClick={() => goto(s.no)}
                aria-current={current ? "step" : undefined}
                className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  current
                    ? "bg-primary text-primary-foreground"
                    : done
                      ? "bg-secondary text-secondary-foreground"
                      : "border border-border bg-card text-muted-foreground"
                }`}
                title={`${t.stage} ${s.no}: ${namaTahap(s.no)}`}
              >
                {done && !current ? "✓" : s.no}
              </button>
            );
          })}
          <span className="ml-1 text-sm font-bold text-muted-foreground">
            {t.stepOf(aktif, steps.length)} · {step.nama}
          </span>
        </nav>

        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${(aktif / steps.length) * 100}%` }}
          />
        </div>

        <article className="surface-card mt-6 p-6">
          <figure>
            <button
              type="button"
              onClick={() => setZoomBuka(true)}
              className="group relative block w-full overflow-hidden rounded-2xl"
              aria-label={`${t.zoom} — ${t.stage} ${base.no}`}
            >
              <img
                src={gambar}
                alt={`${t.stage} ${base.no}: ${step.nama}`}
                width={1088}
                height={608}
                loading="lazy"
                decoding="async"
                className="aspect-video w-full object-cover transition-transform group-hover:scale-105"
              />
              <span className="absolute bottom-3 right-3 rounded-full bg-card/90 px-3 py-1 text-xs font-bold">
                {t.zoom}
              </span>
            </button>

            {/* Caption accordion */}
            <figcaption className="mt-2">
              <button
                type="button"
                onClick={() => setDetailBuka((v) => !v)}
                aria-expanded={detailBuka}
                className="mx-auto block w-full rounded-xl px-3 py-2 text-center text-xs text-muted-foreground transition-colors hover:bg-muted"
              >
                {base.emoji} {caption}
                <span className="mt-1 block font-bold text-primary">
                  {detailBuka ? `▲ ${t.hideDetail}` : `▼ ${t.tapCaption}`}
                </span>
              </button>
              {detailBuka && (
                <div className="mt-2 rounded-xl border border-border bg-card p-4 text-left">
                  <p className="text-sm text-muted-foreground">{step.deskripsi}</p>
                  <ol className="mt-3 space-y-2 text-sm">
                    {step.langkah.map((l, i) => (
                      <li key={l} className="flex gap-2">
                        <span className="font-bold text-primary">{i + 1}.</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </figcaption>
          </figure>

          <h2 className="mt-6 text-2xl font-bold">
            {t.stage} {base.no}: {step.nama}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{step.deskripsi}</p>

          <div className="mt-5 rounded-xl border border-border bg-card p-4">
            <h3 className="text-sm font-bold">{t.goal}</h3>
            <ul className="mt-2 space-y-1.5 text-sm">
              {step.tujuan.map((x) => (
                <li key={x} className="flex gap-2">
                  <span aria-hidden>•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="mt-6 text-sm font-bold">{t.steps}</h3>
          <ol className="mt-3 space-y-3">
            {step.langkah.map((l, i) => (
              <li key={l} className="flex gap-3 text-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-secondary-foreground">
                  {i + 1}
                </span>
                <span>{l}</span>
              </li>
            ))}
          </ol>

          <p className="mt-5 rounded-xl bg-secondary p-4 text-sm text-secondary-foreground">
            💡 <strong>{t.tips}</strong> {step.tips}
          </p>

          <button
            type="button"
            onClick={() => toggle(base.no)}
            className="mt-5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
          >
            {selesai.includes(base.no) ? t.unmark : t.markDone}
          </button>
        </article>

        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => goto(aktif - 1)}
            disabled={aktif === 1}
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-bold disabled:opacity-40"
          >
            {t.prev}
          </button>
          <span className="text-sm font-bold text-muted-foreground">
            {aktif} / {steps.length}
          </span>
          <button
            type="button"
            onClick={() => goto(aktif + 1)}
            disabled={aktif === steps.length}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground disabled:opacity-40"
          >
            {t.next}
          </button>
        </div>

        <div className="mt-8">
          <Mascot>
            <p>{t.mascot(selesai.length, steps.length)}</p>
          </Mascot>
        </div>

        <Link
          to="/kuis"
          className="mt-6 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground"
        >
          {t.quiz}
        </Link>
      </div>

      {zoomBuka && (
        <ImageLightbox
          src={gambar}
          alt={`${t.stage} ${base.no}: ${step.nama}`}
          caption={caption}
          captionDetail={step.langkah}
          captionHint={t.tapCaption}
          hideHint={t.hideDetail}
          onClose={() => setZoomBuka(false)}
        />
      )}
    </div>
  );
}
