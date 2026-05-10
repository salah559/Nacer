import AnimatedCounter from "../../components/AnimatedCounter";

const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide16FieldResults() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="slide-bg bg-analytics" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "3vh 5vw" }}>
        <div style={{ marginBottom: "1.5vh", flexShrink: 0 }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.4vw", color: "#1565C0", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.3vh" }}>الفصل التطبيقي</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "3.6vw", fontWeight: 900, color: "#1a1a2e", margin: 0, lineHeight: 1.15 }}>نتائج الدراسة الميدانية</h2>
          <h3 className="anim-title-rtl delay-3" style={{ fontSize: "2.6vw", fontWeight: 800, color: "#1565C0", margin: "0.3vh 0 0 0" }}>NESDA وهران 2020-2026</h3>
          <div className="anim-line-draw delay-4" style={{ width: "12vw", height: "0.3vh", marginTop: "0.8vh", background: "linear-gradient(90deg, #1565C0, #42A5F5, transparent)" }} />
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.2vw", marginBottom: "1.5vh", flexShrink: 0 }}>
          <div className="anim-count-morph delay-3 card-clean" style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "1.2vh 0.8vw" }}>
            <div className="gold-line" style={{ position: "absolute", top: 0, left: "20%", right: "20%" }} />
            <div style={{ fontSize: "3.2vw", fontWeight: 900, color: "#1565C0", lineHeight: 1 }}>317K+</div>
            <div style={{ fontSize: "1.2vw", color: "#5a5a7a", marginTop: "0.3vh", lineHeight: 1.2 }}>إجمالي المشاريع الممولة حتى 2021</div>
          </div>
          <div className="anim-count-morph delay-4 card-clean" style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "1.2vh 0.8vw" }}>
            <div className="gold-line" style={{ position: "absolute", top: 0, left: "20%", right: "20%" }} />
            <div style={{ fontSize: "3.2vw", fontWeight: 900, color: "#1565C0", lineHeight: 1 }}>
              <AnimatedCounter target={65812} suffix="" duration={2500} style={{ fontSize: "3.2vw", fontWeight: 900, color: "#1565C0" }} />
            </div>
            <div style={{ fontSize: "1.2vw", color: "#5a5a7a", marginTop: "0.3vh", lineHeight: 1.2 }}>أعلى قمة مشاريع ممولة (2012)</div>
          </div>
          <div className="anim-count-morph delay-5 card-active" style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "1.2vh 0.8vw" }}>
            <div className="gold-line" style={{ position: "absolute", top: 0, left: "20%", right: "20%" }} />
            <div style={{ fontSize: "3.2vw", fontWeight: 900, color: "#1565C0", lineHeight: 1 }}>
              <AnimatedCounter target={51} suffix="" duration={2200} style={{ fontSize: "3.2vw", fontWeight: 900, color: "#1565C0" }} />
            </div>
            <div style={{ fontSize: "1.2vw", color: "#5a5a7a", marginTop: "0.3vh", lineHeight: 1.2 }}>وكالة ولائية + 170 فرع محلي</div>
          </div>
          <div className="anim-count-morph delay-6 card-clean" style={{ textAlign: "center", position: "relative", overflow: "hidden", padding: "1.2vh 0.8vw" }}>
            <div className="gold-line" style={{ position: "absolute", top: 0, left: "20%", right: "20%" }} />
            <div style={{ fontSize: "3.2vw", fontWeight: 900, color: "#1565C0", lineHeight: 1 }}>~9K</div>
            <div style={{ fontSize: "1.2vw", color: "#5a5a7a", marginTop: "0.3vh", lineHeight: 1.2 }}>مشروع ممول نصف 2025</div>
          </div>
        </div>

        {/* Bottom cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2vw", flex: 1, minHeight: 0 }}>
          <div className="anim-morph-in delay-5 card-clean" style={{ padding: "1.5vh 1.5vw", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "1.5vw", color: "#1565C0", fontWeight: 700, marginBottom: "0.8vh", flexShrink: 0 }}>القطاعات الأكثر استفادة</div>
            <div style={{ display: "flex", gap: "0.5vw", flexWrap: "wrap" }}>
              <span style={{ background: "#f8f5ee", border: "1px solid rgba(21,101,192,0.2)", borderRadius: "0.4vw", padding: "0.3vh 0.6vw", fontSize: "1.3vw", color: "#1a1a2e" }}>الخدمات</span>
              <span style={{ background: "#f8f5ee", border: "1px solid rgba(21,101,192,0.2)", borderRadius: "0.4vw", padding: "0.3vh 0.6vw", fontSize: "1.3vw", color: "#1a1a2e" }}>الصناعة الخفيفة</span>
              <span style={{ background: "#f8f5ee", border: "1px solid rgba(21,101,192,0.2)", borderRadius: "0.4vw", padding: "0.3vh 0.6vw", fontSize: "1.3vw", color: "#1a1a2e" }}>البناء</span>
              <span style={{ background: "#f8f5ee", border: "1px solid rgba(21,101,192,0.2)", borderRadius: "0.4vw", padding: "0.3vh 0.6vw", fontSize: "1.3vw", color: "#1a1a2e" }}>التجارة</span>
            </div>
          </div>
          <div className="anim-morph-in delay-6 card-clean" style={{ padding: "1.5vh 1.5vw", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "1.5vw", color: "#1565C0", fontWeight: 700, marginBottom: "0.8vh", flexShrink: 0 }}>التحديات المرصودة</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4vh" }}>
              <div style={{ fontSize: "1.3vw", color: "#1a1a2e", lineHeight: 1.3 }}>• صعوبة متابعة المشاريع بعد الإطلاق</div>
              <div style={{ fontSize: "1.3vw", color: "#1a1a2e", lineHeight: 1.3 }}>• ضعف التنسيق مع القطاع البنكي أحياناً</div>
              <div style={{ fontSize: "1.3vw", color: "#1a1a2e", lineHeight: 1.3 }}>• ضرورة تعزيز التكوين المتخصص</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
