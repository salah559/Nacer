const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide07PmeRole() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="slide-bg bg-economy" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "4vh 5vw" }}>
        <div style={{ marginBottom: "2vh", flexShrink: 0 }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.4vw", color: "#1565C0", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.5vh" }}>الفصل الأول</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#1a1a2e", margin: 0, lineHeight: 1.2 }}>دور PME في الاقتصاد الوطني</h2>
          <div className="anim-line-draw delay-3" style={{ width: "12vw", height: "0.3vh", marginTop: "1vh", background: "linear-gradient(90deg, #1565C0, #42A5F5, transparent)" }} />
        </div>

        {/* Stats row — 4 clean white cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5vw", marginBottom: "2vh", flexShrink: 0 }}>
          <div className="anim-count-morph delay-3 card-clean" style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "1.8vh 1vw" }}>
            <div className="gold-line" style={{ position: "absolute", top: 0, left: "20%", right: "20%" }} />
            <div style={{ fontSize: "4vw", fontWeight: 900, color: "#1565C0", lineHeight: 1 }}>97%</div>
            <div style={{ fontSize: "1.59vw", color: "#5a5a7a", marginTop: "0.4vh", lineHeight: 1.3 }}>من النسيج الاقتصادي الوطني</div>
          </div>
          <div className="anim-count-morph delay-4 card-clean" style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "1.8vh 1vw" }}>
            <div className="gold-line" style={{ position: "absolute", top: 0, left: "20%", right: "20%" }} />
            <div style={{ fontSize: "4vw", fontWeight: 900, color: "#1565C0", lineHeight: 1 }}>60%</div>
            <div style={{ fontSize: "1.59vw", color: "#5a5a7a", marginTop: "0.4vh", lineHeight: 1.3 }}>من إجمالي مناصب الشغل</div>
          </div>
          <div className="anim-count-morph delay-5 card-clean" style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "1.8vh 1vw" }}>
            <div className="gold-line" style={{ position: "absolute", top: 0, left: "20%", right: "20%" }} />
            <div style={{ fontSize: "4vw", fontWeight: 900, color: "#1565C0", lineHeight: 1 }}>30%</div>
            <div style={{ fontSize: "1.59vw", color: "#5a5a7a", marginTop: "0.4vh", lineHeight: 1.3 }}>من الناتج المحلي الإجمالي</div>
          </div>
          <div className="anim-count-morph delay-6 card-active" style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "1.8vh 1vw" }}>
            <div className="gold-line" style={{ position: "absolute", top: 0, left: "20%", right: "20%" }} />
            <div style={{ fontSize: "4vw", fontWeight: 900, color: "#1565C0", lineHeight: 1 }}>1.2M</div>
            <div style={{ fontSize: "1.59vw", color: "#5a5a7a", marginTop: "0.4vh", lineHeight: 1.3 }}>مؤسسة مسجلة وطنياً</div>
          </div>
        </div>

        {/* Roles grid — 4 clean cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5vw", flex: 1, minHeight: 0 }}>
          <div className="anim-morph-in delay-4 card-clean" style={{ display: "flex", gap: "1.2vw", alignItems: "center", padding: "1.6vh 1.5vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", background: "rgba(21,101,192,0.10)", border: "1px solid rgba(21,101,192,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.1vw", flexShrink: 0 }}>💼</div>
            <div>
              <div style={{ fontSize: "1.89vw", fontWeight: 700, color: "#1a1a2e" }}>التنويع الاقتصادي</div>
              <div style={{ fontSize: "1.52vw", color: "#5a5a7a" }}>تقليص الاعتماد على المحروقات</div>
            </div>
          </div>
          <div className="anim-morph-in delay-5 card-clean" style={{ display: "flex", gap: "1.2vw", alignItems: "center", padding: "1.6vh 1.5vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", background: "rgba(21,101,192,0.10)", border: "1px solid rgba(21,101,192,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.1vw", flexShrink: 0 }}>🎓</div>
            <div>
              <div style={{ fontSize: "1.89vw", fontWeight: 700, color: "#1a1a2e" }}>استيعاب الشباب</div>
              <div style={{ fontSize: "1.52vw", color: "#5a5a7a" }}>احتضان فئة حاملي الشهادات</div>
            </div>
          </div>
          <div className="anim-morph-in delay-6 card-clean" style={{ display: "flex", gap: "1.2vw", alignItems: "center", padding: "1.6vh 1.5vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", background: "rgba(21,101,192,0.10)", border: "1px solid rgba(21,101,192,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.1vw", flexShrink: 0 }}>🏗️</div>
            <div>
              <div style={{ fontSize: "1.89vw", fontWeight: 700, color: "#1a1a2e" }}>تنمية المناطق</div>
              <div style={{ fontSize: "1.52vw", color: "#5a5a7a" }}>التوزيع الإقليمي للنشاط</div>
            </div>
          </div>
          <div className="anim-morph-in delay-7 card-clean" style={{ display: "flex", gap: "1.2vw", alignItems: "center", padding: "1.6vh 1.5vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", background: "rgba(21,101,192,0.10)", border: "1px solid rgba(21,101,192,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.1vw", flexShrink: 0 }}>⚡</div>
            <div>
              <div style={{ fontSize: "1.89vw", fontWeight: 700, color: "#1a1a2e" }}>الابتكار والتكيّف</div>
              <div style={{ fontSize: "1.52vw", color: "#5a5a7a" }}>مرونة أعلى من الشركات الكبرى</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
