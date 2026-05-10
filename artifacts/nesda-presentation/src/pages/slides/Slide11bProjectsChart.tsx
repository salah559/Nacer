import { useState } from "react";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, ReferenceLine, Label
} from "recharts";

const data = [
  { year: "2010", total: 140503, men: 122128, women: 18375, label: "140,503" },
  { year: "2011", total: 183335, men: 162009, women: 21326, label: "183,335" },
  { year: "2012", total: 249147, men: 223344, women: 25803, label: "249,147" },
  { year: "2013", total: 292186, men: 262857, women: 29329, label: "292,186" },
  { year: "2014", total: 333042, men: 300048, women: 32994, label: "333,042" },
  { year: "2015", total: 356718, men: 321079, women: 35639, label: "356,718" },
  { year: "2016", total: 367980, men: 330791, women: 37189, label: "367,980" },
];

const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");
const cls = isAllSlides ? "allslides-mode" : "";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  const currentYearTotal = label === "2010" ? 140503 :
    label === "2011" ? 42832 :
    label === "2012" ? 65812 :
    label === "2013" ? 43039 :
    label === "2014" ? 40856 :
    label === "2015" ? 23676 :
    label === "2016" ? 11262 : 0;
  return (
    <div style={{ background: "rgba(14,22,44,0.95)", border: "1px solid #E8B923", borderRadius: "0.8vw", padding: "1.2vh 1.5vw", direction: "rtl" }}>
      <div style={{ fontSize: "1.59vw", color: "#E8B923", fontWeight: 700, marginBottom: "0.5vh" }}>سنة {label}</div>
      <div style={{ fontSize: "1.5vw", color: "#fff", lineHeight: 1.6 }}>
        المشاريع الجديدة: <span style={{ color: "#E8B923", fontWeight: 700 }}>{currentYearTotal.toLocaleString()}</span>
      </div>
      <div style={{ fontSize: "1.42vw", color: "#a0a0b8", lineHeight: 1.5 }}>
        الرجال: {item.men.toLocaleString()} | النساء: {item.women.toLocaleString()}
      </div>
    </div>
  );
};

export default function Slide11bProjectsChart() {
  const [showGender, setShowGender] = useState(false);
  const [hoveredYear, setHoveredYear] = useState<string | null>(null);

  return (
    <div className={`relative w-screen h-screen overflow-hidden ${cls}`} style={{ background: "#ffffff", fontFamily: "Cairo, sans-serif", direction: "rtl" }}>
      <div className="slide-bg bg-analytics" />
      <div className="bg-overlay-light" />
      <div className="bg-grid-top" />
      <div className="gold-accent-top" /><div className="gold-accent-bottom" />

      <div className="relative z-10 flex flex-col h-full" style={{ padding: "5vh 6vw" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2vh" }}>
          <div className="anim-smooth-fade delay-1" style={{ fontSize: "1.59vw", color: "#DAA520", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "0.5vh" }}>الفصل الثاني — إحصائيات</div>
          <h2 className="anim-title-rtl delay-2" style={{ fontSize: "4vw", fontWeight: 900, color: "#0d1830", margin: 0 }}>تطور المشاريع الممولة (2010 — 2016)</h2>
          <div className="anim-line-draw delay-3" style={{ width: "15vw", height: "0.3vh", margin: "1vh auto", background: "linear-gradient(90deg, transparent, #E8B923, #f0d080, transparent)" }} />
        </div>

        {/* Chart container */}
        <div className="anim-morph-in delay-3" style={{ flex: 1, background: "rgba(255,255,255,0.9)", borderRadius: "1.2vw", border: "1px solid rgba(201,168,76,0.2)", padding: "2vh 2vw", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", minHeight: "30vh" }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#E8B923" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#E8B923" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="menGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2a4060" stopOpacity={0.25} />
                  <stop offset="95%" stopColor="#2a4060" stopOpacity={0.03} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(201,168,76,0.15)" />
              <XAxis dataKey="year" tick={{ fontSize: "1.5vw", fill: "#4a5a78", fontFamily: "Cairo" }} axisLine={{ stroke: "#E8B923" }} tickLine={false} />
              <YAxis tick={{ fontSize: "1.35vw", fill: "#4a5a78", fontFamily: "Cairo" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => (v / 1000).toFixed(0) + "K"} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#E8B923", strokeWidth: 1, strokeDasharray: "4 4" }} />
              <ReferenceLine x="2012" stroke="#E8B923" strokeDasharray="6 3" strokeWidth={2}>
                <Label value="القمة: 65,812" position="top" fill="#E8B923" fontSize={14} fontFamily="Cairo" />
              </ReferenceLine>
              <Area type="monotone" dataKey="total" stroke="#E8B923" strokeWidth={3} fill="url(#goldGrad)" activeDot={{ r: 8, fill: "#E8B923", stroke: "#fff", strokeWidth: 3 }} dot={{ r: 5, fill: "#E8B923", stroke: "#fff", strokeWidth: 2 }} />
              {showGender && <Area type="monotone" dataKey="men" stroke="#2a4060" strokeWidth={2} fill="url(#menGrad)" dot={false} />}
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bottom stats + toggle */}
        <div className="anim-morph-in delay-5" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2vh" }}>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ textAlign: "center", padding: "1vh 2vw", background: "rgba(201,168,76,0.08)", borderRadius: "0.8vw", border: "1px solid rgba(201,168,76,0.2)" }}>
              <div style={{ fontSize: "2.7vw", fontWeight: 900, color: "#DAA520" }}>367,980</div>
              <div style={{ fontSize: "1.35vw", color: "#4a5a78" }}>إجمالي مشاريع 2010-2016</div>
            </div>
            <div style={{ textAlign: "center", padding: "1vh 2vw", background: "rgba(201,168,76,0.08)", borderRadius: "0.8vw", border: "1px solid rgba(201,168,76,0.2)" }}>
              <div style={{ fontSize: "2.7vw", fontWeight: 900, color: "#DAA520" }}>65,812</div>
              <div style={{ fontSize: "1.35vw", color: "#4a5a78" }}>أعلى قمة (2012)</div>
            </div>
            <div style={{ textAlign: "center", padding: "1vh 2vw", background: "rgba(201,168,76,0.08)", borderRadius: "0.8vw", border: "1px solid rgba(201,168,76,0.2)" }}>
              <div style={{ fontSize: "2.7vw", fontWeight: 900, color: "#DAA520" }}>11,262</div>
              <div style={{ fontSize: "1.35vw", color: "#4a5a78" }}>أقل عدد (2016)</div>
            </div>
          </div>
          <button
            onClick={() => setShowGender(!showGender)}
            style={{ background: showGender ? "#E8B923" : "rgba(201,168,76,0.15)", color: showGender ? "#fff" : "#DAA520", border: "1px solid #E8B923", borderRadius: "2vw", padding: "1vh 2vw", fontSize: "1.5vw", fontWeight: 700, cursor: "pointer", fontFamily: "Cairo", transition: "all 0.3s" }}
          >
            {showGender ? "إخفاء تفاصيل الرجال" : "إظهار تفاصيل الرجال والنساء"}
          </button>
        </div>

        {/* Source */}
        <div className="anim-smooth-fade delay-6" style={{ textAlign: "center", marginTop: "1vh", fontSize: "1.27vw", color: "#999" }}>
          المصدر: جدول رقم 10 — وثائق NESDA الوطنية
        </div>
      </div>
    </div>
  );
}
