const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide06PmeDef() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0d1628 0%, #0a0f1e 70%, #0d1a2e 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      {/* Decorative */}
      <div className="absolute" style={{ top: "5vh", left: "-5vw", width: "25vw", height: "25vw", border: "1px solid rgba(201,168,76,0.07)", borderRadius: "50%" }} />

      <div className="relative z-10 flex h-full" style={{ padding: "6vh 8vw", gap: "4vw" }}>
        {/* Left — title + criteria */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.4vw", color: "#c9a84c", letterSpacing: "0.1em", marginBottom: "1vh", fontWeight: 600 }}>الفصل الأول</div>
          <h2 className="anim-fade-up delay-2" style={{ fontSize: "3.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.5vh" }}>ماهية PME</h2>
          <div className="anim-fade delay-2 gold-line" style={{ width: "8vw", marginBottom: "3vh" }} />

          <div className="anim-fade-up delay-3" style={{ marginBottom: "2vh" }}>
            <div style={{ fontSize: "1.6vw", color: "#8899bb", lineHeight: 1.7 }}>
              وحدة اقتصادية مستقلة محدودة الحجم، تتميز بسهولة التأسيس ومرونة الإدارة وقلة رأس المال.
            </div>
          </div>

          {/* Criteria cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
            <div className="anim-fade-right delay-4" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "0.8vw", padding: "1.2vh 1.8vw", display: "flex", gap: "1.5vw", alignItems: "center" }}>
              <div style={{ fontSize: "2.5vw", color: "#c9a84c" }}>—</div>
              <div>
                <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#f0f4ff" }}>معيار العمالة</div>
                <div style={{ fontSize: "1.4vw", color: "#8899bb" }}>أقل من 250 عامل (المعيار الأوروبي)</div>
              </div>
            </div>
            <div className="anim-fade-right delay-5" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "0.8vw", padding: "1.2vh 1.8vw", display: "flex", gap: "1.5vw", alignItems: "center" }}>
              <div style={{ fontSize: "2.5vw", color: "#c9a84c" }}>—</div>
              <div>
                <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#f0f4ff" }}>معيار رقم الأعمال</div>
                <div style={{ fontSize: "1.4vw", color: "#8899bb" }}>أقل من 40 مليون أورو سنوياً</div>
              </div>
            </div>
            <div className="anim-fade-right delay-6" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "0.8vw", padding: "1.2vh 1.8vw", display: "flex", gap: "1.5vw", alignItems: "center" }}>
              <div style={{ fontSize: "2.5vw", color: "#c9a84c" }}>—</div>
              <div>
                <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#f0f4ff" }}>معيار الاستقلالية</div>
                <div style={{ fontSize: "1.4vw", color: "#8899bb" }}>التحكم في رأس المال لا يتجاوز 25%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Algeria stat */}
        <div className="anim-scale delay-4" style={{ width: "28vw", display: "flex", flexDirection: "column", justifyContent: "center", gap: "2vh" }}>
          <div style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "1.2vw", padding: "3vh 2.5vw", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", color: "#8899bb", marginBottom: "1vh" }}>الجزائر — توزيع PME</div>
            <div style={{ fontSize: "8vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1 }}>97%</div>
            <div style={{ fontSize: "1.7vw", color: "#f0f4ff", marginTop: "0.8vh" }}>مؤسسات مصغرة</div>
            <div style={{ fontSize: "1.4vw", color: "#8899bb", marginTop: "0.5vh" }}>مقابل 3% صغيرة ومتوسطة</div>
          </div>
          <div style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.5vh 2vw", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", color: "#8899bb", marginBottom: "0.5vh" }}>المصدر</div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff" }}>Ministère de l'Industrie et des Mines, 2020</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
