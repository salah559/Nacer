const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide15OranBranch() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-mediterranean" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />

<div className="gold-bar-top" /><div className="gold-bar-bottom" />
      <div className="particle particle-1" style={{ top: "10%", left: "10%", width: "0.45vw", height: "0.45vw", background: "rgba(201,168,76,0.5)", borderRadius: "50%", boxShadow: "0 0 1.2vw rgba(201,168,76,0.7)" }} />
      <div className="particle particle-5" style={{ top: "80%", left: "8%", width: "0.3vw", height: "0.3vw", background: "rgba(240,208,128,0.4)", borderRadius: "50%" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div style={{ marginBottom: "3vh" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.2vw", color: "#c9a84c", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.8vh", textTransform: "uppercase" }}>الفصل التطبيقي</div>
          <h2 className="anim-clip-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>NESDA فرع وهران</h2>
          <h2 className="anim-clip-rtl delay-3" style={{ fontSize: "4vw", fontWeight: 900, margin: 0 }}><span className="gold-shimmer" style={{ display: "inline-block" }}>نشأة وهيكل تنظيمي</span></h2>
          <div className="anim-line-h delay-4" style={{ width: "14vw", height: "0.3vh", marginTop: "1.5vh", background: "linear-gradient(90deg, #c9a84c, #f0d080, transparent)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "2.5vw", flex: 1, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            <div className="anim-perspective delay-3" style={{ background: "rgba(240,244,252,0.92)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1.2vw", padding: "2.2vh 2.5vw", position: "relative", overflow: "hidden", boxShadow: "inset 0 1px 0 rgba(201,168,76,0.28)" }}>
              <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
              <div style={{ fontSize: "1.3vw", color: "#c9a84c", fontWeight: 700, marginBottom: "1vh" }}>معلومات الفرع</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8vh" }}>
                <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                  <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0 }} />
                  <div style={{ fontSize: "1.45vw", color: "#0d1830" }}>تأسس الفرع: <span style={{ color: "#c9a84c", fontWeight: 700 }}>2004</span> (ANSEJ سابقاً)</div>
                </div>
                <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                  <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0 }} />
                  <div style={{ fontSize: "1.45vw", color: "#0d1830" }}>الموقع: <span style={{ color: "#c9a84c", fontWeight: 700 }}>وسط مدينة وهران</span></div>
                </div>
                <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                  <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0 }} />
                  <div style={{ fontSize: "1.45vw", color: "#0d1830" }}>النطاق الجغرافي: <span style={{ color: "#c9a84c", fontWeight: 700 }}>ولاية وهران كاملة</span></div>
                </div>
              </div>
            </div>
            <div className="anim-perspective delay-4" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "1.8vh 2.5vw" }}>
              <div style={{ fontSize: "1.3vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.8vh" }}>الهيكل التنظيمي</div>
              <div style={{ display: "flex", gap: "1vw", flexWrap: "wrap" }}>
                <div style={{ background: "rgba(201,168,76,0.18)", borderRadius: "0.5vw", padding: "0.6vh 1vw", fontSize: "1.3vw", color: "#0d1830" }}>المدير</div>
                <div style={{ background: "rgba(201,168,76,0.18)", borderRadius: "0.5vw", padding: "0.6vh 1vw", fontSize: "1.3vw", color: "#0d1830" }}>التمويل</div>
                <div style={{ background: "rgba(201,168,76,0.18)", borderRadius: "0.5vw", padding: "0.6vh 1vw", fontSize: "1.3vw", color: "#0d1830" }}>المتابعة</div>
                <div style={{ background: "rgba(201,168,76,0.18)", borderRadius: "0.5vw", padding: "0.6vh 1vw", fontSize: "1.3vw", color: "#0d1830" }}>الاستقبال</div>
                <div style={{ background: "rgba(201,168,76,0.18)", borderRadius: "0.5vw", padding: "0.6vh 1vw", fontSize: "1.3vw", color: "#0d1830" }}>المحاسبة</div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            <div className="anim-scale delay-4" style={{ background: "rgba(201,168,76,0.18)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1.5vw", padding: "2.5vh 2vw", textAlign: "center", boxShadow: "0 0 3vw rgba(201,168,76,0.35)" }}>
              <div style={{ fontSize: "1.2vw", color: "#4a5a78", marginBottom: "0.5vh" }}>ملفات ممولة منذ التأسيس</div>
              <div style={{ fontSize: "6.5vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, textShadow: "0 0 3vw rgba(201,168,76,0.5)" }}>3K+</div>
              <div style={{ fontSize: "1.5vw", color: "#0d1830" }}>مشروع تنموي</div>
            </div>
            <div className="anim-counter delay-5" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "1.8vh 2vw", textAlign: "center" }}>
              <div style={{ fontSize: "3.5vw", fontWeight: 900, color: "#c9a84c", textShadow: "0 0 2vw rgba(201,168,76,0.4)" }}>8K+</div>
              <div style={{ fontSize: "1.4vw", color: "#0d1830" }}>منصب شغل مُستحدث</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
