import AnimatedCounter from "../../components/AnimatedCounter";

const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide13CDE() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-cde" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex h-full" style={{ minHeight: 0 }}>
        {/* Right — stat */}
        <div style={{ width: "38%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "4vh 2vw 4vh 5vw", gap: "1.2vh", minHeight: 0 }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.4vw", color: "#1565C0", letterSpacing: "0.18em", fontWeight: 700, textTransform: "uppercase", flexShrink: 0 }}>الفصل الثاني</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "3.6vw", fontWeight: 900, color: "#0d1830", margin: 0, lineHeight: 1.1, flexShrink: 0 }}>مراكز تطوير</h2>
          <h2 className="anim-title-rtl delay-3" style={{ fontSize: "3.6vw", fontWeight: 900, margin: 0, lineHeight: 1.1, flexShrink: 0 }}><span className="text-gold" style={{ display: "inline-block" }}>المقاولاتية CDE</span></h2>
          <div className="anim-line-draw delay-4" style={{ width: "60%", height: "0.3vh", marginTop: "0.8vh", marginBottom: "0.5vh", background: "linear-gradient(90deg, #1565C0, transparent)", flexShrink: 0 }} />
          <div className="anim-morph-in delay-4" style={{ background: "rgba(21,101,192,0.18)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(21,101,192,0.35)", borderRadius: "1.5vw", padding: "1.5vh 1.5vw", textAlign: "center", boxShadow: "0 0 3vw rgba(21,101,192,0.35)", flexShrink: 0 }}>
            <div style={{ fontSize: "1.4vw", color: "#4a5a78", marginBottom: "0.3vh" }}>إنجاز وطني</div>
            <div style={{ fontSize: "5vw", fontWeight: 900, color: "#1565C0", lineHeight: 1, textShadow: "0 0 3vw rgba(21,101,192,0.5)" }}>+100</div>
            <div style={{ fontSize: "1.6vw", color: "#0d1830", fontWeight: 600 }}>مركز تطوير مقاولاتية</div>
            <div style={{ fontSize: "1.4vw", color: "#1565C0", fontWeight: 700, marginTop: "0.2vh" }}>المرتبة الأولى عربياً</div>
          </div>
          <div className="anim-morph-in delay-5" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(21,101,192,0.35)", borderRadius: "0.8vw", padding: "0.8vh 1.2vw", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", color: "#1565C0", fontWeight: 700, marginBottom: "0.2vh" }}>التكوين السنوي</div>
            <div style={{ fontSize: "1.4vw", color: "#0d1830", lineHeight: 1.3 }}>+50,000 طالب وطالبة مكوّنين سنوياً</div>
          </div>
          <div className="anim-morph-in delay-6" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(21,101,192,0.35)", borderRadius: "0.8vw", padding: "0.8vh 1.2vw", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", color: "#1565C0", fontWeight: 700, marginBottom: "0.2vh" }}>المرشدون والمدربون</div>
            <div style={{ fontSize: "1.4vw", color: "#0d1830", lineHeight: 1.3 }}>+700 مرشد ومدرب وموجّه</div>
          </div>
          <div className="anim-morph-in delay-5" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(21,101,192,0.35)", borderRadius: "0.8vw", padding: "0.8vh 1.2vw", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", color: "#1565C0", fontWeight: 700, marginBottom: "0.2vh" }}>الجهة المشرفة</div>
            <div style={{ fontSize: "1.4vw", color: "#0d1830", lineHeight: 1.3 }}>وزارة التعليم العالي ووزارة اقتصاد المعرفة والمؤسسات الناشئة</div>
          </div>
        </div>

        {/* Left — modules */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "4vh 4vw 4vh 2vw", gap: "0.8vh", minHeight: 0 }}>
          <div className="anim-smooth-fade delay-2" style={{ fontSize: "1.7vw", color: "#4a5a78", fontWeight: 600, marginBottom: "0.3vh", flexShrink: 0 }}>البرنامج التكويني — 5 مقاييس:</div>
          <div className="anim-card-morph delay-3" style={{ display: "flex", gap: "1vw", alignItems: "center", background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.35)", borderRadius: "0.8vw", padding: "1vh 1.2vw", flexShrink: 0 }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#1565C0", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(21,101,192,0.6)" }} />
            <div style={{ fontSize: "1.8vw", color: "#0d1830" }}>أساسيات في المقاولاتية</div>
          </div>
          <div className="anim-card-morph delay-4" style={{ display: "flex", gap: "1vw", alignItems: "center", background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.35)", borderRadius: "0.8vw", padding: "1vh 1.2vw", flexShrink: 0 }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#1565C0", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(21,101,192,0.6)" }} />
            <div style={{ fontSize: "1.8vw", color: "#0d1830" }}>التخطيط الاستراتيجي وتطوير المؤسسة</div>
          </div>
          <div className="anim-card-morph delay-5" style={{ display: "flex", gap: "1vw", alignItems: "center", background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.35)", borderRadius: "0.8vw", padding: "1vh 1.2vw", flexShrink: 0 }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#1565C0", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(21,101,192,0.6)" }} />
            <div style={{ fontSize: "1.8vw", color: "#0d1830" }}>التسيير العملياتي وإدارة الموارد</div>
          </div>
          <div className="anim-card-morph delay-6" style={{ display: "flex", gap: "1vw", alignItems: "center", background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.35)", borderRadius: "0.8vw", padding: "1vh 1.2vw", flexShrink: 0 }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#1565C0", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(21,101,192,0.6)" }} />
            <div style={{ fontSize: "1.8vw", color: "#0d1830" }}>الجوانب القانونية لإنشاء مؤسسة</div>
          </div>
          <div className="anim-card-morph delay-7" style={{ display: "flex", gap: "1vw", alignItems: "center", background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.35)", borderRadius: "0.8vw", padding: "1vh 1.2vw", flexShrink: 0 }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#1565C0", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(21,101,192,0.6)" }} />
            <div style={{ fontSize: "1.8vw", color: "#0d1830" }}>استراتيجيات النمو والابتكار واقتراح القيم</div>
          </div>
          <div className="anim-morph-in delay-8" style={{ background: "rgba(21,101,192,0.07)", border: "1px solid rgba(21,101,192,0.2)", borderRadius: "0.8vw", padding: "1vh 1.2vw", marginTop: "0.3vh", flexShrink: 0 }}>
            <div style={{ fontSize: "1.5vw", color: "#0d1830" }}>
              مدة التكوين
              <span style={{ color: "#1565C0", fontWeight: 700, margin: "0 0.5vw" }}>15 يوماً</span>
              — شهادة CDE تُتيح الحصول على تمويل NESDA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
