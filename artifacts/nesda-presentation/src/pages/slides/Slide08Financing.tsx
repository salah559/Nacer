const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide08Financing() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-financing" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />

<div className="gold-bar-top" /><div className="gold-bar-bottom" />
      <div className="particle particle-3" style={{ top: "15%", left: "12%", width: "0.4vw", height: "0.4vw", background: "rgba(201,168,76,0.5)", borderRadius: "50%", boxShadow: "0 0 1vw rgba(201,168,76,0.7)" }} />
      <div className="particle particle-6" style={{ top: "72%", left: "8%", width: "0.3vw", height: "0.3vw", background: "rgba(240,208,128,0.4)", borderRadius: "50%" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div style={{ marginBottom: "3vh" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.2vw", color: "#c9a84c", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.8vh", textTransform: "uppercase" }}>الفصل الأول</div>
          <h2 className="anim-clip-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>إشكالية تمويل المؤسسات الصغيرة</h2>
          <h2 className="anim-clip-rtl delay-3" style={{ fontSize: "4vw", fontWeight: 900, margin: 0 }}><span className="gold-shimmer" style={{ display: "inline-block" }}>ومصادر التمويل المتاحة</span></h2>
          <div className="anim-line-h delay-4" style={{ width: "14vw", height: "0.3vh", marginTop: "1.5vh", background: "linear-gradient(90deg, #c9a84c, #f0d080, transparent)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5vw", flex: 1, alignItems: "center" }}>
          {/* Left — problems */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div className="anim-fade delay-2" style={{ fontSize: "1.4vw", color: "#4a5a78", fontWeight: 600, marginBottom: "0.5vh" }}>عوائق التمويل التقليدي</div>
            <div className="anim-fade-right delay-3" style={{ background: "rgba(200,50,50,0.08)", border: "1px solid rgba(200,50,50,0.2)", borderRadius: "0.8vw", padding: "1.5vh 2vw", display: "flex", gap: "1.2vw", alignItems: "center" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "rgba(220,80,80,0.8)", flexShrink: 0 }} />
              <div style={{ fontSize: "1.5vw", color: "#0d1830" }}>غياب الضمانات والرهونات الكافية</div>
            </div>
            <div className="anim-fade-right delay-4" style={{ background: "rgba(200,50,50,0.08)", border: "1px solid rgba(200,50,50,0.2)", borderRadius: "0.8vw", padding: "1.5vh 2vw", display: "flex", gap: "1.2vw", alignItems: "center" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "rgba(220,80,80,0.8)", flexShrink: 0 }} />
              <div style={{ fontSize: "1.5vw", color: "#0d1830" }}>ارتفاع تكلفة الاقتراض البنكي</div>
            </div>
            <div className="anim-fade-right delay-5" style={{ background: "rgba(200,50,50,0.08)", border: "1px solid rgba(200,50,50,0.2)", borderRadius: "0.8vw", padding: "1.5vh 2vw", display: "flex", gap: "1.2vw", alignItems: "center" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "rgba(220,80,80,0.8)", flexShrink: 0 }} />
              <div style={{ fontSize: "1.5vw", color: "#0d1830" }}>تعقيد الإجراءات البيروقراطية</div>
            </div>
            <div className="anim-fade-right delay-6" style={{ background: "rgba(200,50,50,0.08)", border: "1px solid rgba(200,50,50,0.2)", borderRadius: "0.8vw", padding: "1.5vh 2vw", display: "flex", gap: "1.2vw", alignItems: "center" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "rgba(220,80,80,0.8)", flexShrink: 0 }} />
              <div style={{ fontSize: "1.5vw", color: "#0d1830" }}>ضعف الاستفادة من سوق الأسهم</div>
            </div>
          </div>

          {/* Right — solutions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div className="anim-fade delay-2" style={{ fontSize: "1.4vw", color: "#c9a84c", fontWeight: 600, marginBottom: "0.5vh" }}>مصادر التمويل البديلة</div>
            <div className="anim-fade-left delay-3" style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.8vw", padding: "1.5vh 2vw", display: "flex", gap: "1.2vw", alignItems: "center" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(201,168,76,0.6)" }} />
              <div style={{ fontSize: "1.5vw", color: "#0d1830" }}>القرض المصغر عبر أجهزة الدولة</div>
            </div>
            <div className="anim-fade-left delay-4" style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.8vw", padding: "1.5vh 2vw", display: "flex", gap: "1.2vw", alignItems: "center" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(201,168,76,0.6)" }} />
              <div style={{ fontSize: "1.5vw", color: "#0d1830" }}>رأس المال المخاطر والمشاركة</div>
            </div>
            <div className="anim-fade-left delay-5" style={{ background: "rgba(201,168,76,0.35)", border: "1px solid rgba(201,168,76,0.4)", borderRadius: "0.8vw", padding: "1.5vh 2vw", display: "flex", gap: "1.2vw", alignItems: "center", boxShadow: "0 0 2vw rgba(201,168,76,0.18)" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#f0d080", flexShrink: 0, boxShadow: "0 0 1vw rgba(240,208,128,0.8)" }} />
              <div style={{ fontSize: "1.5vw", color: "#0d1830", fontWeight: 700 }}>تمويل NESDA الثلاثي والثنائي</div>
            </div>
            <div className="anim-fade-left delay-6" style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.8vw", padding: "1.5vh 2vw", display: "flex", gap: "1.2vw", alignItems: "center" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(201,168,76,0.6)" }} />
              <div style={{ fontSize: "1.5vw", color: "#0d1830" }}>التمويل الإسلامي والمرابحة</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
