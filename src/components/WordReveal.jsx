import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════
   WORD-BY-WORD REVEAL  (21st.dev text reveal style)
═══════════════════════════════════════════════════════════ */
const WordReveal = ({ text, className = "", style = {}, delay = 0 }) => {
  const ref  = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(es => { if (es[0].isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={{ display:"inline", ...style }}>
      {words.map((w, i) => (
        <span key={i} style={{
          display:"inline-block", overflow:"hidden",
          verticalAlign:"bottom", marginRight:"0.28em",
        }}>
          <span style={{
            display:"inline-block",
            transform: visible ? "translateY(0)" : "translateY(110%)",
            opacity: visible ? 1 : 0,
            transition: `transform .65s cubic-bezier(.16,1,.3,1) ${delay + i * 55}ms, opacity .4s ease ${delay + i * 55}ms`,
          }}>{w}</span>
        </span>
      ))}
    </span>
  );
};

export default WordReveal;

