import { motifImages } from "@/lib/motif-images";
import { MotifSwatch } from "@/components/sirangan/MotifSwatch";
import type { PatternId } from "@/lib/sirangan-data";

type Props = {
  slug: string;
  nama: string;
  patternId: PatternId;
  color?: string | undefined;
  className?: string | undefined;
};

/**
 * Pratinjau "warnai versi kain": memakai gambar motif asli dari buku lalu
 * mewarnainya sesuai pilihan warna, sehingga polanya persis sama dengan
 * foto motif di atasnya. Jatuh ke swatch SVG bila gambar belum ada.
 */
export function MotifFabric({ slug, nama, patternId, color, className }: Props) {
  const src = motifImages[slug];
  if (!src) return <MotifSwatch patternId={patternId} color={color} className={className} />;

  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={{ backgroundColor: color }}
    >
      <img
        src={src}
        alt={`Motif ${nama} versi warna kain`}
        loading="lazy"
        decoding="async"
        className="w-full object-cover"
        style={{ mixBlendMode: "luminosity" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: color, mixBlendMode: "color", opacity: 0.85 }}
      />
    </div>
  );
}
