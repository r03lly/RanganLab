import { motifImages } from "@/lib/motif-images";
import { MotifSwatch } from "@/components/sirangan/MotifSwatch";
import type { PatternId } from "@/lib/sirangan-data";

type Props = {
  slug: string;
  nama: string;
  patternId: PatternId;
  color?: string | undefined;
  className?: string | undefined;
  eager?: boolean | undefined;
};

/** Gambar motif asli dari buku; jatuh ke swatch SVG bila belum ada gambarnya. */
export function MotifImage({ slug, nama, patternId, color, className, eager }: Props) {
  const src = motifImages[slug];
  if (!src) return <MotifSwatch patternId={patternId} color={color} className={className} />;

  return (
    <img
      src={src}
      alt={`Motif Sasirangan ${nama}`}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`bg-card object-contain ${className ?? ""}`}
    />
  );
}
