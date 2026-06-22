export default function PromoBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f1a33] py-16 lg:py-20">
      {/* Subtle glow behind phone */}
      <div className="pointer-events-none absolute right-1/2 top-1/2 -translate-y-1/2 lg:right-[65%] lg:translate-x-0">
        <div className="h-72 w-72 rounded-full bg-cyan/10 blur-3xl lg:h-96 lg:w-96" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="group relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-[3rem] bg-cyan/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              {/* Phone body */}
              <div
                className="relative overflow-hidden rounded-[2.5rem] border-4 border-zinc-700 bg-zinc-800 shadow-2xl shadow-black/40"
                style={{
                  width: "clamp(220px, 30vw, 280px)",
                  height: "clamp(450px, 62vw, 570px)",
                }}
              >
                {/* Notch */}
                <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-xl bg-black" />
                {/* Screen — Xamace app home replica */}
                <div className="h-full w-full overflow-y-auto" style={{ backgroundColor: "#F0F2F5", fontFamily: "system-ui, -apple-system, sans-serif" }}>
                  {/* SA flag bar */}
                  <div style={{ display: "flex", height: "4px" }}>
                    {["#007A4D","#FFB612","#DE3831","#002395","#101820"].map(c => (
                      <div key={c} style={{ flex: 1, backgroundColor: c }} />
                    ))}
                  </div>
                  {/* Header */}
                  <div style={{ padding: "12px 14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: "11px", color: "#6B7280" }}>Let's practise</div>
                      <div style={{ fontSize: "20px", fontWeight: 800, color: "#101820", marginTop: "1px" }}>Xamace</div>
                    </div>
                    <div style={{ width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#101820", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-5 4-8 8-8s8 3 8 8"/></svg>
                    </div>
                  </div>
                  {/* Welcome card */}
                  <div style={{ margin: "0 14px 18px", borderRadius: "14px", padding: "18px", background: "linear-gradient(135deg,#007A4D,#005a38)", color: "#fff" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                      <div style={{ width: "24px", height: "24px", borderRadius: "7px", backgroundColor: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
                      </div>
                      <span style={{ fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "1px" }}>WELCOME</span>
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: 800, lineHeight: "20px", marginBottom: "4px" }}>Studying on your phone made easier</div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.65)", marginBottom: "12px", lineHeight: "14px" }}>Practise CAPS-aligned questions, track progress, and ace your exams.</div>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "4px", backgroundColor: "#fff", padding: "6px 12px", borderRadius: "7px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 700, color: "#007A4D" }}>Get Started Free</span>
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#007A4D" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                  </div>
                  {/* Everything You Need */}
                  <div style={{ padding: "0 14px", marginBottom: "4px" }}>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#101820", marginBottom: "8px" }}>Everything You Need</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px" }}>
                      {[
                        { label: "Practice", sub: "CAPS-aligned questions for every topic", color: "#007A4D" },
                        { label: "Exam Papers", sub: "Full past papers with timed practice", color: "#002395" },
                        { label: "AI Tutor", sub: "Step-by-step explanations & chat tutor", color: "#FFB612" },
                        { label: "Progress", sub: "Track streaks and daily goals", color: "#DE3831" },
                      ].map(f => (
                        <div key={f.label} style={{ background: "#fff", borderRadius: "11px", padding: "10px", border: "1px solid #E5E7EB" }}>
                          <div style={{ width: "30px", height: "30px", borderRadius: "8px", backgroundColor: f.color + "18", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "6px" }}>
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke={f.color} strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                          </div>
                          <div style={{ fontSize: "11px", fontWeight: 700, color: "#101820", marginBottom: "1px" }}>{f.label}</div>
                          <div style={{ fontSize: "9px", color: "#9CA3AF", lineHeight: "12px" }}>{f.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Subjects */}
                  <div style={{ padding: "0 14px", marginTop: "4px" }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#101820", marginBottom: "6px" }}>Check Available subjects</div>
                    <div style={{ display: "flex", gap: "4px", marginBottom: "8px" }}>
                      {[7,8,9,10,11,12].map(g => (
                        <div key={g} style={{ flex: 1, textAlign: "center", padding: "4px 0", borderRadius: "999px", fontSize: "8px", fontWeight: 600, backgroundColor: g === 12 ? "#007A4D" : "#F3F4F6", color: g === 12 ? "#fff" : "#6B7280", border: g === 12 ? "none" : "1px solid #E5E7EB" }}>
                          Gr {g}
                        </div>
                      ))}
                    </div>
                    {[
                      { name: "Mathematics", color: "#007A4D" },
                      { name: "Physical Sciences", color: "#002395" },
                      { name: "Life Sciences", color: "#DE3831" },
                    ].map(s => (
                      <div key={s.name} style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fff", borderRadius: "11px", padding: "8px 10px", border: "1px solid #E5E7EB", marginBottom: "5px" }}>
                        <div style={{ width: "28px", height: "28px", borderRadius: "8px", backgroundColor: s.color + "18", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={s.color} strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="16" y2="13"/></svg>
                        </div>
                        <div style={{ flex: 1, fontSize: "10px", fontWeight: 600, color: "#101820" }}>{s.name}</div>
                        <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="#D1D5DB" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                      </div>
                    ))}
                  </div>
                  {/* Social proof */}
                  <div style={{ margin: "8px 14px 0", borderRadius: "11px", padding: "10px", background: "linear-gradient(135deg,#007A4D,#005a38)", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                    <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.85)" }}>Join <strong style={{ color: "#fff" }}>500+ students</strong> practising daily</span>
                  </div>
                  <div style={{ height: "16px" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span
              className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              Web &amp; Mobile
            </span>

            <h2
              className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Websites + <span className="text-cyan">Mobile Apps</span>
            </h2>

            <p
              className="mt-5 max-w-md text-sm leading-relaxed sm:text-base"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 300,
              }}
            >
              From responsive websites to full React Native mobile apps — I
              build digital products that work across every screen. Web, iOS,
              and Android from a single codebase.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-cyan px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-navy transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-cyan/30"
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
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white/80 transition-all duration-300 hover:border-white/40 hover:text-white"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
