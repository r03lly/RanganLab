import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/sirangan/PageHeader";
import { Mascot } from "@/components/sirangan/Mascot";
import { quiz } from "@/lib/sirangan-data";
import { quizEn } from "@/lib/content-i18n";
import { useT } from "@/lib/i18n";

const title = "Mini Kuis Sasirangan untuk Siswa SD | Si Rangan EduKit";
const desc =
  "Delapan soal pilihan ganda untuk mengukur pemahaman siswa tentang motif, tahapan, dan pewarna alam Sasirangan setelah kegiatan praktik.";

export const Route = createFileRoute("/kuis")({
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
  component: Kuis,
});

function Kuis() {
  const { lang, t } = useT();
  const q10n = t.quiz;
  const soalList = lang === "en" ? quizEn : quiz;

  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState<number | null>(null);
  const [skor, setSkor] = useState(0);
  const [selesai, setSelesai] = useState(false);

  const soal = soalList[idx]!;
  const benar = pilih === soal.jawaban;

  const lanjut = () => {
    if (pilih === null) return;
    if (benar) setSkor((s) => s + 1);
    setPilih(null);
    if (idx + 1 >= soalList.length) setSelesai(true);
    else setIdx(idx + 1);
  };

  const ulang = () => {
    setIdx(0);
    setPilih(null);
    setSkor(0);
    setSelesai(false);
  };

  return (
    <div>
      <PageHeader eyebrow={q10n.eyebrow} title={q10n.title} desc={q10n.desc} />

      <div className="mx-auto max-w-3xl px-4 py-10">
        {!selesai ? (
          <div className="surface-card p-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{q10n.qOf(idx + 1, soalList.length)}</span>
              <span>
                {q10n.score} {skor}
              </span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${(idx / soalList.length) * 100}%` }}
              />
            </div>

            <h2 className="mt-5 text-xl font-bold">{soal.pertanyaan}</h2>

            <div className="mt-4 space-y-3">
              {soal.pilihan.map((p, i) => {
                const dipilih = pilih === i;
                const state =
                  pilih === null
                    ? "border-border bg-card hover:bg-secondary"
                    : i === soal.jawaban
                      ? "border-brand-leaf bg-brand-leaf/15"
                      : dipilih
                        ? "border-destructive bg-destructive/10"
                        : "border-border bg-card opacity-60";
                return (
                  <button
                    key={p}
                    type="button"
                    disabled={pilih !== null}
                    onClick={() => setPilih(i)}
                    className={`w-full rounded-2xl border p-4 text-left text-sm font-semibold transition-colors ${state}`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>

            {pilih !== null && (
              <div className="mt-5 rounded-2xl bg-secondary p-4 text-sm text-secondary-foreground">
                <p className="font-bold">{benar ? q10n.correct : q10n.wrong}</p>
                <p className="mt-1">{soal.penjelasan}</p>
                <button
                  type="button"
                  onClick={lanjut}
                  className="mt-4 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
                >
                  {idx + 1 >= soalList.length ? q10n.seeResult : q10n.nextQ}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="surface-card p-8 text-center">
            <p className="text-5xl">{skor >= soalList.length - 2 ? "🏆" : "🌟"}</p>
            <h2 className="mt-3 text-2xl font-bold">{q10n.yourScore(skor, soalList.length)}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {skor >= soalList.length - 2 ? q10n.great : q10n.keepGoing}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={ulang}
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
              >
                {q10n.retry}
              </button>
              <Link
                to="/motif"
                className="rounded-full border border-border px-5 py-2.5 text-sm font-bold"
              >
                {q10n.backMotif}
              </Link>
            </div>
          </div>
        )}

        <div className="mt-8">
          <Mascot>
            <p>{q10n.mascot}</p>
          </Mascot>
        </div>
      </div>
    </div>
  );
}
