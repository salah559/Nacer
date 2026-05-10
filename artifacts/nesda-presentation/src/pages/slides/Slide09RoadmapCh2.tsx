const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide09RoadmapCh2() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0d1628 0%, #0a0f1e 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "5vh 8vw" }}>
        <div className="anim-fade delay-1" style={{ fontSize: "1.3vw", color: "#c9a84c", letterSpacing: "0.1em", marginBottom: "0.5vh", fontWeight: 600 }}>خطة البحث — الانتقال</div>
        <div className="anim-fade-up delay-2" style={{ marginBottom: "0.3vh" }}>
          <h2 style={{ fontSize: "2.8vw", fontWeight: 900, color: "#f0f4ff", margin: 0 }}>ننتقل الآن إلى الفصل الثاني</h2>
          <div style={{ fontSize: "1.6vw", color: "#c9a84c", fontWeight: 600 }}>المقاولاتية والوكالة الوطنية NESDA</div>
        </div>
        <div className="anim-fade delay-2" style={{ width: "8vw", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)", marginBottom: "2.5vh" }} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.6vh", justifyContent: "center" }}>
          <div className="anim-fade delay-2" style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", flexShrink: 0, background: "rgba(201,168,76,0.2)", border: "1px solid rgba(201,168,76,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4vw", fontWeight: 900, color: "rgba(201,168,76,0.7)" }}>✓</div>
            <div style={{ flex: 1, height: "0.12vh", background: "rgba(201,168,76,0.12)" }} />
            <div style={{ flex: 8, padding: "1vh 1.5vw", background: "rgba(30,58,95,0.1)", border: "1px solid rgba(201,168,76,0.06)", borderRadius: "0.7vw", opacity: 0.55 }}>
              <div style={{ fontSize: "1.6vw", fontWeight: 600, color: "#f0f4ff" }}>الإشكالية والمنهج</div>
              <div style={{ fontSize: "1.2vw", color: "#8899bb" }}>المقدمة العامة</div>
            </div>
          </div>
          <div className="anim-fade delay-2" style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", flexShrink: 0, background: "rgba(201,168,76,0.2)", border: "1px solid rgba(201,168,76,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4vw", fontWeight: 900, color: "rgba(201,168,76,0.7)" }}>✓</div>
            <div style={{ flex: 1, height: "0.12vh", background: "rgba(201,168,76,0.12)" }} />
            <div style={{ flex: 8, padding: "1vh 1.5vw", background: "rgba(30,58,95,0.1)", border: "1px solid rgba(201,168,76,0.06)", borderRadius: "0.7vw", opacity: 0.55 }}>
              <div style={{ fontSize: "1.6vw", fontWeight: 600, color: "#f0f4ff" }}>الإطار النظري — PME</div>
              <div style={{ fontSize: "1.2vw", color: "#8899bb" }}>ماهيتها، تمويلها، دور الدولة</div>
            </div>
          </div>
          <div className="anim-fade delay-3" style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", flexShrink: 0, background: "#c9a84c", border: "2px solid #f0d080", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 900, color: "#0a0f1e" }}>03</div>
            <div style={{ flex: 1, height: "0.15vh", background: "rgba(201,168,76,0.5)" }} />
            <div style={{ flex: 8, padding: "1.3vh 1.5vw", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.5)", borderRadius: "0.7vw" }}>
              <div style={{ fontSize: "1.7vw", fontWeight: 800, color: "#c9a84c" }}>NESDA والمقاولاتية</div>
              <div style={{ fontSize: "1.2vw", color: "#8899bb" }}>النشأة، القانون، دور الوكالة</div>
            </div>
          </div>
          <div className="anim-fade delay-4" style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", flexShrink: 0, background: "rgba(30,58,95,0.4)", border: "1px solid rgba(201,168,76,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 900, color: "#c9a84c" }}>04</div>
            <div style={{ flex: 1, height: "0.12vh", background: "rgba(201,168,76,0.1)" }} />
            <div style={{ flex: 8, padding: "1vh 1.5vw", background: "rgba(30,58,95,0.15)", border: "1px solid rgba(201,168,76,0.07)", borderRadius: "0.7vw" }}>
              <div style={{ fontSize: "1.6vw", fontWeight: 600, color: "#f0f4ff" }}>الدراسة التطبيقية</div>
              <div style={{ fontSize: "1.2vw", color: "#8899bb" }}>فرع وهران — نتائج الميدان</div>
            </div>
          </div>
          <div className="anim-fade delay-5" style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", flexShrink: 0, background: "rgba(30,58,95,0.4)", border: "1px solid rgba(201,168,76,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 900, color: "#c9a84c" }}>05</div>
            <div style={{ flex: 1, height: "0.12vh", background: "rgba(201,168,76,0.1)" }} />
            <div style={{ flex: 8, padding: "1vh 1.5vw", background: "rgba(30,58,95,0.15)", border: "1px solid rgba(201,168,76,0.07)", borderRadius: "0.7vw" }}>
              <div style={{ fontSize: "1.6vw", fontWeight: 600, color: "#f0f4ff" }}>الخلاصة والتوصيات</div>
              <div style={{ fontSize: "1.2vw", color: "#8899bb" }}>النتائج الكاملة</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
