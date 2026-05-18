"use client";

import React from "react";
import Link from "next/link";
import { useDarkMode } from "@/components/DarkModeProvider";

export default function HeroTwoA({ img }) {
  const { dark } = useDarkMode();

  const c = {
    bg: dark ? "#070b15" : "#f0f4f8",
    radialStart: dark ? "rgba(19,197,221,0.45)" : "rgba(19,197,221,0.08)",
    radialMid: dark ? "rgba(19,197,221,0.15)" : "rgba(19,197,221,0.02)",
    radialEnd: dark ? "#070b15" : "#f0f4f8",
    orbStart: dark ? "rgba(19,197,221,0.9)" : "rgba(19,197,221,0.12)",
    orbMid: dark ? "rgba(19,197,221,0.2)" : "rgba(19,197,221,0.04)",
    watermark: dark ? "rgba(243,237,237,0.1)" : "rgba(29,42,77,0.12)",
    statNumber: dark ? "#f3eded" : "#1d2a4d",
    statLabel: dark ? "rgba(255,255,255,0.3)" : "rgba(29,42,77,0.55)",
    name: dark ? "rgba(255,255,255,0.9)" : "#1d2a4d",
    tagline: dark ? "rgba(255,255,255,0.45)" : "rgba(29,42,77,0.6)",
    testiText: dark ? "rgba(255,255,255,0.5)" : "rgba(29,42,77,0.7)",
    testiAttr: dark ? "rgba(255,255,255,0.25)" : "rgba(29,42,77,0.5)",
    availText: dark ? "rgba(255,255,255,0.85)" : "rgba(29,42,77,0.8)",
    scrollText: dark ? "rgba(255,255,255,0.2)" : "rgba(29,42,77,0.45)",
    scrollArrow: dark ? "rgba(19,197,221,0.3)" : "rgba(19,197,221,0.5)",
  };

  return (
    <main
      className="relative w-full h-screen overflow-hidden"
      style={{ backgroundColor: c.bg }}
    >
      {/* Radial background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, ${c.radialStart} 0%, ${c.radialMid} 25%, ${c.radialEnd} 70%)`,
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute"
        style={{
          width: "min(650px, 50vw)",
          height: "min(650px, 50vw)",
          background: `radial-gradient(circle, ${c.orbStart} 0%, ${c.orbMid} 40%, transparent 70%)`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(30px)",
        }}
      />

      {/* KUMIRAI - behind the image */}
      <h1
        className="absolute select-none pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(60px, 20vw, 300px)",
          fontWeight: 800,
          letterSpacing: "clamp(-4px, -0.8vw, -12px)",
          color: c.watermark,
          zIndex: 1,
          fontFamily: "'Poppins', sans-serif",
          whiteSpace: "nowrap",
          lineHeight: 1,
          animation: "pulseKumirai 6s ease-in-out infinite",
        }}
      >
        KUMIRAI
      </h1>

      {/* Model image */}
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
            filter: `contrast(1.05) saturate(1.1) drop-shadow(0 25px 40px rgba(0,0,0,${dark ? "0.7" : "0.15"}))`,
            maxWidth: "none",
          }}
        />
      </div>

      {/* Content aligned with navbar max-width */}
      <div className="absolute inset-0 z-10">
        <div className="h-full sm:max-w-3xl lg:max-w-6xl mx-auto relative px-6 sm:max-lg:px-10">

        {/* Script text */}
        <div
          className="absolute"
          style={{
            right: 0,
            top: "clamp(300px, 55%, 415px)",
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(36px, 6vw, 76px)",
            color: dark ? undefined : "#1d2a4d",
            background: dark ? "linear-gradient(135deg, #13c5dd 0%, #f8c0de 100%)" : undefined,
            WebkitBackgroundClip: dark ? "text" : undefined,
            WebkitTextFillColor: dark ? "transparent" : undefined,
            backgroundClip: dark ? "text" : undefined,
          }}
        >
          Web Developer
        </div>

        {/* Availability badge */}
        <div
          className="absolute flex items-center gap-1.5 px-3 py-1 rounded-full"
          style={{
            top: "clamp(80px, 12%, 130px)",
            right: 0,
            background: dark ? "rgba(34,197,94,0.12)" : "rgba(34,197,94,0.1)",
            border: dark ? "1px solid rgba(34,197,94,0.25)" : "1px solid rgba(34,197,94,0.3)",
            animation: "fadeSlideUp 0.6s ease-out 0.3s both",
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: "#22c55e",
              animation: "pulseDot 2s ease-in-out infinite",
              boxShadow: "0 0 8px rgba(34,197,94,0.6)",
            }}
          />
          <span
            style={{
              fontSize: "clamp(9px, 0.7vw, 11px)",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              color: c.availText,
              letterSpacing: "0.05em",
            }}
          >
            Available for Hire
          </span>
        </div>

        {/* Animated stats */}
        <div
          className="absolute flex gap-8"
          style={{
            top: "clamp(80px, 12%, 130px)",
            left: 0,
          }}
        >
          {[
            { value: "50+", label: "Projects" },
            { value: "3+", label: "Years" },
            { value: "20+", label: "Clients" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col"
              style={{
                animation: `fadeSlideUp 0.6s ease-out ${0.2 + i * 0.15}s both`,
              }}
            >
              <span
                style={{
                  fontSize: "clamp(28px, 3vw, 42px)",
                  fontWeight: 200,
                  fontFamily: "'Poppins', sans-serif",
                  color: c.statNumber,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: "clamp(10px, 0.75vw, 12px)",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 300,
                  color: c.statLabel,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div
          className="absolute"
          style={{
            right: 0,
            top: "clamp(130px, 22%, 200px)",
            maxWidth: "clamp(180px, 20vw, 280px)",
            textAlign: "right",
            animation: "fadeSlideUp 0.8s ease-out 0.5s both",
          }}
        >
          <div
            style={{
              fontSize: "clamp(11px, 0.9vw, 14px)",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              fontStyle: "italic",
              color: c.testiText,
              lineHeight: 1.5,
            }}
          >
            &ldquo;Built our entire platform&mdash;incredible work.&rdquo;
          </div>
          <div
            style={{
              fontSize: "clamp(9px, 0.7vw, 11px)",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              color: c.testiAttr,
              marginTop: "6px",
            }}
          >
            &mdash; Sarah, Startup Founder
          </div>
        </div>

        {/* Bottom-left: name and tagline */}
        <div
          className="absolute"
          style={{
            bottom: "clamp(30px, 8vh, 70px)",
            left: 0,
          }}
        >
          <div
            style={{
              fontSize: "clamp(13px, 1.1vw, 16px)",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              color: c.name,
            }}
          >
            Milton Kumirai
          </div>
          <div
            style={{
              fontSize: "clamp(11px, 0.9vw, 13px)",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              color: c.tagline,
              marginTop: "4px",
            }}
          >
            Building modern websites &amp; web apps
          </div>
          <div className="flex flex-wrap gap-1.5" style={{ marginTop: "10px" }}>
            {["React", "Next.js", "Tailwind", "Node.js"].map((tech, i) => (
              <span
                key={tech}
                style={{
                  padding: "3px 10px",
                  fontSize: "clamp(9px, 0.7vw, 11px)",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 400,
                  color: "#13c5dd",
                  border: "1px solid rgba(19,197,221,0.4)",
                  borderRadius: "10px",
                  background: dark ? "rgba(19,197,221,0.1)" : "rgba(19,197,221,0.06)",
                  letterSpacing: "0.03em",
                  animation: `fadeSlideUp 0.5s ease-out ${0.3 + i * 0.1}s both`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom-right: CTA */}
        <div
          className="absolute"
          style={{
            bottom: "clamp(30px, 8vh, 70px)",
            right: 0,
          }}
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-3 bg-cyan text-navy text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-500 hover:bg-white hover:shadow-[0_0_40px_rgba(19,197,221,0.4)]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              boxShadow: dark
                ? "0 0 20px rgba(19,197,221,0.3)"
                : "0 0 20px rgba(19,197,221,0.15)",
              animation: "pulseCta 2.5s ease-in-out infinite",
            }}
          >
            Start a Project
            <span className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute"
          style={{
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            animation: "fadeSlideUp 1s ease-out 1.2s both",
          }}
        >
          <div
            className="flex flex-col items-center gap-1"
            style={{
              animation: "bounceScroll 2.5s ease-in-out infinite",
            }}
          >
            <span
              style={{
                fontSize: "clamp(8px, 0.6vw, 10px)",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
                color: c.scrollText,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Scroll
            </span>
            <span
              style={{
                color: c.scrollArrow,
                fontSize: "14px",
                lineHeight: 1,
              }}
            >
              &darr;
            </span>
          </div>
        </div>

        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes pulseKumirai {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceScroll {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @keyframes pulseCta {
          0%, 100% { box-shadow: 0 0 20px rgba(19,197,221,0.3); }
          50% { box-shadow: 0 0 50px rgba(19,197,221,0.6); }
        }
      `}</style>
    </main>
  );
}
