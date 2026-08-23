"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Proves the scroll-scrub pipeline end to end: a panel whose scale is tied
 * to scroll position rather than to time. This is the mechanism the real
 * project sections will use. Placeholder visuals only.
 */
export default function ScrollProof() {
  const section = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !section.current || !panel.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        panel.current,
        { scale: 0.82 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={section} className="px-6 pb-32 md:px-14">
      <div
        ref={panel}
        className="flex aspect-[16/9] w-full items-center justify-center rounded-sm border border-(--color-border) bg-(--color-surface) will-change-transform"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-(--color-muted)">
          Scroll-linked scale
        </span>
      </div>
    </div>
  );
}
