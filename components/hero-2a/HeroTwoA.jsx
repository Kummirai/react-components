"use client";

import React from "react";
import Link from "next/link";

export default function HeroTwoA() {
  return (
    <section className="relative min-h-screen w-full bg-light lg:h-screen flex flex-col">
      {/* Background image */}
      <img
        src="/web%20developer/growtika-9WnjxT1NCoY-unsplash.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top right, #242529 0%, #242529 25%, rgba(36,37,41,0.6) 50%, rgba(36,37,41,0) 75%)",
        }}
      />
      <div className="relative z-10 flex flex-1 items-center justify-center lg:justify-start">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:py-6">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1
              className="leading-[1.1] tracking-[-0.02em] text-white"
              style={{
                fontSize: "clamp(2.8rem, 6vw, 3.125rem)",
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
              className="mt-8 max-w-xs text-sm leading-relaxed sm:text-base"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
              }}
            >
              Custom sites and web apps for small businesses that want to grow
              online.
            </p>

            <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:items-start">
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
        </div>
      </div>
    </section>
  );
}
