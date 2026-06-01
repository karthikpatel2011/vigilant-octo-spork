import { useRef, useState, type ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  overlay?: ReactNode;
  rounded?: string;
};

export function TiltImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  overlay,
  rounded = "rounded-3xl",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, mx: 50, my: 50, active: false });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    setT({
      rx: (0.5 - y) * 6,
      ry: (x - 0.5) * 8,
      mx: x * 100,
      my: y * 100,
      active: true,
    });
  };

  const onLeave = () =>
    setT({ rx: 0, ry: 0, mx: 50, my: 50, active: false });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative overflow-hidden ${rounded} ${className}`}
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative h-full w-full transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg) scale(${
            t.active ? 1.03 : 1
          })`,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`block h-full w-full object-cover ${imgClassName}`}
        />
        {/* Spotlight gloss */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(420px circle at ${t.mx}% ${t.my}%, color-mix(in oklab, var(--gold) 35%, transparent), transparent 55%)`,
            mixBlendMode: "screen",
          }}
        />
        {/* Maroon edge vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 55%, color-mix(in oklab, var(--primary) 55%, transparent))",
          }}
        />
        {overlay && (
          <div
            className="absolute inset-0 flex"
            style={{ transform: "translateZ(40px)" }}
          >
            {overlay}
          </div>
        )}
      </div>
    </div>
  );
}
