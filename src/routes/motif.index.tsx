import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/sirangan/PageHeader";
import { MotifImage } from "@/components/sirangan/MotifImage";
import { motifs, motifModern, motifDaerah, type Motif } from "@/lib/sirangan-data";
import { motifDaerahImages } from "@/lib/motif-daerah-images";
import { useT } from "@/lib/i18n";
import { motifText } from "@/lib/content-i18n";

const title = "QR Motif Explorer — Motif Tradisional & Modern Sasirangan | Si Rangan";
const desc =
  "Jelajahi 20 motif tradisional dan 7 motif modern Sasirangan Kalimantan Selatan beserta filosofi dan ceritanya.";

export const Route = createFileRoute("/motif/")({
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
  component: MotifIndex,
});

function MotifIndex() {
  const { lang, t } = useT();
  const m10n = t.motif;
  const [tab, setTab] = useState<"tradisional" | "modern" | "daerah">("tradisional");
  const list: Motif[] = tab === "modern" ? motifModern : motifs;

  return (
    <div>
      <PageHeader eyebrow={m10n.eyebrow} title={m10n.title} desc={m10n.desc} />

      <div className="mx-auto max-w-5xl px-4 pt-8">
        <div className="inline-flex rounded-full border border-border bg-card p-1">
          {(
            [
              ["tradisional", `${m10n.tabs.tradisional} (${motifs.length})`],
              ["modern", `${m10n.tabs.modern} (${motifModern.length})`],
              ["daerah", `${m10n.tabs.daerah} (${motifDaerah.length})`],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              aria-pressed={tab === key}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                tab === key
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{m10n.tabDesc[tab]}</p>
      </div>

      {tab === "daerah" ? (
        <div className="mx-auto max-w-5xl px-4 py-8">
          <div className="grid gap-4 md:grid-cols-2">
            {motifDaerah.map((d) => (
              <div key={d.daerah} className="surface-card p-4">
                <p className="font-display font-bold text-primary">{d.daerah}</p>
                <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {d.motif.map((n) => {
                    const src = motifDaerahImages[n];
                    return (
                      <li key={n}>
                        {src ? (
                          <img
                            src={src}
                            alt={m10n.motifAlt(n, d.daerah)}
                            loading="lazy"
                            decoding="async"
                            className="aspect-square w-full rounded-xl border border-border bg-card object-cover"
                          />
                        ) : (
                          <div className="flex aspect-square w-full items-center justify-center rounded-xl border border-dashed border-border bg-secondary text-xs text-muted-foreground">
                            {m10n.noPhoto}
                          </div>
                        )}
                        <p className="mt-1.5 text-xs font-semibold leading-snug">{n}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">{m10n.source}</p>
        </div>
      ) : (
        <div className="mx-auto grid max-w-5xl gap-4 px-4 py-8 sm:grid-cols-2">
          {list.map((raw) => {
            const m = motifText(raw, lang);
            return (
              <Link
                key={m.slug}
                to="/motif/$slug"
                params={{ slug: m.slug }}
                className="surface-card flex items-center gap-4 p-4 transition-transform hover:-translate-y-1"
              >
                <MotifImage
                  slug={m.slug}
                  nama={m.nama}
                  patternId={m.patternId}
                  color={m.warnaHex}
                  className="h-28 w-28 shrink-0 rounded-xl sm:h-32 sm:w-32"
                />
                <div>
                  <p className="font-display text-lg font-bold">
                    {m.emoji} {m.nama}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{m.filosofi}</p>
                  <p className="mt-2 text-xs font-bold text-primary">{m10n.seeStory}</p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
