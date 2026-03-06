/* ═══════════════════════════════════════════════════════════
   PROJECT BANNERS
═══════════════════════════════════════════════════════════ */

/* ── GoFoodie UI Mockup Banner ── */
export const GoFoodieBanner = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
    <defs>
      <linearGradient id="gf-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1a0800"/>
        <stop offset="100%" stopColor="#0d0603"/>
      </linearGradient>
      <linearGradient id="gf-accent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#fb923c"/>
        <stop offset="100%" stopColor="#f97316"/>
      </linearGradient>
      <filter id="gf-glow">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>
    {/* bg */}
    <rect width="400" height="200" fill="url(#gf-bg)"/>
    {/* grid lines */}
    {[40,80,120,160,200,240,280,320,360].map(x=><line key={x} x1={x} y1="0" x2={x} y2="200" stroke="rgba(255,100,0,.04)" strokeWidth="1"/>)}
    {[40,80,120,160].map(y=><line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,100,0,.04)" strokeWidth="1"/>)}
    {/* glow orb */}
    <ellipse cx="320" cy="60" rx="90" ry="55" fill="rgba(251,146,60,.07)"/>
    {/* navbar */}
    <rect x="12" y="14" width="376" height="30" rx="6" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.07)" strokeWidth="1"/>
    <rect x="20" y="22" width="14" height="14" rx="3" fill="#fb923c"/>
    <text x="40" y="32" fill="rgba(255,255,255,.9)" fontSize="9" fontFamily="monospace" fontWeight="600">GoFoodie</text>
    {["Home","Menu","Cart","Orders"].map((t,i)=>(
      <g key={t}>
        <rect x={200+i*42} y="20" width="36" height="16" rx="4" fill={i===1?"rgba(251,146,60,.2)":"transparent"}/>
        <text x={218+i*42} y="31" fill={i===1?"#fb923c":"rgba(255,255,255,.45)"} fontSize="7.5" fontFamily="monospace" textAnchor="middle">{t}</text>
      </g>
    ))}
    {/* hero banner */}
    <rect x="12" y="52" width="180" height="80" rx="8" fill="rgba(251,146,60,.06)" stroke="rgba(251,146,60,.15)" strokeWidth="1"/>
    <text x="24" y="72" fill="#fb923c" fontSize="7" fontFamily="monospace" letterSpacing="2">FEATURED</text>
    <text x="24" y="86" fill="rgba(255,255,255,.9)" fontSize="11" fontFamily="monospace" fontWeight="700">Butter Chicken</text>
    <text x="24" y="99" fill="rgba(255,255,255,.4)" fontSize="7.5" fontFamily="monospace">North Indian Cuisine</text>
    <rect x="24" y="108" width="50" height="14" rx="4" fill="url(#gf-accent)"/>
    <text x="49" y="118" fill="#000" fontSize="7" fontFamily="monospace" fontWeight="700" textAnchor="middle">Order Now</text>
    <text x="140" y="110" fill="#fb923c" fontSize="12" fontFamily="monospace" fontWeight="700">₹349</text>
    {/* food emoji placeholder */}
    <circle cx="171" cy="80" r="20" fill="rgba(251,146,60,.1)" stroke="rgba(251,146,60,.2)" strokeWidth="1"/>
    <text x="171" y="84" textAnchor="middle" fontSize="18">🍛</text>
    {/* menu cards row */}
    {[{e:"🍕",n:"Pizza",p:"₹199"},{e:"🍔",n:"Burger",p:"₹149"},{e:"🌮",n:"Tacos",p:"₹129"}].map((item,i)=>(
      <g key={item.n}>
        <rect x={200+i*62} y="52" width="56" height="80" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.07)" strokeWidth="1"/>
        <circle cx={228+i*62} cy="76" r="16" fill="rgba(251,146,60,.1)"/>
        <text x={228+i*62} y="80" textAnchor="middle" fontSize="16">{item.e}</text>
        <text x={228+i*62} y="100" fill="rgba(255,255,255,.8)" fontSize="8" fontFamily="monospace" textAnchor="middle">{item.n}</text>
        <text x={228+i*62} y="113" fill="#fb923c" fontSize="8" fontFamily="monospace" textAnchor="middle">{item.p}</text>
        <rect x={214+i*62} y="118" width="28" height="9" rx="3" fill="rgba(251,146,60,.25)"/>
        <text x={228+i*62} y="125" fill="#fb923c" fontSize="6" fontFamily="monospace" textAnchor="middle">+ Add</text>
      </g>
    ))}
    {/* bottom status bar */}
    <rect x="12" y="142" width="376" height="46" rx="8" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.05)" strokeWidth="1"/>
    <text x="24" y="157" fill="rgba(255,255,255,.35)" fontSize="7" fontFamily="monospace">ORDER STATUS</text>
    <rect x="24" y="162" width="80" height="6" rx="3" fill="rgba(251,146,60,.15)"/>
    <rect x="24" y="162" width="52" height="6" rx="3" fill="url(#gf-accent)"/>
    <text x="115" y="168" fill="#fb923c" fontSize="6.5" fontFamily="monospace">● Preparing...</text>
    <text x="24" y="181" fill="rgba(255,255,255,.5)" fontSize="7" fontFamily="monospace">🛵  Delivery in ~25 mins · JWT Secured</text>
    {/* top-right badge */}
    <rect x="354" y="14" width="34" height="16" rx="5" fill="rgba(251,146,60,.2)" stroke="rgba(251,146,60,.3)" strokeWidth="1"/>
    <text x="371" y="25" fill="#fb923c" fontSize="7" fontFamily="monospace" textAnchor="middle">🛒 3</text>
  </svg>
);

