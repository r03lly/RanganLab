import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MotifFabric } from "@/components/sirangan/MotifFabric";
import { MotifImage } from "@/components/sirangan/MotifImage";
import { Mascot } from "@/components/sirangan/Mascot";
import { getMotif, semuaMotif, steps } from "@/lib/sirangan-data";
import { useState } from "react";
import { stepText, useT } from "@/lib/i18n";
import { motifText } from "@/lib/content-i18n";
import type { Lang } from "@/lib/tutorial-i18n";

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

const paletteHex = ["#26467f", "#dda01a", "#5c7d3c", "#b83a72"] as const;

function MotifDetail() {
  const { motif: raw } = Route.useLoaderData();
  const { lang, t } = useT();
  const d = t.detail;
  const motif = motifText(raw, lang);
  const [warna, setWarna] = useState<string>(paletteHex[0]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Link to="/motif" className="text-sm font-semibold text-primary">
        {d.back}
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
          <p className="mt-2 text-xs text-muted-foreground">{d.imageNote}</p>
          <p className="mt-4 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            {d.colorize}
          </p>
          <MotifFabric
            slug={motif.slug}
            nama={motif.nama}
            patternId={motif.patternId}
            color={warna}
            className="mt-2 w-full rounded-2xl"
          />
          <div className="mt-2 flex gap-2">
            {paletteHex.map((hex, i) => (
              <button
                key={hex}
                type="button"
                onClick={() => setWarna(hex)}
                aria-label={d.palette[i]}
                aria-pressed={warna === hex}
                className={`h-10 w-10 rounded-full ring-offset-2 ring-offset-background transition-transform hover:scale-110 ${
                  warna === hex ? "ring-2 ring-primary" : "ring-1 ring-border"
                }`}
                style={{ backgroundColor: hex }}
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
            <p className="font-display font-bold text-primary">{d.meaning}</p>
            <p className="mt-1 text-sm">{motif.filosofi}</p>
          </div>

          <div className="surface-card mt-4 p-5">
            <p className="font-display font-bold text-primary">{d.story}</p>
            <p className="mt-1 text-sm leading-relaxed">{motif.cerita}</p>
            <ListenButton
              text={`${motif.nama}. ${motif.cerita}`}
              lang={lang}
              listenLabel={d.listen}
              stopLabel={d.stop}
            />
          </div>

          <div className="mt-4 rounded-2xl bg-secondary p-4 text-sm text-secondary-foreground">
            {d.suggested} <strong>{motif.warnaSaran}</strong>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/color-lab"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
            >
              {d.tryColor}
            </Link>
            <Link
              to="/kuis"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-bold"
            >
              {d.playQuiz}
            </Link>
          </div>
        </div>
      </div>

      <div className="surface-card mt-10 p-5">
        <p className="font-display font-bold text-primary">{d.practiceTitle}</p>
        <p className="mt-1 text-sm text-muted-foreground">{d.practiceDesc(motif.nama)}</p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {steps.map((rawStep) => {
            const s = stepText(rawStep, lang);
            return (
              <li key={s.no}>
                <Link
                  to="/tutorial"
                  search={{ langkah: s.no }}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-3 transition-colors hover:bg-secondary"
                >
                  <span className="text-xl">{s.emoji}</span>
                  <span>
                    <span className="block text-sm font-bold">
                      {t.common.stage} {s.no}: {s.nama}
                    </span>
                    <span className="block text-xs text-muted-foreground">{s.ringkas}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-10">
        <Mascot>
          <p>{d.mascot}</p>
        </Mascot>
      </div>

      <div className="mt-10">
        <p className="text-sm font-bold text-muted-foreground">
          {d.others(motif.kategori === "modern" ? d.kategori.modern : d.kategori.tradisional)}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {semuaMotif
            .filter(
              (m) =>
                m.slug !== motif.slug &&
                (m.kategori === "modern") === (motif.kategori === "modern"),
            )
            .map((m) => motifText(m, lang))
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

function ListenButton({
  text,
  lang,
  listenLabel,
  stopLabel,
}: {
  text: string;
  lang: Lang;
  listenLabel: string;
  stopLabel: string;
}) {
  const [playing, setPlaying] = useState(false);

  const speak = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang === "en" ? "en-US" : "id-ID";
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
      {playing ? `⏹ ${stopLabel}` : `🔊 ${listenLabel}`}
    </button>
  );
}
