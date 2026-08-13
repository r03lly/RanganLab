import { useId } from "react";
import type { PatternId } from "@/lib/sirangan-data";

type Props = {
  patternId: PatternId;
  color?: string | undefined;
  className?: string | undefined;
};

const F = "#fdfaf2";

const shapes: Record<PatternId, React.ReactNode> = {
  pudak: (
    <g fill={F}>
      <path d="M4 2 C8 10 8 20 4 28 Z" />
      <path d="M14 2 C18 10 18 20 14 28 Z" />
      <path d="M24 2 C28 10 28 20 24 28 Z" />
    </g>
  ),
  kacang: (
    <g stroke={F} fill="none" strokeWidth="2.5" strokeLinecap="round">
      <path d="M6 2 C10 10 2 20 6 28" />
      <path d="M18 2 C22 10 14 20 18 28" />
      <circle cx="12" cy="9" r="2" fill={F} />
      <circle cx="24" cy="20" r="2" fill={F} />
    </g>
  ),
  bayam: (
    <g fill={F}>
      <path d="M15 4 C24 10 24 20 15 26 C6 20 6 10 15 4 Z" />
      <rect x="0" y="28" width="30" height="2" />
    </g>
  ),
  kurikit: (
    <g fill="none" stroke={F} strokeWidth="2">
      <path d="M0 10 L5 4 L10 10 L15 4 L20 10 L25 4 L30 10" />
      <path d="M0 24 L5 18 L10 24 L15 18 L20 24 L25 18 L30 24" />
    </g>
  ),
  ombak: (
    <g fill="none" stroke={F} strokeWidth="3" strokeLinecap="round">
      <path d="M0 10 Q7.5 0 15 10 T30 10" />
      <path d="M0 22 Q7.5 12 15 22 T30 22" />
    </g>
  ),
  bintang: (
    <g fill={F}>
      <path d="M8 3 L9.6 7.4 L14 9 L9.6 10.6 L8 15 L6.4 10.6 L2 9 L6.4 7.4 Z" />
      <path d="M22 17 L23.4 21 L27.4 22.4 L23.4 23.8 L22 27.8 L20.6 23.8 L16.6 22.4 L20.6 21 Z" />
      <circle cx="24" cy="7" r="1.6" />
      <circle cx="7" cy="24" r="1.6" />
    </g>
  ),
  naga: (
    <g fill="none" stroke={F} strokeWidth="3" strokeLinecap="round">
      <path d="M0 20 C6 6 14 30 20 14 C24 4 28 12 30 8" />
      <circle cx="6" cy="6" r="1.8" fill={F} stroke="none" />
    </g>
  ),
  jumput: (
    <g fill={F}>
      <circle cx="8" cy="8" r="4.5" />
      <circle cx="22" cy="22" r="4.5" />
      <circle cx="22" cy="8" r="1.8" />
      <circle cx="8" cy="22" r="1.8" />
    </g>
  ),
  dayang: (
    <g fill="none" stroke={F} strokeWidth="2" strokeLinecap="round">
      <path d="M6 0 C10 8 2 16 6 24 L6 30" />
      <path d="M18 0 C22 8 14 16 18 24 L18 30" />
      <circle cx="11" cy="6" r="1.4" fill={F} />
      <circle cx="24" cy="14" r="1.4" fill={F} />
    </g>
  ),
  manggis: (
    <g fill={F}>
      <circle cx="15" cy="15" r="3" />
      <path d="M15 15 L15 5 M15 15 L24 10 M15 15 L24 21 M15 15 L6 21 M15 15 L6 10" stroke={F} strokeWidth="2.4" />
      <circle cx="15" cy="5" r="2" />
      <circle cx="24" cy="10" r="2" />
      <circle cx="24" cy="21" r="2" />
      <circle cx="6" cy="21" r="2" />
      <circle cx="6" cy="10" r="2" />
    </g>
  ),
  jaruju: (
    <g fill={F}>
      <path d="M15 2 L19 8 L17 10 L21 14 L18 16 L21 22 L15 28 L9 22 L12 16 L9 14 L13 10 L11 8 Z" />
    </g>
  ),
  kangkung: (
    <g fill="none" stroke={F} strokeWidth="2.4" strokeLinecap="round">
      <path d="M2 0 C8 8 -2 16 4 24 L4 30" />
      <path d="M16 0 C22 8 12 16 18 24 L18 30" />
      <path d="M8 10 q4 -3 6 1" />
      <path d="M22 20 q4 -3 6 1" />
    </g>
  ),
  gigi: <path d="M0 22 L7.5 8 L15 22 L22.5 8 L30 22 L30 30 L0 30 Z" fill={F} />,
  kambang: (
    <g fill={F}>
      <circle cx="15" cy="15" r="4" />
      <circle cx="15" cy="7" r="3.2" />
      <circle cx="15" cy="23" r="3.2" />
      <circle cx="7" cy="15" r="3.2" />
      <circle cx="23" cy="15" r="3.2" />
    </g>
  ),
  ular: (
    <g fill="none" stroke={F} strokeWidth="2.6" strokeLinecap="round">
      <path d="M4 4 q6 6 0 12 q-6 6 0 10" />
      <path d="M20 2 q6 6 0 12 q-6 6 0 12" />
    </g>
  ),
  mayang: (
    <g fill={F}>
      <path d="M15 2 C18 8 18 12 15 16 C12 12 12 8 15 2 Z" />
      <path d="M6 14 C9 20 9 24 6 28 C3 24 3 20 6 14 Z" />
      <path d="M24 14 C27 20 27 24 24 28 C21 24 21 20 24 14 Z" />
    </g>
  ),
  sahang: (
    <g fill={F}>
      <path d="M3 4 l5 3 -5 3 Z" />
      <path d="M14 2 l5 3 -5 3 Z" />
      <path d="M24 8 l5 3 -5 3 Z" />
      <path d="M6 16 l5 3 -5 3 Z" />
      <path d="M18 20 l5 3 -5 3 Z" />
      <circle cx="12" cy="13" r="1.6" />
      <circle cx="27" cy="24" r="1.6" />
    </g>
  ),
  gelombang: (
    <g fill="none" stroke={F} strokeWidth="4" strokeLinecap="round">
      <path d="M0 8 Q7.5 -2 15 8 T30 8" />
      <path d="M0 22 Q7.5 12 15 22 T30 22" />
    </g>
  ),
  katu: (
    <g fill={F}>
      <ellipse cx="8" cy="8" rx="5" ry="3.6" />
      <ellipse cx="22" cy="16" rx="5" ry="3.6" />
      <ellipse cx="10" cy="23" rx="5" ry="3.6" />
      <path d="M0 0 L30 30" stroke={F} strokeWidth="1" opacity="0.5" />
    </g>
  ),
  gagatas: (
    <g fill={F}>
      <path d="M0 6 L10 0 L14 0 L4 6 Z" />
      <path d="M8 16 L18 10 L22 10 L12 16 Z" />
      <path d="M16 26 L26 20 L30 20 L20 26 Z" />
    </g>
  ),
};

/** Kain Sasirangan sederhana: bagian putih = bagian yang diikat, sisanya kena warna. */
export function MotifSwatch({ patternId, color = "#26467f", className }: Props) {
  const id = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label={`Contoh kain motif ${patternId}`}
    >
      <defs>
        <pattern id={`p-${id}`} width="30" height="30" patternUnits="userSpaceOnUse">
          <rect width="30" height="30" fill={color} />
          {shapes[patternId]}
        </pattern>
      </defs>
      <rect width="120" height="120" rx="12" fill={`url(#p-${id})`} />
    </svg>
  );
}