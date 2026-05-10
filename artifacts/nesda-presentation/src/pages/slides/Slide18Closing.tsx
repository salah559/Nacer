const base = import.meta.env.BASE_URL;
const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

export default function Slide18Closing() {
  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#0a0f1e", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <img src={`${base}hero-bg.png`} crossOrigin="anonymous" className="absolute inset-0 w-full h-full object-cover" alt="" style={{ opacity: 0.2 }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,15,30,0.97) 40%, rgba(30,58,95,0.65) 100%)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "0.5vh", background: "linear-gradient(90deg, transparent, #c9a84c, #f0d080, #c9a84c, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "0.5vh", background: "linear-gradient(90deg, transparent, #c9a84c, #f0d080, #c9a84c, transparent)" }} />

      {/* Decorative circles */}
      <div className="absolute" style={{ bottom: "-5vh", left: "-5vw", width: "25vw", height: "25vw", border: "1px solid rgba(201,168,76,0.1)", borderRadius: "50%" }} />
      <div className="absolute" style={{ top: "-5vh", right: "-5vw", width: "20vw", height: "20vw", border: "1px solid rgba(201,168,76,0.08)", borderRadius: "50%" }} />

      <div className="relative z-10 flex flex-col h-full items-center justify-center" style={{ padding: "8vh 8vw", textAlign: "center" }}>
        {/* Gold accent line */}
        <div className="anim-fade delay-1" style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "3vh" }}>
          <div style={{ flex: 1, height: "0.2vh", background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
          <div style={{ fontSize: "1.5vw", color: "#c9a84c", letterSpacing: "0.15em", fontWeight: 600 }}>شكراً على الاستماع</div>
          <div style={{ flex: 1, height: "0.2vh", background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
        </div>

        {/* Quranic verse */}
        <div className="anim-scale delay-2" style={{ marginBottom: "4vh", background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "1.2vw", padding: "2.5vh 4vw", maxWidth: "70vw" }}>
          <div style={{ fontSize: "2.3vw", color: "#f0f4ff", lineHeight: 1.6, fontStyle: "italic" }}>
            ﴿وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَى﴾
          </div>
          <div style={{ fontSize: "1.5vw", color: "#8899bb", marginTop: "1vh" }}>سورة النجم — الآية 39</div>
        </div>

        {/* Main closing */}
        <div className="anim-fade-up delay-3">
          <div style={{ fontSize: "5vw", fontWeight: 900, marginBottom: "1vh" }} className="gold-shimmer">تمويل PME — NESDA</div>
          <div style={{ fontSize: "2vw", color: "#f0f4ff", marginBottom: "3vh" }}>دراسة ميدانية — فرع وهران — 2020/2026</div>
        </div>

        <div className="anim-fade delay-4 gold-line" style={{ width: "20vw", marginBottom: "3vh" }} />

        {/* Authors */}
        <div className="anim-fade-up delay-5" style={{ display: "flex", gap: "4vw", marginBottom: "2vh" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#f0f4ff" }}>سويسي أيوب زيد</div>
            <div style={{ fontSize: "1.4vw", color: "#8899bb" }}>الطالب الأول</div>
          </div>
          <div style={{ width: "0.2vh", background: "rgba(201,168,76,0.3)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.7vw", fontWeight: 700, color: "#f0f4ff" }}>عمراني عبد الناصر</div>
            <div style={{ fontSize: "1.4vw", color: "#8899bb" }}>الطالب الثاني</div>
          </div>
        </div>

        <div className="anim-fade delay-6" style={{ fontSize: "1.5vw", color: "#8899bb" }}>
          تحت إشراف الأستاذ الدكتور
          <span style={{ color: "#c9a84c", fontWeight: 700, marginRight: "0.5vw" }}>بن سعيد محمد</span>
          — الدفعة السادسة عشر، ماي 2026
        </div>
      </div>
    </div>
  );
}
