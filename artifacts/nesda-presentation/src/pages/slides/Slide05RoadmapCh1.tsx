const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

const chapters = [
  { n: "✓", title: "الإشكالية والمنهج", sub: "المقدمة العامة", done: true, active: false },
  { n: "02", title: "الإطار النظري — PME", sub: "ماهيتها، تمويلها، دور الدولة", done: false, active: true },
  { n: "03", title: "NESDA والمقاولاتية", sub: "النشأة، القانون، دور الوكالة", done: false, active: false },
  { n: "04", title: "الدراسة التطبيقية", sub: "فرع وهران — نتائج الميدان", done: false, active: false },
  { n: "05", title: "الخلاصة والتوصيات", sub: "النتائج الكاملة", done: false, active: false },
];

// Progress line grows to reach the active item (item index 1 = ~28% height)
const PROGRESS_HEIGHT = "28%";
const PROGRESS_DELAY = "0.3s";
const ACTIVE_IDX = 1;
// All animations wait for slide transition to finish (0.55s) then start
const SLIDE_ENTER_DURATION = 0.55;
const NODE_DELAYS =  [SLIDE_ENTER_DURATION + 0.25, SLIDE_ENTER_DURATION + 1.15, SLIDE_ENTER_DURATION + 1.30, SLIDE_ENTER_DURATION + 1.42, SLIDE_ENTER_DURATION + 1.52];
const CARD_DELAYS =  [SLIDE_ENTER_DURATION + 0.30, SLIDE_ENTER_DURATION + 1.20, SLIDE_ENTER_DURATION + 1.36, SLIDE_ENTER_DURATION + 1.48, SLIDE_ENTER_DURATION + 1.58];

export default function Slide05RoadmapCh1() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>

            <div className="slide-bg bg-stripes" />
      <div className="bg-overlay-light" />
      <div className="bg-grid-top" />

