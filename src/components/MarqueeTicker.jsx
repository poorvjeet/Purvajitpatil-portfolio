/* ═══════════════════════════════════════════════════════════
   MARQUEE  (21st.dev infinite scroll tech ticker)
═══════════════════════════════════════════════════════════ */
const MarqueeTicker = ({ items }) => (
  <div style={{ overflow:"hidden", borderTop:"1px solid var(--bdr)", borderBottom:"1px solid var(--bdr)",
    padding:"14px 0", position:"relative" }}>
    {/* fade edges */}
    <div style={{ position:"absolute",left:0,top:0,bottom:0,width:80,
      background:"linear-gradient(to right,var(--bg),transparent)",zIndex:2,pointerEvents:"none" }}/>
    <div style={{ position:"absolute",right:0,top:0,bottom:0,width:80,
      background:"linear-gradient(to left,var(--bg),transparent)",zIndex:2,pointerEvents:"none" }}/>
    <div className="marquee-track">
      {[...items,...items].map((item, i) => (
        <span key={i} style={{ display:"inline-flex", alignItems:"center", gap:10,
          padding:"0 32px", whiteSpace:"nowrap", fontFamily:"'Geist Mono',monospace",
          fontSize:13, color:"var(--muted)", letterSpacing:"0.05em" }}>
          <span style={{ width:4, height:4, borderRadius:"50%", background:"var(--teal)",
            boxShadow:"0 0 6px var(--teal)", flexShrink:0 }}/>
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeTicker;

