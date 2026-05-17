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
          color: "rgba(243,237,237,0.1)",
          zIndex: 1,
          fontFamily: "'Poppins', sans-serif",
          whiteSpace: "nowrap",
          lineHeight: 1,
          animation: "pulseKumirai 6s ease-in-out infinite",
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
            background: "linear-gradient(135deg, #13c5dd 0%, #f8c0de 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Web Developer
        </div>

        {/* Availability badge - same line as stats, above testimonial */}
        <div
          className="absolute flex items-center gap-1.5 px-3 py-1 rounded-full"
          style={{
            top: "clamp(80px, 12%, 130px)",
            right: 0,
            background: "rgba(34,197,94,0.12)",
            border: "1px solid rgba(34,197,94,0.25)",
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
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "0.05em",
            }}
          >
            Available for Hire
          </span>
        </div>

        {/* Bottom-right: CTA button */}
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
              boxShadow: "0 0 20px rgba(19,197,221,0.3)",
              animation: "pulseCta 2.5s ease-in-out infinite",
            }}
          >
            Start a Project
            <span className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </div>
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
                  color: "#f3eded",
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
                  color: "rgba(255,255,255,0.3)",
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

        {/* Testimonial snippet */}
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
              color: "rgba(255,255,255,0.5)",
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
              color: "rgba(255,255,255,0.25)",
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
                  background: "rgba(19,197,221,0.1)",
                  letterSpacing: "0.03em",
                  animation: `fadeSlideUp 0.5s ease-out ${0.3 + i * 0.1}s both`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom-right: CTA button */}
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
              boxShadow: "0 0 20px rgba(19,197,221,0.3)",
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
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Scroll
            </span>
            <span
              style={{
                color: "rgba(19,197,221,0.3)",
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
