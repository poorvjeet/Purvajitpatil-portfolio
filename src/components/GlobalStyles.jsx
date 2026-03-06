/* ═══════════════════════════════════════════════════════════
   GLOBAL STYLES
═══════════════════════════════════════════════════════════ */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100;200;300;400;500;600;700;800;900&family=Geist+Mono:wght@300;400;500;600&display=swap');
    *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
    html { scroll-behavior:smooth; }
    :root {
      --bg:#060609; --fg:rgba(255,255,255,0.92); --muted:rgba(255,255,255,0.35);
      --bdr:rgba(255,255,255,0.08); --bdrH:rgba(255,255,255,0.18);
      --gls:rgba(255,255,255,0.04); --glsH:rgba(255,255,255,0.07);
      --teal:#00ffd5; --blue:#4f8eff; --purple:#a78bfa;
      --grad:linear-gradient(135deg,#00ffd5 0%,#4f8eff 50%,#a78bfa 100%);
    }
    body { background:var(--bg); color:var(--fg); font-family:'Geist',sans-serif;
      -webkit-font-smoothing:antialiased; overflow-x:hidden; cursor:none; }
    ::-webkit-scrollbar { width:3px; }
    ::-webkit-scrollbar-track { background:transparent; }
    ::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.1); border-radius:2px; }

    /* ── animations ── */
    @keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
    @keyframes fadeUp   { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
    @keyframes gradMove { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
    @keyframes grain    { 0%,100%{transform:translate(0,0)} 10%{transform:translate(-2%,-3%)} 20%{transform:translate(3%,2%)} 30%{transform:translate(-1%,4%)} 40%{transform:translate(4%,-1%)} 50%{transform:translate(-3%,3%)} 60%{transform:translate(2%,-4%)} 70%{transform:translate(-4%,1%)} 80%{transform:translate(3%,-2%)} 90%{transform:translate(-2%,4%)} }
    @keyframes marquee  { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
    @keyframes slideDown{ from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
    @keyframes pulse    { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.9)} }
    @keyframes scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
    @keyframes borderGlow { 0%,100%{border-color:rgba(0,255,213,.15)} 50%{border-color:rgba(0,255,213,.45)} }

    .float-anim { animation:float 6s ease-in-out infinite; }
    .f0{animation:fadeUp .65s ease forwards;}
    .f1{animation:fadeUp .65s .1s ease forwards;opacity:0;}
    .f2{animation:fadeUp .65s .22s ease forwards;opacity:0;}
    .f3{animation:fadeUp .65s .34s ease forwards;opacity:0;}
    .f4{animation:fadeUp .65s .46s ease forwards;opacity:0;}

    .grad-text {
      background:var(--grad); background-size:200% 200%;
      -webkit-background-clip:text; -webkit-text-fill-color:transparent;
      background-clip:text; animation:gradMove 5s ease infinite;
    }

    /* ── noise grain ── */
    .grain::after {
      content:''; position:fixed; inset:-200px; z-index:9999; pointer-events:none;
      opacity:.028;
      background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
      background-repeat:repeat; background-size:128px 128px;
      animation:grain 0.5s steps(1) infinite;
    }

    /* ── glass card ── */
    .gc {
      background:var(--gls); border:1px solid var(--bdr);
      backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
      transition:background .25s, border-color .3s, transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s;
    }

    /* ── divider ── */
    .div { width:100%;height:1px;background:linear-gradient(90deg,transparent,var(--bdr),transparent); }

    /* ── skill badge ── */
    .sb { background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);color:var(--muted);font-size:11px;font-family:'Geist Mono',monospace; }

    /* ── nav link ── */
    .nl { position:relative;color:var(--muted);text-decoration:none;font-size:14px;font-family:'Geist',sans-serif;transition:color .2s;background:none;border:none;cursor:none;padding:0;min-height:44px;display:inline-flex;align-items:center; }
    .nl::after { content:'';position:absolute;left:0;bottom:-2px;width:0;height:1px;background:var(--teal);transition:width .3s; }
    .nl:hover { color:var(--fg); } .nl:hover::after { width:100%; }
    .nl.on { color:var(--fg); } .nl.on::after { width:100%; }

    /* ── reveal ── */
    .rv { opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease; }
    .rv.in { opacity:1;transform:translateY(0); }

    /* ── marquee ── */
    .marquee-track { display:flex;width:max-content;animation:marquee 28s linear infinite; }
    .marquee-track:hover { animation-play-state:paused; }

    /* ── tilt card spotlight ── */
    .tilt-card { transform-style:preserve-3d; transition:transform .08s linear; }

    /* ── magnetic btn ── */
    .mag-btn { transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s; cursor:none; }

    /* ── responsive ── */
    .desktop-nav { display:flex; }
    .ham { display:none; }
    @media(max-width:768px) {
      .desktop-nav{display:none!important;} .ham{display:flex!important;}
      .proj-grid{grid-template-columns:1fr!important;}
      .sk-grid{grid-template-columns:1fr 1fr!important;}
      .pr-grid{grid-template-columns:1fr 1fr!important;}
      .stats-flex{flex-direction:column!important;gap:24px!important;}
      .stat-sep{display:none!important;}
    }
    @media(max-width:480px) { .sk-grid{grid-template-columns:1fr!important;} .pr-grid{grid-template-columns:1fr!important;} }
    @media(min-width:769px) and (max-width:1023px) { .proj-grid{grid-template-columns:1fr 1fr!important;} }

    /* ── drawer ── */
    .drawer{animation:slideDown .22s ease forwards;}

    /* ── border glow on active section ── */
    .section-active-border { animation:borderGlow 2s ease infinite; }

    /* ── scanline effect ── */
    .scanline { position:fixed;top:0;left:0;right:0;height:2px;background:linear-gradient(to right,transparent,rgba(0,255,213,.06),transparent);pointer-events:none;z-index:9998;animation:scanline 8s linear infinite; }
  `}</style>
);

export default GlobalStyles;

