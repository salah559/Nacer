const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide04Hypotheses() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0d1628 0%, #0a0f1e 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div className="anim-fade delay-1" style={{ fontSize: "1.4vw", color: "#c9a84c", letterSpacing: "0.12em", marginBottom: "1vh", fontWeight: 600 }}>المقدمة العامة</div>
        <div className="anim-fade-up delay-2">
          <h2 style={{ fontSize: "3.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.5vh" }}>فرضيات الدراسة ومنهجها</h2>
        </div>
        <div className="anim-fade delay-2 gold-line" style={{ width: "10vw", marginBottom: "3vh" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2vh", marginBottom: "2.5vh" }}>
          {/* H1 */}
          <div className="anim-fade-right delay-3" style={{ display: "flex", gap: "2vw", alignItems: "flex-start", background: "rgba(30,58,95,0.25)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "1vw", padding: "1.8vh 2vw" }}>
            <div style={{ fontSize: "3vw", fontWeight: 900, color: "rgba(201,168,76,0.5)", lineHeight: 1, flexShrink: 0 }}>H₁</div>
            <div>
              <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.4vh" }}>الفرضية الأولى</div>
              <div style={{ fontSize: "1.7vw", color: "#f0f4ff" }}>التمويل التقليدي محدود وغير كافٍ لضمان استدامة المؤسسات الصغيرة والمتوسطة</div>
            </div>
          </div>
          {/* H2 */}
          <div className="anim-fade-right delay-4" style={{ display: "flex", gap: "2vw", alignItems: "flex-start", background: "rgba(30,58,95,0.25)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "1vw", padding: "1.8vh 2vw" }}>
            <div style={{ fontSize: "3vw", fontWeight: 900, color: "rgba(201,168,76,0.5)", lineHeight: 1, flexShrink: 0 }}>H₂</div>
            <div>
              <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.4vh" }}>الفرضية الثانية</div>
              <div style={{ fontSize: "1.7vw", color: "#f0f4ff" }}>دعم NESDA ومرافقتها يعزز نجاح المشاريع الصغيرة ويقلل معدلات الفشل</div>
            </div>
          </div>
          {/* H3 */}
          <div className="anim-fade-right delay-5" style={{ display: "flex", gap: "2vw", alignItems: "flex-start", background: "rgba(30,58,95,0.25)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "1vw", padding: "1.8vh 2vw" }}>
            <div style={{ fontSize: "3vw", fontWeight: 900, color: "rgba(201,168,76,0.5)", lineHeight: 1, flexShrink: 0 }}>H₃</div>
            <div>
              <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.4vh" }}>الفرضية الثالثة</div>
              <div style={{ fontSize: "1.7vw", color: "#f0f4ff" }}>نشر الثقافة المقاولاتية يسهم في تشجيع روح المبادرة وتحسين الأداء الاقتصادي</div>
            </div>
          </div>
        </div>

        {/* Method + Scope */}
        <div className="anim-fade-up delay-6" style={{ display: "flex", gap: "2vw" }}>
          <div style={{ flex: 1, background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "0.8vw", padding: "1.5vh 2vw" }}>
            <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.4vh" }}>المنهج</div>
            <div style={{ fontSize: "1.7vw", color: "#f0f4ff" }}>وصفي (نظري) + دراسة حالة (تطبيقي)</div>
          </div>
          <div style={{ flex: 1, background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "0.8vw", padding: "1.5vh 2vw" }}>
            <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.4vh" }}>الإطار المكاني والزماني</div>
            <div style={{ fontSize: "1.7vw", color: "#f0f4ff" }}>NESDA فرع وهران — 2020 إلى 2026</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
