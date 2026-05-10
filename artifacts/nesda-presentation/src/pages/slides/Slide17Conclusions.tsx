const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide17Conclusions() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0d1628 0%, #0a0f1e 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div className="anim-fade delay-1" style={{ fontSize: "1.4vw", color: "#c9a84c", letterSpacing: "0.1em", marginBottom: "1vh", fontWeight: 600 }}>الخلاصة</div>
        <h2 className="anim-fade-up delay-2" style={{ fontSize: "3.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.5vh" }}>نتائج الدراسة والتحقق من الفرضيات</h2>
        <div className="anim-fade delay-2 gold-line" style={{ width: "10vw", marginBottom: "2.5vh" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh", flex: 1, justifyContent: "center" }}>
          <div className="anim-fade-right delay-3" style={{ display: "flex", gap: "2vw", alignItems: "flex-start", background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1vw", padding: "1.8vh 2vw" }}>
            <div style={{ background: "#c9a84c", borderRadius: "50%", width: "3.5vw", height: "3.5vw", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 900, color: "#0a0f1e", flexShrink: 0 }}>H₁</div>
            <div>
              <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.3vh" }}>محققة</div>
              <div style={{ fontSize: "1.7vw", color: "#f0f4ff" }}>التمويل التقليدي وحده غير كافٍ — تدخل NESDA ضرورة وليس خياراً</div>
            </div>
          </div>
          <div className="anim-fade-right delay-4" style={{ display: "flex", gap: "2vw", alignItems: "flex-start", background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1vw", padding: "1.8vh 2vw" }}>
            <div style={{ background: "#c9a84c", borderRadius: "50%", width: "3.5vw", height: "3.5vw", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 900, color: "#0a0f1e", flexShrink: 0 }}>H₂</div>
            <div>
              <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.3vh" }}>محققة</div>
              <div style={{ fontSize: "1.7vw", color: "#f0f4ff" }}>401,673 مشروع ممول و 958,160 منصب شغل دليل دامغ على فعالية المرافقة</div>
            </div>
          </div>
          <div className="anim-fade-right delay-5" style={{ display: "flex", gap: "2vw", alignItems: "flex-start", background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1vw", padding: "1.8vh 2vw" }}>
            <div style={{ background: "#c9a84c", borderRadius: "50%", width: "3.5vw", height: "3.5vw", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 900, color: "#0a0f1e", flexShrink: 0 }}>H₃</div>
            <div>
              <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.3vh" }}>محققة</div>
              <div style={{ fontSize: "1.7vw", color: "#f0f4ff" }}>102 مركز CDE والجزائر الأولى عربياً يؤكدان دور نشر الثقافة المقاولاتية</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
