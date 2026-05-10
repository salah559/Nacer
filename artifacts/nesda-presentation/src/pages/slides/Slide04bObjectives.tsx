const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide04bObjectives() {
  const objectives = [
    {
      n: "01",
      title: "التعرف على ماهية PME وأبعادها العامة",
      sub: "دراسة ماهية المؤسسات الصغيرة والمتوسطة ومعايير التصنيف",
    },
    {
      n: "02",
      title: "دراسة التمويل التقليدي قبل تدخل NESDA",
      sub: "مصادر التمويل الداخلي والخارجي وحدوده",
    },
    {
      n: "03",
      title: "تحليل دور الدولة وسياساتها في دعم PME",
      sub: "الإطار التشريعي وآليات الدعم العمومي",
    },
    {
      n: "04",
      title: "فهم مفهوم المقاولاتية وأهميتها",
      sub: "المسار المقاولاتي ودوره في التنمية الاقتصادية",
    },
    {
      n: "05",
      title: "استعراض نشأة NESDA والإطار القانوني",
      sub: "الدمج والتطور من ANSEJ إلى الوكالة الوطنية الموحدة",
    },
    {
      n: "06",
      title: "توضيح دور NESDA في تمويل ومرافقة PME",
      sub: "الصيغ التمويلية والمرافقة التقنية والإدارية",
    },
    {
      n: "07",
      title: "إبراز مساهمة مراكز CDE في نشر الثقافة المقاولاتية",
      sub: "تكوين الطلبة وتشجيع روح المبادرة",
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
        <div style={{ width: "18%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "2vh 1vw 2vh 3vw", borderLeft: "1px solid rgba(232,185,35,0.18)" }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.3vw", color: "#1565C0", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "1vh", textTransform: "uppercase" }}>المقدمة العامة</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "3.2vw", fontWeight: 900, color: "#0d1830", margin: 0, lineHeight: 1.15 }}>أهداف</h2>
          <h2 className="anim-title-rtl delay-3" style={{ fontSize: "3.2vw", fontWeight: 900, margin: 0, lineHeight: 1.15 }}><span className="text-gold" style={{ display: "inline-block" }}>الدراسة</span></h2>
          <div className="anim-line-draw delay-4" style={{ width: "50%", height: "0.3vh", marginTop: "1vh", marginBottom: "1vh", background: "linear-gradient(90deg, #1565C0, transparent)" }} />
          <div className="anim-smooth-fade delay-5" style={{ fontSize: "1.1vw", color: "#4a5a78", lineHeight: 1.5 }}>
            تسعى هذه الدراسة إلى الإجابة على إشكالية التمويل من خلال أهداف محددة ومترابطة
          </div>
        </div>

        {/* Right — objectives in 2 columns */}
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", alignContent: "center", padding: "2vh 1.5vw 2vh 1vw", gap: "1vh 1vw", height: "100%", overflow: "hidden" }}>
          {objectives.map((obj, i) => (
            <div
              key={obj.n}
              className={`anim-card-morph delay-${i + 3}`}
              style={{
                background: i === 0 ? "rgba(14,22,44,0.65)" : "rgba(14,22,44,0.5)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: i === 0 ? "1px solid rgba(232,185,35,0.4)" : "1px solid rgba(232,185,35,0.18)",
                borderRadius: "0.6vw",
                padding: "0.8vh 0.8vw",
                position: "relative",
                overflow: "hidden",
                boxShadow: i === 0 ? "0 0 3vw rgba(232,185,35,0.06), inset 0 1px 0 rgba(232,185,35,0.28)" : "inset 0 1px 0 rgba(232,185,35,0.18)",
                display: "flex",
                gap: "0.5vw",
                alignItems: "center",
                minHeight: 0,
              }}
            >
              <div style={{ position: "absolute", top: 0, right: "15%", left: "15%", height: "0.15vh", background: `linear-gradient(90deg, transparent, rgba(232,185,35,${i === 0 ? "1" : "0.5"}), transparent)` }} />
              <div style={{ width: "1.8vw", height: "1.8vw", flexShrink: 0, borderRadius: "50%", background: i === 0 ? "rgba(232,185,35,0.35)" : "rgba(232,185,35,0.18)", border: "1px solid rgba(232,185,35,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1vw", fontWeight: 900, color: "#1565C0" }}>
                {obj.n}
              </div>
              <div style={{ minWidth: 0, overflow: "hidden" }}>
                <div style={{ fontSize: "1vw", color: "#0d1830", fontWeight: 700, lineHeight: 1.1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{obj.title}</div>
                <div style={{ fontSize: "0.75vw", color: "#4a5a78", marginTop: "0.02vh", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{obj.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
