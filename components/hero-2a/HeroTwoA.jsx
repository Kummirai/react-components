"use client";

import React from "react";
import Link from "next/link";

export default function HeroTwoA() {
  return (
    <section className="relative h-screen w-full bg-light">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center px-6">
        <div className="max-w-md">
          <h1
            className="mt-5 leading-[1.1] tracking-[-0.02em] text-navy"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
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
      </div>
    </section>
  );
}
