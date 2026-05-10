const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide02Roadmap() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0d1628 0%, #0a0f1e 60%, #0d1628 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "5vh 8vw" }}>
        <div className="anim-fade delay-1" style={{ fontSize: "1.4vw", color: "#c9a84c", letterSpacing: "0.12em", marginBottom: "0.5vh", fontWeight: 600 }}>خطة البحث</div>
        <h2 className="anim-fade-up delay-2" style={{ fontSize: "3.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.3vh" }}>هيكل الدراسة</h2>
        <div className="anim-fade delay-2" style={{ width: "8vw", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)", marginBottom: "2.5vh" }} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.8vh", justifyContent: "center" }}>
          <div className="anim-fade delay-2" style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "4.2vw", height: "4.2vw", borderRadius: "50%", flexShrink: 0, background: "rgba(30,58,95,0.5)", border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6vw", fontWeight: 900, color: "#c9a84c" }}>01</div>
            <div style={{ flex: 1, height: "0.15vh", background: "rgba(201,168,76,0.15)" }} />
            <div style={{ flex: 8, padding: "1.2vh 1.8vw", background: "rgba(30,58,95,0.2)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw" }}>
              <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#f0f4ff" }}>الإشكالية والمنهج</div>
              <div style={{ fontSize: "1.3vw", color: "#8899bb" }}>المقدمة العامة</div>
            </div>
          </div>
          <div className="anim-fade delay-3" style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "4.2vw", height: "4.2vw", borderRadius: "50%", flexShrink: 0, background: "rgba(30,58,95,0.5)", border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6vw", fontWeight: 900, color: "#c9a84c" }}>02</div>
            <div style={{ flex: 1, height: "0.15vh", background: "rgba(201,168,76,0.15)" }} />
            <div style={{ flex: 8, padding: "1.2vh 1.8vw", background: "rgba(30,58,95,0.2)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw" }}>
              <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#f0f4ff" }}>الإطار النظري — PME</div>
              <div style={{ fontSize: "1.3vw", color: "#8899bb" }}>ماهيتها، تمويلها، دور الدولة</div>
            </div>
          </div>
          <div className="anim-fade delay-4" style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "4.2vw", height: "4.2vw", borderRadius: "50%", flexShrink: 0, background: "rgba(30,58,95,0.5)", border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6vw", fontWeight: 900, color: "#c9a84c" }}>03</div>
            <div style={{ flex: 1, height: "0.15vh", background: "rgba(201,168,76,0.15)" }} />
            <div style={{ flex: 8, padding: "1.2vh 1.8vw", background: "rgba(30,58,95,0.2)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw" }}>
              <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#f0f4ff" }}>NESDA والمقاولاتية</div>
              <div style={{ fontSize: "1.3vw", color: "#8899bb" }}>النشأة، القانون، دور الوكالة</div>
            </div>
          </div>
          <div className="anim-fade delay-5" style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "4.2vw", height: "4.2vw", borderRadius: "50%", flexShrink: 0, background: "rgba(30,58,95,0.5)", border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6vw", fontWeight: 900, color: "#c9a84c" }}>04</div>
            <div style={{ flex: 1, height: "0.15vh", background: "rgba(201,168,76,0.15)" }} />
            <div style={{ flex: 8, padding: "1.2vh 1.8vw", background: "rgba(30,58,95,0.2)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw" }}>
              <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#f0f4ff" }}>الدراسة التطبيقية</div>
              <div style={{ fontSize: "1.3vw", color: "#8899bb" }}>فرع وهران — نتائج الميدان</div>
            </div>
          </div>
          <div className="anim-fade delay-6" style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div style={{ width: "4.2vw", height: "4.2vw", borderRadius: "50%", flexShrink: 0, background: "rgba(30,58,95,0.5)", border: "1px solid rgba(201,168,76,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6vw", fontWeight: 900, color: "#c9a84c" }}>05</div>
            <div style={{ flex: 1, height: "0.15vh", background: "rgba(201,168,76,0.15)" }} />
            <div style={{ flex: 8, padding: "1.2vh 1.8vw", background: "rgba(30,58,95,0.2)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw" }}>
              <div style={{ fontSize: "1.8vw", fontWeight: 700, color: "#f0f4ff" }}>الخلاصة والتوصيات</div>
              <div style={{ fontSize: "1.3vw", color: "#8899bb" }}>النتائج الكاملة</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
