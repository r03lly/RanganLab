import { useCallback, useEffect, useRef, useState } from "react";

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

type Props = {
  src: string;
  alt: string;
  caption?: string;
  /** Langkah detail yang muncul saat caption diketuk. */
  captionDetail?: string[];
  captionHint?: string;
  hideHint?: string;
  onClose: () => void;
};

/** Lightbox gambar dengan zoom (roda mouse, pinch trackpad, tombol) dan geser. */
export function ImageLightbox({
  src,
  alt,
  caption,
  captionDetail,
  captionHint,
  hideHint,
  onClose,
}: Props) {
  const [detailBuka, setDetailBuka] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  const reset = useCallback(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const zoomAt = useCallback((next: number, px: number, py: number) => {
    setZoom((z) => {
      const nz = clamp(next, MIN_ZOOM, MAX_ZOOM);
      const k = nz / z;
      setOffset((o) => ({ x: px - (px - o.x) * k, y: py - (py - o.y) * k }));
      return nz;
    });
  }, []);

  const zoomRef = useRef(zoom);
  zoomRef.current = zoom;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
      const rect = el.getBoundingClientRect();
      zoomAt(zoomRef.current * Math.exp(-dy * 0.002), e.clientX - rect.left, e.clientY - rect.top);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [zoomAt]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const centerZoom = (factor: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    zoomAt(zoomRef.current * factor, (rect?.width ?? 0) / 2, (rect?.height ?? 0) / 2);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-foreground/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div className="flex items-center justify-between gap-2 p-3">
        <span className="rounded-full bg-card/90 px-3 py-1 text-xs font-bold">
          Zoom {zoom.toFixed(1)}×
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => centerZoom(1 / 1.4)}
            className="h-10 w-10 rounded-full bg-card text-lg font-bold"
            aria-label="Perkecil"
          >
            −
          </button>
          <button
            type="button"
            onClick={() => centerZoom(1.4)}
            className="h-10 w-10 rounded-full bg-card text-lg font-bold"
            aria-label="Perbesar"
          >
            +
          </button>
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-card px-4 text-sm font-bold"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground"
          >
            Tutup ✕
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative flex-1 touch-none overflow-hidden"
        style={{ cursor: zoom > 1 ? "grab" : "default" }}
        onPointerDown={(e) => {
          if (zoom <= 1) return;
          (e.target as HTMLElement).setPointerCapture(e.pointerId);
          drag.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
        }}
        onPointerMove={(e) => {
          const d = drag.current;
          if (!d) return;
          setOffset({ x: d.ox + (e.clientX - d.x), y: d.oy + (e.clientY - d.y) });
        }}
        onPointerUp={() => {
          drag.current = null;
        }}
        onDoubleClick={(e) => {
          const rect = containerRef.current!.getBoundingClientRect();
          if (zoom > 1) reset();
          else zoomAt(2.5, e.clientX - rect.left, e.clientY - rect.top);
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-contain"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            transformOrigin: "0 0",
          }}
        />
      </div>

      {caption && (
        <div className="p-3 text-center text-xs text-background">
          {captionDetail?.length ? (
            <button
              type="button"
              onClick={() => setDetailBuka((v) => !v)}
              aria-expanded={detailBuka}
              className="mx-auto block max-w-2xl rounded-xl px-3 py-2 text-xs text-background underline-offset-4 hover:underline"
            >
              {caption}
              <span className="mt-1 block font-bold">
                {detailBuka ? `▲ ${hideHint ?? "Sembunyikan detail"}` : `▼ ${captionHint ?? "Ketuk untuk detail"}`}
              </span>
            </button>
          ) : (
            <p>{caption}</p>
          )}

          {detailBuka && captionDetail?.length ? (
            <ol className="mx-auto mt-2 max-w-2xl space-y-1.5 rounded-xl bg-card p-4 text-left text-xs text-card-foreground">
              {captionDetail.map((l, i) => (
                <li key={l} className="flex gap-2">
                  <span className="font-bold">{i + 1}.</span>
                  <span>{l}</span>
                </li>
              ))}
            </ol>
          ) : null}
        </div>
      )}
    </div>
  );
}
