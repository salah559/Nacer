import AnimatedCounter from "../../components/AnimatedCounter";

const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide11NesdaFinancing() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-funding" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "4vh 5vw" }}>
        <div style={{ marginBottom: "2vh", flexShrink: 0 }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.4vw", color: "#1565C0", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.5vh", textTransform: "uppercase" }}>الفصل الثاني</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>صيغ تمويل NESDA</h2>
          <div className="anim-line-draw delay-3" style={{ width: "12vw", height: "0.3vh", marginTop: "1vh", background: "linear-gradient(90deg, #1565C0, #42A5F5, transparent)" }} />
        </div>

        {/* 3 financing modes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5vw", marginBottom: "2vh", minHeight: 0 }}>
          <div className="anim-card-morph delay-3" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(21,101,192,0.18)", borderRadius: "1.2vw", padding: "2vh 1.5vw", textAlign: "center", position: "relative", overflow: "hidden", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.25vh", background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.5), transparent)" }} />
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#1565C0", marginBottom: "0.8vh" }}>التمويل الثنائي</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6vh" }}>
              <div style={{ background: "rgba(21,101,192,0.18)", borderRadius: "0.5vw", padding: "0.6vh 0.8vw", fontSize: "1.4vw", color: "#0d1830" }}>مساهمة صاحب المشروع</div>
              <div style={{ fontSize: "1.2vw", color: "#4a5a78" }}>+</div>
              <div style={{ background: "rgba(21,101,192,0.18)", borderRadius: "0.5vw", padding: "0.6vh 0.8vw", fontSize: "1.4vw", color: "#0d1830" }}>قرض بنكي بضمان الوكالة</div>
            </div>
          </div>

          <div className="anim-card-morph delay-4" style={{ background: "rgba(21,101,192,0.28)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(21,101,192,0.45)", borderRadius: "1.2vw", padding: "2vh 1.5vw", textAlign: "center", position: "relative", overflow: "hidden", boxShadow: "0 0 3vw rgba(21,101,192,0.15), inset 0 1px 0 rgba(21,101,192,0.2)", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: "0.3vh", background: "linear-gradient(90deg, transparent, #1565C0, transparent)" }} />
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#1565C0", marginBottom: "0.8vh", textShadow: "0 0 1vw rgba(21,101,192,0.4)" }}>التمويل الثلاثي</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4vh" }}>
              <div style={{ background: "rgba(21,101,192,0.35)", borderRadius: "0.5vw", padding: "0.6vh 0.8vw", fontSize: "1.4vw", color: "#0d1830", fontWeight: 600 }}>مساهمة صاحب المشروع</div>
              <div style={{ fontSize: "1.2vw", color: "#1565C0", fontWeight: 700 }}>+</div>
              <div style={{ background: "rgba(21,101,192,0.35)", borderRadius: "0.5vw", padding: "0.6vh 0.8vw", fontSize: "1.4vw", color: "#0d1830", fontWeight: 600 }}>قرض NESDA المباشر</div>
              <div style={{ fontSize: "1.2vw", color: "#1565C0", fontWeight: 700 }}>+</div>
              <div style={{ background: "rgba(21,101,192,0.35)", borderRadius: "0.5vw", padding: "0.6vh 0.8vw", fontSize: "1.4vw", color: "#0d1830", fontWeight: 600 }}>قرض بنكي تكميلي</div>
            </div>
          </div>

          <div className="anim-card-morph delay-5" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(21,101,192,0.18)", borderRadius: "1.2vw", padding: "2vh 1.5vw", textAlign: "center", position: "relative", overflow: "hidden", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.25vh", background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.5), transparent)" }} />
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#1565C0", marginBottom: "0.8vh" }}>قرض الاستغلال</div>
            <div style={{ fontSize: "4vw", fontWeight: 900, color: "#1565C0", lineHeight: 1, marginBottom: "0.3vh", textShadow: "0 0 2vw rgba(21,101,192,0.4)" }}>
              <AnimatedCounter target={10} suffix="M" duration={2200} style={{ fontSize: "4vw", fontWeight: 900, color: "#1565C0" }} />
            </div>
            <div style={{ fontSize: "1.5vw", color: "#0d1830" }}>دج كحد أقصى للتمويل</div>
            <div style={{ fontSize: "1.3vw", color: "#4a5a78", marginTop: "0.3vh" }}>سقف الاستثمار ممنوح بـ 30 مليون دج</div>
          </div>
        </div>

        {/* Bottom bar — seuils */}
        <div className="anim-morph-in delay-6" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.15)", borderRadius: "1vw", padding: "1.2vh 2vw", display: "flex", justifyContent: "space-around", alignItems: "center", flexShrink: 0 }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.4vw", color: "#4a5a78" }}>الفئة المستهدفة</div>
            <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#0d1830" }}>18 – 55 سنة</div>
          </div>
          <div style={{ width: "0.15vh", height: "3.5vh", background: "rgba(21,101,192,0.2)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.4vw", color: "#4a5a78" }}>سقف التمويل</div>
            <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#1565C0" }}>10 ملايين دج</div>
          </div>
          <div style={{ width: "0.15vh", height: "3.5vh", background: "rgba(21,101,192,0.2)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.4vw", color: "#4a5a78" }}>الشرط الأساسي</div>
            <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#0d1830" }}>شهادة CDE</div>
          </div>
          <div style={{ width: "0.15vh", height: "3.5vh", background: "rgba(21,101,192,0.2)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.4vw", color: "#4a5a78" }}>الإعفاء الضريبي</div>
            <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#1565C0" }}>3 سنوات</div>
          </div>
        </div>
      </div>
    </div>
  );
}
