"use client";

import React from "react";
import Link from "next/link";

export default function HeroTwoA({ img }) {
  return (
    <main
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: "#070b15" }}
    >
      {/* Radial background gradient - cyan glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(19,197,221,0.45) 0%, rgba(19,197,221,0.15) 25%, #070b15 70%)",
        }}
      />

      {/* Cyan glow orb */}
      <div
        className="absolute"
        style={{
          width: "min(650px, 50vw)",
          height: "min(650px, 50vw)",
          background:
            "radial-gradient(circle, rgba(19,197,221,0.9) 0%, rgba(19,197,221,0.2) 40%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(30px)",
        }}
      />

      {/* KUMIRAI - centered horizontally and vertically */}
      <h1
        className="absolute select-none pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(60px, 20vw, 300px)",
          fontWeight: 800,
          letterSpacing: "clamp(-4px, -0.8vw, -12px)",
          color: "rgba(243,237,237,0.1)",
          zIndex: 1,
          fontFamily: "'Poppins', sans-serif",
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}
      >
        KUMIRAI
      </h1>

      {/* Model image - spans full width at bottom */}
      <div
        className="absolute bottom-0 inset-x-0 flex justify-center"
        style={{ height: "92%", zIndex: 3 }}
      >
        <img
          src={img}
          alt=""
          loading="eager"
          className="h-full w-auto object-contain object-bottom"
          style={{
            filter:
              "contrast(1.05) saturate(1.1) drop-shadow(0 25px 40px rgba(0,0,0,0.7))",
            maxWidth: "none",
          }}
        />
      </div>

      {/* Script text - like "New Album" */}
      <div
        className="absolute text-white z-10"
        style={{
          right: "clamp(30px, 8vw, 110px)",
          top: "clamp(300px, 55%, 415px)",
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(36px, 6vw, 76px)",
        }}
      >
        Web Developer
      </div>

      {/* Bottom-left: name and tagline */}
      <div
        className="absolute z-10"
        style={{
          bottom: "clamp(30px, 8vh, 70px)",
          left: "clamp(30px, 6vw, 95px)",
        }}
      >
        <div
          style={{
            fontSize: "clamp(13px, 1.1vw, 16px)",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            color: "rgba(255,255,255,0.9)",
          }}
        >
          Milton Kumirai
        </div>
        <div
          style={{
            fontSize: "clamp(11px, 0.9vw, 13px)",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            color: "rgba(255,255,255,0.45)",
            marginTop: "4px",
          }}
        >
          Building modern websites &amp; web apps
        </div>
      </div>

      {/* Bottom-right: CTA button */}
      <div
        className="absolute z-10"
        style={{
          bottom: "clamp(30px, 8vh, 70px)",
          right: "clamp(30px, 8vw, 110px)",
        }}
      >
        <Link
          href="#contact"
          className="group inline-flex items-center gap-3 px-8 py-3 bg-cyan text-navy text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-500 hover:bg-white hover:shadow-[0_0_40px_rgba(19,197,221,0.4)]"
          style={{
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Start a Project
          <span className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
        </Link>
      </div>
    </main>
  );
}
