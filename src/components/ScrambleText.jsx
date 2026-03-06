import { useEffect, useRef, useState, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   TEXT SCRAMBLE  (21st.dev text-animation style)
═══════════════════════════════════════════════════════════ */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";
const ScrambleText = ({ text, trigger = true, className = "", style = {} }) => {
  const [display, setDisplay] = useState(text);
  const raf = useRef(null);

  const scramble = useCallback(() => {
    let iter = 0;
    const total = text.length * 2;
    cancelAnimationFrame(raf.current);
    const tick = () => {
      setDisplay(
        text.split("").map((char, i) => {
          if (char === " ") return " ";
          if (i < iter / 2) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      iter++;
      if (iter <= total) raf.current = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    raf.current = requestAnimationFrame(tick);
  }, [text]);

  useEffect(() => { if (trigger) scramble(); }, [trigger, scramble]);
  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  return (
    <span className={className} style={{ fontFamily:"'Geist Mono',monospace", ...style }}
      onMouseEnter={scramble}>
      {display}
    </span>
  );
};

export default ScrambleText;

