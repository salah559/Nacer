import { useState, useEffect, useRef } from "react";

const isAllSlides = typeof window !== "undefined" && window.location.pathname.endsWith("/allslides");

interface Props {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;  // ms, default 2200
  style?: React.CSSProperties;
}

export default function AnimatedCounter({ target, suffix = "", prefix = "", duration = 2200, style }: Props) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isAllSlides) { setVal(target); return; }
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        frame = requestAnimationFrame(tick);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [target, duration]);

  return (
    <span ref={ref} style={style}>
      {prefix}{val.toLocaleString()}{suffix}
    </span>
  );
}
