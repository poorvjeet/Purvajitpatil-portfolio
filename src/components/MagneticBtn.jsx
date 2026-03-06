import { useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   MAGNETIC BUTTON  (21st.dev bundui/magnetic-button)
═══════════════════════════════════════════════════════════ */
const MagneticBtn = ({ children, className = "", style = {}, onClick, href, target }) => {
  const ref  = useRef(null);
  const pos  = useRef({ x: 0, y: 0 });
  const raf  = useRef(null);

  const onMove = useCallback((e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width  / 2);
    const dy = e.clientY - (rect.top  + rect.height / 2);
    pos.current = { x: dx * 0.32, y: dy * 0.32 };
    if (ref.current) ref.current.style.transform = `translate(${pos.current.x}px,${pos.current.y}px) scale(1.05)`;
  }, []);

  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = "translate(0,0) scale(1)";
  }, []);

  const props = { ref, className:`mag-btn ${className}`, style, onMouseMove:onMove, onMouseLeave:onLeave };
  if (href) return <a href={href} target={target} rel="noreferrer" {...props}>{children}</a>;
  return <button onClick={onClick} {...props}>{children}</button>;
};

export default MagneticBtn;

