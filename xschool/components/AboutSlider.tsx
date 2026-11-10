"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function AboutSlider({ images }: { images: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (track && slide) track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  }, []);

  // keep the active dot in sync with native scrolling / swiping / dragging
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const slides = Array.from(track.children) as HTMLElement[];
      const pos = track.scrollLeft + track.offsetLeft;
      let best = 0;
      slides.forEach((s, i) => {
        if (Math.abs(s.offsetLeft - pos) < Math.abs(slides[best].offsetLeft - pos)) best = i;
      });
      setActive(best);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const prev = () => goTo(Math.max(active - 1, 0));
  const next = () => goTo(active >= images.length - 1 ? 0 : active + 1);

  return (
    <div className="slider" aria-roledescription="carousel" aria-label="xSchool photos">
      <div className="slider__track" ref={trackRef}>
        {images.map((src, i) => (
          <div className="slider__slide" key={src} aria-label={`${i + 1} of ${images.length}`}>
            <Image src={src} alt="" fill sizes="(max-width: 700px) 80vw, 30vw" />
          </div>
        ))}
      </div>
      <div className="container slider__controls">
        <div className="slider__dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`slider__dot${i === active ? " is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active}
            />
          ))}
        </div>
        <div className="slider__arrows">
          <button className="arrow" onClick={prev} aria-label="Previous slide" disabled={active === 0}>←</button>
          <button className="arrow" onClick={next} aria-label="Next slide">→</button>
        </div>
      </div>
    </div>
  );
}
