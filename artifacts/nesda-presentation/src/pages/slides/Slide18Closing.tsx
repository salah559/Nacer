const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide18Closing() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0a18", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="slide-bg bg-dark-gold" />
      <div className="bg-overlay-dark" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex flex-col h-full items-center justify-center" style={{ padding: "4vh 8vw", textAlign: "center", gap: "2.5vh" }}>

        {/* Thank you image */}
        <div className="anim-morph-in delay-1" style={{ width: "12vw", height: "12vw", borderRadius: "50%", overflow: "hidden", border: "3px solid rgba(21,101,192,0.4)", boxShadow: "0 0 3vw rgba(21,101,192,0.2)" }}>
          <img src="images/thank-you-gesture.png" alt="Thank you" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* Thank you text */}
        <div className="anim-morph-in delay-2" style={{ fontSize: "2.7vw", color: "#e8e8f0", letterSpacing: "0.15em", fontWeight: 600 }}>شكراً لحسن الاستماع والمتابعة</div>

        {/* Quranic verse — elegant calligraphy card */}
        <div className="anim-card-morph delay-3" style={{ background: "linear-gradient(135deg, #ffffff, #faf8f4)", border: "2px solid #1565C0", borderRadius: "1.5vw", padding: "4vh 5vw", maxWidth: "75vw", position: "relative", overflow: "hidden", boxShadow: "0 4px 24px rgba(21,101,192,0.2)" }}>
          <div className="gold-line" style={{ position: "absolute", top: 0, left: "25%", right: "25%" }} />
          {/* Decorative Islamic pattern corners */}
          <svg style={{ position: "absolute", top: "1vh", left: "1vw", width: "3vw", height: "3vw", opacity: 0.15 }} viewBox="0 0 100 100"><path d="M0,0 L40,0 L40,10 L10,10 L10,40 L0,40 Z" fill="#1565C0" /></svg>
          <svg style={{ position: "absolute", top: "1vh", right: "1vw", width: "3vw", height: "3vw", opacity: 0.15, transform: "scaleX(-1)" }} viewBox="0 0 100 100"><path d="M0,0 L40,0 L40,10 L10,10 L10,40 L0,40 Z" fill="#1565C0" /></svg>
          <svg style={{ position: "absolute", bottom: "1vh", left: "1vw", width: "3vw", height: "3vw", opacity: 0.15, transform: "scaleY(-1)" }} viewBox="0 0 100 100"><path d="M0,0 L40,0 L40,10 L10,10 L10,40 L0,40 Z" fill="#1565C0" /></svg>
          <svg style={{ position: "absolute", bottom: "1vh", right: "1vw", width: "3vw", height: "3vw", opacity: 0.15, transform: "scale(-1, -1)" }} viewBox="0 0 100 100"><path d="M0,0 L40,0 L40,10 L10,10 L10,40 L0,40 Z" fill="#1565C0" /></svg>
          <div style={{ fontSize: "4vw", color: "#1a1a2e", fontWeight: 700, lineHeight: 1.8, fontFamily: "'Amiri', 'Scheherazade New', 'Noto Naskh Arabic', serif", textAlign: "center", letterSpacing: "0.05em" }}>
            ﴿وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَى﴾
          </div>
          <div style={{ fontSize: "1.96vw", color: "#1565C0", marginTop: "1.5vh", fontWeight: 600, textAlign: "center" }}>سورة النجم — الآية 39</div>
        </div>

        {/* Project title recap — gold text on dark */}
        <div className="anim-morph-in delay-3">
          <div style={{ fontSize: "3.75vw", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5vh", color: "#42A5F5" }}>
            تمويل PME — NESDA
          </div>
          <div style={{ fontSize: "2.7vw", color: "#a0a0b8", fontWeight: 600 }}>دراسة ميدانية — فرع وهران — 2020/2026</div>
        </div>

        {/* Divider */}
        <div className="anim-line-draw delay-4" style={{ width: "40vw", height: "0.3vh", background: "linear-gradient(90deg, transparent, #1565C0, #42A5F5, #1565C0, transparent)" }} />

        {/* Open for questions — gold pill */}
        <div className="anim-morph-in delay-5" style={{ background: "#1565C0", borderRadius: "3vw", padding: "1.5vh 4vw", fontSize: "2.43vw", color: "#0a0a18", fontWeight: 700 }}>
          نرحب بأسئلتكم ومناقشاتكم
        </div>

        {/* Author names — light on dark */}
        <div className="anim-smooth-fade delay-6" style={{ display: "flex", gap: "4vw", fontSize: "2.1vw", color: "#a0a0b8" }}>
          <span>سويسي أيوب زيد</span>
          <span style={{ color: "#1565C0" }}>•</span>
          <span>عمراني عبد الناصر</span>
          <span style={{ color: "#1565C0" }}>•</span>
          <span style={{ color: "#42A5F5" }}>إشراف: د. بن سعيد محمد</span>
        </div>
      </div>
    </div>
  );
}
