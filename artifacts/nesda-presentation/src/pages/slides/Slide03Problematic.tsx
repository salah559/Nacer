const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide03Problematic() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#050a18", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, rgba(10,20,50,0.95) 0%, transparent 80%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 50% at 80% 100%, rgba(201,168,76,0.07) 0%, transparent 60%)" }} />
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)", backgroundSize: "5vw 5vw", pointerEvents: "none" }} />
      <div className="gold-bar-top" /><div className="gold-bar-bottom" />
      <div className="anim-fade delay-1 absolute" style={{ top: "4vh", left: "5vw", width: "3vw", height: "3vw", borderTop: "0.3vh solid rgba(201,168,76,0.4)", borderLeft: "0.3vh solid rgba(201,168,76,0.4)" }} />
      <div className="anim-fade delay-1 absolute" style={{ bottom: "4vh", right: "5vw", width: "3vw", height: "3vw", borderBottom: "0.3vh solid rgba(201,168,76,0.4)", borderRight: "0.3vh solid rgba(201,168,76,0.4)" }} />
      <div className="particle particle-1" style={{ top: "20%", left: "15%", width: "0.4vw", height: "0.4vw", background: "rgba(201,168,76,0.5)", borderRadius: "50%", boxShadow: "0 0 1vw rgba(201,168,76,0.7)" }} />
      <div className="particle particle-4" style={{ top: "60%", left: "8%", width: "0.3vw", height: "0.3vw", background: "rgba(240,208,128,0.4)", borderRadius: "50%" }} />
      <div className="relative z-10 flex flex-col h-full" style={{ padding: "7vh 8vw" }}>
        <div style={{ marginBottom: "3.5vh" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.2vw", color: "#c9a84c", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "1vh", textTransform: "uppercase" }}>المقدمة العامة</div>
          <h2 className="anim-clip-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.5vh" }}>الإشكالية والمنهج</h2>
          <div className="anim-line-h delay-3" style={{ width: "12vw", height: "0.3vh", background: "linear-gradient(90deg, #c9a84c, #f0d080, transparent)" }} />
        </div>
        <div className="anim-perspective delay-3" style={{ background: "rgba(14,22,44,0.75)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "1.5vw", padding: "3vh 3.5vw", marginBottom: "3vh", position: "relative", overflow: "hidden", boxShadow: "0 0 4vw rgba(201,168,76,0.08), inset 0 1px 0 rgba(201,168,76,0.12)" }}>
          <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
          <div style={{ fontSize: "1.3vw", color: "#c9a84c", fontWeight: 600, marginBottom: "1vh", letterSpacing: "0.1em" }}>السؤال المحوري</div>
          <div style={{ fontSize: "2.1vw", color: "#f0f4ff", fontWeight: 700, lineHeight: 1.6, fontStyle: "italic" }}>
            "ما مدى إسهام NESDA في تمويل المؤسسات الصغيرة والمتوسطة
            <br /><span style={{ color: "#c9a84c" }}>ودعم خلق مناصب الشغل</span> في الجزائر؟"
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5vw" }}>
          <div className="anim-fade-up delay-4" style={{ background: "rgba(14,22,44,0.5)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "1vw", padding: "2vh 1.8vw", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: "25%", right: "25%", height: "0.2vh", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)" }} />
            <div style={{ fontSize: "2.5vw", fontWeight: 900, color: "rgba(201,168,76,0.18)", marginBottom: "0.5vh" }}>01</div>
            <div style={{ fontSize: "1.45vw", color: "#f0f4ff", lineHeight: 1.5, fontWeight: 600 }}>ما هي آليات تمويل PME في الجزائر؟</div>
          </div>
          <div className="anim-fade-up delay-5" style={{ background: "rgba(14,22,44,0.5)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "1vw", padding: "2vh 1.8vw", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: "25%", right: "25%", height: "0.2vh", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)" }} />
            <div style={{ fontSize: "2.5vw", fontWeight: 900, color: "rgba(201,168,76,0.18)", marginBottom: "0.5vh" }}>02</div>
            <div style={{ fontSize: "1.45vw", color: "#f0f4ff", lineHeight: 1.5, fontWeight: 600 }}>كيف تتدخل NESDA في دعم المقاول الشاب؟</div>
          </div>
          <div className="anim-fade-up delay-6" style={{ background: "rgba(14,22,44,0.5)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "1vw", padding: "2vh 1.8vw", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: "25%", right: "25%", height: "0.2vh", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)" }} />
            <div style={{ fontSize: "2.5vw", fontWeight: 900, color: "rgba(201,168,76,0.18)", marginBottom: "0.5vh" }}>03</div>
            <div style={{ fontSize: "1.45vw", color: "#f0f4ff", lineHeight: 1.5, fontWeight: 600 }}>ما الواقع الفعلي في فرع وهران؟</div>
          </div>
        </div>
      </div>
    </div>
  );
}
