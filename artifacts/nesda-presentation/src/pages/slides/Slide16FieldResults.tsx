const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide16FieldResults() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-analytics" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />

<div className="gold-bar-top" /><div className="gold-bar-bottom" />
      <div className="particle particle-2" style={{ top: "8%", right: "8%", width: "0.5vw", height: "0.5vw", background: "rgba(201,168,76,0.6)", borderRadius: "50%", boxShadow: "0 0 1.5vw rgba(201,168,76,0.8)" }} />
      <div className="particle particle-5" style={{ top: "85%", right: "12%", width: "0.35vw", height: "0.35vw", background: "rgba(240,208,128,0.4)", borderRadius: "50%" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div style={{ marginBottom: "3vh" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.2vw", color: "#c9a84c", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.8vh", textTransform: "uppercase" }}>الفصل التطبيقي</div>
          <h2 className="anim-clip-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>نتائج الدراسة الميدانية</h2>
          <h2 className="anim-clip-rtl delay-3" style={{ fontSize: "4vw", fontWeight: 900, margin: 0 }}><span className="gold-shimmer" style={{ display: "inline-block" }}>NESDA وهران 2020-2026</span></h2>
          <div className="anim-line-h delay-4" style={{ width: "14vw", height: "0.3vh", marginTop: "1.5vh", background: "linear-gradient(90deg, #c9a84c, #f0d080, transparent)" }} />
        </div>

        {/* Big numbers */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2vw", marginBottom: "2.5vh" }}>
          <div className="anim-counter delay-3" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1.2vw", padding: "2vh 1vw", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.25vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
            <div style={{ fontSize: "4vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, textShadow: "0 0 2vw rgba(201,168,76,0.4)" }}>87%</div>
            <div style={{ fontSize: "1.1vw", color: "#0d1830", marginTop: "0.5vh", lineHeight: 1.3 }}>نسبة القبول والتمويل</div>
          </div>
          <div className="anim-counter delay-4" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1.2vw", padding: "2vh 1vw", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.25vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
            <div style={{ fontSize: "4vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, textShadow: "0 0 2vw rgba(201,168,76,0.4)" }}>64%</div>
            <div style={{ fontSize: "1.1vw", color: "#0d1830", marginTop: "0.5vh", lineHeight: 1.3 }}>التمويل الثلاثي هو الأكثر شيوعاً</div>
          </div>
          <div className="anim-counter delay-5" style={{ background: "rgba(201,168,76,0.09)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1.2vw", padding: "2vh 1vw", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 0 2vw rgba(201,168,76,0.28)" }}>
            <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
            <div style={{ fontSize: "4vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, textShadow: "0 0 2vw rgba(201,168,76,0.5)" }}>+3</div>
            <div style={{ fontSize: "1.1vw", color: "#0d1830", marginTop: "0.5vh", lineHeight: 1.3 }}>منصب شغل بالمشروع الواحد</div>
          </div>
          <div className="anim-counter delay-6" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1.2vw", padding: "2vh 1vw", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.25vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
            <div style={{ fontSize: "4vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, textShadow: "0 0 2vw rgba(201,168,76,0.4)" }}>73%</div>
            <div style={{ fontSize: "1.1vw", color: "#0d1830", marginTop: "0.5vh", lineHeight: 1.3 }}>المشاريع لا تزال نشطة</div>
          </div>
        </div>

        {/* Challenges */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw" }}>
          <div className="anim-fade-up delay-5" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1vw", padding: "2vh 2.5vw" }}>
            <div style={{ fontSize: "1.4vw", color: "#c9a84c", fontWeight: 700, marginBottom: "1vh" }}>القطاعات الأكثر استفادة</div>
            <div style={{ display: "flex", gap: "0.8vw", flexWrap: "wrap" }}>
              <div style={{ background: "rgba(201,168,76,0.28)", borderRadius: "0.5vw", padding: "0.5vh 1vw", fontSize: "1.3vw", color: "#0d1830" }}>الخدمات</div>
              <div style={{ background: "rgba(201,168,76,0.28)", borderRadius: "0.5vw", padding: "0.5vh 1vw", fontSize: "1.3vw", color: "#0d1830" }}>الصناعة الخفيفة</div>
              <div style={{ background: "rgba(201,168,76,0.28)", borderRadius: "0.5vw", padding: "0.5vh 1vw", fontSize: "1.3vw", color: "#0d1830" }}>البناء</div>
              <div style={{ background: "rgba(201,168,76,0.28)", borderRadius: "0.5vw", padding: "0.5vh 1vw", fontSize: "1.3vw", color: "#0d1830" }}>التجارة</div>
            </div>
          </div>
          <div className="anim-fade-up delay-6" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1vw", padding: "2vh 2.5vw" }}>
            <div style={{ fontSize: "1.4vw", color: "#c9a84c", fontWeight: 700, marginBottom: "1vh" }}>التحديات المرصودة</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6vh" }}>
              <div style={{ fontSize: "1.3vw", color: "#0d1830" }}>• صعوبة متابعة المشاريع بعد الإطلاق</div>
              <div style={{ fontSize: "1.3vw", color: "#0d1830" }}>• ضعف التنسيق مع القطاع البنكي أحياناً</div>
              <div style={{ fontSize: "1.3vw", color: "#0d1830" }}>• ضرورة تعزيز التكوين المتخصص</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
