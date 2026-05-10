import { useState } from "react";
import AnimatedCounter from "../../components/AnimatedCounter";

const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide11cFinancingCalc() {
  const [investment, setInvestment] = useState(10);
  const [mode, setMode] = useState<"binary" | "triple">("triple");

  const contribution = Math.round(investment * 0.30);
  const nesdaLoan = mode === "triple" ? Math.round(investment * 0.40) : 0;
  const bankLoan = mode === "triple" ? Math.round(investment * 0.30) : Math.round(investment * 0.70);
  const nesdaGuarantee = mode === "binary" ? Math.round(bankLoan * 0.85) : 0;

  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="slide-bg bg-funding" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "5vh 6vw" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2vh" }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.1vw", color: "#8B6914", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.5vh" }}>الفصل الثاني — تفاعلي</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "3.2vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>حاسبة تمويل المشاريع</h2>
          <div className="anim-line-draw delay-3" style={{ width: "12vw", height: "0.3vh", margin: "1vh auto", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
        </div>

        <div className="anim-morph-in delay-3" style={{ display: "flex", gap: "3vw", flex: 1 }}>
          {/* Left — controls */}
          <div style={{ width: "40%", display: "flex", flexDirection: "column", gap: "2vh" }}>
            {/* Mode selector */}
            <div style={{ background: "rgba(240,244,252,0.9)", borderRadius: "1vw", padding: "2vh 2vw", border: "1px solid rgba(201,168,76,0.2)" }}>
              <div style={{ fontSize: "1.2vw", color: "#8B6914", fontWeight: 700, marginBottom: "1.5vh" }}>اختر صيغة التمويل:</div>
              <div style={{ display: "flex", gap: "1vw" }}>
                <button onClick={() => setMode("binary")} style={{ flex: 1, padding: "1.5vh", borderRadius: "0.8vw", border: mode === "binary" ? "2px solid #c9a84c" : "1px solid #ddd", background: mode === "binary" ? "rgba(201,168,76,0.15)" : "#fff", color: mode === "binary" ? "#8B6914" : "#4a5a78", fontWeight: 700, fontSize: "1.1vw", cursor: "pointer", fontFamily: "Cairo", transition: "all 0.3s" }}>
                  <div style={{ fontSize: "1.4vw", marginBottom: "0.5vh" }}>التمويل الثنائي</div>
                  <div style={{ fontSize: "0.9vw", fontWeight: 400 }}>مساهمة + قرض بنكي بضمان الوكالة</div>
                </button>
                <button onClick={() => setMode("triple")} style={{ flex: 1, padding: "1.5vh", borderRadius: "0.8vw", border: mode === "triple" ? "2px solid #c9a84c" : "1px solid #ddd", background: mode === "triple" ? "rgba(201,168,76,0.15)" : "#fff", color: mode === "triple" ? "#8B6914" : "#4a5a78", fontWeight: 700, fontSize: "1.1vw", cursor: "pointer", fontFamily: "Cairo", transition: "all 0.3s" }}>
                  <div style={{ fontSize: "1.4vw", marginBottom: "0.5vh" }}>التمويل الثلاثي</div>
                  <div style={{ fontSize: "0.9vw", fontWeight: 400 }}>مساهمة + قرض NESDA + قرض بنكي</div>
                </button>
              </div>
            </div>

            {/* Slider */}
            <div style={{ background: "rgba(240,244,252,0.9)", borderRadius: "1vw", padding: "2vh 2vw", border: "1px solid rgba(201,168,76,0.2)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5vh" }}>
                <span style={{ fontSize: "1.2vw", color: "#8B6914", fontWeight: 700 }}>مبلغ الاستثمار:</span>
                <span style={{ fontSize: "2vw", fontWeight: 900, color: "#8B6914" }}>{investment}M <span style={{ fontSize: "1vw" }}>دج</span></span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={investment}
                onChange={(e) => setInvestment(parseInt(e.target.value))}
                style={{ width: "100%", accentColor: "#c9a84c", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85vw", color: "#4a5a78", marginTop: "0.5vh" }}>
                <span>1M</span><span>15M</span><span>30M</span>
              </div>
            </div>

            {/* Quick presets */}
            <div style={{ display: "flex", gap: "0.8vw", justifyContent: "center" }}>
              {[5, 10, 15, 20, 25, 30].map(v => (
                <button key={v} onClick={() => setInvestment(v)} style={{ padding: "0.6vh 1.2vw", borderRadius: "2vw", border: investment === v ? "2px solid #c9a84c" : "1px solid #ddd", background: investment === v ? "#c9a84c" : "#fff", color: investment === v ? "#fff" : "#4a5a78", fontSize: "0.9vw", fontWeight: 600, cursor: "pointer", fontFamily: "Cairo" }}>
                  {v}M
                </button>
              ))}
            </div>
          </div>

          {/* Right — results */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ fontSize: "1.2vw", color: "#8B6914", fontWeight: 700, textAlign: "center" }}>تفاصيل التمويل:</div>

            {/* Owner contribution */}
            <div style={{ background: "#ffffff", border: "2px solid #c9a84c", borderRadius: "1vw", padding: "2vh 2vw", boxShadow: "0 4px 16px rgba(201,168,76,0.12)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: "1.3vw", color: "#0d1830", fontWeight: 700 }}>مساهمة صاحب المشروع</div>
                <div style={{ fontSize: "0.95vw", color: "#4a5a78" }}>30% من قيمة الاستثمار</div>
              </div>
              <div style={{ fontSize: "2.8vw", fontWeight: 900, color: "#8B6914", lineHeight: 1 }}>
                <AnimatedCounter target={contribution} suffix="M دج" duration={2200} style={{ fontSize: "2.8vw", fontWeight: 900, color: "#8B6914" }} />
              </div>
            </div>

            {mode === "triple" ? (
              <>
                <div style={{ background: "#ffffff", border: "2px solid rgba(201,168,76,0.4)", borderRadius: "1vw", padding: "2vh 2vw", boxShadow: "0 4px 16px rgba(201,168,76,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "1.3vw", color: "#0d1830", fontWeight: 700 }}>قرض NESDA المباشر</div>
                    <div style={{ fontSize: "0.95vw", color: "#4a5a78" }}>40% من قيمة الاستثمار</div>
                  </div>
                  <div style={{ fontSize: "2.8vw", fontWeight: 900, color: "#8B6914", lineHeight: 1 }}>
                    <AnimatedCounter target={nesdaLoan} suffix="M دج" duration={2200} style={{ fontSize: "2.8vw", fontWeight: 900, color: "#8B6914" }} />
                  </div>
                </div>
                <div style={{ background: "#ffffff", border: "2px solid rgba(42,64,96,0.3)", borderRadius: "1vw", padding: "2vh 2vw", boxShadow: "0 4px 16px rgba(42,64,96,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "1.3vw", color: "#0d1830", fontWeight: 700 }}>قرض بنكي تكميلي</div>
                    <div style={{ fontSize: "0.95vw", color: "#4a5a78" }}>30% من قيمة الاستثمار</div>
                  </div>
                  <div style={{ fontSize: "2.8vw", fontWeight: 900, color: "#8B6914", lineHeight: 1 }}>
                    <AnimatedCounter target={bankLoan} suffix="M دج" duration={2200} style={{ fontSize: "2.8vw", fontWeight: 900, color: "#8B6914" }} />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div style={{ background: "#ffffff", border: "2px solid rgba(42,64,96,0.3)", borderRadius: "1vw", padding: "2vh 2vw", boxShadow: "0 4px 16px rgba(42,64,96,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "1.3vw", color: "#0d1830", fontWeight: 700 }}>قرض بنكي</div>
                    <div style={{ fontSize: "0.95vw", color: "#4a5a78" }}>70% من قيمة الاستثمار</div>
                  </div>
                  <div style={{ fontSize: "2.8vw", fontWeight: 900, color: "#8B6914", lineHeight: 1 }}>
                    <AnimatedCounter target={bankLoan} suffix="M دج" duration={2200} style={{ fontSize: "2.8vw", fontWeight: 900, color: "#8B6914" }} />
                  </div>
                </div>
                <div style={{ background: "rgba(201,168,76,0.08)", border: "2px solid rgba(201,168,76,0.3)", borderRadius: "1vw", padding: "2vh 2vw", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "1.3vw", color: "#0d1830", fontWeight: 700 }}>ضمان الوكالة</div>
                    <div style={{ fontSize: "0.95vw", color: "#4a5a78" }}>85% من قيمة القرض البنكي</div>
                  </div>
                  <div style={{ fontSize: "2.8vw", fontWeight: 900, color: "#8B6914", lineHeight: 1 }}>
                    <AnimatedCounter target={nesdaGuarantee} suffix="M دج" duration={2200} style={{ fontSize: "2.8vw", fontWeight: 900, color: "#8B6914" }} />
                  </div>
                </div>
              </>
            )}

            {/* Total check */}
            <div style={{ background: "rgba(14,22,44,0.9)", borderRadius: "1vw", padding: "2vh 2vw", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
              <div style={{ fontSize: "1.4vw", color: "#c9a84c", fontWeight: 700 }}>المجموع:</div>
              <div style={{ fontSize: "2.5vw", fontWeight: 900, color: "#f0d080" }}>
                {investment}M <span style={{ fontSize: "1.2vw" }}>دج</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
