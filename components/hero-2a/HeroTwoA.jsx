"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const designShots = ["/designs/5652262.jpg", "/designs/7789078.jpg"];

export default function HeroTwoA() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(0);

  const next = useCallback(() => {
    setPrevIdx(activeIdx);
    setActiveIdx((i) => (i + 1) % designShots.length);
  }, [activeIdx]);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-screen w-full bg-light px-6 py-12 lg:h-screen lg:py-6">
      {/* Background image */}
      <img
        src="/web%20developer/pakata-goh-EJMTKCZ00I0-unsplash.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay focused behind text area */}
      <div
        className="absolute inset-0 lg:inset-y-0 lg:left-0 lg:w-1/2"
        style={{
          background:
            "linear-gradient(to right, #0f1a33 0%, #0f1a33 30%, rgba(15,26,51,0.6) 60%, rgba(15,26,51,0) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-start pt-12 lg:h-full lg:items-center lg:pt-0">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          {/* Left: Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1
              className="leading-[1.1] tracking-[-0.02em] text-white"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 4rem)",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
              }}
            >
              <span className="sm:hidden">Websites</span>
              <span className="hidden sm:inline">Websites that</span>
              <br />
              bring in
              <br />
              customers
            </h1>

            <p
              className="mt-6 max-w-xs text-sm leading-relaxed sm:text-base"
              style={{
                color: "rgba(255,255,255,0.6)",
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-navy transition-all duration-300 hover:brightness-110 hover:shadow-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Start a Project
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-white/60 hover:bg-white hover:text-navy hover:shadow-lg"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                View My Work
              </Link>
            </div>
          </div>

          {/* Right: Design carousel */}
          <div className="flex flex-col items-center lg:items-start">
            <div
              className="relative w-full max-w-xs overflow-hidden rounded-lg shadow-2xl lg:max-w-none"
              style={{ aspectRatio: "16/10" }}
            >
              {designShots.map((src, i) => {
                const isActive = i === activeIdx;
                const isExiting = i === prevIdx && !isActive;
                return (
                  <img
                    key={src}
                    src={src}
                    alt={`Design ${i + 1}`}
                    className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "scale(1) translateX(0)"
                        : "scale(0.95) translateX(20px)",
                      zIndex: isActive ? 1 : isExiting ? 0 : -1,
                    }}
                  />
                );
              })}
            </div>

            {/* Dots */}
            <div className="mt-6 flex items-center gap-2 lg:mt-6">
              {designShots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIdx ? "24px" : "6px",
                    height: "6px",
                    backgroundColor:
                      i === activeIdx ? "#13c5dd" : "rgba(255,255,255,0.3)",
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
