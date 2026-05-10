const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide03Problematic() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-problematic" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />

<div className="gold-accent-top" /><div className="gold-accent-bottom" />
      <div className="anim-smooth-fade delay-1 absolute" style={{ top: "4vh", left: "5vw", width: "3vw", height: "3vw", borderTop: "0.3vh solid rgba(21,101,192,0.4)", borderLeft: "0.3vh solid rgba(21,101,192,0.4)" }} />
      <div className="anim-smooth-fade delay-1 absolute" style={{ bottom: "4vh", right: "5vw", width: "3vw", height: "3vw", borderBottom: "0.3vh solid rgba(21,101,192,0.4)", borderRight: "0.3vh solid rgba(21,101,192,0.4)" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "4vh 5vw" }}>
        <div style={{ marginBottom: "2vh", flexShrink: 0 }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.5vw", color: "#1565C0", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.5vh", textTransform: "uppercase" }}>المقدمة العامة</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0, marginBottom: "0.5vh" }}>الإشكالية والمنهج</h2>
          <div className="anim-line-draw delay-3" style={{ width: "12vw", height: "0.3vh", background: "linear-gradient(90deg, #1565C0, #42A5F5, transparent)" }} />
        </div>
        <div className="anim-card-morph delay-3" style={{ background: "rgba(240,244,252,0.95)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(21,101,192,0.3)", borderRadius: "1.5vw", padding: "2vh 3vw", marginBottom: "2vh", position: "relative", overflow: "hidden", boxShadow: "0 0 4vw rgba(21,101,192,0.18), inset 0 1px 0 rgba(21,101,192,0.35)", flexShrink: 0 }}>
          <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.3vh", background: "linear-gradient(90deg, transparent, #1565C0, transparent)" }} />
          <div style={{ fontSize: "1.6vw", color: "#1565C0", fontWeight: 600, marginBottom: "0.5vh", letterSpacing: "0.1em" }}>السؤال المحوري</div>
          <div style={{ fontSize: "2.2vw", color: "#0d1830", fontWeight: 700, lineHeight: 1.5, fontStyle: "italic" }}>
            "ما هو الدور الذي تقوم به الوكالة الوطنية
            <span style={{ color: "#1565C0" }}>لدعم وتنمية المقاولاتية</span> في تمويل المؤسسات الصغيرة والمتوسطة؟"
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5vw", flex: 1, minHeight: 0 }}>
          <div className="anim-morph-in delay-4" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(21,101,192,0.35)", borderRadius: "1vw", padding: "1.5vh 1.5vw", position: "relative", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "absolute", top: 0, left: "25%", right: "25%", height: "0.2vh", background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.6), transparent)" }} />
            <div style={{ fontSize: "2.5vw", fontWeight: 900, color: "rgba(21,101,192,0.18)", marginBottom: "0.5vh", lineHeight: 1 }}>01</div>
            <div style={{ fontSize: "1.7vw", color: "#0d1830", lineHeight: 1.4, fontWeight: 600 }}>ما هي ماهية المؤسسات الصغيرة والمتوسطة وأبعادها العامة؟</div>
          </div>
          <div className="anim-morph-in delay-5" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(21,101,192,0.35)", borderRadius: "1vw", padding: "1.5vh 1.5vw", position: "relative", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "absolute", top: 0, left: "25%", right: "25%", height: "0.2vh", background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.6), transparent)" }} />
            <div style={{ fontSize: "2.5vw", fontWeight: 900, color: "rgba(21,101,192,0.18)", marginBottom: "0.5vh", lineHeight: 1 }}>02</div>
            <div style={{ fontSize: "1.7vw", color: "#0d1830", lineHeight: 1.4, fontWeight: 600 }}>كيف يتم تمويل PME قبل تدخل NESDA؟</div>
          </div>
          <div className="anim-morph-in delay-6" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(21,101,192,0.35)", borderRadius: "1vw", padding: "1.5vh 1.5vw", position: "relative", display: "flex", flexDirection: "column" }}>
            <div style={{ position: "absolute", top: 0, left: "25%", right: "25%", height: "0.2vh", background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.6), transparent)" }} />
            <div style={{ fontSize: "2.5vw", fontWeight: 900, color: "rgba(21,101,192,0.18)", marginBottom: "0.5vh", lineHeight: 1 }}>03</div>
            <div style={{ fontSize: "1.7vw", color: "#0d1830", lineHeight: 1.4, fontWeight: 600 }}>كيف تلعب NESDA دورًا في تمويل ومرافقة PME؟</div>
          </div>
        </div>
      </div>
    </div>
  );
}
