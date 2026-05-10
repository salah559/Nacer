const base = import.meta.env.BASE_URL;
const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide07PmeRole() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <img src={`${base}finance-bg.png`} crossOrigin="anonymous" className="absolute inset-0 w-full h-full object-cover" alt="" style={{ opacity: 0.15 }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,15,30,0.95) 50%, rgba(30,58,95,0.5) 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div className="anim-fade delay-1" style={{ fontSize: "1.4vw", color: "#c9a84c", letterSpacing: "0.1em", marginBottom: "1vh", fontWeight: 600 }}>الفصل الأول</div>
        <h2 className="anim-fade-up delay-2" style={{ fontSize: "3.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.5vh" }}>دور PME في الاقتصاد الوطني</h2>
        <div className="anim-fade delay-2 gold-line" style={{ width: "10vw", marginBottom: "3vh" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2vw", flex: 1, alignContent: "center" }}>
          <div className="anim-fade-up delay-3" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1vw", padding: "2.5vh 2vw", textAlign: "center" }}>
            <div style={{ fontSize: "4.5vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, marginBottom: "1vh" }}>خلق</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#f0f4ff", marginBottom: "0.5vh" }}>فرص العمل</div>
            <div style={{ fontSize: "1.4vw", color: "#8899bb", lineHeight: 1.5 }}>التوظيف الذاتي والحد من البطالة</div>
          </div>
          <div className="anim-fade-up delay-4" style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1vw", padding: "2.5vh 2vw", textAlign: "center" }}>
            <div style={{ fontSize: "4.5vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, marginBottom: "1vh" }}>دعم</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#f0f4ff", marginBottom: "0.5vh" }}>التنمية الاقتصادية</div>
            <div style={{ fontSize: "1.4vw", color: "#8899bb", lineHeight: 1.5 }}>تنويع الإنتاج والمساهمة في النمو</div>
          </div>
          <div className="anim-fade-up delay-5" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1vw", padding: "2.5vh 2vw", textAlign: "center" }}>
            <div style={{ fontSize: "4.5vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1, marginBottom: "1vh" }}>تحفيز</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#f0f4ff", marginBottom: "0.5vh" }}>الابتكار</div>
            <div style={{ fontSize: "1.4vw", color: "#8899bb", lineHeight: 1.5 }}>المرونة وسرعة التكيف مع التغيير</div>
          </div>
        </div>

        <div className="anim-fade-up delay-6" style={{ marginTop: "3vh", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.8vw", padding: "1.8vh 2.5vw" }}>
          <div style={{ fontSize: "1.8vw", color: "#f0f4ff", lineHeight: 1.5, textWrap: "balance", textAlign: "center" }}>
            رغم أهميتها، تواجه PME عقبة جوهرية:
            <span style={{ color: "#c9a84c", fontWeight: 700, marginRight: "0.5vw" }}>صعوبة الحصول على التمويل</span>
            — خاصة في مراحل التأسيس الأولى
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
