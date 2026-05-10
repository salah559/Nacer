const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide12Entrepreneurship() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-entrepreneurship" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex h-full">
        {/* Left */}
        <div style={{ width: "45%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "5vh 3vw 5vh 5vw", minHeight: 0 }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.4vw", color: "#1565C0", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.8vh", textTransform: "uppercase", flexShrink: 0 }}>الفصل الثاني</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0, lineHeight: 1.15, flexShrink: 0 }}>المقاولاتية</h2>
          <h2 className="anim-title-rtl delay-3" style={{ fontSize: "4vw", fontWeight: 900, margin: 0, lineHeight: 1.15, flexShrink: 0 }}><span className="text-gold" style={{ display: "inline-block" }}>روح المبادرة</span></h2>
          <div className="anim-line-draw delay-4" style={{ width: "60%", height: "0.3vh", marginTop: "1.5vh", marginBottom: "2vh", background: "linear-gradient(90deg, #1565C0, transparent)", flexShrink: 0 }} />
          <div className="anim-card-morph delay-4" style={{ background: "rgba(240,244,252,0.92)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(21,101,192,0.25)", borderRadius: "1.2vw", padding: "2vh 2vw", position: "relative", overflow: "hidden", boxShadow: "0 0 3vw rgba(21,101,192,0.07), inset 0 1px 0 rgba(21,101,192,0.28)", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.3vh", background: "linear-gradient(90deg, transparent, #1565C0, transparent)" }} />
            <div style={{ fontSize: "1.7vw", color: "#0d1830", lineHeight: 1.6, fontStyle: "italic" }}>
              "القابلية على المبادرة بتنفيذ عمل أو إنشاء مؤسسة جديدة، والمقدرة على اكتشاف الفرص حين لا يرى الآخرون سوى الفوضى"
            </div>
          </div>
        </div>

        {/* Right — stages */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "5vh 4vw 5vh 2vw", gap: "1vh", minHeight: 0 }}>
          <div className="anim-smooth-fade delay-2" style={{ fontSize: "1.6vw", color: "#4a5a78", fontWeight: 600, marginBottom: "0.3vh", flexShrink: 0 }}>المسار المقاولاتي</div>

          <div className="anim-card-morph delay-3" style={{ display: "flex", gap: "1.2vw", alignItems: "center", background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.15)", borderRadius: "1vw", padding: "1.2vh 1.5vw", flexShrink: 0 }}>
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "0.6vw", background: "rgba(21,101,192,0.28)", border: "1px solid rgba(21,101,192,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8vw", fontWeight: 900, color: "#1565C0", flexShrink: 0 }}>01</div>
            <div style={{ minWidth: 0 }}><div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#0d1830" }}>النزعة المقاولاتية</div><div style={{ fontSize: "1.4vw", color: "#4a5a78" }}>الميل الشخصي نحو المقاولة</div></div>
          </div>
          <div className="anim-card-morph delay-4" style={{ display: "flex", gap: "1.2vw", alignItems: "center", background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.15)", borderRadius: "1vw", padding: "1.2vh 1.5vw", flexShrink: 0 }}>
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "0.6vw", background: "rgba(21,101,192,0.28)", border: "1px solid rgba(21,101,192,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8vw", fontWeight: 900, color: "#1565C0", flexShrink: 0 }}>02</div>
            <div style={{ minWidth: 0 }}><div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#0d1830" }}>التوجه المقاولاتي</div><div style={{ fontSize: "1.4vw", color: "#4a5a78" }}>قرار السير نحو العمل الحر</div></div>
          </div>
          <div className="anim-card-morph delay-5" style={{ display: "flex", gap: "1.2vw", alignItems: "center", background: "rgba(21,101,192,0.18)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.35)", borderRadius: "1vw", padding: "1.2vh 1.5vw", boxShadow: "0 0 2vw rgba(21,101,192,0.07)", flexShrink: 0 }}>
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "0.6vw", background: "#1565C0", border: "1px solid #42A5F5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8vw", fontWeight: 900, color: "#050a18", flexShrink: 0, boxShadow: "0 0 1.5vw rgba(21,101,192,0.4)" }}>03</div>
            <div style={{ minWidth: 0 }}><div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#1565C0" }}>بلورة الفكرة</div><div style={{ fontSize: "1.4vw", color: "#4a5a78" }}>تشكيل المشروع وتعبئة الموارد</div></div>
          </div>
          <div className="anim-card-morph delay-6" style={{ display: "flex", gap: "1.2vw", alignItems: "center", background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.15)", borderRadius: "1vw", padding: "1.2vh 1.5vw", flexShrink: 0 }}>
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "0.6vw", background: "rgba(21,101,192,0.28)", border: "1px solid rgba(21,101,192,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8vw", fontWeight: 900, color: "#1565C0", flexShrink: 0 }}>04</div>
            <div style={{ minWidth: 0 }}><div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#0d1830" }}>الانطلاق الفعلي</div><div style={{ fontSize: "1.4vw", color: "#4a5a78" }}>إنتاج السلع والخدمات</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
