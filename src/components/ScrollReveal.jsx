import { useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════════════ */
const ScrollReveal = ({ children, delay = 0, style = {}, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(es => {
      es.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rv ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
