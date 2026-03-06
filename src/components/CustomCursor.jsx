import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════════════════
   CUSTOM CURSOR  (21st.dev cursor component style)
   - Disabled on touch devices for better mobile UX
═══════════════════════════════════════════════════════════ */
const CustomCursor = () => {
  const dot  = useRef(null);
  const ring = useRef(null);
  const pos  = useRef({ x: 0, y: 0 });
  const ring_pos = useRef({ x: 0, y: 0 });
  const raf  = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    // Early return for touch devices
    if (isTouch) return;

    const move = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    const down = () => setClicked(true);
    const up   = () => setClicked(false);

    const checkHover = (e) => {
      const el = e.target;
      const isInteractive = el.closest('a,button,[role="button"],.tilt-card');
      setHovered(!!isInteractive);
    };

    const lerp = (a, b, t) => a + (b - a) * t;
    const loop = () => {
      ring_pos.current.x = lerp(ring_pos.current.x, pos.current.x, 0.12);
      ring_pos.current.y = lerp(ring_pos.current.y, pos.current.y, 0.12);
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ring.current) {
        const s = hovered ? 2.2 : clicked ? 0.7 : 1;
        ring.current.style.transform = `translate(${ring_pos.current.x - 20}px, ${ring_pos.current.y - 20}px) scale(${s})`;
        ring.current.style.borderColor = hovered ? "var(--teal)" : "rgba(255,255,255,0.4)";
      }
      raf.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousemove", checkHover, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup",   up);
    raf.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup",   up);
      cancelAnimationFrame(raf.current);
    };
  }, [hovered, clicked, isTouch]);

  // Don't render cursor on touch devices
  if (isTouch) return null;

  return (
    <>
      {/* dot */}
      <div ref={dot} style={{
        position:"fixed", top:0, left:0, width:8, height:8,
        borderRadius:"50%", background:"var(--teal)",
        pointerEvents:"none", zIndex:10001,
        boxShadow:"0 0 8px var(--teal), 0 0 20px rgba(0,255,213,.4)",
        transition:"opacity .2s",
      }} />
      {/* ring */}
      <div ref={ring} style={{
        position:"fixed", top:0, left:0, width:40, height:40,
        borderRadius:"50%", border:"1.5px solid rgba(255,255,255,0.4)",
        pointerEvents:"none", zIndex:10000,
        transition:"border-color .25s, transform .08s linear, scale .25s cubic-bezier(.2,.8,.2,1)",
      }} />
    </>
  );
};

export default CustomCursor;

