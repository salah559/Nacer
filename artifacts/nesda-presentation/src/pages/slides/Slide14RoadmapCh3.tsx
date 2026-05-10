const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

const chapters = [
  { n: "✓", title: "الإشكالية والمنهج", sub: "المقدمة العامة", done: true, active: false },
  { n: "✓", title: "الإطار النظري — PME", sub: "ماهيتها، تمويلها، دور الدولة", done: true, active: false },
  { n: "✓", title: "NESDA والمقاولاتية", sub: "النشأة، القانون، دور الوكالة", done: true, active: false },
  { n: "04", title: "الدراسة التطبيقية", sub: "فرع وهران — نتائج الميدان", done: false, active: true },
  { n: "05", title: "الخلاصة والتوصيات", sub: "النتائج الكاملة", done: false, active: false },
];
const delays = ["delay-2","delay-2","delay-2","delay-3","delay-4"];

export default function Slide14RoadmapCh3() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#050a18", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(14,28,60,0.9) 0%, transparent 70%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 40% at 85% 80%, rgba(201,168,76,0.06) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(201,168,76,0.012) 60px, rgba(201,168,76,0.012) 62px)" }} />
      <div className="particle particle-3" style={{ top: "12%", right: "10%", width: "0.4vw", height: "0.4vw", background: "rgba(201,168,76,0.5)", borderRadius: "50%", boxShadow: "0 0 1vw rgba(201,168,76,0.7)" }} />
      <div className="particle particle-6" style={{ top: "75%", right: "22%", width: "0.3vw", height: "0.3vw", background: "rgba(240,208,128,0.4)", borderRadius: "50%" }} />
      <div className="gold-bar-top" /><div className="gold-bar-bottom" />
      <div className="anim-line-v delay-1 absolute" style={{ right: "42%", top: "8%", width: "0.2vh", height: "84%", background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.2) 20%, rgba(201,168,76,0.35) 50%, rgba(201,168,76,0.2) 80%, transparent)" }} />
      <div className="relative z-10 flex h-full">
        <div style={{ width: "38%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "7vh 3vw 7vh 8vw" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.2vw", color: "#c9a84c", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "1.5vh", textTransform: "uppercase" }}>خطة البحث — الانتقال</div>
          <h2 className="anim-clip-rtl delay-2" style={{ fontSize: "3.8vw", fontWeight: 900, color: "#f0f4ff", margin: 0, lineHeight: 1.15 }}>ننتقل إلى</h2>
          <h2 className="anim-clip-rtl delay-3" style={{ fontSize: "3.8vw", fontWeight: 900, margin: 0, lineHeight: 1.15 }}><span className="gold-shimmer" style={{ display: "inline-block" }}>الفصل التطبيقي</span></h2>
          <div className="anim-line-h delay-4" style={{ width: "60%", height: "0.3vh", marginTop: "2.5vh", marginBottom: "2.5vh", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          <div className="anim-fade delay-5" style={{ fontSize: "1.5vw", color: "#7a90b5", lineHeight: 1.5 }}>دراسة حالة — NESDA فرع وهران</div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "7vh 6vw 7vh 4vw", gap: "1.4vh" }}>
          {chapters.map((ch, i) => (
            <div key={i} className={`anim-perspective ${delays[i]}`} style={{ display: "flex", alignItems: "center", gap: "2vw" }}>
              <div style={{ width: "4.8vw", height: "4.8vw", flexShrink: 0, borderRadius: "0.8vw", background: ch.active ? "#c9a84c" : ch.done ? "rgba(201,168,76,0.15)" : "rgba(14,22,44,0.6)", border: ch.active ? "2px solid #f0d080" : "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ch.done ? "1.6vw" : "1.8vw", fontWeight: 900, color: ch.active ? "#050a18" : "#c9a84c", boxShadow: ch.active ? "0 0 2vw rgba(201,168,76,0.4)" : "none" }}>
                {ch.n}
              </div>
              <div style={{ flex: 1, background: ch.active ? "rgba(201,168,76,0.1)" : "rgba(14,22,44,0.5)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: ch.active ? "1px solid rgba(201,168,76,0.4)" : "1px solid rgba(201,168,76,0.08)", borderRadius: "0.8vw", padding: "1.2vh 1.8vw", opacity: ch.done ? 0.5 : 1, boxShadow: ch.active ? "0 0 2vw rgba(201,168,76,0.08), inset 0 1px 0 rgba(201,168,76,0.12)" : "none" }}>
                <div style={{ fontSize: "1.7vw", fontWeight: ch.active ? 800 : 600, color: ch.active ? "#c9a84c" : "#f0f4ff", lineHeight: 1.3 }}>{ch.title}</div>
                <div style={{ fontSize: "1.2vw", color: "#7a90b5", marginTop: "0.2vh" }}>{ch.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
