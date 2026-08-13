import { createFileRoute, Link } from "@tanstack/react-router";
import { Mascot } from "@/components/sirangan/Mascot";
import { motifDaerahImages } from "@/lib/motif-daerah-images";
import { steps } from "@/lib/sirangan-data";
import { stepText, useT } from "@/lib/i18n";

/** Foto kain Sasirangan asli untuk hero halaman awal. */
const heroFoto = [
  "Sungai Pelangi",
  "Daun Bangkal",
  "Kembang Melati, Berlian, dan Kantung Semar",
  "Kijang",
].map((nama) => ({ nama, src: motifDaerahImages[nama] }));

const title = "Si Rangan EduKit — Belajar Sasirangan Seru untuk Siswa SD";
const desc =
  "Media pembelajaran phygital: kenali motif Sasirangan, coba pewarna alam di Digital Color Lab, ikuti tutorial praktik, lalu uji pemahaman lewat mini kuis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://rangan-explorer.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://rangan-explorer.vercel.app/og-image.jpg" },
    ],
  }),
  component: Index,
});

const fiturLinks = ["/motif", "/designer", "/color-lab", "/tutorial", "/kuis"] as const;
const fiturEmoji = ["🔍", "🎨", "🧪", "🪡", "🎮"];

function Index() {
  const { lang, t } = useT();
  const h = t.home;

  return (
    <div>
      <section className="hero-gradient px-4 py-12 text-primary-foreground sm:py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
              {h.badge}
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Si Rangan EduKit
            </h1>
            <p className="mt-4 max-w-xl text-base opacity-90 sm:text-lg">{h.heroDesc}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/motif"
                className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
              >
                {h.ctaMotif}
              </Link>
              <Link
                to="/color-lab"
                className="rounded-full border border-primary-foreground/40 px-5 py-2.5 text-sm font-bold transition-colors hover:bg-primary-foreground/10"
              >
                {h.ctaLab}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {heroFoto.map((f) => (
              <img
                key={f.nama}
                src={f.src}
                alt={h.fabricAlt(f.nama)}
                loading="eager"
                decoding="async"
                className="aspect-square w-full rounded-xl bg-card object-cover shadow-[var(--shadow-lift)]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-10">
        <Mascot eager size={110}>
          <p className="font-display text-base font-bold">{h.mascotTitle}</p>
          <p className="mt-1">{h.mascotBody}</p>
        </Mascot>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12">
        <h2 className="text-2xl font-bold">{h.flowTitle}</h2>
        <ol className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {h.flow.map((a, i) => (
            <li key={a.t} className="surface-card p-4">
              <span className="sun-gradient inline-flex h-8 w-8 items-center justify-center rounded-full font-display font-bold text-accent-foreground">
                {i + 1}
              </span>
              <p className="mt-3 font-display font-bold">{a.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{a.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14">
        <h2 className="text-2xl font-bold">{h.featureTitle}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{h.featureDesc}</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {h.features.map((f, i) => (
            <Link
              key={fiturLinks[i]!}
              to={fiturLinks[i]!}
              className="surface-card block p-5 transition-transform hover:-translate-y-1"
            >
              <span className="text-3xl">{fiturEmoji[i]}</span>
              <p className="mt-2 font-display text-lg font-bold">{f.nama}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="surface-card p-6">
          <h2 className="text-2xl font-bold">{h.kitTitle}</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <p className="font-display font-bold text-primary">{h.physical}</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {h.physicalItems.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-display font-bold text-primary">{h.digital}</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {h.digitalItems.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-5 rounded-xl bg-secondary p-4 text-sm text-secondary-foreground">
            <strong>Design digital → Create physical.</strong> {h.kitNote}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <h2 className="text-2xl font-bold">{h.stagesTitle}</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {steps.map((s) => (
            <Link
              key={s.no}
              to="/tutorial"
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              {s.emoji} {stepText(s, lang).nama}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
