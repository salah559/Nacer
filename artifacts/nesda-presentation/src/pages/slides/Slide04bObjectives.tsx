const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide04bObjectives() {
  const objectives = [
    {
      n: "01",
      title: "التحليل النظري لآليات التمويل",
      sub: "استيعاب مفاهيم PME ومصادر تمويلها التقليدية والبديلة",
    },
    {
      n: "02",
      title: "التعرف على دور NESDA",
      sub: "دراسة الإطار القانوني وصيغ التمويل الثنائي والثلاثي للوكالة",
    },
    {
      n: "03",
      title: "قياس الأثر على خلق مناصب الشغل",
      sub: "تقييم مساهمة المشاريع الممولة في التشغيل والتنمية المحلية",
    },
    {
      n: "04",
      title: "الدراسة الميدانية بفرع وهران",
      sub: "تحليل الواقع التطبيقي واستخلاص التحديات والتوصيات العملية",
    },
  ];

  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="slide-bg bg-hypotheses" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" />
      <div className="gold-accent-bottom" />

      <div className="relative z-10 flex h-full">
        {/* Left — title */}
        <div style={{ width: "32%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "7vh 3vw 7vh 8vw", borderLeft: "1px solid rgba(201,168,76,0.18)" }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.2vw", color: "#8B6914", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "1.5vh", textTransform: "uppercase" }}>المقدمة العامة</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0, lineHeight: 1.15 }}>أهداف</h2>
          <h2 className="anim-title-rtl delay-3" style={{ fontSize: "4vw", fontWeight: 900, margin: 0, lineHeight: 1.15 }}><span className="text-gold" style={{ display: "inline-block" }}>الدراسة</span></h2>
          <div className="anim-line-draw delay-4" style={{ width: "50%", height: "0.3vh", marginTop: "2vh", marginBottom: "2.5vh", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          <div className="anim-smooth-fade delay-5" style={{ fontSize: "1.25vw", color: "#4a5a78", lineHeight: 1.7 }}>
            تسعى هذه الدراسة إلى الإجابة على إشكالية التمويل من خلال أربعة أهداف محددة ومترابطة
          </div>
        </div>

        {/* Right — objectives */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "6vh 6vw 6vh 3vw", gap: "1.6vh" }}>
          {objectives.map((obj, i) => (
            <div
              key={obj.n}
              className={`anim-card-morph delay-${i + 3}`}
              style={{
                background: i === 0 ? "rgba(14,22,44,0.65)" : "rgba(14,22,44,0.5)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: i === 0 ? "1px solid rgba(201,168,76,0.3)" : "1px solid rgba(201,168,76,0.18)",
                borderRadius: "1.2vw",
                padding: "1.8vh 2.2vw",
                position: "relative",
                overflow: "hidden",
                boxShadow: i === 0 ? "0 0 3vw rgba(201,168,76,0.06), inset 0 1px 0 rgba(201,168,76,0.28)" : "inset 0 1px 0 rgba(201,168,76,0.18)",
                display: "flex",
                gap: "1.5vw",
                alignItems: "center",
              }}
            >
              <div style={{ position: "absolute", top: 0, right: "15%", left: "15%", height: "0.3vh", background: `linear-gradient(90deg, transparent, rgba(201,168,76,${i === 0 ? "1" : "0.5"}), transparent)` }} />
              <div style={{ width: "3.5vw", height: "3.5vw", flexShrink: 0, borderRadius: "50%", background: i === 0 ? "rgba(201,168,76,0.35)" : "rgba(201,168,76,0.18)", border: "1px solid rgba(201,168,76,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3vw", fontWeight: 900, color: "#8B6914" }}>
                {obj.n}
              </div>
              <div>
                <div style={{ fontSize: "1.55vw", color: "#0d1830", fontWeight: 700, lineHeight: 1.3 }}>{obj.title}</div>
                <div style={{ fontSize: "1.2vw", color: "#4a5a78", marginTop: "0.3vh" }}>{obj.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
