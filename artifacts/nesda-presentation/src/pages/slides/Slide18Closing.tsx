const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide18Closing() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0a18", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="slide-bg bg-dark-gold" />
      <div className="bg-overlay-dark" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex flex-col h-full items-center justify-center" style={{ padding: "6vh 10vw", textAlign: "center", gap: "3vh" }}>

        {/* Thank you — white on dark */}
        <div className="anim-morph-in delay-1" style={{ fontSize: "1.8vw", color: "#e8e8f0", letterSpacing: "0.15em", fontWeight: 600, textTransform: "uppercase" }}>شكراً على الاستماع</div>

        {/* Quranic verse — bright card */}
        <div className="anim-card-morph delay-2" style={{ background: "#ffffff", border: "2px solid #c9a84c", borderRadius: "1.5vw", padding: "3vh 4vw", maxWidth: "70vw", position: "relative", overflow: "hidden", boxShadow: "0 4px 24px rgba(201,168,76,0.2)" }}>
          <div className="gold-line" style={{ position: "absolute", top: 0, left: "25%", right: "25%" }} />
          <div style={{ fontSize: "2.8vw", color: "#1a1a2e", fontWeight: 700, lineHeight: 1.6 }}>
            ﴿وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَى﴾
          </div>
          <div style={{ fontSize: "1.5vw", color: "#8B6914", marginTop: "1vh", fontWeight: 600 }}>سورة النجم — الآية 39</div>
        </div>

        {/* Project title recap — gold text on dark */}
        <div className="anim-morph-in delay-3">
          <div style={{ fontSize: "3vw", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5vh", color: "#f0d080" }}>
            تمويل PME — NESDA
          </div>
          <div style={{ fontSize: "2vw", color: "#a0a0b8", fontWeight: 600 }}>دراسة ميدانية — فرع وهران — 2020/2026</div>
        </div>

        {/* Divider */}
        <div className="anim-line-draw delay-4" style={{ width: "40vw", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, #f0d080, #c9a84c, transparent)" }} />

        {/* Open for questions — gold pill */}
        <div className="anim-morph-in delay-5" style={{ background: "#c9a84c", borderRadius: "3vw", padding: "1.5vh 4vw", fontSize: "1.8vw", color: "#0a0a18", fontWeight: 700 }}>
          نرحب بأسئلتكم ومناقشاتكم
        </div>

        {/* Author names — light on dark */}
        <div className="anim-smooth-fade delay-6" style={{ display: "flex", gap: "4vw", fontSize: "1.5vw", color: "#a0a0b8" }}>
          <span>سويسي أيوب زيد</span>
          <span style={{ color: "#8B6914" }}>•</span>
          <span>عمراني عبد الناصر</span>
          <span style={{ color: "#8B6914" }}>•</span>
          <span style={{ color: "#f0d080" }}>إشراف: د. بن سعيد محمد</span>
        </div>
      </div>
    </div>
  );
}
