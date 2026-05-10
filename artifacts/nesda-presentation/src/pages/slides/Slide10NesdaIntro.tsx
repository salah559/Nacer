const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide10NesdaIntro() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      {/* Dramatic central glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(20,40,90,0.8) 0%, transparent 70%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 60%)" }} />
      <div className="gold-bar-top" /><div className="gold-bar-bottom" />
      <div className="particle particle-1" style={{ top: "8%", right: "8%", width: "0.5vw", height: "0.5vw", background: "rgba(201,168,76,0.6)", borderRadius: "50%", boxShadow: "0 0 1.5vw rgba(201,168,76,0.8)" }} />
      <div className="particle particle-4" style={{ top: "85%", right: "15%", width: "0.4vw", height: "0.4vw", background: "rgba(240,208,128,0.5)", borderRadius: "50%" }} />
      <div className="particle particle-2" style={{ top: "40%", left: "5%", width: "0.35vw", height: "0.35vw", background: "rgba(201,168,76,0.4)", borderRadius: "50%" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4vh" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.2vw", color: "#c9a84c", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "1vh", textTransform: "uppercase" }}>الفصل الثاني</div>
          <h2 className="anim-clip-rtl delay-2" style={{ fontSize: "4.5vw", fontWeight: 900, color: "#0d1830", margin: 0, lineHeight: 1.1 }}>الوكالة الوطنية لدعم وتنمية</h2>
          <h2 className="anim-clip-rtl delay-3" style={{ fontSize: "4.5vw", fontWeight: 900, margin: "0 0 1.5vh", lineHeight: 1.1 }}><span className="gold-shimmer" style={{ display: "inline-block" }}>المقاولاتية — NESDA</span></h2>
          <div className="anim-line-h delay-4" style={{ width: "20vw", height: "0.3vh", margin: "0 auto", background: "linear-gradient(90deg, transparent, #c9a84c, #f0d080, #c9a84c, transparent)" }} />
        </div>

        {/* Timeline — 3 eras */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2vw", marginBottom: "3vh" }}>
          <div className="anim-perspective delay-3" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1.2vw", padding: "2.5vh 2vw", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.25vh", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)" }} />
            <div style={{ fontSize: "2.8vw", fontWeight: 900, color: "#c9a84c", marginBottom: "0.5vh" }}>2004</div>
            <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#0d1830", marginBottom: "0.3vh" }}>ANSEJ</div>
            <div style={{ fontSize: "1.15vw", color: "#4a5a78" }}>أول هيئة دعم المقاولة الشبابية</div>
          </div>
          <div className="anim-perspective delay-4" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1.2vw", padding: "2.5vh 2vw", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.25vh", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)" }} />
            <div style={{ fontSize: "2.8vw", fontWeight: 900, color: "#c9a84c", marginBottom: "0.5vh" }}>2022</div>
            <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#0d1830", marginBottom: "0.3vh" }}>الدمج</div>
            <div style={{ fontSize: "1.15vw", color: "#4a5a78" }}>اندماج ANSEJ + CNAC + ANGEM</div>
          </div>
          <div className="anim-perspective delay-5" style={{ background: "rgba(201,168,76,0.28)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.4)", borderRadius: "1.2vw", padding: "2.5vh 2vw", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 0 3vw rgba(201,168,76,0.35)" }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
            <div style={{ fontSize: "2.8vw", fontWeight: 900, color: "#c9a84c", marginBottom: "0.5vh", textShadow: "0 0 2vw rgba(201,168,76,0.5)" }}>2023</div>
            <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#0d1830", marginBottom: "0.3vh" }}>NESDA</div>
            <div style={{ fontSize: "1.15vw", color: "#c9a84c", fontWeight: 600 }}>الوكالة الوطنية الموحدة</div>
          </div>
        </div>

        {/* Mission statement */}
        <div className="anim-fade-up delay-5" style={{ background: "rgba(240,244,252,0.88)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1.2vw", padding: "2.5vh 3vw", position: "relative", overflow: "hidden", boxShadow: "inset 0 1px 0 rgba(201,168,76,0.28)" }}>
          <div style={{ position: "absolute", top: 0, left: "30%", right: "30%", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
          <div style={{ fontSize: "1.4vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.8vh", textAlign: "center" }}>المهمة الوطنية</div>
          <div style={{ fontSize: "1.7vw", color: "#0d1830", lineHeight: 1.6, textAlign: "center", fontWeight: 600 }}>
            دعم المقاولين الشباب وتمويل المؤسسات الصغيرة والمتوسطة بصيغ تمويلية متنوعة، بهدف خلق الثروة وتقليص البطالة على المستوى الوطني
          </div>
        </div>
      </div>
    </div>
  );
}
