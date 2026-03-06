import { useEffect, useRef } from "react";
import * as THREE from "three";

/* ═══════════════════════════════════════════════════════════
   THREE.JS AURORA BACKGROUND
═══════════════════════════════════════════════════════════ */
const Aurora = () => {
  const el = useRef(null);
  useEffect(() => {
    if (!el.current) return;
    const mount = el.current;
    const scene = new THREE.Scene();
    const cam   = new THREE.OrthographicCamera(-1,1,1,-1,0,1);
    const ren   = new THREE.WebGLRenderer({ antialias:false, powerPreference:"low-power" });
    ren.setPixelRatio(Math.min(window.devicePixelRatio,1.5));
    ren.setSize(window.innerWidth, window.innerHeight);
    Object.assign(ren.domElement.style,{ position:"fixed",top:0,left:0,zIndex:0,display:"block",pointerEvents:"none" });
    mount.appendChild(ren.domElement);
    const mat = new THREE.ShaderMaterial({
      uniforms:{ iTime:{value:0}, iResolution:{value:new THREE.Vector2(window.innerWidth,window.innerHeight)} },
      vertexShader:`void main(){gl_Position=vec4(position,1.0);}`,
      fragmentShader:`
        uniform float iTime; uniform vec2 iResolution;
        #define NO 3
        float rand(vec2 n){return fract(sin(dot(n,vec2(12.9898,4.1414)))*43758.5453);}
        float noise(vec2 p){vec2 ip=floor(p),u=fract(p);u=u*u*(3.-2.*u);return mix(mix(rand(ip),rand(ip+vec2(1,0)),u.x),mix(rand(ip+vec2(0,1)),rand(ip+vec2(1,1)),u.x),u.y);}
        float fbm(vec2 x){float v=0.,a=0.3;vec2 sh=vec2(100.);mat2 r=mat2(cos(.5),sin(.5),-sin(.5),cos(.5));for(int i=0;i<NO;i++){v+=a*noise(x);x=r*x*2.+sh;a*=0.4;}return v;}
        void main(){
          vec2 p=((gl_FragCoord.xy)-iResolution*.5)/iResolution.y*mat2(6.,-4.,4.,6.);
          vec4 o=vec4(0.); float f=2.+fbm(p+vec2(iTime*5.,0.))*.5;
          for(float i=0.;i++<35.;){
            vec2 v=p+cos(i*i+(iTime+p.x*.08)*.025+i*vec2(13.,11.))*3.5;
            float tn=fbm(v+vec2(iTime*.5,i))*.3*(1.-(i/35.));
            vec4 col=vec4(.1+.3*sin(i*.2+iTime*.4),.3+.5*cos(i*.3+iTime*.5),.7+.3*sin(i*.4+iTime*.3),1.);
            o+=col*exp(sin(i*i+iTime*.8))/length(max(v,vec2(v.x*f*.015,v.y*1.5)))*(1.+tn*.8)*smoothstep(0.,1.,i/35.)*.6;
          }
          o=tanh(pow(o/100.,vec4(1.6))); gl_FragColor=o*1.5;
        }`,
    });
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(2,2),mat); scene.add(mesh);
    let id,last=0;
    const tick=(ts)=>{ id=requestAnimationFrame(tick); if(ts-last<16) return; last=ts; mat.uniforms.iTime.value+=0.016; ren.render(scene,cam); };
    const onR=()=>{ ren.setSize(window.innerWidth,window.innerHeight); mat.uniforms.iResolution.value.set(window.innerWidth,window.innerHeight); };
    window.addEventListener("resize",onR,{passive:true});
    requestAnimationFrame(tick);
    return ()=>{ cancelAnimationFrame(id); window.removeEventListener("resize",onR); if(mount.contains(ren.domElement)) mount.removeChild(ren.domElement); ren.dispose(); mat.dispose(); };
  },[]);
  return <div ref={el}/>;
};

export default Aurora;

