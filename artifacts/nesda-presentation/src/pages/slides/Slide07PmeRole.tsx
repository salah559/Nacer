const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide07PmeRole() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-economy" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />

<div className="chapter-ribbon">الفصل الأول</div>
      <div className="gold-bar-top" /><div className="gold-bar-bottom" />
      <div className="sparkle sparkle-1" style={{ right: "25%" }} />
      <div className="sparkle sparkle-3" style={{ right: "30%", top: "30%" }} />
      <div className="sparkle sparkle-5" style={{ right: "22%", top: "75%" }} />
      <div className="particle particle-1" style={{ top: "12%", right: "12%", width: "0.45vw", height: "0.45vw", background: "rgba(201,168,76,0.5)", borderRadius: "50%", boxShadow: "0 0 1.2vw rgba(201,168,76,0.7)" }} />
      <div className="particle particle-4" style={{ top: "70%", right: "5%", width: "0.3vw", height: "0.3vw", background: "rgba(240,208,128,0.4)", borderRadius: "50%" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div style={{ marginBottom: "3vh" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.2vw", color: "#c9a84c", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.8vh", textTransform: "uppercase" }}>الفصل الأول</div>
          <h2 className="anim-clip-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>دور PME في الاقتصاد الوطني</h2>
          <div className="anim-line-h delay-3" style={{ width: "14vw", height: "0.3vh", marginTop: "1.5vh", background: "linear-gradient(90deg, #c9a84c, #f0d080, transparent)" }} />
        </div>

        {/* Big stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2vw", marginBottom: "2.5vh" }}>
          <div className="anim-counter delay-3" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1.2vw", padding: "2vh 1.5vw", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "inset 0 1px 0 rgba(201,168,76,0.28)" }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.25vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
            <div style={{ fontSize: "4vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, textShadow: "0 0 2vw rgba(201,168,76,0.4)" }}>97%</div>
            <div style={{ fontSize: "1.25vw", color: "#0d1830", marginTop: "0.5vh", lineHeight: 1.3 }}>من النسيج الاقتصادي الوطني</div>
          </div>
          <div className="anim-counter delay-4" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1.2vw", padding: "2vh 1.5vw", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "inset 0 1px 0 rgba(201,168,76,0.28)" }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.25vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
            <div style={{ fontSize: "4vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, textShadow: "0 0 2vw rgba(201,168,76,0.4)" }}>60%</div>
            <div style={{ fontSize: "1.25vw", color: "#0d1830", marginTop: "0.5vh", lineHeight: 1.3 }}>من إجمالي مناصب الشغل</div>
          </div>
          <div className="anim-counter delay-5" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1.2vw", padding: "2vh 1.5vw", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "inset 0 1px 0 rgba(201,168,76,0.28)" }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.25vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
            <div style={{ fontSize: "4vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, textShadow: "0 0 2vw rgba(201,168,76,0.4)" }}>30%</div>
            <div style={{ fontSize: "1.25vw", color: "#0d1830", marginTop: "0.5vh", lineHeight: 1.3 }}>من الناتج المحلي الإجمالي</div>
          </div>
          <div className="anim-counter delay-6" style={{ background: "rgba(201,168,76,0.18)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1.2vw", padding: "2vh 1.5vw", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 0 2vw rgba(201,168,76,0.28), inset 0 1px 0 rgba(201,168,76,0.15)" }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.25vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
            <div style={{ fontSize: "4vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, textShadow: "0 0 2vw rgba(201,168,76,0.5)" }}>1.2M</div>
            <div style={{ fontSize: "1.25vw", color: "#0d1830", marginTop: "0.5vh", lineHeight: 1.3 }}>مؤسسة مسجلة وطنياً</div>
          </div>
        </div>

        {/* Roles */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw" }}>
          <div className="anim-fade-up delay-4" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1vw", padding: "1.8vh 2vw", display: "flex", gap: "1.5vw", alignItems: "center" }}>
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "50%", background: "rgba(201,168,76,0.28)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8vw", flexShrink: 0 }}>💼</div>
            <div><div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0d1830" }}>التنويع الاقتصادي</div><div style={{ fontSize: "1.2vw", color: "#4a5a78" }}>تقليص الاعتماد على المحروقات</div></div>
          </div>
          <div className="anim-fade-up delay-5" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1vw", padding: "1.8vh 2vw", display: "flex", gap: "1.5vw", alignItems: "center" }}>
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "50%", background: "rgba(201,168,76,0.28)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8vw", flexShrink: 0 }}>🎓</div>
            <div><div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0d1830" }}>استيعاب الشباب</div><div style={{ fontSize: "1.2vw", color: "#4a5a78" }}>احتضان فئة حاملي الشهادات</div></div>
          </div>
          <div className="anim-fade-up delay-6" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1vw", padding: "1.8vh 2vw", display: "flex", gap: "1.5vw", alignItems: "center" }}>
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "50%", background: "rgba(201,168,76,0.28)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8vw", flexShrink: 0 }}>🏗️</div>
            <div><div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0d1830" }}>تنمية المناطق</div><div style={{ fontSize: "1.2vw", color: "#4a5a78" }}>التوزيع الإقليمي للنشاط الاقتصادي</div></div>
          </div>
          <div className="anim-fade-up delay-7" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1vw", padding: "1.8vh 2vw", display: "flex", gap: "1.5vw", alignItems: "center" }}>
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "50%", background: "rgba(201,168,76,0.28)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8vw", flexShrink: 0 }}>⚡</div>
            <div><div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#0d1830" }}>الابتكار والتكيّف</div><div style={{ fontSize: "1.2vw", color: "#4a5a78" }}>مرونة أعلى من الشركات الكبرى</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
