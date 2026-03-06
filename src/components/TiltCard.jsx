import { useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   TILT + SPOTLIGHT CARD  (21st.dev card tilt style)
═══════════════════════════════════════════════════════════ */
const TiltCard = ({ children, style = {} }) => {
  const ref      = useRef(null);
  const spot     = useRef(null);

  const onMove = useCallback((e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width  / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -10;
    const ry = ((x - cx) / cx) *  10;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
    card.style.boxShadow = `0 30px 80px rgba(0,0,0,.5), inset 0 0 0 1px rgba(255,255,255,.12)`;
    if (spot.current) {
      spot.current.style.opacity = "1";
      spot.current.style.left = `${x}px`;
      spot.current.style.top  = `${y}px`;
    }
  }, []);

  const onLeave = useCallback(() => {
    if (ref.current) { ref.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)"; ref.current.style.boxShadow = ""; }
    if (spot.current) spot.current.style.opacity = "0";
  }, []);

  return (
    <div ref={ref} className="gc tilt-card"
      style={{ borderRadius:20, overflow:"hidden", display:"flex", flexDirection:"column",
        position:"relative", ...style }}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      {/* spotlight */}
      <div ref={spot} style={{
        position:"absolute", width:300, height:300, borderRadius:"50%",
        background:"radial-gradient(circle, rgba(0,255,213,.07) 0%, transparent 70%)",
        transform:"translate(-50%,-50%)", pointerEvents:"none", opacity:0,
        transition:"opacity .3s", zIndex:10,
      }} />
      {children}
    </div>
  );
};

export default TiltCard;