/* ── Chat-Now UI Mockup Banner ── */
export const ChatNowBanner = () => (
  <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
    <defs>
      <linearGradient id="cn-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00081a"/>
        <stop offset="100%" stopColor="#020612"/>
      </linearGradient>
      <linearGradient id="cn-bubble" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2563eb"/>
        <stop offset="100%" stopColor="#3b82f6"/>
      </linearGradient>
    </defs>
    <rect width="400" height="200" fill="url(#cn-bg)"/>
    {/* glow */}
    <ellipse cx="80" cy="100" rx="70" ry="70" fill="rgba(96,165,250,.05)"/>
    <ellipse cx="320" cy="100" rx="70" ry="70" fill="rgba(59,130,246,.05)"/>
    {/* sidebar */}
    <rect x="0" y="0" width="110" height="200" fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.05)" strokeWidth="1"/>
    <text x="14" y="24" fill="rgba(255,255,255,.8)" fontSize="9.5" fontFamily="monospace" fontWeight="700">Chat-Now</text>
    <rect x="8" y="30" width="94" height="1" fill="rgba(255,255,255,.06)"/>
    {/* contacts */}
    {[
      {n:"Rahul S.",m:"Hey, ready?",t:"2m",a:true,col:"#fb923c"},
      {n:"Priya M.",m:"Seen the PR?",t:"5m",a:false,col:"#4ade80"},
      {n:"Dev Team",m:"CI passed ✓",t:"12m",a:false,col:"#60a5fa"},
      {n:"Ankit K.",m:"On my way!",t:"1h",a:false,col:"#a78bfa"},
    ].map((c,i)=>(
      <g key={c.n}>
        <rect x="6" y={38+i*36} width="98" height="32" rx="5" fill={i===0?"rgba(96,165,250,.12)":"transparent"}/>
        <circle cx="22" cy={54+i*36} r="9" fill={`${c.col}22`} stroke={c.col} strokeWidth="1.2"/>
        <text x="22" y={57+i*36} fill={c.col} fontSize="7.5" fontFamily="monospace" textAnchor="middle" fontWeight="700">{c.n[0]}</text>
        <text x="36" y={50+i*36} fill="rgba(255,255,255,.8)" fontSize="7.5" fontFamily="monospace" fontWeight="500">{c.n}</text>
        <text x="36" y={62+i*36} fill="rgba(255,255,255,.3)" fontSize="6.5" fontFamily="monospace">{c.m}</text>
        <text x="96" y={50+i*36} fill="rgba(255,255,255,.25)" fontSize="6" fontFamily="monospace" textAnchor="end">{c.t}</text>
        {c.a&&<circle cx="100" cy="59" r="4" fill="#60a5fa"/>}
      </g>
    ))}
    {/* chat header */}
    <rect x="112" y="0" width="288" height="34" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.05)" strokeWidth="1"/>
    <circle cx="128" cy="17" r="9" fill="rgba(251,146,60,.2)" stroke="#fb923c" strokeWidth="1"/>
    <text x="128" y="20" fill="#fb923c" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="700">R</text>
    <text x="142" y="14" fill="rgba(255,255,255,.85)" fontSize="8" fontFamily="monospace" fontWeight="600">Rahul Sharma</text>
    <circle cx="141" cy="22" r="3" fill="#4ade80"/>
    <text x="148" y="24" fill="#4ade80" fontSize="6" fontFamily="monospace">Online</text>
    {/* messages */}
    {[
      {txt:"Hey! Did you push the latest changes?",own:false,t:"10:32"},
      {txt:"Yeah! Just deployed to staging 🚀",own:true,t:"10:33"},
      {txt:"Socket.io latency is < 50ms now!",own:false,t:"10:34"},
      {txt:"MongoDB indexes really helped 🔥",own:true,t:"10:35"},
    ].map((msg,i)=>{
      const w = Math.min(msg.txt.length*4.4, 200);
      return (
        <g key={i}>
          {msg.own
            ? <rect x={388-w} y={44+i*36} width={w} height="22" rx="9" fill="url(#cn-bubble)"/>
            : <rect x="118" y={44+i*36} width={w} height="22" rx="9" fill="rgba(255,255,255,.07)"/>
          }
          <text x={msg.own?385-w/2:118+w/2} y={59+i*36} fill={msg.own?"rgba(255,255,255,.95)":"rgba(255,255,255,.8)"} fontSize="7" fontFamily="monospace" textAnchor="middle">{msg.txt}</text>
        </g>
      );
    })}
    {/* input */}
    <rect x="116" y="168" width="272" height="24" rx="10" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
    <text x="130" y="183" fill="rgba(255,255,255,.25)" fontSize="7.5" fontFamily="monospace">Type a message...</text>
    <rect x="362" y="170" width="20" height="20" rx="8" fill="url(#cn-bubble)"/>
    <text x="372" y="183" fill="white" fontSize="9" textAnchor="middle">➤</text>
    {/* online count */}
    <rect x="116" y="194" width="272" height="6" fill="rgba(255,255,255,.02)"/>
    <text x="122" y="199" fill="rgba(255,255,255,.2)" fontSize="5.5" fontFamily="monospace">● 3 online  ·  JWT Auth  ·  Socket.io  ·  End-to-end encrypted</text>
  </svg>
);

