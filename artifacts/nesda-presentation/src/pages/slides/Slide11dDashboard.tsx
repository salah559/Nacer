import { useState } from "react";

const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";
const base = isAllSlides ? "" : (typeof window !== "undefined" ? window.location.pathname.replace(/\/[^/]*\/?$/, "") : "") + "/";

const wilayaData = [
  { name: "وهران", projects: 8500, jobs: 25500, growth: 12 },
  { name: "الجزائر", projects: 12400, jobs: 37200, growth: 15 },
  { name: "قسنطينة", projects: 6100, jobs: 18300, growth: 8 },
  { name: "عنابة", projects: 4200, jobs: 12600, growth: 10 },
  { name: "سطيف", projects: 3800, jobs: 11400, growth: 7 },
  { name: "باتنة", projects: 2900, jobs: 8700, growth: 9 },
];

export default function Slide11dDashboard() {
  const [selected, setSelected] = useState(0);
  const wilaya = wilayaData[selected];

  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="slide-bg bg-analytics" />
      <div className="bg-overlay-light" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "4vh 5vw" }}>
        <div style={{ textAlign: "center", marginBottom: "1.5vh", flexShrink: 0 }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.4vw", color: "#1565C0", letterSpacing: "0.18em", fontWeight: 700 }}>الفصل الثاني — بانوراما تفاعلية</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>لوحة معلومات NESDA — وهران</h2>
          <div className="anim-line-draw delay-3" style={{ width: "12vw", height: "0.3vh", margin: "1vh auto", background: "linear-gradient(90deg, transparent, #1565C0, transparent)" }} />
        </div>

        <div className="anim-morph-in delay-3" style={{ display: "flex", gap: "2vw", flex: 1 }}>
          {/* Left — map placeholder + wilaya list */}
          <div style={{ width: "35%", display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ background: "rgba(14,22,44,0.85)", borderRadius: "1vw", padding: "2vh", textAlign: "center", border: "1px solid rgba(21,101,192,0.3)" }}>
              <div style={{ fontSize: "1.74vw", color: "#1565C0", fontWeight: 700, marginBottom: "1vh" }}>الولايات المستهدفة</div>
              <div style={{ fontSize: "1.35vw", color: "#a0a0b8" }}>51 وكالة ولائية مغطاة على الوطن</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8vh" }}>
              {wilayaData.map((w, i) => (
                <button
                  key={w.name}
                  onClick={() => setSelected(i)}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "1.2vh 1.5vw", borderRadius: "0.6vw",
                    border: selected === i ? "2px solid #1565C0" : "1px solid rgba(21,101,192,0.15)",
                    background: selected === i ? "rgba(21,101,192,0.12)" : "rgba(255,255,255,0.8)",
                    cursor: "pointer", fontFamily: "Cairo", transition: "all 0.3s",
                  }}
                >
                  <span style={{ fontSize: "1.74vw", fontWeight: selected === i ? 700 : 600, color: selected === i ? "#1565C0" : "#0d1830" }}>{w.name}</span>
                  <span style={{ fontSize: "1.5vw", color: "#4a5a78" }}>{w.projects.toLocaleString()} مشروع</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right — big stats cards */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            {/* Main 3 stats */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5vw" }}>
              <div style={{ background: "#ffffff", border: "2px solid #1565C0", borderRadius: "1vw", padding: "2vh 1.5vw", textAlign: "center", boxShadow: "0 4px 20px rgba(21,101,192,0.12)", flexShrink: 0 }}>
                <div style={{ fontSize: "1.4vw", color: "#4a5a78", marginBottom: "0.5vh" }}>المشاريع الممولة</div>
                <div style={{ fontSize: "4vw", fontWeight: 900, color: "#1565C0", lineHeight: 1 }}>{wilaya.projects.toLocaleString()}</div>
                <div style={{ fontSize: "1.2vw", color: "#1565C0" }}>+{wilaya.growth}% من العام الماضي</div>
              </div>
              <div style={{ background: "#ffffff", border: "2px solid rgba(42,64,96,0.3)", borderRadius: "1vw", padding: "2vh 1.5vw", textAlign: "center", boxShadow: "0 4px 20px rgba(42,64,96,0.08)", flexShrink: 0 }}>
                <div style={{ fontSize: "1.4vw", color: "#4a5a78", marginBottom: "0.5vh" }}>مناصب الشغل المخلقة</div>
                <div style={{ fontSize: "4vw", fontWeight: 900, color: "#2a4060", lineHeight: 1 }}>{wilaya.jobs.toLocaleString()}</div>
                <div style={{ fontSize: "1.2vw", color: "#4a5a78" }}>3 مناصب في المعدل</div>
              </div>
              <div style={{ background: "#ffffff", border: "2px solid rgba(21,101,192,0.3)", borderRadius: "1vw", padding: "2vh 1.5vw", textAlign: "center", boxShadow: "0 4px 20px rgba(21,101,192,0.08)", flexShrink: 0 }}>
                <div style={{ fontSize: "1.4vw", color: "#4a5a78", marginBottom: "0.5vh" }}>نسبة النساء</div>
                <div style={{ fontSize: "4vw", fontWeight: 900, color: "#1565C0", lineHeight: 1 }}>~13%</div>
                <div style={{ fontSize: "1.2vw", color: "#4a5a78" }}>هيمنة واضحة في المقاولة</div>
              </div>
            </div>

            {/* Activity sectors */}
            <div style={{ background: "rgba(240,244,252,0.9)", borderRadius: "1vw", padding: "2vh 2vw", border: "1px solid rgba(21,101,192,0.15)", flex: 1 }}>
              <div style={{ fontSize: "1.74vw", color: "#1565C0", fontWeight: 700, marginBottom: "1.5vh" }}>أهم القطاعات في {wilaya.name}:</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1vh" }}>
                {[
                  { sector: "التجارة والخدمات", pct: 32 },
                  { sector: "الصناعة التحويلية", pct: 28 },
                  { sector: "البناء والأشغال", pct: 18 },
                  { sector: "الفلاحة والغذاء", pct: 14 },
                  { sector: "الطب والصحة", pct: 5 },
                  { sector: "أخرى", pct: 3 },
                ].map((s) => (
                  <div key={s.sector} style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                    <div style={{ flex: 1, height: "2.5vh", background: "#e8e8f0", borderRadius: "1.2vw", overflow: "hidden" }}>
                      <div style={{ width: `${s.pct}%`, height: "100%", background: "linear-gradient(90deg, #1565C0, #42A5F5)", borderRadius: "1.2vw", transition: "width 1s ease" }} />
                    </div>
                    <div style={{ width: "5vw", textAlign: "left", fontSize: "1.5vw", color: "#0d1830", fontWeight: 600 }}>{s.pct}%</div>
                    <div style={{ width: "8vw", fontSize: "1.42vw", color: "#4a5a78" }}>{s.sector}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
