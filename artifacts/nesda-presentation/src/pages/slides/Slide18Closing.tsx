const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide18Closing() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>

            <div className="slide-bg bg-dark-gold" />
      <div className="bg-overlay-dark" />
      <div className="bg-grid-top" />

<div className="gold-bar-top" /><div className="gold-bar-bottom" />

      <div className="relative z-10 flex flex-col h-full items-center justify-center" style={{ padding: "6vh 10vw", textAlign: "center", gap: "3vh" }}>

        {/* Thank you */}
        <div className="anim-fade-up delay-1" style={{ fontSize: "1.8vw", color: "#4a5a78", letterSpacing: "0.15em", fontWeight: 600, textTransform: "uppercase" }}>شكراً على الاستماع</div>

        {/* Quranic verse */}
        <div className="anim-perspective delay-2" style={{ background: "rgba(240,244,252,0.92)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "1.5vw", padding: "3vh 4vw", maxWidth: "70vw", position: "relative", overflow: "hidden", boxShadow: "0 0 5vw rgba(201,168,76,0.18), inset 0 1px 0 rgba(201,168,76,0.15)" }}>
          <div style={{ position: "absolute", top: 0, left: "25%", right: "25%", height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
          <div style={{ fontSize: "2.8vw", color: "#0d1830", fontWeight: 700, lineHeight: 1.6, fontStyle: "italic" }}>
            ﴿وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَى﴾
          </div>
          <div style={{ fontSize: "1.5vw", color: "#c9a84c", marginTop: "1vh", fontWeight: 600 }}>سورة النجم — الآية 39</div>
        </div>

        {/* Project title recap */}
        <div className="anim-scale delay-3">
          <div style={{ fontSize: "3vw", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5vh" }}>
            <span className="gold-shimmer" style={{ display: "inline-block" }}>تمويل PME — NESDA</span>
          </div>
          <div style={{ fontSize: "2vw", color: "#0d1830", fontWeight: 600 }}>دراسة ميدانية — فرع وهران — 2020/2026</div>
        </div>

        {/* Divider */}
        <div className="anim-line-h delay-4" style={{ width: "40vw", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, #f0d080, #c9a84c, transparent)" }} />

        {/* Open for questions */}
        <div className="anim-fade-up delay-5" style={{ background: "rgba(201,168,76,0.28)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "3vw", padding: "1.5vh 4vw", fontSize: "1.8vw", color: "#c9a84c", fontWeight: 700, boxShadow: "0 0 2.5vw rgba(201,168,76,0.15)" }}>
          نرحب بأسئلتكم ومناقشاتكم
        </div>

        {/* Author names */}
        <div className="anim-fade delay-6" style={{ display: "flex", gap: "4vw", fontSize: "1.5vw", color: "#4a5a78" }}>
          <span>سويسي أيوب زيد</span>
          <span style={{ color: "rgba(201,168,76,0.3)" }}>•</span>
          <span>عمراني عبد الناصر</span>
          <span style={{ color: "rgba(201,168,76,0.3)" }}>•</span>
          <span style={{ color: "#c9a84c" }}>إشراف: د. بن سعيد محمد</span>
        </div>
      </div>
    </div>
  );
}
