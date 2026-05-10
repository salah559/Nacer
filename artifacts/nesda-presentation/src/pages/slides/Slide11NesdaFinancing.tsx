const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide11NesdaFinancing() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0d1628 0%, #0a0f1e 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div className="anim-fade delay-1" style={{ fontSize: "1.4vw", color: "#c9a84c", letterSpacing: "0.1em", marginBottom: "1vh", fontWeight: 600 }}>الفصل الثاني</div>
        <h2 className="anim-fade-up delay-2" style={{ fontSize: "3.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.5vh" }}>صيغ تمويل NESDA</h2>
        <div className="anim-fade delay-2 gold-line" style={{ width: "10vw", marginBottom: "3vh" }} />

        {/* Financing modes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2vw", marginBottom: "2.5vh" }}>
          <div className="anim-fade-up delay-3" style={{ background: "rgba(30,58,95,0.35)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1vw", padding: "2vh 1.8vw", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "1vh" }}>التمويل الثنائي</div>
            <div style={{ fontSize: "1.5vw", color: "#8899bb", lineHeight: 1.5 }}>مساهمة صاحب المشروع + قرض بنكي بضمان الوكالة</div>
          </div>
          <div className="anim-fade-up delay-4" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.4)", borderRadius: "1vw", padding: "2vh 1.8vw", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "1vh" }}>التمويل الثلاثي</div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff", lineHeight: 1.5 }}>مساهمة صاحب المشروع + قرض NESDA + قرض بنكي</div>
          </div>
          <div className="anim-fade-up delay-5" style={{ background: "rgba(30,58,95,0.35)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "1vw", padding: "2vh 1.8vw", textAlign: "center" }}>
            <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "1vh" }}>قرض الاستغلال</div>
            <div style={{ fontSize: "1.5vw", color: "#8899bb", lineHeight: 1.5 }}>حتى 1.000.000 دج كقرض إضافي استثنائي</div>
          </div>
        </div>

        {/* Stats row */}
        <div className="anim-fade-up delay-6" style={{ display: "flex", gap: "2vw" }}>
          <div style={{ flex: 1, background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "0.8vw", padding: "1.5vh 2vw", textAlign: "center" }}>
            <div style={{ fontSize: "5vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1 }}>401,673</div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff", marginTop: "0.5vh" }}>مشروع ممول منذ التأسيس حتى 2022</div>
          </div>
          <div style={{ flex: 1, background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "0.8vw", padding: "1.5vh 2vw", textAlign: "center" }}>
            <div style={{ fontSize: "5vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1 }}>958,160</div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff", marginTop: "0.5vh" }}>منصب شغل مستحدث حتى منتصف 2022</div>
          </div>
          <div style={{ flex: 1, background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "0.8vw", padding: "1.5vh 2vw", textAlign: "center" }}>
            <div style={{ fontSize: "5vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1 }}>30%</div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff", marginTop: "0.5vh" }}>من المؤسسات في قطاع الخدمات (الأعلى)</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
