const base = import.meta.env.BASE_URL;
const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide01Cover() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>

            <div className="slide-bg bg-cover" />
      <div className="bg-overlay-medium" />
      <div className="bg-grid-top" />
<div className="gold-accent-top" />
      <div className="gold-accent-bottom" />
      <div className="anim-smooth-fade delay-2 absolute" style={{ right: "0", top: "15%", width: "0.4vh", height: "70%", background: "linear-gradient(180deg, transparent, #c9a84c 30%, #f0d080 50%, #c9a84c 70%, transparent)", opacity: 0.5 }} />
      <div className="relative z-10 flex flex-col h-full" style={{ padding: "7vh 9vw 6vh 5vw" }}>

        {/* Meta header */}
        <div className="anim-morph-in delay-1" style={{ display: "flex", alignItems: "center", gap: "1.2vw", marginBottom: "1.5vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6vw" }}>
            <div style={{ width: "2.5vw", height: "0.25vh", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#c9a84c", boxShadow: "0 0 0.8vw rgba(201,168,76,0.9)" }} />
          </div>
          <span style={{ fontSize: "1.35vw", color: "#c9a84c", letterSpacing: "0.14em", fontWeight: 700, textTransform: "uppercase" }}>مذكرة نهاية التخرج · ليسانس ل.م.د · 2025/2026</span>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6vw" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#c9a84c", boxShadow: "0 0 0.8vw rgba(201,168,76,0.9)" }} />
            <div style={{ width: "2.5vw", height: "0.25vh", background: "linear-gradient(270deg, transparent, #c9a84c)" }} />
          </div>
        </div>

        <div className="anim-smooth-fade delay-2" style={{ fontSize: "1.5vw", color: "#4a5a78", marginBottom: "2vh", letterSpacing: "0.05em" }}>المدرسة العليا للإدارة العسكرية</div>

        {/* Decorative divider */}
        <div className="anim-line-draw delay-2" style={{ width: "18vw", height: "0.25vh", marginBottom: "3.5vh", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />

        {/* Main Title */}
        <div style={{ marginBottom: "2.5vh" }}>
          <h1 className="anim-title-rtl delay-2" style={{ fontSize: "5.5vw", fontWeight: 900, lineHeight: 1.1, margin: 0, color: "#0d1830", letterSpacing: "-0.01em" }}>تمويل المؤسسات الصغيرة</h1>
          <h1 className="anim-title-rtl delay-3" style={{ fontSize: "5.5vw", fontWeight: 900, lineHeight: 1.1, margin: 0 }}>
            <span className="text-gold text-glow-gold" style={{ display: "inline-block" }}>والمتوسطة</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="anim-morph-in delay-4" style={{ display: "flex", alignItems: "center", gap: "1.2vw", marginBottom: "4vh" }}>
          <div style={{ width: "0.4vw", height: "4vh", background: "linear-gradient(180deg, transparent, #c9a84c, transparent)", borderRadius: "2px" }} />
          <div>
            <div style={{ fontSize: "1.9vw", color: "#2a4060", fontWeight: 400, lineHeight: 1.4 }}>في إطار الوكالة الوطنية لدعم وتنمية المقاولاتية</div>
            <div style={{ fontSize: "2.2vw", color: "#c9a84c", fontWeight: 800, letterSpacing: "0.08em" }}>NESDA — فرع وهران</div>
          </div>
        </div>

        <div style={{ flex: 1 }} />

        {/* Bottom section — glassy card */}
        <div className="anim-card-morph delay-5" style={{ background: "rgba(240,244,252,0.92)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1.5vw", padding: "2.2vh 3vw", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 0.5vh 4vw rgba(0,0,0,0.5), inset 0 1px 0 rgba(201,168,76,0.28)" }}>
          <div>
            <div style={{ fontSize: "1.2vw", color: "#4a5a78", marginBottom: "0.6vh", letterSpacing: "0.06em" }}>من إعداد</div>
            <div style={{ fontSize: "2vw", color: "#0d1830", fontWeight: 700, marginBottom: "0.2vh" }}>سويسي أيوب زيد</div>
            <div style={{ fontSize: "2vw", color: "#0d1830", fontWeight: 700 }}>عمراني عبد الناصر</div>
          </div>
          {/* Center badge */}
          <div className="anim-morph-in delay-6" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5vh" }}>
            <div style={{ width: "0.3vw", height: "5vh", background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.5), transparent)" }} />
            <div style={{ background: "rgba(201,168,76,0.35)", border: "1px solid rgba(201,168,76,0.4)", borderRadius: "50%", width: "6vw", height: "6vw", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 0 2.5vw rgba(201,168,76,0.2)" }}>
              <div style={{ fontSize: "1.1vw", color: "#c9a84c", fontWeight: 700, lineHeight: 1.2, textAlign: "center" }}>الدفعة<br />16</div>
            </div>
            <div style={{ fontSize: "1.1vw", color: "#c9a84c", fontWeight: 600 }}>ماي 2026</div>
            <div style={{ width: "0.3vw", height: "5vh", background: "linear-gradient(180deg, transparent, rgba(201,168,76,0.5), transparent)" }} />
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "1.2vw", color: "#4a5a78", marginBottom: "0.6vh", letterSpacing: "0.06em" }}>تحت إشراف</div>
            <div style={{ fontSize: "2vw", color: "#c9a84c", fontWeight: 700 }}>الأستاذ الدكتور</div>
            <div style={{ fontSize: "2vw", color: "#0d1830", fontWeight: 700 }}>بن سعيد محمد</div>
          </div>
        </div>
      </div>
    </div>
  );
}
