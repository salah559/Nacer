const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide13CDE() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0d1628 0%, #0a0f1e 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div className="anim-fade delay-1" style={{ fontSize: "1.4vw", color: "#c9a84c", letterSpacing: "0.1em", marginBottom: "1vh", fontWeight: 600 }}>الفصل الثاني</div>
        <h2 className="anim-fade-up delay-2" style={{ fontSize: "3.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.5vh" }}>مراكز تطوير المقاولاتية</h2>
        <div className="anim-fade delay-2 gold-line" style={{ width: "10vw", marginBottom: "2.5vh" }} />

        <div style={{ display: "flex", gap: "3vw", flex: 1, alignItems: "center" }}>
          {/* Right — headline stat (appears right in RTL) */}
          <div style={{ width: "32vw", display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div className="anim-scale delay-3" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "1.2vw", padding: "2.5vh 2.5vw", textAlign: "center" }}>
              <div style={{ fontSize: "1.5vw", color: "#8899bb", marginBottom: "0.8vh" }}>إنجاز وطني</div>
              <div style={{ fontSize: "9vw", fontWeight: 900, color: "#c9a84c", lineHeight: 1 }}>102</div>
              <div style={{ fontSize: "1.8vw", color: "#f0f4ff", marginTop: "0.5vh", fontWeight: 600 }}>مركز تطوير مقاولاتية</div>
              <div style={{ fontSize: "1.5vw", color: "#c9a84c", marginTop: "0.5vh", fontWeight: 700 }}>المرتبة الأولى عربياً</div>
            </div>
            <div className="anim-fade-up delay-4" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.5vh 2vw" }}>
              <div style={{ fontSize: "1.4vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.4vh" }}>الجهة المشرفة</div>
              <div style={{ fontSize: "1.4vw", color: "#f0f4ff", lineHeight: 1.5 }}>وزارة التعليم العالي ووزارة اقتصاد المعرفة والمؤسسات الناشئة</div>
            </div>
          </div>

          {/* Left — modules */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.3vh" }}>
            <div className="anim-fade delay-2" style={{ fontSize: "1.7vw", fontWeight: 700, color: "#c9a84c", marginBottom: "0.8vh" }}>البرنامج التكويني — 5 مقاييس:</div>

            <div className="anim-fade-right delay-3" style={{ display: "flex", gap: "1vw", alignItems: "center", background: "rgba(30,58,95,0.25)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.7vw", padding: "1.2vh 1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0 }} />
              <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>أساسيات في المقاولاتية</div>
            </div>
            <div className="anim-fade-right delay-4" style={{ display: "flex", gap: "1vw", alignItems: "center", background: "rgba(30,58,95,0.25)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.7vw", padding: "1.2vh 1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0 }} />
              <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>التخطيط الاستراتيجي وتطوير المؤسسة</div>
            </div>
            <div className="anim-fade-right delay-5" style={{ display: "flex", gap: "1vw", alignItems: "center", background: "rgba(30,58,95,0.25)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.7vw", padding: "1.2vh 1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0 }} />
              <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>التسيير العملياتي وإدارة الموارد</div>
            </div>
            <div className="anim-fade-right delay-6" style={{ display: "flex", gap: "1vw", alignItems: "center", background: "rgba(30,58,95,0.25)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.7vw", padding: "1.2vh 1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0 }} />
              <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>الجوانب القانونية لإنشاء مؤسسة</div>
            </div>
            <div className="anim-fade-right delay-7" style={{ display: "flex", gap: "1vw", alignItems: "center", background: "rgba(30,58,95,0.25)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.7vw", padding: "1.2vh 1.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", background: "#c9a84c", flexShrink: 0 }} />
              <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>استراتيجيات النمو والابتكار واقتراح القيم</div>
            </div>

            <div className="anim-fade-up delay-8" style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "0.7vw", padding: "1.2vh 1.5vw", marginTop: "0.5vh" }}>
              <div style={{ fontSize: "1.5vw", color: "#f0f4ff" }}>
                مدة التكوين
                <span style={{ color: "#c9a84c", fontWeight: 700, margin: "0 0.5vw" }}>15 يوماً</span>
                — شهادة تُتيح الحصول على تمويل NESDA
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
