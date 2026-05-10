const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide17Conclusions() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
            <div className="slide-bg bg-circles" />
      <div className="bg-overlay-light" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />


      <div className="relative z-10 flex flex-col h-full" style={{ padding: "4vh 5vw" }}>
        <div style={{ marginBottom: "2vh", flexShrink: 0 }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.4vw", color: "#1565C0", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.5vh", textTransform: "uppercase" }}>الخاتمة</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>النتائج والتوصيات</h2>
          <div className="anim-line-draw delay-3" style={{ width: "12vw", height: "0.3vh", marginTop: "1vh", background: "linear-gradient(90deg, #1565C0, #42A5F5, transparent)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw", flex: 1, alignItems: "center", minHeight: 0 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh", minHeight: 0 }}>
            <div className="anim-smooth-fade delay-2" style={{ fontSize: "1.5vw", color: "#1565C0", fontWeight: 700, marginBottom: "0.3vh", flexShrink: 0 }}>النتائج الرئيسية</div>
            <div className="anim-card-morph delay-3" style={{ background: "rgba(21,101,192,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.25)", borderRadius: "1vw", padding: "1.2vh 1.5vw", display: "flex", gap: "1vw", alignItems: "flex-start", flexShrink: 0 }}>
              <div style={{ fontSize: "2vw", flexShrink: 0, lineHeight: 1 }}>✅</div>
              <div style={{ fontSize: "1.5vw", color: "#0d1830", lineHeight: 1.4 }}>تأكيد الفرضية الأولى: التمويل التقليدي محدود وغير كافٍ</div>
            </div>
            <div className="anim-card-morph delay-4" style={{ background: "rgba(21,101,192,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.25)", borderRadius: "1vw", padding: "1.2vh 1.5vw", display: "flex", gap: "1vw", alignItems: "flex-start", flexShrink: 0 }}>
              <div style={{ fontSize: "2vw", flexShrink: 0, lineHeight: 1 }}>✅</div>
              <div style={{ fontSize: "1.5vw", color: "#0d1830", lineHeight: 1.4 }}>تأكيد الفرضية الثانية: NESDA تعزز نجاح المشاريع بالتمويل والمرافقة</div>
            </div>
            <div className="anim-card-morph delay-5" style={{ background: "rgba(21,101,192,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.25)", borderRadius: "1vw", padding: "1.2vh 1.5vw", display: "flex", gap: "1vw", alignItems: "flex-start", flexShrink: 0 }}>
              <div style={{ fontSize: "2vw", flexShrink: 0, lineHeight: 1 }}>✅</div>
              <div style={{ fontSize: "1.5vw", color: "#0d1830", lineHeight: 1.4 }}>تأكيد الفرضية الثالثة: التكوين المقاولاتي ينعكس إيجابًا على أداء المؤسسات</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.2vh", minHeight: 0 }}>
            <div className="anim-smooth-fade delay-2" style={{ fontSize: "1.5vw", color: "#1565C0", fontWeight: 700, marginBottom: "0.3vh", flexShrink: 0 }}>التوصيات</div>
            <div className="anim-card-morph delay-4" style={{ background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.15)", borderRadius: "1vw", padding: "1.2vh 1.5vw", flexShrink: 0 }}>
              <div style={{ fontSize: "1.5vw", color: "#0d1830", lineHeight: 1.4 }}>📌 تبسيط الإجراءات إدارية لتقليص آجال معالجة الملفات</div>
            </div>
            <div className="anim-card-morph delay-5" style={{ background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.15)", borderRadius: "1vw", padding: "1.2vh 1.5vw", flexShrink: 0 }}>
              <div style={{ fontSize: "1.5vw", color: "#0d1830", lineHeight: 1.4 }}>📌 تعزيز آليات المتابعة بعد التمويل</div>
            </div>
            <div className="anim-card-morph delay-6" style={{ background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.15)", borderRadius: "1vw", padding: "1.2vh 1.5vw", flexShrink: 0 }}>
              <div style={{ fontSize: "1.5vw", color: "#0d1830", lineHeight: 1.4 }}>📌 تكثيف برامج التكوين في التسيير والمحاسبة والتسويق</div>
            </div>
            <div className="anim-card-morph delay-7" style={{ background: "rgba(240,244,252,0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(21,101,192,0.15)", borderRadius: "1vw", padding: "1.2vh 1.5vw", flexShrink: 0 }}>
              <div style={{ fontSize: "1.5vw", color: "#0d1830", lineHeight: 1.4 }}>📌 توسيع نطاق الاستفادة وتعزيز التنسيق مع المنظومة البنكية</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