<div className="gold-accent-top" />
      <div className="gold-accent-bottom" />

      <div className="relative z-10 flex h-full">

        {/* ── Left: Title panel ── */}
        <div style={{ width: "36%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "7vh 3vw 7vh 7vw", borderLeft: "1px solid rgba(201,168,76,0.15)" }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.1vw", color: "#c9a84c", letterSpacing: "0.2em", fontWeight: 700, marginBottom: "1.5vh", textTransform: "uppercase" }}>خطة البحث — الانتقال</div>

          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "3.6vw", fontWeight: 900, color: "#0d1830", margin: 0, lineHeight: 1.15 }}>ننتقل إلى</h2>
          <h2 className="anim-title-rtl delay-3" style={{ fontSize: "3.6vw", fontWeight: 900, margin: 0, lineHeight: 1.15 }}>
            <span className="text-gold" style={{ display: "inline-block" }}>الفصل الأول</span>
          </h2>

          <div className="anim-line-draw delay-4" style={{ width: "55%", height: "0.3vh", marginTop: "2.5vh", marginBottom: "2.5vh", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />

          <div className="anim-smooth-fade delay-5" style={{ fontSize: "1.35vw", color: "#4a5a78", lineHeight: 1.7 }}>
            الإطار النظري للمؤسسات الصغيرة والمتوسطة
          </div>

          {/* Progress counter */}
          <div className="anim-card-morph delay-6" style={{ marginTop: "3.5vh", background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "1vw", padding: "1.2vh 1.5vw", alignSelf: "flex-start" }}>
            <div style={{ fontSize: "1vw", color: "#4a5a78", marginBottom: "0.4vh" }}>التقدم في البحث</div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.8vw" }}>
              <div style={{ flex: 1, height: "0.4vh", background: "rgba(201,168,76,0.15)", borderRadius: "1vw", overflow: "hidden" }}>
                <div style={{ width: "20%", height: "100%", background: "linear-gradient(90deg, #c9a84c, #f0d080)", borderRadius: "1vw", animation: "lineGrow 0.8s ease 0.6s both" }} />
              </div>
              <span style={{ fontSize: "1.1vw", fontWeight: 700, color: "#c9a84c" }}>20%</span>
            </div>
          </div>
        </div>

        {/* ── Right: Animated vertical timeline ── */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "5vh 6vw 5vh 3vw", position: "relative" }}>

          {/* Background track */}
          <div style={{ position: "absolute", right: "6vw", top: "10%", bottom: "10%", width: "0.25vw", background: "rgba(201,168,76,0.12)", borderRadius: "1vw" }} />

          {/* Animated progress line — grows from top DOWN to active node */}
          <div style={{
            position: "absolute", right: "6vw", top: "10%",
            width: "0.25vw",
            height: PROGRESS_HEIGHT,
            background: "linear-gradient(180deg, transparent, #c9a84c 10%, #f0d080 80%, #c9a84c)",
            borderRadius: "1vw",
            transformOrigin: "top",
            animation: `progressLineGrow 0.85s cubic-bezier(0.22,1,0.36,1) ${PROGRESS_DELAY} both`,
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

                  {/* Active node pulsing ring */}
                  {isActive && (
                    <>
                      <div style={{ position: "absolute", right: "-3.5vw", top: "50%", transform: "translateY(-50%) translateX(50%)", width: "1.8vw", height: "1.8vw", borderRadius: "50%", border: "2px solid rgba(201,168,76,0.7)", animation: "activeRing 1.6s ease-out 1.3s infinite" }} />
                      <div style={{ position: "absolute", right: "-3.5vw", top: "50%", transform: "translateY(-50%) translateX(50%)", width: "1.8vw", height: "1.8vw", borderRadius: "50%", border: "2px solid rgba(201,168,76,0.4)", animation: "activeRing2 1.6s ease-out 1.8s infinite" }} />
                    </>
                  )}

                  {/* Chapter card */}
                  <div style={{
                    flex: 1,
                    background: isActive ? "rgba(254,250,240,0.98)" : isDone ? "rgba(248,250,255,0.7)" : "rgba(248,250,255,0.95)",
                    border: isActive ? "1.5px solid rgba(201,168,76,0.5)" : isDone ? "1px solid rgba(201,168,76,0.18)" : "1px solid rgba(201,168,76,0.15)",
                    borderRadius: "0.8vw",
                    padding: "1.2vh 2vw",
                    opacity: isFuture ? 0.55 : 1,
                    boxShadow: isActive ? "0 4px 20px rgba(201,168,76,0.15), 0 0 0 1px rgba(201,168,76,0.08)" : "0 2px 10px rgba(0,0,0,0.05)",
                    animation: `cardSlideIn 0.5s cubic-bezier(0.22,1,0.36,1) ${CARD_DELAYS[i]}s both`,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1.2vw" }}>
                      <div style={{ fontSize: isActive ? "1.6vw" : "1.4vw", fontWeight: 900, color: isDone ? "rgba(201,168,76,0.5)" : isActive ? "#c9a84c" : "rgba(201,168,76,0.25)", letterSpacing: "0.05em", flexShrink: 0 }}>{ch.n}</div>
                      <div>
                        <div style={{ fontSize: isActive ? "1.65vw" : "1.5vw", fontWeight: isActive ? 800 : isDone ? 600 : 600, color: isDone ? "#4a5a78" : isActive ? "#0d1830" : "#0d1830", lineHeight: 1.3, textDecoration: isDone ? "none" : "none" }}>{ch.title}</div>
                        <div style={{ fontSize: "1.1vw", color: "#4a5a78", marginTop: "0.15vh" }}>{ch.sub}</div>
                      </div>
                      {isActive && (
                        <div style={{ marginRight: "auto", marginLeft: "0", background: "#c9a84c", borderRadius: "2vw", padding: "0.3vh 0.9vw", fontSize: "0.9vw", fontWeight: 700, color: "#ffffff", whiteSpace: "nowrap", animation: "fadeIn 0.4s ease 1.5s both" }}>الفصل الحالي</div>
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
