const base = import.meta.env.BASE_URL;
const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide01Cover() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>

      {/* ===== BACKGROUND LAYERS ===== */}
      {/* Deep radial glow center-right */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(26,58,120,0.04) 0%, transparent 70%)" }} />
      {/* Deep radial glow bottom-left */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 40% at 15% 80%, rgba(201,168,76,0.18) 0%, transparent 60%)" }} />
      {/* Subtle diagonal stripe texture */}
      <div className="absolute inset-0" style={{ background: "repeating-linear-gradient(135deg, transparent, transparent 80px, rgba(201,168,76,0.015) 80px, rgba(201,168,76,0.015) 82px)", pointerEvents: "none" }} />

      {/* ===== ORBIT RINGS ===== */}
      <div className="absolute" style={{ top: "50%", right: "-8vw", width: "55vw", height: "55vw", transform: "translateY(-50%)" }}>
        <div className="orbit-cw absolute inset-0" style={{ border: "1px solid rgba(201,168,76,0.06)", borderRadius: "50%" }}>
          <div style={{ position: "absolute", top: "10%", left: "50%", width: "0.8vw", height: "0.8vw", background: "#c9a84c", borderRadius: "50%", boxShadow: "0 0 1.5vw rgba(201,168,76,0.8)", transform: "translate(-50%,-50%)" }} />
        </div>
        <div className="orbit-ccw absolute" style={{ inset: "10%", border: "1px solid rgba(201,168,76,0.04)", borderRadius: "50%", borderStyle: "dashed" }}>
          <div style={{ position: "absolute", top: "75%", left: "15%", width: "0.5vw", height: "0.5vw", background: "#f0d080", borderRadius: "50%", boxShadow: "0 0 1vw rgba(240,208,128,0.8)" }} />
        </div>
        <div className="orbit-cw absolute" style={{ inset: "22%", border: "1px solid rgba(201,168,76,0.07)", borderRadius: "50%", animationDuration: "50s" }}>
          <div style={{ position: "absolute", top: "50%", right: "0", width: "0.6vw", height: "0.6vw", background: "#c9a84c", borderRadius: "50%", opacity: 0.7 }} />
        </div>
        {/* Center glow orb */}
        <div className="absolute" style={{ inset: "30%", background: "radial-gradient(circle, rgba(201,168,76,0.35) 0%, transparent 70%)", borderRadius: "50%" }} />
      </div>

      {/* ===== FLOATING PARTICLES ===== */}
      <div className="particle particle-1" style={{ top: "15%", left: "20%", width: "0.5vw", height: "0.5vw", background: "rgba(201,168,76,0.6)", boxShadow: "0 0 1vw rgba(201,168,76,0.8)" }} />
      <div className="particle particle-2" style={{ top: "70%", left: "12%", width: "0.35vw", height: "0.35vw", background: "rgba(240,208,128,0.5)" }} />
      <div className="particle particle-3" style={{ top: "40%", left: "35%", width: "0.25vw", height: "0.25vw", background: "rgba(201,168,76,0.4)" }} />
      <div className="particle particle-4" style={{ top: "25%", left: "45%", width: "0.45vw", height: "0.45vw", background: "rgba(201,168,76,0.3)" }} />
      <div className="particle particle-5" style={{ top: "80%", left: "40%", width: "0.3vw", height: "0.3vw", background: "rgba(240,208,128,0.5)", boxShadow: "0 0 0.8vw rgba(240,208,128,0.6)" }} />
      <div className="particle particle-6" style={{ top: "55%", left: "28%", width: "0.2vw", height: "0.2vw", background: "rgba(201,168,76,0.7)" }} />

      {/* ===== GOLD BARS ===== */}
      <div className="gold-bar-top" />
      <div className="gold-bar-bottom" />
      {/* Side accent line */}
      <div className="anim-line-v delay-2 absolute" style={{ right: "0", top: "15%", width: "0.4vh", height: "70%", background: "linear-gradient(180deg, transparent, #c9a84c 30%, #f0d080 50%, #c9a84c 70%, transparent)", opacity: 0.5 }} />

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 flex flex-col h-full" style={{ padding: "7vh 9vw 6vh 5vw" }}>

        {/* Meta header */}
        <div className="anim-fade-down delay-1" style={{ display: "flex", alignItems: "center", gap: "1.2vw", marginBottom: "1.5vh" }}>
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

        <div className="anim-fade delay-2" style={{ fontSize: "1.5vw", color: "#4a5a78", marginBottom: "2vh", letterSpacing: "0.05em" }}>المدرسة العليا للإدارة العسكرية</div>

        {/* Decorative divider */}
        <div className="anim-line-h delay-2" style={{ width: "18vw", height: "0.25vh", marginBottom: "3.5vh", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />

        {/* Main Title */}
        <div style={{ marginBottom: "2.5vh" }}>
          <h1 className="anim-clip-rtl delay-2" style={{ fontSize: "5.5vw", fontWeight: 900, lineHeight: 1.1, margin: 0, color: "#0d1830", letterSpacing: "-0.01em" }}>تمويل المؤسسات الصغيرة</h1>
          <h1 className="anim-clip-rtl delay-3" style={{ fontSize: "5.5vw", fontWeight: 900, lineHeight: 1.1, margin: 0 }}>
            <span className="gold-shimmer text-glow-gold" style={{ display: "inline-block" }}>والمتوسطة</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="anim-fade-up delay-4" style={{ display: "flex", alignItems: "center", gap: "1.2vw", marginBottom: "4vh" }}>
          <div style={{ width: "0.4vw", height: "4vh", background: "linear-gradient(180deg, transparent, #c9a84c, transparent)", borderRadius: "2px" }} />
          <div>
            <div style={{ fontSize: "1.9vw", color: "#2a4060", fontWeight: 400, lineHeight: 1.4 }}>في إطار الوكالة الوطنية لدعم وتنمية المقاولاتية</div>
            <div style={{ fontSize: "2.2vw", color: "#c9a84c", fontWeight: 800, letterSpacing: "0.08em" }}>NESDA — فرع وهران</div>
          </div>
        </div>

        <div style={{ flex: 1 }} />

        {/* Bottom section — glassy card */}
        <div className="anim-perspective delay-5" style={{ background: "rgba(240,244,252,0.92)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1.5vw", padding: "2.2vh 3vw", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 0.5vh 4vw rgba(0,0,0,0.5), inset 0 1px 0 rgba(201,168,76,0.28)" }}>
          <div>
            <div style={{ fontSize: "1.2vw", color: "#4a5a78", marginBottom: "0.6vh", letterSpacing: "0.06em" }}>من إعداد</div>
            <div style={{ fontSize: "2vw", color: "#0d1830", fontWeight: 700, marginBottom: "0.2vh" }}>سويسي أيوب زيد</div>
            <div style={{ fontSize: "2vw", color: "#0d1830", fontWeight: 700 }}>عمراني عبد الناصر</div>
          </div>
          {/* Center badge */}
          <div className="anim-scale delay-6" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5vh" }}>
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
