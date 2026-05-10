const base = import.meta.env.BASE_URL;
const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide10NesdaIntro() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <img src={`${base}nesda-bg.png`} crossOrigin="anonymous" className="absolute inset-0 w-full h-full object-cover" alt="" style={{ opacity: 0.18 }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,15,30,0.96) 45%, rgba(30,58,95,0.55) 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      <div className="relative z-10 flex h-full" style={{ padding: "6vh 8vw", gap: "4vw" }}>
        {/* Left content */}
        <div style={{ flex: 1.4, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="anim-fade delay-1" style={{ fontSize: "1.4vw", color: "#c9a84c", letterSpacing: "0.1em", marginBottom: "1vh", fontWeight: 600 }}>الفصل الثاني</div>
          <h2 className="anim-fade-up delay-2" style={{ fontSize: "3.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.3vh" }}>الوكالة الوطنية</h2>
          <h2 className="anim-fade-up delay-2" style={{ fontSize: "3.5vw", fontWeight: 900, margin: 0, marginBottom: "0.5vh" }} >
            <span className="gold-shimmer">NESDA</span>
          </h2>
          <div className="anim-fade delay-2 gold-line" style={{ width: "8vw", marginBottom: "2.5vh" }} />

          <div className="anim-fade-up delay-3" style={{ background: "rgba(30,58,95,0.35)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1vw", padding: "2vh 2.5vw", marginBottom: "2vh" }}>
            <div style={{ fontSize: "1.5vw", color: "#8899bb", marginBottom: "0.5vh" }}>التعريف الرسمي:</div>
            <div style={{ fontSize: "1.7vw", color: "#f0f4ff", lineHeight: 1.6 }}>
              هيئة عمومية ذات طابع خاص، تعمل تحت وصاية مصالح الوزير المكلف بالمؤسسات المصغرة، تأسست عام 1995 باسم ANSEJ
            </div>
          </div>

          <div style={{ display: "flex", gap: "1.5vw" }}>
            <div className="anim-fade-up delay-4" style={{ flex: 1, background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.5vh 1.5vw" }}>
              <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.4vh" }}>التأسيس</div>
              <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>8 سبتمبر 1995</div>
            </div>
            <div className="anim-fade-up delay-5" style={{ flex: 1, background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.5vh 1.5vw" }}>
              <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.4vh" }}>التغطية</div>
              <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>كل ولايات الجزائر</div>
            </div>
          </div>
        </div>

        {/* Right — mission */}
        <div className="anim-scale delay-4" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "1.5vh" }}>
          <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#c9a84c", marginBottom: "0.5vh" }}>مهام الوكالة</div>
          {[
            "مرافقة حاملي المشاريع منذ الفكرة حتى التشغيل",
            "تمويل المؤسسات المصغرة بقروض ميسّرة",
            "الإعفاءات الجبائية خلال مرحلتي الإنجاز والاستغلال",
            "ترقية الفكر المقاولاتي ونشر ثقافة المبادرة",
          ].map((mission, i) => (
            <div key={i} className={`anim-fade-left delay-${i + 4}`} style={{ display: "flex", gap: "1.2vw", alignItems: "flex-start", background: "rgba(30,58,95,0.25)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.7vw", padding: "1.2vh 1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0, marginTop: "0.5vh" }} />
              <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>{mission}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
