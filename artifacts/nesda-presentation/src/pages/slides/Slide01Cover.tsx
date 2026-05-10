const base = import.meta.env.BASE_URL;
const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide01Cover() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <img src={`${base}hero-bg.png`} crossOrigin="anonymous" className="absolute inset-0 w-full h-full object-cover" alt="" style={{ opacity: 0.25 }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,15,30,0.95) 40%, rgba(30,58,95,0.6) 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.5vh", background: "linear-gradient(90deg, transparent, #c9a84c, #f0d080, #c9a84c, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.5vh", background: "linear-gradient(90deg, transparent, #c9a84c, #f0d080, #c9a84c, transparent)" }} />

      {/* Decorative geometric circles */}
      <div className="absolute" style={{ top: "10vh", left: "5vw", width: "18vw", height: "18vw", border: "1px solid rgba(201,168,76,0.15)", borderRadius: "50%", transform: "rotate(15deg)" }} />
      <div className="absolute" style={{ top: "12vh", left: "7vw", width: "14vw", height: "14vw", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "50%" }} />
      <div className="absolute" style={{ bottom: "8vh", right: "4vw", width: "10vw", height: "10vw", border: "1px solid rgba(201,168,76,0.08)", borderRadius: "50%" }} />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "7vh 8vw 5vh" }}>
        {/* Header meta */}
        <div className="anim-fade delay-1" style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "2vh" }}>
          <div style={{ width: "3vw", height: "0.25vh", background: "#c9a84c" }} />
          <span style={{ fontSize: "1.5vw", color: "#c9a84c", letterSpacing: "0.12em", fontWeight: 600 }}>مذكرة نهاية التخرج — ليسانس ل.م.د — 2025/2026</span>
          <div style={{ width: "3vw", height: "0.25vh", background: "#c9a84c" }} />
        </div>

        <div className="anim-fade delay-2" style={{ fontSize: "1.8vw", color: "#8899bb", marginBottom: "1.5vh", fontWeight: 400 }}>المدرسة العليا للإدارة العسكرية</div>
        <div className="anim-fade delay-2" style={{ width: "12vw", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)", marginBottom: "3vh" }} />

        {/* Main title */}
        <div className="anim-fade-up delay-3" style={{ marginBottom: "1.5vh" }}>
          <h1 style={{ fontSize: "4.8vw", fontWeight: 900, lineHeight: 1.2, color: "#f0f4ff", textWrap: "balance", margin: 0 }}>تمويل المؤسسات الصغيرة</h1>
          <h1 style={{ fontSize: "4.8vw", fontWeight: 900, lineHeight: 1.2, margin: 0, background: "linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>والمتوسطة</h1>
        </div>

        {/* Subtitle */}
        <div className="anim-fade-up delay-4" style={{ fontSize: "2.1vw", color: "#c9a84c", fontWeight: 600, marginBottom: "4vh" }}>
          في إطار الوكالة الوطنية لدعم وتنمية المقاولاتية
          <span style={{ color: "#f0f4ff", fontWeight: 800, marginRight: "0.6vw" }}>NESDA</span>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Divider */}
        <div className="anim-fade delay-5" style={{ width: "100%", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)", marginBottom: "3vh" }} />

        {/* Bottom info */}
        <div className="anim-fade-up delay-6" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={{ fontSize: "1.4vw", color: "#8899bb", marginBottom: "0.8vh" }}>من إعداد:</div>
            <div style={{ fontSize: "1.9vw", color: "#f0f4ff", fontWeight: 700 }}>سويسي أيوب زيد</div>
            <div style={{ fontSize: "1.9vw", color: "#f0f4ff", fontWeight: 700 }}>عمراني عبد الناصر</div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "1.4vw", color: "#8899bb", marginBottom: "0.8vh" }}>تحت إشراف:</div>
            <div style={{ fontSize: "1.9vw", color: "#c9a84c", fontWeight: 700 }}>الأستاذ الدكتور بن سعيد محمد</div>
          </div>
        </div>

        {/* Date badge */}
        <div className="anim-fade delay-7" style={{ display: "flex", justifyContent: "center", marginTop: "2.5vh" }}>
          <div style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.4)", borderRadius: "2vw", padding: "0.8vh 2.5vw", fontSize: "1.6vw", color: "#c9a84c", fontWeight: 600 }}>
            الدفعة السادسة عشر — ماي 2026
          </div>
        </div>
      </div>
    </div>
  );
}
