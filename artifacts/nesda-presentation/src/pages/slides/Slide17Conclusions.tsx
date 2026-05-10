const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide17Conclusions() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-circles" />
      <div className="bg-overlay-light" />
      <div className="bg-grid-top" />

<div className="gold-bar-top" /><div className="gold-bar-bottom" />
      <div className="particle particle-1" style={{ top: "8%", left: "8%", width: "0.45vw", height: "0.45vw", background: "rgba(201,168,76,0.6)", borderRadius: "50%", boxShadow: "0 0 1.5vw rgba(201,168,76,0.8)" }} />
      <div className="particle particle-4" style={{ top: "85%", left: "12%", width: "0.35vw", height: "0.35vw", background: "rgba(240,208,128,0.5)", borderRadius: "50%" }} />
      <div className="particle particle-3" style={{ top: "50%", right: "5%", width: "0.3vw", height: "0.3vw", background: "rgba(201,168,76,0.4)", borderRadius: "50%" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div style={{ marginBottom: "3vh" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.2vw", color: "#c9a84c", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.8vh", textTransform: "uppercase" }}>الخاتمة</div>
          <h2 className="anim-clip-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>النتائج والتوصيات</h2>
          <div className="anim-line-h delay-3" style={{ width: "12vw", height: "0.3vh", marginTop: "1.2vh", background: "linear-gradient(90deg, #c9a84c, #f0d080, transparent)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5vw", flex: 1, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div className="anim-fade delay-2" style={{ fontSize: "1.4vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.5vh" }}>النتائج الرئيسية</div>
            <div className="anim-perspective delay-3" style={{ background: "rgba(201,168,76,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1vw", padding: "1.5vh 2vw", display: "flex", gap: "1vw", alignItems: "flex-start" }}>
              <div style={{ fontSize: "2vw", flexShrink: 0, lineHeight: 1 }}>✅</div>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>NESDA تثبت صحة الفرضية الأولى: تمويل فعلي للمؤسسات</div>
            </div>
            <div className="anim-perspective delay-4" style={{ background: "rgba(201,168,76,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1vw", padding: "1.5vh 2vw", display: "flex", gap: "1vw", alignItems: "flex-start" }}>
              <div style={{ fontSize: "2vw", flexShrink: 0, lineHeight: 1 }}>✅</div>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>التمويل يُسهم في خلق مناصب الشغل (+3 منصب/مشروع)</div>
            </div>
            <div className="anim-perspective delay-5" style={{ background: "rgba(201,168,76,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1vw", padding: "1.5vh 2vw", display: "flex", gap: "1vw", alignItems: "flex-start" }}>
              <div style={{ fontSize: "2vw", flexShrink: 0, lineHeight: 1 }}>⚡</div>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>وهران نموذج وطني ناجح رغم التحديات الميدانية</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div className="anim-fade delay-2" style={{ fontSize: "1.4vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.5vh" }}>التوصيات</div>
            <div className="anim-perspective delay-4" style={{ background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "1.5vh 2vw" }}>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>📌 تعزيز متابعة المشاريع بعد الإطلاق</div>
            </div>
            <div className="anim-perspective delay-5" style={{ background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "1.5vh 2vw" }}>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>📌 رقمنة الإجراءات وتقليص الأعباء الإدارية</div>
            </div>
            <div className="anim-perspective delay-6" style={{ background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "1.5vh 2vw" }}>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>📌 تعميق التنسيق مع المنظومة البنكية</div>
            </div>
            <div className="anim-perspective delay-7" style={{ background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "1.5vh 2vw" }}>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>📌 توسيع دور مراكز CDE في الولايات الداخلية</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
