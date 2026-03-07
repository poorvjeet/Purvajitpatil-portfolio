import { useEffect, useCallback, useState, lazy, Suspense } from "react";

// Components
import GlobalStyles from "./components/GlobalStyles";
import CustomCursor from "./components/CustomCursor";
import ScrambleText from "./components/ScrambleText";
import WordReveal from "./components/WordReveal";
import MagneticBtn from "./components/MagneticBtn";
import TiltCard from "./components/TiltCard";
import MarqueeTicker from "./components/MarqueeTicker";
import Counter from "./components/Counter";
import ScrollReveal from "./components/ScrollReveal";
import { GH, LN, ML, PIN, ARR, EXT, MNU, XXX } from "./components/Icons";

// Lazy load Aurora for better performance (Three.js is ~600KB)
const Aurora = lazy(() => import("./components/Aurora.jsx"));

// Data
import { NAV } from "./data/nav";
import { PROJECTS } from "./data/projects.jsx";
import { STATS } from "./data/stats";
import { SKILLS } from "./data/skills";
import { TICKER_ITEMS } from "./data/ticker";
import { PROFILES } from "./data/profiles.jsx";

/* ═══════════════════════════════════════════════════════════
   APP
═══════════════════════════════════════════════════════════ */
export default function App() {
  const [open, setOpen] = useState(false);
  const [scr, setScr] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const fn = () => {
      setScr(window.scrollY > 40);
      const ids = ["contact", "profiles", "skills", "projects", "about"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }, []);

  // Named style variables (no more magic single letters)
  const wrapperStyle = { maxWidth: 1120, margin: "0 auto", padding: "0 clamp(16px,3vw,28px)" };
  const sectionPadding = { padding: "88px 0" };
  const labelStyle = { fontFamily: "'Geist Mono',monospace", fontSize: 11, letterSpacing: "0.15em", color: "var(--muted)", textTransform: "uppercase", marginBottom: 12 };
  const headingStyle = { fontFamily: "'Geist',sans-serif", fontWeight: 300, fontSize: "clamp(28px,5vw,50px)", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 10, color: "var(--fg)"};

  return (
    <div className="grain" style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden" }}>
      <GlobalStyles />
      <Aurora />
      <CustomCursor />
      {/* scanline */}
      <div className="scanline" />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 64,
        padding: "0 clamp(16px,3vw,28px)", display: "flex", alignItems: "center",
        background: scr ? "rgba(6,6,9,.82)" : "transparent",
        backdropFilter: scr ? "blur(20px)" : "none", WebkitBackdropFilter: scr ? "blur(20px)" : "none",
        borderBottom: scr ? "1px solid var(--bdr)" : "1px solid transparent",
        transition: "background .3s,border-color .3s"
      }}>
        <div style={{ maxWidth: 1120, width: "100%", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "none", padding: 0, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: "linear-gradient(135deg,rgba(0,255,213,.13),rgba(79,142,255,.09))",
              border: "1px solid rgba(0,255,213,.22)",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <span style={{
                fontFamily: "'Geist',sans-serif", fontWeight: 700, fontSize: 13,
                background: "linear-gradient(135deg,#00ffd5,#4f8eff)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>PP</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
              <span style={{ fontFamily: "'Geist',sans-serif", fontWeight: 500, fontSize: 15, letterSpacing: "-0.01em", color: "var(--fg)" }}>
                Purvajit Patil
              </span>
              <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: "var(--muted)", letterSpacing: "0.06em" }}>Full Stack Dev</span>
            </div>
          </button>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ alignItems: "center", gap: 32 }}>
            {NAV.map(n => (
              <button key={n.h} onClick={() => go(n.h)} className={`nl${active === n.h ? " on" : ""}`}
                style={{ background: "none", border: "none", cursor: "none", padding: 0 }}>{n.l}</button>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Resume button - links to PDF */}
            <MagneticBtn href="/resume.pdf" target="_blank"
              style={{
                padding: "8px 18px", borderRadius: 8, fontSize: 13, textDecoration: "none",
                background: "var(--gls)", border: "1px solid var(--bdr)", color: "var(--fg)",
                fontFamily: "'Geist',sans-serif", display: "inline-flex", alignItems: "center"
              }}>
              Resume
            </MagneticBtn>
            <button className="ham" onClick={() => setOpen(o => !o)}
              style={{
                display: "none", padding: 8, borderRadius: 8, cursor: "none", border: "1px solid var(--bdr)",
                background: "var(--gls)", minWidth: 44, minHeight: 44, alignItems: "center", justifyContent: "center"
              }}>
              {open ? <XXX /> : <MNU />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="drawer" style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 190,
          background: "rgba(6,6,9,.97)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid var(--bdr)", paddingBottom: 20
        }}>
          {NAV.map((n, i) => (
            <button key={n.h} onClick={() => go(n.h)} style={{
              display: "flex", alignItems: "center",
              width: "100%", padding: "0 20px", height: 52, background: "none", border: "none",
              borderBottom: "1px solid var(--bdr)", cursor: "none", fontFamily: "'Geist',sans-serif",
              fontSize: 16, color: active === n.h ? "var(--fg)" : "var(--muted)", fontWeight: active === n.h ? 500 : 300
            }}>
              <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: "var(--muted)", marginRight: 14 }}>0{i + 1}</span>
              {n.l}
              {active === n.h && <span style={{ marginLeft: "auto", width: 6, height: 6, borderRadius: "50%", background: "var(--teal)" }} />}
            </button>
          ))}
        </div>
      )}

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ════ HERO ════ */}
        <section id="about" style={{
          minHeight: "100vh", display: "flex", alignItems: "center",
          justifyContent: "center", padding: "0 clamp(16px,3vw,28px)", paddingTop: 64
        }}>
          <div style={{ maxWidth: 900, width: "100%", textAlign: "center" }}>

            {/* Available pill */}
            <div className="f0" style={{
              marginBottom: 28, display: "inline-flex", alignItems: "center", gap: 8,
              background: "var(--gls)", border: "1px solid var(--bdr)", borderRadius: 100, padding: "6px 16px"
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%", background: "#4ade80",
                display: "inline-block", boxShadow: "0 0 8px #4ade80", animation: "pulse 2s ease-in-out infinite"
              }} />
              <span style={{ fontFamily: "'Geist Mono',monospace", fontSize: 12, color: "var(--muted)" }}>
                Available for opportunities
              </span>
            </div>

            {/* Big headline with word reveal - IMPACTFUL HOOK */}
            <div className="float-anim f1" style={{ marginBottom: 20 }}>
              <h1 style={{
                fontFamily: "'Geist',sans-serif", fontWeight: 300, lineHeight: 1.08,
                fontSize: "clamp(38px,8vw,80px)", letterSpacing: "-0.03em"
              }}>
                <WordReveal text="I build full-stack" delay={100} />
                <br />
                <span className="grad-text" style={{ fontWeight: 300, fontSize: "clamp(38px,8vw,80px)" }}>
                  <WordReveal text="products — fast & clean" delay={300} />
                </span>
              </h1>
            </div>

            <p className="f2" style={{
              fontFamily: "'Geist',sans-serif", fontWeight: 300,
              fontSize: "clamp(15px,2.2vw,19px)", color: "var(--muted)", lineHeight: 1.75,
              maxWidth: 600, margin: "0 auto 40px"
            }}>
              Full Stack Developer specializing in MERN Stack. Building production-ready 
              applications from scratch with clean architecture.
            </p>

            {/* Magnetic CTAs */}
            <div className="f3" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 56 }}>
              <MagneticBtn onClick={() => go("projects")}
                style={{
                  padding: "13px 32px", borderRadius: 10, fontSize: 15, fontWeight: 600,
                  background: "linear-gradient(135deg,#00ffd5,#4f8eff,#a78bfa)",
                  backgroundSize: "200% 200%", border: "none", color: "#000",
                  display: "inline-flex", alignItems: "center", gap: 8,
                  animation: "gradMove 4s ease infinite",
                  boxShadow: "0 4px 30px rgba(0,255,213,.2)"
                }}>
                View My Projects
              </MagneticBtn>
              <MagneticBtn href="mailto:poorvjeet01@gmail.com"
                style={{
                  padding: "13px 32px", borderRadius: 10, fontSize: 15,
                  background: "var(--gls)", border: "1px solid var(--bdr)", color: "var(--fg)",
                  textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                  fontFamily: "'Geist',sans-serif"
                }}>
                <ML s={15} /> Get In Touch
              </MagneticBtn>
            </div>

            <div className="f4 div" />

            {/* Stats - ENGINEER FOCUSED */}
            <div className="f4 stats-flex" style={{
              display: "flex", justifyContent: "center",
              alignItems: "center", gap: 48, paddingTop: 44, flexWrap: "wrap"
            }}>
              {STATS.map((s, i) => (
                <div key={s.l} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'Geist',sans-serif", fontWeight: 300,
                    fontSize: "clamp(26px,4vw,42px)", letterSpacing: "-0.03em", color: "var(--fg)", marginBottom: 4
                  }}>
                    <Counter end={s.v} suffix={s.s} />
                  </div>
                  <div style={{ fontFamily: "'Geist',sans-serif", fontWeight: 300, fontSize: 13, color: "var(--muted)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Marquee Tech Ticker ── */}
        <MarqueeTicker items={TICKER_ITEMS} />

        {/* ════ PROJECTS ════ */}
        <section id="projects" style={sectionPadding}>
          <div style={wrapperStyle}>
            <ScrollReveal>
              <p style={labelStyle}>// Projects</p>
              <h2 style={headingStyle}>
                Things I've <span className="grad-text">built</span>
              </h2>
              <p style={{ color: "var(--muted)", fontSize: 15, fontWeight: 300, marginBottom: 52, maxWidth: 480, lineHeight: 1.65 }}>
                Full-stack applications built from scratch — real problems, real solutions.
              </p>
            </ScrollReveal>

            <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {PROJECTS.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 90}>
                  <TiltCard>
                    {/* SVG App UI Banner */}
                    <div style={{
                      position: "relative", height: 200, overflow: "hidden", flexShrink: 0,
                      background: "#060609", borderBottom: `1px solid ${p.color}18`
                    }}>
                      <p.Banner />
                      {/* subtle bottom fade */}
                      <div style={{
                        position: "absolute", inset: 0,
                        background: `linear-gradient(180deg,transparent 60%,rgba(6,6,9,.55) 100%)`,
                        pointerEvents: "none"
                      }} />
                      {/* top-left category pill */}
                      <span style={{
                        position: "absolute", top: 38, left: 8,
                        fontFamily: "'Geist Mono',monospace", fontSize: 9, letterSpacing: "0.06em",
                        color: p.color, background: "rgba(6,6,9,.75)", border: `1px solid ${p.color}45`,
                        backdropFilter: "blur(6px)", padding: "2px 8px", borderRadius: 5
                      }}>{p.cat}</span>
                      {/* index */}
                      <span style={{
                        position: "absolute", bottom: 10, right: 14,
                        fontFamily: "'Geist Mono',monospace", fontSize: 11, color: "rgba(255,255,255,.25)"
                      }}>0{i + 1}</span>
                    </div>
                    {/* Body */}
                    <div style={{ padding: "16px 20px 22px", display: "flex", flexDirection: "column", flex: 1 }}>
                      <h3 style={{
                        fontFamily: "'Geist',sans-serif", fontWeight: 600, fontSize: 17,
                        letterSpacing: "-0.02em", color: "var(--fg)", marginBottom: 8
                      }}>{p.title}</h3>
                      <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{p.desc}</p>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
                        {p.tags.map(t => <span key={t} className="sb" style={{ padding: "3px 9px", borderRadius: 5 }}>{t}</span>)}
                      </div>
                      <div style={{ display: "flex", gap: 8, marginTop: "auto" }}>
                        <MagneticBtn href={p.github} target="_blank"
                          style={{
                            flex: 1, gap: 6, padding: "9px 10px", borderRadius: 8, fontSize: 12, textDecoration: "none",
                            background: "var(--gls)", border: "1px solid var(--bdr)", color: "var(--muted)",
                            fontFamily: "'Geist',sans-serif", display: "inline-flex", alignItems: "center", justifyContent: "center"
                          }}>
                          <GH s={13} /> GitHub
                        </MagneticBtn>
                        <MagneticBtn href={p.live} target="_blank"
                          style={{
                            flex: 1.4, gap: 5, padding: "9px 10px", borderRadius: 8, fontSize: 12, textDecoration: "none",
                            background: `linear-gradient(135deg,${p.color}20,${p.color}10)`,
                            border: `1px solid ${p.color}42`, color: p.color,
                            fontFamily: "'Geist',sans-serif", fontWeight: 500,
                            display: "inline-flex", alignItems: "center", justifyContent: "center"
                          }}>
                          Visit Project <ARR s={11} />
                        </MagneticBtn>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div style={wrapperStyle}><div className="div" /></div>

        {/* ════ SKILLS ════ */}
        <section id="skills" style={sectionPadding}>
          <div style={wrapperStyle}>
            <ScrollReveal>
              <p style={labelStyle}>// Skills</p>
              <h2 style={headingStyle}>My <span className="grad-text">tech stack</span></h2>
              <p style={{ color: "var(--muted)", fontSize: 15, fontWeight: 300, marginBottom: 52, maxWidth: 420, lineHeight: 1.65 }}>
                Technologies and tools I use daily to ship products.
              </p>
            </ScrollReveal>

            <div className="sk-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14 }}>
              {SKILLS.map((s, i) => (
                <ScrollReveal key={s.cat} delay={i * 60}>
                  <div
                    className="gc"
                    style={{ borderRadius: 14, padding: "20px 18px", transition: "border-color .3s, transform .3s" }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = "rgba(0,255,213,.25)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = "var(--bdr)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <p style={{
                      fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: "0.1em",
                      color: "var(--muted)", textTransform: "uppercase", marginBottom: 14
                    }}>
                      <ScrambleText text={s.cat} />
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                      {s.items.map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,.2)", flexShrink: 0 }} />
                          <span style={{ fontFamily: "'Geist',sans-serif", fontSize: 13, fontWeight: 300, color: "var(--fg)" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Education card - CGPA reduced size */}
            <ScrollReveal delay={220}>
              <div className="gc" style={{
                borderRadius: 14, padding: "24px 28px", marginTop: 20,
                display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: "'Geist Mono',monospace", fontSize: 10, letterSpacing: "0.12em",
                    color: "var(--muted)", textTransform: "uppercase", marginBottom: 8
                  }}>Education</p>
                  <p style={{ fontFamily: "'Geist',sans-serif", fontWeight: 500, fontSize: 16, color: "var(--fg)", marginBottom: 4 }}>
                    Bharti Vidyapeeth College of Engineering
                  </p>
                  <p style={{ color: "var(--muted)", fontSize: 13, fontWeight: 300 }}>
                    B.E. Information Technology · Mumbai University · 2024–2028
                  </p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontFamily: "'Geist',sans-serif", fontWeight: 300, fontSize: 26, letterSpacing: "-0.03em", color: "var(--fg)" }}>7.81 CGPA</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Second Marquee (reversed) ── */}
        <div style={{ overflow: "hidden", borderTop: "1px solid var(--bdr)", borderBottom: "1px solid var(--bdr)", padding: "14px 0", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right,var(--bg),transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left,var(--bg),transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ display: "flex", width: "max-content", animation: "marquee 22s linear infinite reverse" }}>
            {[...["GoFoodie", "Chat-Now", "Smart Agro", "MERN Stack", "Full Stack", "Problem Solver", "Open to Work", "Mumbai · India"], ...["GoFoodie", "Chat-Now", "Smart Agro", "MERN Stack", "Full Stack", "Problem Solver", "Open to Work", "Mumbai · India"]].map((item, i) => (
              <span key={i} style={{
                display: "inline-flex", alignItems: "center", gap: 10, padding: "0 28px",
                whiteSpace: "nowrap", fontFamily: "'Geist',sans-serif", fontWeight: 300,
                fontSize: 13, color: "rgba(255,255,255,.18)", letterSpacing: "0.12em", textTransform: "uppercase"
              }}>
                <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(0,255,213,.4)", flexShrink: 0 }} />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div style={{ height: 1, background: "linear-gradient(90deg,transparent,var(--bdr),transparent)" }} />

        {/* ════ PROFILES ════ */}
        <section id="profiles" style={sectionPadding}>
          <div style={wrapperStyle}>
            <ScrollReveal>
              <p style={labelStyle}>// Coding Profiles</p>
              <h2 style={headingStyle}>Where I <span className="grad-text">compete</span></h2>
              <p style={{ color: "var(--muted)", fontSize: 15, fontWeight: 300, marginBottom: 52, maxWidth: 420, lineHeight: 1.65 }}>
                Sharpening algorithmic thinking through consistent problem-solving.
              </p>
            </ScrollReveal>
            <div className="pr-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
              {PROFILES.map((p, i) => (
                <ScrollReveal key={p.name} delay={i * 65}>
                  <MagneticBtn href={p.url} target="_blank"
                    style={{ display: "block", textDecoration: "none", width: "100%" }}>
                    <div
                      className="gc"
                      style={{ borderRadius: 16, padding: "22px 20px", transition: "border-color .3s,transform .3s", cursor: "none" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = `${p.accent}50`; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--bdr)"; }}
                    >
                      <div style={{
                        width: 42, height: 42, borderRadius: 11, marginBottom: 16,
                        background: `${p.accent}12`, border: `1px solid ${p.accent}28`,
                        display: "flex", alignItems: "center", justifyContent: "center", color: p.accent
                      }}>
                        {p.icon}
                      </div>
                      <p style={{ fontFamily: "'Geist',sans-serif", fontWeight: 500, fontSize: 15, color: "var(--fg)", marginBottom: 3 }}>{p.name}</p>
                      <p style={{ fontFamily: "'Geist Mono',monospace", fontSize: 11, color: p.accent, marginBottom: 6 }}>{p.handle}</p>
                      <p style={{ color: "var(--muted)", fontSize: 12, fontWeight: 300, lineHeight: 1.5, marginBottom: 14 }}>{p.sub}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--muted)", fontSize: 11, fontFamily: "'Geist Mono',monospace" }}>
                        Visit <EXT s={11} />
                      </div>
                    </div>
                  </MagneticBtn>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div style={wrapperStyle}><div className="div" /></div>

        {/* ════ CONTACT ════ */}
        <section id="contact" style={{ padding: "88px 0 130px" }}>
          <div style={{ ...wrapperStyle, maxWidth: 660 }}>
            <ScrollReveal style={{ textAlign: "center" }}>
              <p style={{ ...labelStyle, textAlign: "center" }}>// Contact</p>
              <h2 style={{ ...headingStyle, textAlign: "center", marginBottom: 14 }}>
                Let's <span className="grad-text">work together</span>
              </h2>
              <p style={{ color: "var(--muted)", fontSize: 15, fontWeight: 300, lineHeight: 1.75, marginBottom: 48, textAlign: "center" }}>
                Have a project? Let's build something great.
              </p>

              {/* Contact card */}
              <div className="gc" style={{ borderRadius: 18, padding: "28px 24px", marginBottom: 24, textAlign: "left" }}>
                {[
                  { icon: <ML s={17} />, lbl: "EMAIL", val: "poorvjeet01@gmail.com", href: "mailto:poorvjeet01@gmail.com" },
                  { icon: <PIN s={17} />, lbl: "LOCATION", val: "Mumbai, Maharashtra, India", href: null }
                ].map(row => (
                  <div key={row.lbl} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: "1px solid var(--bdr)" }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: "var(--gls)", border: "1px solid var(--bdr)",
                      display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)"
                    }}>
                      {row.icon}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontFamily: "'Geist Mono',monospace", fontSize: 10, color: "var(--muted)", letterSpacing: "0.12em", marginBottom: 3 }}>{row.lbl}</p>
                      {row.href
                        ? <a href={row.href} style={{ color: "var(--fg)", fontSize: 14, textDecoration: "none", fontWeight: 300, wordBreak: "break-all" }}>{row.val}</a>
                        : <p style={{ color: "var(--fg)", fontSize: 14, fontWeight: 300 }}>{row.val}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                <MagneticBtn href="mailto:poorvjeet01@gmail.com"
                  style={{
                    padding: "13px 26px", borderRadius: 10, fontSize: 14, textDecoration: "none",
                    background: "linear-gradient(135deg,#00ffd5,#4f8eff,#a78bfa)",
                    backgroundSize: "200% 200%", border: "none", color: "#000", fontWeight: 600,
                    display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Geist',sans-serif",
                    animation: "gradMove 4s ease infinite"
                  }}>
                  <ML s={14} /> Email Me
                </MagneticBtn>
                <MagneticBtn href="https://github.com/poorvjeet" target="_blank"
                  style={{
                    padding: "13px 26px", borderRadius: 10, fontSize: 14, textDecoration: "none",
                    background: "var(--gls)", border: "1px solid var(--bdr)", color: "var(--fg)",
                    display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Geist',sans-serif"
                  }}>
                  <GH s={14} /> GitHub
                </MagneticBtn>
                <MagneticBtn href="http://www.linkedin.com/in/purvajit-patil-2100b3241" target="_blank"
                  style={{
                    padding: "13px 26px", borderRadius: 10, fontSize: 14, textDecoration: "none",
                    background: "var(--gls)", border: "1px solid var(--bdr)", color: "var(--fg)",
                    display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Geist',sans-serif"
                  }}>
                  <LN s={14} /> LinkedIn
                </MagneticBtn>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ════ FOOTER - Year updated to 2025 ════ */}
        <footer style={{
          borderTop: "1px solid var(--bdr)", padding: "24px clamp(16px,3vw,28px)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12
        }}>
          <p style={{ fontFamily: "'Geist Mono',monospace", fontSize: 12, color: "var(--muted)" }}>
            © 2025 <span style={{ color: "var(--fg)" }}>Purvajit Patil</span>
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            {NAV.map(n => (
              <button key={n.h} onClick={() => go(n.h)}
                style={{
                  background: "none", border: "none", cursor: "none", fontFamily: "'Geist Mono',monospace",
                  fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em",
                  transition: "color .2s", textTransform: "uppercase"
                }}
                onMouseEnter={e => e.target.style.color = "var(--fg)"}
                onMouseLeave={e => e.target.style.color = "var(--muted)"}>
                {n.l}
              </button>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

