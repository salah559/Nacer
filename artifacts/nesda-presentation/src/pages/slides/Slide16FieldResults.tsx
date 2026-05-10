const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide16FieldResults() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0d1628 0%, #0a0f1e 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div className="anim-fade delay-1" style={{ fontSize: "1.4vw", color: "#c9a84c", letterSpacing: "0.1em", marginBottom: "1vh", fontWeight: 600 }}>الفصل التطبيقي</div>
        <h2 className="anim-fade-up delay-2" style={{ fontSize: "3.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.5vh" }}>نتائج الدراسة الميدانية</h2>
        <div className="anim-fade delay-2 gold-line" style={{ width: "10vw", marginBottom: "2.5vh" }} />

        {/* Results grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw", flex: 1, alignContent: "center" }}>
          <div className="anim-fade-up delay-3" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1vw", padding: "2vh 2vw" }}>
            <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.8vh", display: "flex", alignItems: "center", gap: "0.8vw" }}>
              <div style={{ width: "0.5vw", height: "3vh", background: "#c9a84c", borderRadius: "0.2vw" }} />
              نقاط قوة الوكالة
            </div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff", lineHeight: 1.8 }}>
              — تنوع صيغ التمويل (ثنائي / ثلاثي)
            </div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff", lineHeight: 1.8 }}>
              — تبسيط المسارات الإدارية رقمياً
            </div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff", lineHeight: 1.8 }}>
              — مرافقة فردية مع خبراء متخصصين
            </div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff", lineHeight: 1.8 }}>
              — دورات تكوينية إلزامية شرط التمويل
            </div>
          </div>

          <div className="anim-fade-up delay-4" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1vw", padding: "2vh 2vw" }}>
            <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.8vh", display: "flex", alignItems: "center", gap: "0.8vw" }}>
              <div style={{ width: "0.5vw", height: "3vh", background: "#c9a84c", borderRadius: "0.2vw" }} />
              تحديات المشاريع
            </div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff", lineHeight: 1.8 }}>
              — محدودية المعلومات الإحصائية
            </div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff", lineHeight: 1.8 }}>
              — صعوبة جمع البيانات الميدانية
            </div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff", lineHeight: 1.8 }}>
              — العقبات المالية والإدارية
            </div>
            <div style={{ fontSize: "1.5vw", color: "#f0f4ff", lineHeight: 1.8 }}>
              — تأخر آجال دراسة الملفات
            </div>
          </div>

          <div className="anim-fade-up delay-5" style={{ gridColumn: "span 2", background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "1vw", padding: "1.8vh 2.5vw", textAlign: "center" }}>
            <div style={{ fontSize: "1.8vw", color: "#f0f4ff", lineHeight: 1.5 }}>
              الوكالة تشكّل جسراً فعّالاً بين
              <span style={{ color: "#c9a84c", fontWeight: 700, marginRight: "0.5vw", marginLeft: "0.5vw" }}>رائد الأعمال</span>
              و
              <span style={{ color: "#c9a84c", fontWeight: 700, marginRight: "0.5vw", marginLeft: "0.5vw" }}>منظومة التمويل الوطنية</span>
              — دراسة حالة وهران تؤكد ذلك
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
