const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide04Hypotheses() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 20% 50%, rgba(12,24,55,0.9) 0%, transparent 70%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 60% at 85% 30%, rgba(201,168,76,0.05) 0%, transparent 60%)" }} />
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.025) 1px, transparent 1px)", backgroundSize: "4vw 4vw" }} />
      <div className="gold-bar-top" /><div className="gold-bar-bottom" />
      <div className="particle particle-2" style={{ top: "15%", right: "20%", width: "0.4vw", height: "0.4vw", background: "rgba(201,168,76,0.5)", borderRadius: "50%", boxShadow: "0 0 1vw rgba(201,168,76,0.7)" }} />
      <div className="particle particle-5" style={{ top: "70%", right: "10%", width: "0.3vw", height: "0.3vw", background: "rgba(240,208,128,0.4)", borderRadius: "50%" }} />

      <div className="relative z-10 flex h-full">
        {/* Left — title */}
        <div style={{ width: "35%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "7vh 3vw 7vh 8vw", borderLeft: "1px solid rgba(201,168,76,0.18)" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.2vw", color: "#c9a84c", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "1.5vh", textTransform: "uppercase" }}>الفصل الأول</div>
          <h2 className="anim-clip-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0, lineHeight: 1.15 }}>الفرضيات</h2>
          <h2 className="anim-clip-rtl delay-3" style={{ fontSize: "4vw", fontWeight: 900, margin: 0, lineHeight: 1.15 }}><span className="gold-shimmer" style={{ display: "inline-block" }}>والمنهج</span></h2>
          <div className="anim-line-h delay-4" style={{ width: "50%", height: "0.3vh", marginTop: "2vh", marginBottom: "2.5vh", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          <div className="anim-fade delay-5" style={{ background: "rgba(201,168,76,0.18)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.8vw", padding: "1.5vh 1.8vw" }}>
            <div style={{ fontSize: "1.3vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.5vh" }}>المنهج المتبع</div>
            <div style={{ fontSize: "1.4vw", color: "#0d1830", lineHeight: 1.5 }}>وصفي تحليلي + دراسة حالة ميدانية بفرع وهران</div>
          </div>
        </div>

        {/* Right — hypotheses */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "7vh 6vw 7vh 4vw", gap: "2vh" }}>
          <div className="anim-fade delay-2" style={{ fontSize: "1.3vw", color: "#4a5a78", fontWeight: 600, marginBottom: "0.5vh", letterSpacing: "0.1em" }}>فرضيات البحث</div>

          <div className="anim-perspective delay-3" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1.2vw", padding: "2.2vh 2.5vw", position: "relative", overflow: "hidden", boxShadow: "0 0 3vw rgba(201,168,76,0.06), inset 0 1px 0 rgba(201,168,76,0.28)" }}>
            <div style={{ position: "absolute", top: 0, right: "15%", left: "15%", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", flexShrink: 0, borderRadius: "50%", background: "rgba(201,168,76,0.35)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4vw", fontWeight: 900, color: "#c9a84c" }}>H1</div>
              <div>
                <div style={{ fontSize: "1.65vw", color: "#0d1830", fontWeight: 700, lineHeight: 1.4 }}>NESDA تُموّل فعلياً المؤسسات الصغيرة والمتوسطة</div>
                <div style={{ fontSize: "1.3vw", color: "#4a5a78", marginTop: "0.3vh" }}>من خلال ثلاث صيغ تمويلية رئيسية موجهة للمقاولين</div>
              </div>
            </div>
          </div>

          <div className="anim-perspective delay-4" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "1.2vw", padding: "2.2vh 2.5vw", position: "relative", overflow: "hidden", boxShadow: "inset 0 1px 0 rgba(201,168,76,0.18)" }}>
            <div style={{ position: "absolute", top: 0, right: "15%", left: "15%", height: "0.3vh", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)" }} />
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", flexShrink: 0, borderRadius: "50%", background: "rgba(201,168,76,0.18)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4vw", fontWeight: 900, color: "#c9a84c" }}>H2</div>
              <div>
                <div style={{ fontSize: "1.65vw", color: "#0d1830", fontWeight: 700, lineHeight: 1.4 }}>تمويل NESDA يُسهم في خلق مناصب الشغل</div>
                <div style={{ fontSize: "1.3vw", color: "#4a5a78", marginTop: "0.3vh" }}>من خلال تحفيز إنشاء المؤسسات وتدعيم صمودها</div>
              </div>
            </div>
          </div>

          <div className="anim-perspective delay-5" style={{ background: "rgba(14,22,44,0.65)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "1.2vw", padding: "2.2vh 2.5vw", position: "relative", overflow: "hidden", boxShadow: "inset 0 1px 0 rgba(201,168,76,0.18)" }}>
            <div style={{ position: "absolute", top: 0, right: "15%", left: "15%", height: "0.3vh", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)" }} />
            <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", flexShrink: 0, borderRadius: "50%", background: "rgba(201,168,76,0.18)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4vw", fontWeight: 900, color: "#c9a84c" }}>H3</div>
              <div>
                <div style={{ fontSize: "1.65vw", color: "#0d1830", fontWeight: 700, lineHeight: 1.4 }}>فرع وهران يعكس النموذج الوطني لـ NESDA</div>
                <div style={{ fontSize: "1.3vw", color: "#4a5a78", marginTop: "0.3vh" }}>مع خصوصيات محلية تُستخلص من الدراسة الميدانية</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
