const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide15OranBranch() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0d1628 0%, #0a0f1e 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "6vh 8vw" }}>
        <div className="anim-fade delay-1" style={{ fontSize: "1.4vw", color: "#c9a84c", letterSpacing: "0.1em", marginBottom: "1vh", fontWeight: 600 }}>الفصل التطبيقي</div>
        <h2 className="anim-fade-up delay-2" style={{ fontSize: "3.5vw", fontWeight: 900, color: "#f0f4ff", margin: 0, marginBottom: "0.5vh" }}>NESDA فرع وهران</h2>
        <div className="anim-fade delay-2 gold-line" style={{ width: "10vw", marginBottom: "2.5vh" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "3vw", flex: 1, alignContent: "center" }}>
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            <div className="anim-fade-right delay-3" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "0.8vw", padding: "1.5vh 2vw" }}>
              <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.4vh" }}>الموقع الجغرافي</div>
              <div style={{ fontSize: "1.6vw", color: "#f0f4ff" }}>شارع أقادير، منطقة باستي — وهران</div>
            </div>

            <div className="anim-fade-right delay-4" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "0.8vw", padding: "1.5vh 2vw" }}>
              <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.8vh" }}>الملاحق الأربع</div>
              <div style={{ fontSize: "1.5vw", color: "#f0f4ff", lineHeight: 1.8 }}>
                ملحقة وهران — شارع أقادير
              </div>
              <div style={{ fontSize: "1.5vw", color: "#f0f4ff", lineHeight: 1.8 }}>
                ملحقة بئر الجير — حي حسن الجوار
              </div>
              <div style={{ fontSize: "1.5vw", color: "#f0f4ff", lineHeight: 1.8 }}>
                ملحقة أرزيو — 160 مسكن
              </div>
              <div style={{ fontSize: "1.5vw", color: "#f0f4ff", lineHeight: 1.8 }}>
                ملحقة عيون الترك — حي بن سمير
              </div>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.8vh" }}>
            <div className="anim-scale delay-3" style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "1vw", padding: "2vh 2vw", textAlign: "center" }}>
              <div style={{ fontSize: "1.5vw", color: "#8899bb", marginBottom: "0.5vh" }}>أهمية وهران</div>
              <div style={{ fontSize: "2vw", fontWeight: 700, color: "#c9a84c" }}>مركز اقتصادي وتجاري وصناعي</div>
              <div style={{ fontSize: "1.5vw", color: "#f0f4ff", marginTop: "0.5vh" }}>من أكبر ولايات الجزائر</div>
            </div>
            <div className="anim-fade-up delay-4" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.5vh 2vw" }}>
              <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.4vh" }}>الفترة الزمنية للدراسة</div>
              <div style={{ fontSize: "1.7vw", color: "#f0f4ff" }}>2020 — 2026</div>
            </div>
            <div className="anim-fade-up delay-5" style={{ background: "rgba(30,58,95,0.3)", border: "1px solid rgba(201,168,76,0.12)", borderRadius: "0.8vw", padding: "1.5vh 2vw" }}>
              <div style={{ fontSize: "1.5vw", color: "#c9a84c", fontWeight: 700, marginBottom: "0.4vh" }}>أداة الدراسة الميدانية</div>
              <div style={{ fontSize: "1.7vw", color: "#f0f4ff" }}>مقابلات مع إطارات الفرع</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
    </div>
  );
}