/* ── Smart Agro UI Mockup Banner ── */
export const SmartAgroBanner = () => {
  const bars = [62,48,74,56,88,43,70,82,55,90,67,78];
  return (
    <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%",display:"block"}}>
      <defs>
        <linearGradient id="sa-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#001a05"/>
          <stop offset="100%" stopColor="#000d03"/>
        </linearGradient>
        <linearGradient id="sa-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ade80"/>
          <stop offset="100%" stopColor="#16a34a"/>
        </linearGradient>
        <linearGradient id="sa-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0"/>
          <stop offset="50%" stopColor="#4ade80"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#sa-bg)"/>
      {/* grid */}
      {[50,100,150,200,250,300,350].map(x=><line key={x} x1={x} y1="0" x2={x} y2="200" stroke="rgba(74,222,128,.03)" strokeWidth="1"/>)}
      {[40,80,120,160].map(y=><line key={y} x1="0" y1={y} x2="400" y2={y} stroke="222,128,.rgba(74,03)" strokeWidth="1"/>)}
      {/* glow */}
      <ellipse cx="200" cy="100" rx="200" ry="80" fill="rgba(74,222,128,.03)"/>
      {/* header */}
      <rect x="0" y="0" width="400" height="30" fill="rgba(74,222,128,.05)" stroke="rgba(74,222,128,.08)" strokeWidth="1"/>
      <rect x="10" y="9" width="12" height="12" rx="3" fill="#4ade80"/>
      <text x="26" y="19" fill="rgba(255,255,255,.85)" fontSize="9" fontFamily="monospace" fontWeight="700">SmartAgro</text>
      <text x="26" y="28" fill="rgba(74,222,128,.6)" fontSize="6" fontFamily="monospace">IoT Farm Monitor</text>
      <rect x="290" y="7" width="60" height="16" rx="4" fill="rgba(74,222,128,.1)" stroke="rgba(74,222,128,.2)" strokeWidth="1"/>
      <circle cx="298" cy="15" r="3" fill="#4ade80"/>
      <text x="305" y="18" fill="#4ade80" fontSize="6.5" fontFamily="monospace">Live Data</text>
      <text x="356" y="18" fill="rgba(255,255,255,.3)" fontSize="6.5" fontFamily="monospace">05:32</text>
      {/* sensor cards row */}
      {[
        {icon:"💧",label:"Moisture",val:"68%",sub:"Optimal",col:"#60a5fa"},
        {icon:"🌡️",label:"Temp",val:"24°C",sub:"Normal",col:"#fb923c"},
        {icon:"☀️",label:"Light",val:"8.2k lx",sub:"High",col:"#fbbf24"},
        {icon:"🌿",label:"Nitrogen",val:"42ppm",sub:"Low",col:"#4ade80"},
      ].map((s,i)=>(
        <g key={s.label}>
          <rect x={8+i*96} y="36" width="88" height="52" rx="7" fill="rgba(255,255,255,.03)" stroke={`${s.col}22`} strokeWidth="1"/>
          <text x={52+i*96} y="56" textAnchor="middle" fontSize="14">{s.icon}</text>
          <text x={52+i*96} y="69" fill="rgba(255,255,255,.5)" fontSize="6.5" fontFamily="monospace" textAnchor="middle">{s.label}</text>
          <text x={52+i*96} y="81" fill={s.col} fontSize="11" fontFamily="monospace" fontWeight="700" textAnchor="middle">{s.val}</text>
          <circle cx={52+i*96} cy="87" r="0" fill="transparent"/>
          <rect x={18+i*96} y="83" width="68" height="2" rx="1" fill="rgba(255,255,255,.06)"/>
          <rect x={18+i*96} y="83" width={`${parseInt(s.val)*0.6}px`} height="2" rx="1" fill={s.col}
            style={{width: s.label==="Moisture"?"41px":s.label==="Temp"?"14px":s.label==="Light"?"50px":"25px"}}/>
        </g>
      ))}
      {/* chart area */}
      <rect x="8" y="96" width="248" height="64" rx="7" fill="rgba(255,255,255,.02)" stroke="rgba(74,222,128,.08)" strokeWidth="1"/>
      <text x="18" y="108" fill="rgba(255,255,255,.4)" fontSize="6.5" fontFamily="monospace">SOIL MOISTURE HISTORY (24H)</text>
      {/* bar chart */}
      {bars.map((h,i)=>(
        <g key={i}>
          <rect x={16+i*19} y={155-h*0.42} width="12" height={h*0.42}
            rx="3" fill="url(#sa-bar)" opacity="0.7"/>
          <rect x={16+i*19} y={155-h*0.42} width="12" height="2" rx="1" fill="#4ade80"/>
        </g>
      ))}
      {/* x-axis */}
      <line x1="14" y1="156" x2="246" y2="156" stroke="rgba(255,255,255,.06)" strokeWidth="1"/>
      {["6am","12pm","6pm","12am"].map((l,i)=>(
        <text key={l} x={22+i*57} y="163" fill="rgba(255,255,255,.2)" fontSize="5.5" fontFamily="monospace">{l}</text>
      ))}
      {/* right panel */}
      <rect x="262" y="96" width="130" height="64" rx="7" fill="rgba(255,255,255,.02)" stroke="rgba(74,222,128,.08)" strokeWidth="1"/>
      <text x="272" y="108" fill="rgba(255,255,255,.4)" fontSize="6.5" fontFamily="monospace">IOT DEVICES</text>
      {[{n:"Sensor Node A",s:"Online",col:"#4ade80"},{n:"Sensor Node B",s:"Online",col:"#4ade80"},{n:"Irrigation Ctrl",s:"Active",col:"#60a5fa"},{n:"Weather Station",s:"Syncing",col:"#fbbf24"}].map((d,i)=>(
        <g key={d.n}>
          <text x="272" y={120+i*12} fill="rgba(255,255,255,.6)" fontSize="6.5" fontFamily="monospace">{d.n}</text>
          <rect x="355" y={113+i*12} width="32" height="10" rx="4" fill={`${d.col}18`} stroke={`${d.col}35`} strokeWidth="1"/>
          <text x="371" y={120+i*12} fill={d.col} fontSize="6" fontFamily="monospace" textAnchor="middle">{d.s}</text>
        </g>
      ))}
      {/* alert bar */}
      <rect x="8" y="168" width="384" height="24" rx="6" fill="rgba(74,222,128,.04)" stroke="rgba(74,222,128,.1)" strokeWidth="1"/>
      <text x="18" y="183" fill="#4ade80" fontSize="7" fontFamily="monospace">⚡ Auto-irrigation triggered · Field B moisture below 45% threshold</text>
      <rect x="348" y="172" width="38" height="16" rx="5" fill="rgba(74,222,128,.15)"/>
      <text x="367" y="183" fill="#4ade80" fontSize="6.5" fontFamily="monospace" textAnchor="middle">Dismiss</text>
    </svg>
  );
};

