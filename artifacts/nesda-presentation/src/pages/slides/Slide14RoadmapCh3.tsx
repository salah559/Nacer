const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

const chapters = [
  { n: "✓", title: "الإشكالية والمنهج", sub: "المقدمة العامة", done: true, active: false },
  { n: "✓", title: "الإطار النظري — PME", sub: "ماهيتها، تمويلها، دور الدولة", done: true, active: false },
  { n: "✓", title: "NESDA والمقاولاتية", sub: "النشأة، القانون، دور الوكالة", done: true, active: false },
  { n: "04", title: "الدراسة التطبيقية", sub: "فرع وهران — نتائج الميدان", done: false, active: true },
  { n: "05", title: "الخلاصة والتوصيات", sub: "النتائج الكاملة", done: false, active: false },
];

// Progress line grows to active item (index 3 ≈ 68%)
const PROGRESS_HEIGHT = "68%";
const PROGRESS_DELAY = "0.3s";
const SLIDE_ENTER_DURATION = 0.55;
const NODE_DELAYS = [SLIDE_ENTER_DURATION + 0.25, SLIDE_ENTER_DURATION + 0.35, SLIDE_ENTER_DURATION + 0.45, SLIDE_ENTER_DURATION + 1.35, SLIDE_ENTER_DURATION + 1.50];
const CARD_DELAYS = [SLIDE_ENTER_DURATION + 0.30, SLIDE_ENTER_DURATION + 0.40, SLIDE_ENTER_DURATION + 0.50, SLIDE_ENTER_DURATION + 1.42, SLIDE_ENTER_DURATION + 1.57];

export default function Slide14RoadmapCh3() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>

            <div className="slide-bg bg-stripes" />
      <div className="bg-overlay-light" />
      <div className="bg-grid-top" />

