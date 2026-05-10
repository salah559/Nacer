const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide04Hypotheses() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-hypotheses" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />

<div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex h-full">
        {/* Left — title */}
        <div style={{ width: "35%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "5vh 3vw 5vh 5vw", borderLeft: "1px solid rgba(21,101,192,0.18)", minHeight: 0 }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.4vw", color: "#1565C0", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "1vh", textTransform: "uppercase", flexShrink: 0 }}>الفصل الأول</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0, lineHeight: 1.15, flexShrink: 0 }}>الفرضيات</h2>
          <h2 className="anim-title-rtl delay-3" style={{ fontSize: "4vw", fontWeight: 900, margin: 0, lineHeight: 1.15, flexShrink: 0 }}><span className="text-gold" style={{ display: "inline-block" }}>والمنهج</span></h2>
          <div className="anim-line-draw delay-4" style={{ width: "50%", height: "0.3vh", marginTop: "1.5vh", marginBottom: "2vh", background: "linear-gradient(90deg, #1565C0, transparent)", flexShrink: 0 }} />
          <div className="anim-smooth-fade delay-5" style={{ background: "rgba(21,101,192,0.18)", border: "1px solid rgba(21,101,192,0.2)", borderRadius: "0.8vw", padding: "1.2vh 1.5vw", flexShrink: 0 }}>
            <div style={{ fontSize: "1.5vw", color: "#1565C0", fontWeight: 700, marginBottom: "0.3vh" }}>المنهج المتبع</div>
            <div style={{ fontSize: "1.4vw", color: "#0d1830", lineHeight: 1.4 }}>وصفي تحليلي + دراسة حالة ميدانية بفرع وهران</div>
          </div>
        </div>

        {/* Right — hypotheses */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "5vh 4vw 5vh 3vw", gap: "1.5vh", minHeight: 0 }}>
          <div className="anim-smooth-fade delay-2" style={{ fontSize: "1.5vw", color: "#4a5a78", fontWeight: 600, marginBottom: "0.3vh", letterSpacing: "0.1em", flexShrink: 0 }}>فرضيات البحث</div>

          <div className="anim-card-morph delay-3" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(21,101,192,0.25)", borderRadius: "1.2vw", padding: "1.8vh 2vw", position: "relative", overflow: "hidden", boxShadow: "0 0 3vw rgba(21,101,192,0.06), inset 0 1px 0 rgba(21,101,192,0.28)", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, right: "15%", left: "15%", height: "0.3vh", background: "linear-gradient(90deg, transparent, #1565C0, transparent)" }} />
            <div style={{ display: "flex", gap: "1.2vw", alignItems: "flex-start" }}>
              <div style={{ width: "3vw", height: "3vw", flexShrink: 0, borderRadius: "50%", background: "rgba(21,101,192,0.35)", border: "1px solid rgba(21,101,192,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 900, color: "#1565C0" }}>H1</div>
              <div>
                <div style={{ fontSize: "1.7vw", color: "#0d1830", fontWeight: 700, lineHeight: 1.4 }}>التمويل التقليدي محدود وغير كافٍ لضمان استدامة المؤسسات الصغيرة والمتوسطة</div>
                <div style={{ fontSize: "1.4vw", color: "#4a5a78", marginTop: "0.2vh" }}>صعوبة الولوج للقروض البنكية واشتراط الضمانات تشكل عائقاً حقيقياً</div>
              </div>
            </div>
          </div>

          <div className="anim-card-morph delay-4" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(21,101,192,0.18)", borderRadius: "1.2vw", padding: "1.8vh 2vw", position: "relative", overflow: "hidden", boxShadow: "inset 0 1px 0 rgba(21,101,192,0.18)", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, right: "15%", left: "15%", height: "0.3vh", background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.5), transparent)" }} />
            <div style={{ display: "flex", gap: "1.2vw", alignItems: "flex-start" }}>
              <div style={{ width: "3vw", height: "3vw", flexShrink: 0, borderRadius: "50%", background: "rgba(21,101,192,0.18)", border: "1px solid rgba(21,101,192,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 900, color: "#1565C0" }}>H2</div>
              <div>
                <div style={{ fontSize: "1.7vw", color: "#0d1830", fontWeight: 700, lineHeight: 1.4 }}>وجود دعم ومرافقة من NESDA يعزز فرص نجاح المشاريع ويقلل من معدلات فشلها</div>
                <div style={{ fontSize: "1.4vw", color: "#4a5a78", marginTop: "0.2vh" }}>التمويل المرفق بالتكوين والمتابعة يُحسّن استمرارية المؤسسات</div>
              </div>
            </div>
          </div>

          <div className="anim-card-morph delay-5" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(21,101,192,0.18)", borderRadius: "1.2vw", padding: "1.8vh 2vw", position: "relative", overflow: "hidden", boxShadow: "inset 0 1px 0 rgba(21,101,192,0.18)", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, right: "15%", left: "15%", height: "0.3vh", background: "linear-gradient(90deg, transparent, rgba(21,101,192,0.5), transparent)" }} />
            <div style={{ display: "flex", gap: "1.2vw", alignItems: "flex-start" }}>
              <div style={{ width: "3vw", height: "3vw", flexShrink: 0, borderRadius: "50%", background: "rgba(21,101,192,0.18)", border: "1px solid rgba(21,101,192,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 900, color: "#1565C0" }}>H3</div>
              <div>
                <div style={{ fontSize: "1.7vw", color: "#0d1830", fontWeight: 700, lineHeight: 1.4 }}>نشر الثقافة المقاولاتية عبر مراكز تطوير المقاولاتية يُشجّع روح المبادرة ويُحسّن الأداء الاقتصادي</div>
                <div style={{ fontSize: "1.4vw", color: "#4a5a78", marginTop: "0.2vh" }}>التكوين والمرافقة ينعكسان إيجاباً على أداء المؤسسات واستمراريتها</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
