"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const designShots = [
  "/designs/5652262.jpg",
  "/designs/7789078.jpg",
];

export default function HeroTwoA() {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = useCallback(() => {
    setActiveIdx((i) => (i + 1) % designShots.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-light p-6">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1
              className="leading-[1.1] tracking-[-0.02em] text-navy"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.125rem)",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
              }}
            >
              Websites that
              <br />
              bring in
              <br />
              customers
            </h1>

            <p
              className="mt-5 max-w-xs text-sm leading-relaxed sm:text-base"
              style={{
                color: "rgba(29,42,77,0.6)",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
              }}
            >
              Custom sites and web apps for small businesses that want to grow
              online.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-start">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-navy transition-all duration-300 hover:brightness-110 hover:shadow-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Start a Project
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-navy transition-all duration-300 hover:border-navy/60 hover:bg-navy hover:text-white hover:shadow-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                View My Work
              </Link>
            </div>
          </div>

          {/* Right: Design carousel */}
          <div className="flex flex-col items-center lg:items-start">
            <div
              className="relative w-full overflow-hidden rounded-lg shadow-2xl"
              style={{ aspectRatio: "16/10" }}
            >
              {designShots.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Design ${i + 1}`}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
                  style={{ opacity: i === activeIdx ? 1 : 0 }}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="mt-6 flex items-center gap-2">
              {designShots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIdx ? "24px" : "6px",
                    height: "6px",
                    backgroundColor:
                      i === activeIdx
                        ? "#13c5dd"
                        : "rgba(29,42,77,0.2)",
                  }}
                  aria-label={`Show design ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
