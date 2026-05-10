const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide18Closing() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#050a18", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(15,30,70,0.85) 0%, transparent 75%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 50% at 80% 90%, rgba(201,168,76,0.06) 0%, transparent 60%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 40% at 15% 15%, rgba(201,168,76,0.04) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(135deg, transparent, transparent 80px, rgba(201,168,76,0.01) 80px, rgba(201,168,76,0.01) 82px)" }} />

      {/* Orbit rings */}
      <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "80vw", height: "80vw" }}>
        <div className="orbit-cw absolute inset-0" style={{ border: "1px solid rgba(201,168,76,0.05)", borderRadius: "50%" }}>
          <div style={{ position: "absolute", top: "5%", left: "50%", width: "0.6vw", height: "0.6vw", background: "#c9a84c", borderRadius: "50%", boxShadow: "0 0 1.5vw rgba(201,168,76,0.8)", transform: "translate(-50%,-50%)" }} />
        </div>
        <div className="orbit-ccw absolute" style={{ inset: "15%", border: "1px solid rgba(201,168,76,0.04)", borderRadius: "50%", borderStyle: "dashed" }}>
          <div style={{ position: "absolute", top: "80%", left: "20%", width: "0.4vw", height: "0.4vw", background: "#f0d080", borderRadius: "50%", boxShadow: "0 0 1vw rgba(240,208,128,0.8)" }} />
        </div>
        <div className="absolute" style={{ inset: "30%", background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)", borderRadius: "50%" }} />
      </div>

      {/* Particles */}
      <div className="particle particle-1" style={{ top: "12%", left: "15%", width: "0.5vw", height: "0.5vw", background: "rgba(201,168,76,0.6)", borderRadius: "50%", boxShadow: "0 0 1.5vw rgba(201,168,76,0.8)" }} />
      <div className="particle particle-3" style={{ top: "80%", left: "20%", width: "0.35vw", height: "0.35vw", background: "rgba(240,208,128,0.5)", borderRadius: "50%" }} />
      <div className="particle particle-5" style={{ top: "30%", right: "15%", width: "0.4vw", height: "0.4vw", background: "rgba(201,168,76,0.4)", borderRadius: "50%" }} />
      <div className="particle particle-2" style={{ top: "65%", right: "10%", width: "0.3vw", height: "0.3vw", background: "rgba(201,168,76,0.5)", borderRadius: "50%" }} />

      <div className="gold-bar-top" /><div className="gold-bar-bottom" />

      <div className="relative z-10 flex flex-col h-full items-center justify-center" style={{ padding: "6vh 10vw", textAlign: "center", gap: "3vh" }}>

        {/* Thank you */}
        <div className="anim-fade-up delay-1" style={{ fontSize: "1.8vw", color: "#7a90b5", letterSpacing: "0.15em", fontWeight: 600, textTransform: "uppercase" }}>شكراً على الاستماع</div>

        {/* Quranic verse */}
        <div className="anim-perspective delay-2" style={{ background: "rgba(14,22,44,0.7)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "1.5vw", padding: "3vh 4vw", maxWidth: "70vw", position: "relative", overflow: "hidden", boxShadow: "0 0 5vw rgba(201,168,76,0.08), inset 0 1px 0 rgba(201,168,76,0.15)" }}>
          <div style={{ position: "absolute", top: 0, left: "25%", right: "25%", height: "0.4vh", background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
          <div style={{ fontSize: "2.8vw", color: "#f0f4ff", fontWeight: 700, lineHeight: 1.6, fontStyle: "italic" }}>
            ﴿وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَى﴾
          </div>
          <div style={{ fontSize: "1.5vw", color: "#c9a84c", marginTop: "1vh", fontWeight: 600 }}>سورة النجم — الآية 39</div>
        </div>

        {/* Project title recap */}
        <div className="anim-scale delay-3">
          <div style={{ fontSize: "3vw", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5vh" }}>
            <span className="gold-shimmer" style={{ display: "inline-block" }}>تمويل PME — NESDA</span>
          </div>
          <div style={{ fontSize: "2vw", color: "#f0f4ff", fontWeight: 600 }}>دراسة ميدانية — فرع وهران — 2020/2026</div>
        </div>

        {/* Divider */}
        <div className="anim-line-h delay-4" style={{ width: "40vw", height: "0.3vh", background: "linear-gradient(90deg, transparent, #c9a84c, #f0d080, #c9a84c, transparent)" }} />

        {/* Open for questions */}
        <div className="anim-fade-up delay-5" style={{ background: "rgba(201,168,76,0.1)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,168,76,0.35)", borderRadius: "3vw", padding: "1.5vh 4vw", fontSize: "1.8vw", color: "#c9a84c", fontWeight: 700, boxShadow: "0 0 2.5vw rgba(201,168,76,0.15)" }}>
          نرحب بأسئلتكم ومناقشاتكم
        </div>

        {/* Author names */}
        <div className="anim-fade delay-6" style={{ display: "flex", gap: "4vw", fontSize: "1.5vw", color: "#7a90b5" }}>
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
