const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

const chapters = [
  { n: "01", title: "الإشكالية والمنهج", sub: "المقدمة العامة" },
  { n: "02", title: "الإطار النظري — PME", sub: "ماهيتها، تمويلها، دور الدولة" },
  { n: "03", title: "NESDA والمقاولاتية", sub: "النشأة، القانون، دور الوكالة" },
  { n: "04", title: "الدراسة التطبيقية", sub: "فرع وهران — نتائج الميدان" },
  { n: "05", title: "الخلاصة والتوصيات", sub: "النتائج الكاملة" },
];

const NODE_DELAYS = [0.35, 0.50, 0.65, 0.80, 0.95];
const CARD_DELAYS = [0.42, 0.57, 0.72, 0.87, 1.02];

export default function Slide02Roadmap() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>

            <div className="slide-bg bg-mesh" />
      <div className="bg-overlay-light" />
      <div className="bg-grid-top" />

<div className="gold-accent-top" />
      <div className="gold-accent-bottom" />

      {/* Floating gold particles */}


      <div className="relative z-10 flex h-full">

        {/* ── Left: Title panel ── */}
        <div style={{ width: "36%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "7vh 3vw 7vh 7vw", borderLeft: "1px solid rgba(201,168,76,0.15)" }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.1vw", color: "#8B6914", letterSpacing: "0.2em", fontWeight: 700, marginBottom: "1.5vh", textTransform: "uppercase" }}>خطة البحث</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "4.2vw", fontWeight: 900, color: "#0d1830", margin: 0, lineHeight: 1.1, marginBottom: "0.5vh" }}>هيكل</h2>
          <h2 className="anim-title-rtl delay-3" style={{ fontSize: "4.2vw", fontWeight: 900, margin: 0, lineHeight: 1.1 }}>
            <span className="text-gold" style={{ display: "inline-block" }}>الدراسة</span>
          </h2>
          <div className="anim-line-draw delay-4" style={{ width: "55%", height: "0.3vh", marginTop: "2.5vh", marginBottom: "2.5vh", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          <div className="anim-smooth-fade delay-5" style={{ fontSize: "1.4vw", color: "#4a5a78", lineHeight: 1.7 }}>
            خمسة فصول تغطي الجانبين النظري والتطبيقي للبحث
          </div>
          {/* Chapter count badge */}
          <div className="anim-morph-in delay-6" style={{ marginTop: "3.5vh", display: "inline-flex", alignItems: "center", gap: "0.8vw", background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "2vw", padding: "0.8vh 1.5vw", alignSelf: "flex-start" }}>
            <span style={{ fontSize: "1.7vw", fontWeight: 900, color: "#8B6914" }}>05</span>
            <span style={{ fontSize: "1.1vw", color: "#4a5a78", fontWeight: 600 }}>فصول</span>
          </div>
        </div>

        {/* ── Right: Animated vertical timeline ── */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "5vh 6vw 5vh 3vw", position: "relative" }}>

          {/* Background track line */}
          <div style={{ position: "absolute", right: "6vw", top: "10%", bottom: "10%", width: "0.25vw", background: "rgba(201,168,76,0.12)", borderRadius: "1vw" }} />

          {/* Animated gold line drawing from top - full height for overview */}
          <div style={{
            position: "absolute", right: "6vw", top: "10%", bottom: "10%",
            width: "0.25vw",
            background: "linear-gradient(180deg, transparent, #c9a84c 8%, #f0d080 50%, #c9a84c 92%, transparent)",
            borderRadius: "1vw",
            transformOrigin: "top",
            animation: "progressLineGrow 0.9s cubic-bezier(0.22,1,0.36,1) 0.25s both",
          }} />

          {/* Chapter items */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "80%", paddingRight: "3.5vw" }}>
            {chapters.map((ch, i) => (
              <div key={ch.n} style={{ display: "flex", alignItems: "center", gap: "2vw", position: "relative" }}>

                {/* Node circle */}
                <div style={{
                  position: "absolute", right: "-3.5vw", top: "50%", transform: "translateY(-50%)",
                  width: "1.4vw", height: "1.4vw",
                  borderRadius: "50%",
                  background: "#c9a84c",
                  border: "2px solid #f0d080",
                  boxShadow: "0 0 1vw rgba(201,168,76,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  animation: `nodePopIn 0.4s cubic-bezier(0.34,1.56,0.64,1) ${NODE_DELAYS[i]}s both`,
                  zIndex: 2,
                }} />

                {/* Chapter card */}
                <div style={{
                  flex: 1,
                  background: "rgba(248,250,255,0.95)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: "0.8vw",
                  padding: "1.2vh 2vw",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  animation: `cardSlideIn 0.5s cubic-bezier(0.22,1,0.36,1) ${CARD_DELAYS[i]}s both`,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
                    <div style={{ fontSize: "1.5vw", fontWeight: 900, color: "rgba(201,168,76,0.3)", letterSpacing: "0.05em", flexShrink: 0 }}>{ch.n}</div>
                    <div>
                      <div style={{ fontSize: "1.55vw", fontWeight: 700, color: "#0d1830", lineHeight: 1.3 }}>{ch.title}</div>
                      <div style={{ fontSize: "1.15vw", color: "#4a5a78", marginTop: "0.15vh" }}>{ch.sub}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
