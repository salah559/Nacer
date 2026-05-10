const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide16FieldResults() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="slide-bg bg-analytics" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "5vh 7vw" }}>
        <div style={{ marginBottom: "2.5vh" }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.1vw", color: "#c9a84c", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.6vh" }}>الفصل التطبيقي</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "3.4vw", fontWeight: 900, color: "#1a1a2e", margin: 0, lineHeight: 1.2 }}>نتائج الدراسة الميدانية</h2>
          <h3 className="anim-title-rtl delay-3" style={{ fontSize: "2.4vw", fontWeight: 800, color: "#c9a84c", margin: "0.5vh 0 0 0" }}>NESDA وهران 2020-2026</h3>
          <div className="anim-line-draw delay-4" style={{ width: "12vw", height: "0.3vh", marginTop: "1.2vh", background: "linear-gradient(90deg, #c9a84c, #f0d080, transparent)" }} />
        </div>

        {/* Stats row — clean cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5vw", marginBottom: "2vh" }}>
          <div className="anim-count-morph delay-3 card-clean" style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "1.8vh 1vw" }}>
            <div className="gold-line" style={{ position: "absolute", top: 0, left: "20%", right: "20%" }} />
            <div style={{ fontSize: "3.2vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1 }}>87%</div>
            <div style={{ fontSize: "1.05vw", color: "#5a5a7a", marginTop: "0.4vh", lineHeight: 1.3 }}>نسبة القبول والتمويل</div>
          </div>
          <div className="anim-count-morph delay-4 card-clean" style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "1.8vh 1vw" }}>
            <div className="gold-line" style={{ position: "absolute", top: 0, left: "20%", right: "20%" }} />
            <div style={{ fontSize: "3.2vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1 }}>64%</div>
            <div style={{ fontSize: "1.05vw", color: "#5a5a7a", marginTop: "0.4vh", lineHeight: 1.3 }}>التمويل الثلاثي الأكثر شيوعاً</div>
          </div>
          <div className="anim-count-morph delay-5 card-active" style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "1.8vh 1vw" }}>
            <div className="gold-line" style={{ position: "absolute", top: 0, left: "20%", right: "20%" }} />
            <div style={{ fontSize: "3.2vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1 }}>+3</div>
            <div style={{ fontSize: "1.05vw", color: "#5a5a7a", marginTop: "0.4vh", lineHeight: 1.3 }}>منصب شغل بالمشروع الواحد</div>
          </div>
          <div className="anim-count-morph delay-6 card-clean" style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "1.8vh 1vw" }}>
            <div className="gold-line" style={{ position: "absolute", top: 0, left: "20%", right: "20%" }} />
            <div style={{ fontSize: "3.2vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1 }}>73%</div>
            <div style={{ fontSize: "1.05vw", color: "#5a5a7a", marginTop: "0.4vh", lineHeight: 1.3 }}>المشاريع لا تزال نشطة</div>
          </div>
        </div>

        {/* Bottom cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5vw" }}>
          <div className="anim-morph-in delay-5 card-clean" style={{ padding: "2vh 2vw" }}>
            <div style={{ fontSize: "1.2vw", color: "#c9a84c", fontWeight: 700, marginBottom: "1vh" }}>القطاعات الأكثر استفادة</div>
            <div style={{ display: "flex", gap: "0.6vw", flexWrap: "wrap" }}>
              <span style={{ background: "#f8f5ee", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.4vw", padding: "0.4vh 0.8vw", fontSize: "1.1vw", color: "#1a1a2e" }}>الخدمات</span>
              <span style={{ background: "#f8f5ee", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.4vw", padding: "0.4vh 0.8vw", fontSize: "1.1vw", color: "#1a1a2e" }}>الصناعة الخفيفة</span>
              <span style={{ background: "#f8f5ee", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.4vw", padding: "0.4vh 0.8vw", fontSize: "1.1vw", color: "#1a1a2e" }}>البناء</span>
              <span style={{ background: "#f8f5ee", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.4vw", padding: "0.4vh 0.8vw", fontSize: "1.1vw", color: "#1a1a2e" }}>التجارة</span>
            </div>
          </div>
          <div className="anim-morph-in delay-6 card-clean" style={{ padding: "2vh 2vw" }}>
            <div style={{ fontSize: "1.2vw", color: "#c9a84c", fontWeight: 700, marginBottom: "1vh" }}>التحديات المرصودة</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
              <div style={{ fontSize: "1.1vw", color: "#1a1a2e" }}>• صعوبة متابعة المشاريع بعد الإطلاق</div>
              <div style={{ fontSize: "1.1vw", color: "#1a1a2e" }}>• ضعف التنسيق مع القطاع البنكي أحياناً</div>
              <div style={{ fontSize: "1.1vw", color: "#1a1a2e" }}>• ضرورة تعزيز التكوين المتخصص</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
