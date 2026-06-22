export default function PromoBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070b15] py-16 lg:py-20">
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
                {/* Screen */}
                <img
                  src="/designs/5652262.jpg"
                  alt="App preview"
                  className="h-full w-full object-cover"
                />
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
