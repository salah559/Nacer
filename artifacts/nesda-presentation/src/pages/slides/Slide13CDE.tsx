const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide13CDE() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#050a18", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(12,24,55,0.9) 0%, transparent 70%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 40% at 5% 80%, rgba(201,168,76,0.06) 0%, transparent 60%)" }} />
      <div className="gold-bar-top" /><div className="gold-bar-bottom" />
      <div className="particle particle-2" style={{ top: "10%", right: "10%", width: "0.45vw", height: "0.45vw", background: "rgba(201,168,76,0.5)", borderRadius: "50%", boxShadow: "0 0 1.2vw rgba(201,168,76,0.7)" }} />
      <div className="particle particle-4" style={{ top: "80%", right: "8%", width: "0.3vw", height: "0.3vw", background: "rgba(240,208,128,0.4)", borderRadius: "50%" }} />

      <div className="relative z-10 flex h-full">
        {/* Right — stat */}
        <div style={{ width: "38%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "7vh 3vw 7vh 8vw", gap: "2vh" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.2vw", color: "#c9a84c", letterSpacing: "0.18em", fontWeight: 700, textTransform: "uppercase" }}>الفصل الثاني</div>
          <h2 className="anim-clip-rtl delay-2" style={{ fontSize: "3.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, lineHeight: 1.1 }}>مراكز تطوير</h2>
          <h2 className="anim-clip-rtl delay-3" style={{ fontSize: "3.5vw", fontWeight: 900, margin: 0, lineHeight: 1.1 }}><span className="gold-shimmer" style={{ display: "inline-block" }}>المقاولاتية CDE</span></h2>
          <div className="anim-line-h delay-4" style={{ width: "60%", height: "0.3vh", marginTop: "1vh", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          <div className="anim-scale delay-4" style={{ background: "rgba(201,168,76,0.08)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1.5vw", padding: "2.5vh 2vw", textAlign: "center", boxShadow: "0 0 3vw rgba(201,168,76,0.12)" }}>
            <div style={{ fontSize: "1.2vw", color: "#7a90b5", marginBottom: "0.5vh" }}>إنجاز وطني</div>
            <div style={{ fontSize: "8vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, textShadow: "0 0 3vw rgba(201,168,76,0.5)" }}>102</div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff", fontWeight: 600 }}>مركز تطوير مقاولاتية</div>
            <div style={{ fontSize: "1.3vw", color: "#c9a84c", fontWeight: 700, marginTop: "0.3vh" }}>المرتبة الأولى عربياً</div>
          </div>
          <div className="anim-fade-up delay-5" style={{ background: "rgba(14,22,44,0.5)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.2vh 1.5vw" }}>
            <div style={{ fontSize: "1.2vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.3vh" }}>الجهة المشرفة</div>
            <div style={{ fontSize: "1.3vw", color: "#f0f4ff", lineHeight: 1.4 }}>وزارة التعليم العالي ووزارة اقتصاد المعرفة والمؤسسات الناشئة</div>
          </div>
        </div>

        {/* Left — modules */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "7vh 6vw 7vh 3vw", gap: "1.3vh" }}>
          <div className="anim-fade delay-2" style={{ fontSize: "1.5vw", color: "#7a90b5", fontWeight: 600, marginBottom: "0.5vh" }}>البرنامج التكويني — 5 مقاييس:</div>
          <div className="anim-perspective delay-3" style={{ display: "flex", gap: "1.2vw", alignItems: "center", background: "rgba(14,22,44,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.3vh 1.5vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(201,168,76,0.6)" }} />
            <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>أساسيات في المقاولاتية</div>
          </div>
          <div className="anim-perspective delay-4" style={{ display: "flex", gap: "1.2vw", alignItems: "center", background: "rgba(14,22,44,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.3vh 1.5vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(201,168,76,0.6)" }} />
            <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>التخطيط الاستراتيجي وتطوير المؤسسة</div>
          </div>
          <div className="anim-perspective delay-5" style={{ display: "flex", gap: "1.2vw", alignItems: "center", background: "rgba(14,22,44,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.3vh 1.5vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(201,168,76,0.6)" }} />
            <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>التسيير العملياتي وإدارة الموارد</div>
          </div>
          <div className="anim-perspective delay-6" style={{ display: "flex", gap: "1.2vw", alignItems: "center", background: "rgba(14,22,44,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.3vh 1.5vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(201,168,76,0.6)" }} />
            <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>الجوانب القانونية لإنشاء مؤسسة</div>
          </div>
          <div className="anim-perspective delay-7" style={{ display: "flex", gap: "1.2vw", alignItems: "center", background: "rgba(14,22,44,0.6)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.3vh 1.5vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0, boxShadow: "0 0 0.8vw rgba(201,168,76,0.6)" }} />
            <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>استراتيجيات النمو والابتكار واقتراح القيم</div>
          </div>
          <div className="anim-fade-up delay-8" style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.8vw", padding: "1.3vh 1.5vw", marginTop: "0.5vh" }}>
            <div style={{ fontSize: "1.4vw", color: "#f0f4ff" }}>
              مدة التكوين
              <span style={{ color: "#c9a84c", fontWeight: 700, margin: "0 0.5vw" }}>15 يوماً</span>
              — شهادة CDE تُتيح الحصول على تمويل NESDA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
