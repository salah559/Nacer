const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide02Roadmap() {
  const chapters = [
    { n: "01", title: "الإشكالية والمنهج", sub: "المقدمة العامة" },
    { n: "02", title: "الإطار النظري — PME", sub: "ماهيتها، تمويلها، دور الدولة" },
    { n: "03", title: "NESDA والمقاولاتية", sub: "النشأة، القانون، دور الوكالة" },
    { n: "04", title: "الدراسة التطبيقية", sub: "فرع وهران — نتائج الميدان" },
    { n: "05", title: "الخلاصة والتوصيات", sub: "النتائج الكاملة" },
  ];
  const delays = ["delay-2", "delay-3", "delay-4", "delay-5", "delay-6"];

  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#050a18", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(14,28,60,0.9) 0%, transparent 70%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 40% at 85% 80%, rgba(201,168,76,0.05) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.012) 60px, rgba(201,168,76,0.012) 62px)" }} />

      {/* Particles */}
      <div className="particle particle-1" style={{ top: "10%", right: "15%", width: "0.4vw", height: "0.4vw", background: "rgba(201,168,76,0.5)", borderRadius: "50%", boxShadow: "0 0 1vw rgba(201,168,76,0.7)" }} />
      <div className="particle particle-3" style={{ top: "75%", right: "25%", width: "0.3vw", height: "0.3vw", background: "rgba(240,208,128,0.4)", borderRadius: "50%" }} />
      <div className="particle particle-5" style={{ top: "45%", right: "8%", width: "0.5vw", height: "0.5vw", background: "rgba(201,168,76,0.35)", borderRadius: "50%" }} />

      <div className="gold-bar-top" />
      <div className="gold-bar-bottom" />

      {/* Right side decorative vertical line */}
      <div className="anim-line-v delay-1 absolute" style={{ right: "42%", top: "8%", width: "0.2vh", height: "84%", background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.15) 20%, rgba(201,168,76,0.3) 50%, rgba(201,168,76,0.15) 80%, transparent)" }} />

      <div className="relative z-10 flex h-full">
        {/* Left — Title panel */}
        <div style={{ width: "38%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "7vh 3vw 7vh 8vw" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.2vw", color: "#c9a84c", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "1.5vh", textTransform: "uppercase" }}>خطة البحث</div>
          <h2 className="anim-clip-rtl delay-2" style={{ fontSize: "4.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, lineHeight: 1.1, marginBottom: "0.5vh" }}>هيكل</h2>
          <h2 className="anim-clip-rtl delay-3" style={{ fontSize: "4.5vw", fontWeight: 900, margin: 0, lineHeight: 1.1 }}>
            <span className="gold-shimmer" style={{ display: "inline-block" }}>الدراسة</span>
          </h2>
          <div className="anim-line-h delay-4" style={{ width: "60%", height: "0.3vh", marginTop: "2.5vh", marginBottom: "3vh", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          <div className="anim-fade delay-5" style={{ fontSize: "1.5vw", color: "#7a90b5", lineHeight: 1.6 }}>
            خمسة فصول تغطي الجانبين النظري والتطبيقي للبحث
          </div>
          {/* Mini decoration */}
          <div className="anim-scale delay-6" style={{ marginTop: "3vh", display: "flex", gap: "0.8vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#c9a84c", boxShadow: "0 0 1vw rgba(201,168,76,0.8)" }} />
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "rgba(201,168,76,0.4)" }} />
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "rgba(201,168,76,0.2)" }} />
          </div>
        </div>

        {/* Right — Chapters list */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "7vh 6vw 7vh 4vw", gap: "1.4vh" }}>
          {chapters.map((ch, i) => (
            <div
              key={ch.n}
              className={`anim-perspective ${delays[i]}`}
              style={{ display: "flex", alignItems: "center", gap: "2vw", cursor: "default" }}
            >
              {/* Number badge */}
              <div style={{ width: "5vw", height: "5vw", flexShrink: 0, borderRadius: "0.8vw", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8vw", fontWeight: 900, color: "#c9a84c", boxShadow: "inset 0 1px 0 rgba(201,168,76,0.15)" }}>
                {ch.n}
              </div>
              {/* Content */}
              <div style={{ flex: 1, background: "rgba(14,22,44,0.55)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "0.8vw", padding: "1.2vh 1.8vw", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}>
                <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#f0f4ff", lineHeight: 1.3 }}>{ch.title}</div>
                <div style={{ fontSize: "1.25vw", color: "#7a90b5", marginTop: "0.2vh" }}>{ch.sub}</div>
              </div>
              {/* Right accent dot */}
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "rgba(201,168,76,0.3)", flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
