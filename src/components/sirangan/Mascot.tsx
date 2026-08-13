import maskot from "@/assets/maskot-si-rangan.png";

export function Mascot({
  children,
  size = 96,
  eager = false,
}: {
  children: React.ReactNode;
  size?: number;
  eager?: boolean;
}) {
  return (
    <div className="flex items-end gap-3">
      <img
        src={maskot}
        alt="Maskot Si Rangan"
        width={size}
        height={size}
        loading={eager ? "eager" : "lazy"}
        style={{ width: size, height: size }}
        className="shrink-0 drop-shadow-md"
      />
      <div className="relative mb-2 rounded-2xl rounded-bl-none bg-card px-4 py-3 text-sm text-card-foreground shadow-[var(--shadow-soft)] ring-1 ring-border">
        {children}
      </div>
    </div>
  );
}