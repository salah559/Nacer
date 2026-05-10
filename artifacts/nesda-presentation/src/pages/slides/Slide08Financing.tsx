const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide08Financing() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0d1628 0%, #0a0f1e 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div className="anim-fade delay-1" style={{ fontSize: "1.4vw", color: "#c9a84c", letterSpacing: "0.1em", marginBottom: "1vh", fontWeight: 600 }}>الفصل الأول</div>
        <h2 className="anim-fade-up delay-2" style={{ fontSize: "3.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.5vh" }}>مصادر التمويل التقليدي</h2>
        <div className="anim-fade delay-2 gold-line" style={{ width: "10vw", marginBottom: "3vh" }} />

        {/* Two columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3vw", flex: 1, alignContent: "center" }}>
          {/* Internal */}
          <div>
            <div className="anim-fade-right delay-3" style={{ fontSize: "2vw", fontWeight: 800, color: "#c9a84c", marginBottom: "2vh", display: "flex", alignItems: "center", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "3vh", background: "#c9a84c", borderRadius: "0.2vw" }} />
              التمويل الداخلي
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <div className="anim-fade-right delay-4" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.2vh 1.8vw", fontSize: "1.7vw", color: "#f0f4ff" }}>المدخرات الشخصية</div>
              <div className="anim-fade-right delay-5" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.2vh 1.8vw", fontSize: "1.7vw", color: "#f0f4ff" }}>الأرباح المحتجزة</div>
              <div className="anim-fade-right delay-6" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.2vh 1.8vw", fontSize: "1.7vw", color: "#f0f4ff" }}>التمويل الذاتي</div>
            </div>
          </div>
          {/* External */}
          <div>
            <div className="anim-fade-left delay-3" style={{ fontSize: "2vw", fontWeight: 800, color: "#c9a84c", marginBottom: "2vh", display: "flex", alignItems: "center", gap: "1vw" }}>
              <div style={{ width: "0.4vw", height: "3vh", background: "#c9a84c", borderRadius: "0.2vw" }} />
              التمويل الخارجي
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh" }}>
              <div className="anim-fade-left delay-4" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.2vh 1.8vw", fontSize: "1.7vw", color: "#f0f4ff" }}>القروض البنكية</div>
              <div className="anim-fade-left delay-5" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.2vh 1.8vw", fontSize: "1.7vw", color: "#f0f4ff" }}>الإعانات الحكومية</div>
              <div className="anim-fade-left delay-6" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.2vh 1.8vw", fontSize: "1.7vw", color: "#f0f4ff" }}>صناديق رأس المال المخاطر</div>
            </div>
          </div>
        </div>

        {/* Limitation note */}
        <div className="anim-fade-up delay-7" style={{ marginTop: "3vh", display: "flex", gap: "1.5vw", alignItems: "center", background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "0.8vw", padding: "1.5vh 2vw" }}>
          <div style={{ fontSize: "2.5vw", color: "#c9a84c", flexShrink: 0 }}>!</div>
          <div style={{ fontSize: "1.7vw", color: "#f0f4ff", lineHeight: 1.5 }}>
            هذه المصادر غالباً محدودة أو مشروطة — مما يستوجب تدخل هيئات دعم كـ NESDA
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
