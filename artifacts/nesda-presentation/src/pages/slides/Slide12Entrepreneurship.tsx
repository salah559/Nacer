const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide12Entrepreneurship() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0d1628 0%, #0a0f1e 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      <div className="relative z-10 flex h-full" style={{ padding: "6vh 8vw", gap: "4vw" }}>
        {/* Left */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.4vw", color: "#c9a84c", letterSpacing: "0.1em", marginBottom: "1vh", fontWeight: 600 }}>الفصل الثاني</div>
          <h2 className="anim-fade-up delay-2" style={{ fontSize: "3.3vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.3vh" }}>المقاولاتية</h2>
          <h2 className="anim-fade-up delay-2" style={{ fontSize: "3.3vw", fontWeight: 900, color: "#c9a84c", margin: 0, marginBottom: "0.5vh" }}>روح المبادرة</h2>
          <div className="anim-fade delay-2 gold-line" style={{ width: "8vw", marginBottom: "2.5vh" }} />

          <div className="anim-fade-up delay-3" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "1vw", padding: "2vh 2.5vw", marginBottom: "2vh" }}>
            <div style={{ fontSize: "1.7vw", color: "#f0f4ff", lineHeight: 1.6, fontStyle: "italic" }}>
              "القابلية على المبادرة بتنفيذ عمل أو إنشاء مؤسسة جديدة، والمقدرة على اكتشاف الفرص حين لا يرى الآخرون سوى الفوضى"
            </div>
          </div>

          <div className="anim-fade-up delay-4" style={{ fontSize: "1.5vw", color: "#8899bb", lineHeight: 1.6 }}>
            المقاول يتحمل المخاطرة المالية والشخصية بحثاً عن فرص لخلق قيمة جديدة واستغلال الفرص المتاحة
          </div>
        </div>

        {/* Right — stages (static, no map) */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="anim-fade delay-2" style={{ fontSize: "1.7vw", fontWeight: 700, color: "#c9a84c", marginBottom: "1.5vh" }}>مراحل المسار المقاولاتي</div>

          <div className="anim-fade-left delay-3" style={{ display: "flex", gap: "1.5vw", alignItems: "center", marginBottom: "1.2vh" }}>
            <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 900, color: "#c9a84c", flexShrink: 0 }}>01</div>
            <div style={{ background: "rgba(30,58,95,0.25)", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "0.7vw", padding: "1vh 1.5vw", flex: 1 }}>
              <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#f0f4ff" }}>النزعة المقاولاتية</div>
              <div style={{ fontSize: "1.4vw", color: "#8899bb" }}>الميل الشخصي نحو المقاولة</div>
            </div>
          </div>

          <div className="anim-fade-left delay-4" style={{ display: "flex", gap: "1.5vw", alignItems: "center", marginBottom: "1.2vh" }}>
            <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 900, color: "#c9a84c", flexShrink: 0 }}>02</div>
            <div style={{ background: "rgba(30,58,95,0.25)", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "0.7vw", padding: "1vh 1.5vw", flex: 1 }}>
              <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#f0f4ff" }}>التوجه المقاولاتي</div>
              <div style={{ fontSize: "1.4vw", color: "#8899bb" }}>قرار السير نحو العمل الحر</div>
            </div>
          </div>

          <div className="anim-fade-left delay-5" style={{ display: "flex", gap: "1.5vw", alignItems: "center", marginBottom: "1.2vh" }}>
            <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 900, color: "#c9a84c", flexShrink: 0 }}>03</div>
            <div style={{ background: "rgba(30,58,95,0.25)", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "0.7vw", padding: "1vh 1.5vw", flex: 1 }}>
              <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#f0f4ff" }}>بلورة الفكرة</div>
              <div style={{ fontSize: "1.4vw", color: "#8899bb" }}>تشكيل المشروع وتعبئة الموارد</div>
            </div>
          </div>

          <div className="anim-fade-left delay-6" style={{ display: "flex", gap: "1.5vw", alignItems: "center", marginBottom: "1.2vh" }}>
            <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 900, color: "#c9a84c", flexShrink: 0 }}>04</div>
            <div style={{ background: "rgba(30,58,95,0.25)", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "0.7vw", padding: "1vh 1.5vw", flex: 1 }}>
              <div style={{ fontSize: "1.6vw", fontWeight: 700, color: "#f0f4ff" }}>الانطلاق الفعلي</div>
              <div style={{ fontSize: "1.4vw", color: "#8899bb" }}>إنتاج السلع والخدمات</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
