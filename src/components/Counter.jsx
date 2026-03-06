import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════════════════════════ */
const Counter = ({ end, suffix = "" }) => {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(es => {
      if (!es[0].isIntersecting || done.current) return;
      done.current = true;
      const n = parseFloat(end);
      const t0 = performance.now();
      const s = (now) => {
        const p = Math.min((now - t0) / 1600, 1);
        const e = 1 - Math.pow(1 - p, 3);
        setV(Number.isInteger(n) ? Math.floor(e * n) : +(e * n).toFixed(2));
        if (p < 1) requestAnimationFrame(s);
        else setV(n);
      };
      requestAnimationFrame(s);
    }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref}>{v}{suffix}</span>;
};

export default Counter;