<div className="gold-bar-top" />
      <div className="gold-bar-bottom" />

      <div className="particle particle-3" style={{ top: "16%", right: "20%", width: "0.4vw", height: "0.4vw", background: "rgba(201,168,76,0.4)", boxShadow: "0 0 1vw rgba(201,168,76,0.5)" }} />
      <div className="particle particle-6" style={{ top: "75%", right: "30%", width: "0.3vw", height: "0.3vw", background: "rgba(201,168,76,0.3)" }} />

      <div className="relative z-10 flex h-full">

        {/* ── Left: Title panel ── */}
        <div style={{ width: "36%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "7vh 3vw 7vh 7vw", borderLeft: "1px solid rgba(201,168,76,0.15)" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.1vw", color: "#c9a84c", letterSpacing: "0.2em", fontWeight: 700, marginBottom: "1.5vh", textTransform: "uppercase" }}>خطة البحث — الانتقال</div>

          <h2 className="anim-clip-rtl delay-2" style={{ fontSize: "3.6vw", fontWeight: 900, color: "#0d1830", margin: 0, lineHeight: 1.15 }}>ننتقل إلى</h2>
          <h2 className="anim-clip-rtl delay-3" style={{ fontSize: "3.6vw", fontWeight: 900, margin: 0, lineHeight: 1.15 }}>
            <span className="gold-shimmer" style={{ display: "inline-block" }}>الفصل التطبيقي</span>
          </h2>

          <div className="anim-line-h delay-4" style={{ width: "55%", height: "0.3vh", marginTop: "2.5vh", marginBottom: "2.5vh", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />

          <div className="anim-fade delay-5" style={{ fontSize: "1.35vw", color: "#4a5a78", lineHeight: 1.7 }}>
            دراسة حالة — NESDA فرع وهران
          </div>

          {/* Progress counter */}
          <div className="anim-perspective delay-6" style={{ marginTop: "3.5vh", background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "1vw", padding: "1.2vh 1.5vw", alignSelf: "flex-start" }}>
            <div style={{ fontSize: "1vw", color: "#4a5a78", marginBottom: "0.4vh" }}>التقدم في البحث</div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
              <div style={{ flex: 1, height: "0.4vh", background: "rgba(201,168,76,0.15)", borderRadius: "1vw", overflow: "hidden" }}>
                <div style={{ width: "60%", height: "100%", background: "linear-gradient(90deg, #c9a84c, #f0d080)", borderRadius: "1vw", animation: "lineGrow 0.8s ease 0.6s both" }} />
              </div>
              <span style={{ fontSize: "1.1vw", fontWeight: 700, color: "#c9a84c" }}>60%</span>
            </div>
          </div>
        </div>

        {/* ── Right: Animated vertical timeline ── */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "5vh 6vw 5vh 3vw", position: "relative" }}>

          {/* Background track */}
          <div style={{ position: "absolute", right: "6vw", top: "10%", bottom: "10%", width: "0.25vw", background: "rgba(201,168,76,0.12)", borderRadius: "1vw" }} />

          {/* Animated progress line — travels down to active node */}
          <div style={{
            position: "absolute", right: "6vw", top: "10%",
            width: "0.25vw",
            height: PROGRESS_HEIGHT,
            background: "linear-gradient(180deg, transparent, #c9a84c 10%, #f0d080 80%, #c9a84c)",
            borderRadius: "1vw",
            transformOrigin: "top",
            animation: `progressLineGrow 0.95s cubic-bezier(0.22,1,0.36,1) ${PROGRESS_DELAY} both`,
          }} />

          {/* Chapter items */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", height: "80%", paddingRight: "3.5vw" }}>
            {chapters.map((ch, i) => {
              const isDone = ch.done;
              const isActive = ch.active;
              const isFuture = !isDone && !isActive;

              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "2vw", position: "relative" }}>

                  {/* Node circle */}
                  <div style={{
                    position: "absolute", right: "-3.5vw", top: "50%", transform: "translateY(-50%)",
                    width: isActive ? "1.8vw" : "1.4vw",
                    height: isActive ? "1.8vw" : "1.4vw",
                    borderRadius: "50%",
                    background: isDone ? "rgba(201,168,76,0.25)" : isActive ? "#c9a84c" : "rgba(201,168,76,0.1)",
                    border: isDone ? "2px solid rgba(201,168,76,0.5)" : isActive ? "2px solid #f0d080" : "2px solid rgba(201,168,76,0.25)",
                    boxShadow: isActive ? "0 0 1.5vw rgba(201,168,76,0.5)" : "none",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    animation: `nodePopIn 0.4s cubic-bezier(0.34,1.56,0.64,1) ${NODE_DELAYS[i]}s both`,
                    zIndex: 2,
                  }}>
                    {isDone && <span style={{ fontSize: "0.7vw", color: "#c9a84c", fontWeight: 900 }}>✓</span>}
                    {isActive && <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#ffffff" }} />}
                  </div>

                  {/* Active node pulsing rings */}
                  {isActive && (
                    <>
                      <div style={{ position: "absolute", right: "-3.5vw", top: "50%", transform: "translateY(-50%) translateX(50%)", width: "1.8vw", height: "1.8vw", borderRadius: "50%", border: "2px solid rgba(201,168,76,0.7)", animation: "activeRing 1.6s ease-out 1.5s infinite" }} />
                      <div style={{ position: "absolute", right: "-3.5vw", top: "50%", transform: "translateY(-50%) translateX(50%)", width: "1.8vw", height: "1.8vw", borderRadius: "50%", border: "2px solid rgba(201,168,76,0.4)", animation: "activeRing2 1.6s ease-out 2.0s infinite" }} />
                    </>
                  )}

                  {/* Chapter card */}
                  <div style={{
                    flex: 1,
                    background: isActive ? "rgba(254,250,240,0.98)" : isDone ? "rgba(248,250,255,0.7)" : "rgba(248,250,255,0.95)",
                    border: isActive ? "1.5px solid rgba(201,168,76,0.5)" : isDone ? "1px solid rgba(201,168,76,0.18)" : "1px solid rgba(201,168,76,0.15)",
                    borderRadius: "0.8vw",
                    padding: "1.1vh 2vw",
                    opacity: isFuture ? 0.45 : 1,
                    boxShadow: isActive ? "0 4px 20px rgba(201,168,76,0.15), 0 0 0 1px rgba(201,168,76,0.08)" : "0 2px 10px rgba(0,0,0,0.05)",
                    animation: `cardSlideIn 0.5s cubic-bezier(0.22,1,0.36,1) ${CARD_DELAYS[i]}s both`,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
                      <div style={{ fontSize: isActive ? "1.6vw" : "1.4vw", fontWeight: 900, color: isDone ? "rgba(201,168,76,0.5)" : isActive ? "#c9a84c" : "rgba(201,168,76,0.25)", flexShrink: 0 }}>{ch.n}</div>
                      <div>
                        <div style={{ fontSize: isActive ? "1.65vw" : "1.5vw", fontWeight: isActive ? 800 : 600, color: isDone ? "#4a5a78" : "#0d1830", lineHeight: 1.3 }}>{ch.title}</div>
                        <div style={{ fontSize: "1.1vw", color: "#4a5a78", marginTop: "0.15vh" }}>{ch.sub}</div>
                      </div>
                      {isActive && (
                        <div style={{ marginRight: "auto", marginLeft: "0", background: "#c9a84c", borderRadius: "2vw", padding: "0.3vh 0.9vw", fontSize: "0.9vw", fontWeight: 700, color: "#ffffff", whiteSpace: "nowrap", animation: "fadeIn 0.4s ease 1.7s both" }}>الفصل الحالي</div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
