const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide17Conclusions() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-circles" />
      <div className="bg-overlay-light" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />


      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div style={{ marginBottom: "3vh" }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.2vw", color: "#8B6914", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.8vh", textTransform: "uppercase" }}>الخاتمة</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>النتائج والتوصيات</h2>
          <div className="anim-line-draw delay-3" style={{ width: "12vw", height: "0.3vh", marginTop: "1.2vh", background: "linear-gradient(90deg, #c9a84c, #f0d080, transparent)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5vw", flex: 1, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div className="anim-smooth-fade delay-2" style={{ fontSize: "1.4vw", color: "#8B6914", fontWeight: 700, marginBottom: "0.5vh" }}>النتائج الرئيسية</div>
            <div className="anim-card-morph delay-3" style={{ background: "rgba(201,168,76,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1vw", padding: "1.5vh 2vw", display: "flex", gap: "1vw", alignItems: "flex-start" }}>
              <div style={{ fontSize: "2vw", flexShrink: 0, lineHeight: 1 }}>✅</div>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>تأكيد الفرضية الأولى: التمويل التقليدي محدود وغير كافٍ</div>
            </div>
            <div className="anim-card-morph delay-4" style={{ background: "rgba(201,168,76,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1vw", padding: "1.5vh 2vw", display: "flex", gap: "1vw", alignItems: "flex-start" }}>
              <div style={{ fontSize: "2vw", flexShrink: 0, lineHeight: 1 }}>✅</div>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>تأكيد الفرضية الثانية: NESDA تعزز نجاح المشاريع بالتمويل والمرافقة</div>
            </div>
            <div className="anim-card-morph delay-5" style={{ background: "rgba(201,168,76,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1vw", padding: "1.5vh 2vw", display: "flex", gap: "1vw", alignItems: "flex-start" }}>
              <div style={{ fontSize: "2vw", flexShrink: 0, lineHeight: 1 }}>✅</div>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>تأكيد الفرضية الثالثة: التكوين المقاولاتي ينعكس إيجابًا على أداء المؤسسات</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div className="anim-smooth-fade delay-2" style={{ fontSize: "1.4vw", color: "#8B6914", fontWeight: 700, marginBottom: "0.5vh" }}>التوصيات</div>
            <div className="anim-card-morph delay-4" style={{ background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "1.5vh 2vw" }}>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>📌 تبسيط الإجراءات إدارية لتقليص آجال معالجة الملفات</div>
            </div>
            <div className="anim-card-morph delay-5" style={{ background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "1.5vh 2vw" }}>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>📌 تعزيز آليات المتابعة بعد التمويل</div>
            </div>
            <div className="anim-card-morph delay-6" style={{ background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "1.5vh 2vw" }}>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>📌 تكثيف برامج التكوين في التسيير والمحاسبة والتسويق</div>
            </div>
            <div className="anim-card-morph delay-7" style={{ background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "1.5vh 2vw" }}>
              <div style={{ fontSize: "1.45vw", color: "#0d1830", lineHeight: 1.5 }}>📌 توسيع نطاق الاستفادة وتعزيز التنسيق مع المنظومة البنكية</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
