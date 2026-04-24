"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const [percent, setPercent] = useState(50);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    let next = ((clientX - rect.left) / rect.width) * 100;
    next = Math.max(0, Math.min(100, next));

    setPercent(next);
  };

  /* ---------------- POINTER ---------------- */
  const handlePointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  /* ---------------- KEYBOARD ---------------- */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPercent((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPercent((p) => Math.min(100, p + 5));
    if (e.key === "Home") setPercent(0);
    if (e.key === "End") setPercent(100);
  };

  return (
    <section
      className="py-20 px-6 bg-white"
      aria-labelledby="before-after-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <header className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] eyebrow">
            Invisalign Results
          </p>

          <h2
            id="before-after-heading"
            className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground"
          >
            Before & After Invisalign Treatment Results
          </h2>

          <p className="mt-4 text-muted-text">
            Compare real patient smile transformations using clear aligners.
          </p>
        </header>

        {/* FIGURE FOR SEMANTICS */}
        <figure className="flex justify-center">
          <div
            ref={containerRef}
            className="relative w-full max-w-[800px] aspect-[16/9] overflow-hidden rounded-2xl select-none touch-none"
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            {/* AFTER IMAGE */}
            <Image
              src="/after.webp"
              alt="After Invisalign treatment showing straight aligned teeth and improved smile"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />

            {/* BEFORE IMAGE */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${percent}%` }}
            >
              <Image
                src="/before.webp"
                alt="Before Invisalign treatment showing misaligned teeth and crowding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* DIVIDER */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[#6DBFAA]"
              style={{
                left: `${percent}%`,
                transform: "translateX(-50%)",
              }}
            />

            {/* HANDLE (NOW ACCESSIBLE SLIDER) */}
            <div
              role="slider"
              aria-label="Before and after image comparison slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(percent)}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 outline-none focus:ring-2 focus:ring-primary rounded-full"
              style={{ left: `${percent}%` }}
            >
              <div
                onPointerDown={handlePointerDown}
                className="w-11 h-11 rounded-full bg-white border-2 border-[#6DBFAA] shadow-lg flex items-center justify-center cursor-ew-resize active:scale-95 transition"
              >
                <span className="text-[#6DBFAA] text-sm font-medium">↔</span>
              </div>
            </div>

            {/* LABELS */}
            <div className="absolute bottom-4 left-4">
              <span className="text-white text-xs px-3 py-1 rounded-full bg-black/60 uppercase">
                Before
              </span>
            </div>

            <div className="absolute bottom-4 right-4">
              <span className="text-white text-xs px-3 py-1 rounded-full bg-[#6DBFAA]/90 uppercase">
                After
              </span>
            </div>
          </div>

          {/* CAPTION (SEO GOLD) */}
          <figcaption className="sr-only">
            Comparison of teeth alignment before and after Invisalign clear
            aligner treatment showing improved dental structure and smile
            aesthetics.
          </figcaption>
        </figure>

        {/* INSTRUCTION */}
        <p className="text-center mt-6 text-sm text-muted-text">
          Drag or use arrow keys to compare before and after
        </p>
      </div>
    </section>
  );
}
