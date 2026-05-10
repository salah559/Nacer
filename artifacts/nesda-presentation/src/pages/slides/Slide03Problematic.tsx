const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide03Problematic() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0d1628 0%, #0a0f1e 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      {/* Decorative quote mark */}
      <div className="absolute" style={{ top: "8vh", left: "5vw", fontSize: "20vw", color: "rgba(201,168,76,0.04)", fontFamily: "Playfair Display, serif", lineHeight: 1, fontWeight: 900 }}>؟</div>

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div className="anim-fade delay-1" style={{ fontSize: "1.4vw", color: "#c9a84c", letterSpacing: "0.12em", marginBottom: "1vh", fontWeight: 600 }}>المقدمة العامة</div>
        <div className="anim-fade-up delay-2">
          <h2 style={{ fontSize: "3.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.5vh" }}>الإشكالية الرئيسية</h2>
        </div>
        <div className="anim-fade delay-2 gold-line" style={{ width: "10vw", marginBottom: "3.5vh" }} />

        {/* Main question box */}
        <div className="anim-scale delay-3" style={{
          background: "rgba(201,168,76,0.08)",
          border: "1px solid rgba(201,168,76,0.35)",
          borderRadius: "1.2vw",
          padding: "2.5vh 3vw",
          marginBottom: "3vh"
        }}>
          <div style={{ fontSize: "1.5vw", color: "#8899bb", marginBottom: "1vh", fontWeight: 600 }}>السؤال الجوهري:</div>
          <div style={{ fontSize: "2.3vw", fontWeight: 700, color: "#f0f4ff", lineHeight: 1.5, textWrap: "balance" }}>
            ما هو الدور الذي تقوم به الوكالة الوطنية لدعم وتنمية المقاولاتية
            في تمويل المؤسسات الصغيرة والمتوسطة؟
          </div>
        </div>

        {/* Sub-questions */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.8vh" }}>
          <div className="anim-fade-up delay-4" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.5vh 1.8vw" }}>
            <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.5vh" }}>01 —</div>
            <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>ماهية PME وأبعادها العامة</div>
          </div>
          <div className="anim-fade-up delay-5" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.5vh 1.8vw" }}>
            <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.5vh" }}>02 —</div>
            <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>تمويل PME قبل تدخل NESDA</div>
          </div>
          <div className="anim-fade-up delay-6" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.5vh 1.8vw" }}>
            <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.5vh" }}>03 —</div>
            <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>دور NESDA في التمويل والمرافقة</div>
          </div>
          <div className="anim-fade-up delay-7" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.5vh 1.8vw" }}>
            <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.5vh" }}>04 —</div>
            <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>مراكز تطوير المقاولاتية ونشر الثقافة</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
