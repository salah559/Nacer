const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide06PmeDef() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-pme" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />

<div className="chapter-ribbon">الفصل الأول</div>
      <div className="gold-bar-top" /><div className="gold-bar-bottom" />
      <div className="particle particle-2" style={{ top: "20%", left: "10%", width: "0.4vw", height: "0.4vw", background: "rgba(201,168,76,0.5)", borderRadius: "50%", boxShadow: "0 0 1vw rgba(201,168,76,0.7)" }} />
      <div className="particle particle-6" style={{ top: "65%", left: "5%", width: "0.3vw", height: "0.3vw", background: "rgba(240,208,128,0.4)", borderRadius: "50%" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div style={{ marginBottom: "3vh" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.2vw", color: "#c9a84c", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.8vh", textTransform: "uppercase" }}>الفصل الأول</div>
          <h2 className="anim-clip-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>تعريف المؤسسات الصغيرة</h2>
          <h2 className="anim-clip-rtl delay-3" style={{ fontSize: "4vw", fontWeight: 900, margin: 0 }}><span className="gold-shimmer" style={{ display: "inline-block" }}>والمتوسطة — PME</span></h2>
          <div className="anim-line-h delay-4" style={{ width: "14vw", height: "0.3vh", marginTop: "1.5vh", background: "linear-gradient(90deg, #c9a84c, #f0d080, transparent)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "2.5vw", flex: 1, alignItems: "center" }}>
          {/* Left — criteria */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            <div className="anim-perspective delay-3" style={{ background: "rgba(240,244,252,0.92)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1.2vw", padding: "2vh 2.5vw", position: "relative", overflow: "hidden", boxShadow: "0 0 3vw rgba(201,168,76,0.06), inset 0 1px 0 rgba(201,168,76,0.28)" }}>
              <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
              <div style={{ fontSize: "1.3vw", color: "#c9a84c", fontWeight: 700, marginBottom: "1.2vh" }}>معيار القانون الجزائري 18-01</div>
              <div style={{ display: "flex", gap: "2vw" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "3.2vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1 }}>{"< 250"}</div>
                  <div style={{ fontSize: "1.2vw", color: "#4a5a78", marginTop: "0.3vh" }}>عامل</div>
                </div>
                <div style={{ width: "0.15vh", background: "rgba(201,168,76,0.2)", alignSelf: "stretch" }} />
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "3.2vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1 }}>4مـ</div>
                  <div style={{ fontSize: "1.2vw", color: "#4a5a78", marginTop: "0.3vh" }}>رقم الأعمال</div>
                </div>
                <div style={{ width: "0.15vh", background: "rgba(201,168,76,0.2)", alignSelf: "stretch" }} />
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "3.2vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1 }}>1مـ</div>
                  <div style={{ fontSize: "1.2vw", color: "#4a5a78", marginTop: "0.3vh" }}>الميزانية</div>
                </div>
              </div>
            </div>

            <div className="anim-perspective delay-4" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "1.8vh 2.5vw" }}>
              <div style={{ fontSize: "1.3vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.8vh" }}>التصنيف الثلاثي</div>
              <div style={{ display: "flex", gap: "1.5vw" }}>
                <div style={{ flex: 1, background: "rgba(201,168,76,0.07)", borderRadius: "0.6vw", padding: "1vh 0.8vw", textAlign: "center" }}>
                  <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#0d1830" }}>TPE</div>
                  <div style={{ fontSize: "1.1vw", color: "#4a5a78" }}>{"< 10 عمال"}</div>
                </div>
                <div style={{ flex: 1, background: "rgba(201,168,76,0.07)", borderRadius: "0.6vw", padding: "1vh 0.8vw", textAlign: "center" }}>
                  <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#0d1830" }}>PE</div>
                  <div style={{ fontSize: "1.1vw", color: "#4a5a78" }}>{"10 — 49"}</div>
                </div>
                <div style={{ flex: 1, background: "rgba(201,168,76,0.07)", borderRadius: "0.6vw", padding: "1vh 0.8vw", textAlign: "center" }}>
                  <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#0d1830" }}>ME</div>
                  <div style={{ fontSize: "1.1vw", color: "#4a5a78" }}>{"50 — 249"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — stat */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            <div className="anim-scale delay-4" style={{ background: "rgba(201,168,76,0.07)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "1.5vw", padding: "2.5vh 2vw", textAlign: "center", boxShadow: "0 0 3vw rgba(201,168,76,0.28)" }}>
              <div style={{ fontSize: "1.2vw", color: "#4a5a78", marginBottom: "0.5vh" }}>حجم القطاع في الجزائر</div>
              <div style={{ fontSize: "6vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, textShadow: "0 0 3vw rgba(201,168,76,0.5)" }}>1.2M</div>
              <div style={{ fontSize: "1.6vw", color: "#0d1830", marginTop: "0.5vh" }}>مؤسسة صغيرة ومتوسطة</div>
              <div style={{ fontSize: "1.3vw", color: "#c9a84c", fontWeight: 700, marginTop: "0.5vh" }}>+97% من النسيج الاقتصادي</div>
            </div>
            <div className="anim-fade-up delay-5" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1vw", padding: "1.8vh 2vw" }}>
              <div style={{ fontSize: "1.3vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.5vh" }}>الأهمية الاستراتيجية</div>
              <div style={{ fontSize: "1.4vw", color: "#0d1830", lineHeight: 1.5 }}>ركيزة التنويع الاقتصادي وخلق الثروة خارج المحروقات</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
