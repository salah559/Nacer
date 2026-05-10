const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide15OranBranch() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-mediterranean" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div style={{ marginBottom: "3vh" }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.74vw", color: "#DAA520", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.8vh", textTransform: "uppercase" }}>الفصل التطبيقي</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "4.8vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>NESDA فرع وهران</h2>
          <h2 className="anim-title-rtl delay-3" style={{ fontSize: "4.8vw", fontWeight: 900, margin: 0 }}><span className="text-gold" style={{ display: "inline-block" }}>نشأة وهيكل تنظيمي</span></h2>
          <div className="anim-line-draw delay-4" style={{ width: "14vw", height: "0.3vh", marginTop: "1.5vh", background: "linear-gradient(90deg, #E8B923, #f0d080, transparent)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "2.5vw", flex: 1, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            <div className="anim-card-morph delay-3" style={{ background: "rgba(240,244,252,0.92)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1.2vw", padding: "2.2vh 2.5vw", position: "relative", overflow: "hidden", boxShadow: "inset 0 1px 0 rgba(201,168,76,0.28)" }}>
              <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: "0.3vh", background: "linear-gradient(90deg, transparent, #E8B923, transparent)" }} />
              <div style={{ fontSize: "1.89vw", color: "#DAA520", fontWeight: 700, marginBottom: "1vh" }}>معلومات الفرع</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8vh" }}>
                <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                  <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", background: "#E8B923", flexShrink: 0 }} />
                  <div style={{ fontSize: "2.03vw", color: "#0d1830" }}>تأسس الفرع: <span style={{ color: "#DAA520", fontWeight: 700 }}>2004</span> (ANSEJ سابقاً)</div>
                </div>
                <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                  <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", background: "#E8B923", flexShrink: 0 }} />
                  <div style={{ fontSize: "2.03vw", color: "#0d1830" }}>الموقع: <span style={{ color: "#DAA520", fontWeight: 700 }}>وسط مدينة وهران</span></div>
                </div>
                <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
                  <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", background: "#E8B923", flexShrink: 0 }} />
                  <div style={{ fontSize: "2.03vw", color: "#0d1830" }}>النطاق الجغرافي: <span style={{ color: "#DAA520", fontWeight: 700 }}>ولاية وهران كاملة</span></div>
                </div>
              </div>
            </div>
            <div className="anim-card-morph delay-4" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "1.8vh 2.5vw" }}>
              <div style={{ fontSize: "1.89vw", color: "#DAA520", fontWeight: 700, marginBottom: "0.8vh" }}>الهيكل التنظيمي</div>
              <div style={{ display: "flex", gap: "1vw", flexWrap: "wrap" }}>
                <div style={{ background: "rgba(201,168,76,0.18)", borderRadius: "0.5vw", padding: "0.6vh 1vw", fontSize: "1.89vw", color: "#0d1830" }}>المدير</div>
                <div style={{ background: "rgba(201,168,76,0.18)", borderRadius: "0.5vw", padding: "0.6vh 1vw", fontSize: "1.89vw", color: "#0d1830" }}>التمويل</div>
                <div style={{ background: "rgba(201,168,76,0.18)", borderRadius: "0.5vw", padding: "0.6vh 1vw", fontSize: "1.89vw", color: "#0d1830" }}>المتابعة</div>
                <div style={{ background: "rgba(201,168,76,0.18)", borderRadius: "0.5vw", padding: "0.6vh 1vw", fontSize: "1.89vw", color: "#0d1830" }}>الاستقبال</div>
                <div style={{ background: "rgba(201,168,76,0.18)", borderRadius: "0.5vw", padding: "0.6vh 1vw", fontSize: "1.89vw", color: "#0d1830" }}>المحاسبة</div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            <div className="anim-morph-in delay-4" style={{ background: "rgba(201,168,76,0.18)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1.5vw", padding: "2.5vh 2vw", textAlign: "center", boxShadow: "0 0 3vw rgba(201,168,76,0.35)" }}>
              <div style={{ fontSize: "1.74vw", color: "#4a5a78", marginBottom: "0.5vh" }}>ملفات ممولة منذ التأسيس</div>
              <div style={{ fontSize: "7.47vw", fontWeight: 900, color: "#DAA520", lineHeight: 1, textShadow: "0 0 3vw rgba(201,168,76,0.5)" }}>3K+</div>
              <div style={{ fontSize: "2.1vw", color: "#0d1830" }}>مشروع تنموي</div>
            </div>
            <div className="anim-count-morph delay-5" style={{ background: "rgba(240,244,252,0.80)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "1.8vh 2vw", textAlign: "center" }}>
              <div style={{ fontSize: "4.38vw", fontWeight: 900, color: "#DAA520", textShadow: "0 0 2vw rgba(201,168,76,0.4)" }}>8K+</div>
              <div style={{ fontSize: "1.96vw", color: "#0d1830" }}>منصب شغل مُستحدث</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
