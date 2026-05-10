const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide08Financing() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-financing" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "4vh 5vw" }}>
        <div style={{ marginBottom: "2vh", flexShrink: 0 }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.4vw", color: "#1565C0", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.5vh", textTransform: "uppercase" }}>الفصل الأول</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>إشكالية تمويل المؤسسات الصغيرة</h2>
          <h2 className="anim-title-rtl delay-3" style={{ fontSize: "4vw", fontWeight: 900, margin: 0 }}><span className="text-gold" style={{ display: "inline-block" }}>ومصادر التمويل المتاحة</span></h2>
          <div className="anim-line-draw delay-4" style={{ width: "14vw", height: "0.3vh", marginTop: "1vh", background: "linear-gradient(90deg, #1565C0, #42A5F5, transparent)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw", flex: 1, alignItems: "center", minHeight: 0 }}>
          {/* Left — problems */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh", minHeight: 0 }}>
            <div className="anim-smooth-fade delay-2" style={{ fontSize: "1.5vw", color: "#4a5a78", fontWeight: 600, marginBottom: "0.3vh", flexShrink: 0 }}>عوائق التمويل التقليدي</div>
            <div className="anim-reveal-up delay-3" style={{ background: "rgba(200,50,50,0.08)", border: "1px solid rgba(200,50,50,0.2)", borderRadius: "0.8vw", padding: "1.2vh 1.5vw", display: "flex", gap: "1vw", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "rgba(220,80,80,0.8)", flexShrink: 0 }} />
              <div style={{ fontSize: "1.6vw", color: "#0d1830" }}>غياب الضمانات والرهونات الكافية</div>
            </div>
            <div className="anim-reveal-up delay-4" style={{ background: "rgba(200,50,50,0.08)", border: "1px solid rgba(200,50,50,0.2)", borderRadius: "0.8vw", padding: "1.2vh 1.5vw", display: "flex", gap: "1vw", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "rgba(220,80,80,0.8)", flexShrink: 0 }} />
              <div style={{ fontSize: "1.6vw", color: "#0d1830" }}>ارتفاع تكلفة الاقتراض البنكي</div>
            </div>
            <div className="anim-reveal-up delay-5" style={{ background: "rgba(200,50,50,0.08)", border: "1px solid rgba(200,50,50,0.2)", borderRadius: "0.8vw", padding: "1.2vh 1.5vw", display: "flex", gap: "1vw", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "rgba(220,80,80,0.8)", flexShrink: 0 }} />
              <div style={{ fontSize: "1.6vw", color: "#0d1830" }}>تعقيد الإجراءات البيروقراطية</div>
            </div>
            <div className="anim-reveal-up delay-6" style={{ background: "rgba(200,50,50,0.08)", border: "1px solid rgba(200,50,50,0.2)", borderRadius: "0.8vw", padding: "1.2vh 1.5vw", display: "flex", gap: "1vw", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "rgba(220,80,80,0.8)", flexShrink: 0 }} />
              <div style={{ fontSize: "1.6vw", color: "#0d1830" }}>ضعف الاستفادة من سوق الأسهم</div>
            </div>
          </div>

          {/* Right — solutions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh", minHeight: 0 }}>
            <div className="anim-smooth-fade delay-2" style={{ fontSize: "1.5vw", color: "#1565C0", fontWeight: 600, marginBottom: "0.3vh", flexShrink: 0 }}>مصادر التمويل البديلة</div>
            <div className="anim-reveal-up delay-3" style={{ background: "rgba(21,101,192,0.07)", border: "1px solid rgba(21,101,192,0.2)", borderRadius: "0.8vw", padding: "1.2vh 1.5vw", display: "flex", gap: "1vw", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#1565C0", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(21,101,192,0.6)" }} />
              <div style={{ fontSize: "1.6vw", color: "#0d1830" }}>القرض المصغر عبر أجهزة الدولة</div>
            </div>
            <div className="anim-reveal-up delay-4" style={{ background: "rgba(21,101,192,0.07)", border: "1px solid rgba(21,101,192,0.2)", borderRadius: "0.8vw", padding: "1.2vh 1.5vw", display: "flex", gap: "1vw", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#1565C0", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(21,101,192,0.6)" }} />
              <div style={{ fontSize: "1.6vw", color: "#0d1830" }}>رأس المال المخاطر والمشاركة</div>
            </div>
            <div className="anim-reveal-up delay-5" style={{ background: "rgba(21,101,192,0.35)", border: "1px solid rgba(21,101,192,0.4)", borderRadius: "0.8vw", padding: "1.2vh 1.5vw", display: "flex", gap: "1vw", alignItems: "center", boxShadow: "0 0 2vw rgba(21,101,192,0.18)", flexShrink: 0 }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#42A5F5", flexShrink: 0, boxShadow: "0 0 1vw rgba(66,165,245,0.8)" }} />
              <div style={{ fontSize: "1.6vw", color: "#0d1830", fontWeight: 700 }}>تمويل NESDA الثلاثي والثنائي</div>
            </div>
            <div className="anim-reveal-up delay-6" style={{ background: "rgba(21,101,192,0.07)", border: "1px solid rgba(21,101,192,0.2)", borderRadius: "0.8vw", padding: "1.2vh 1.5vw", display: "flex", gap: "1vw", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#1565C0", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(21,101,192,0.6)" }} />
              <div style={{ fontSize: "1.6vw", color: "#0d1830" }}>التمويل الإسلامي والمرابحة</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
