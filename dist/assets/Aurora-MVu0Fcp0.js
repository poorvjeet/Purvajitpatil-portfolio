import{j as u}from"./index-5a42W2s5.js";import{r as d}from"./vendor-react-DghaKJPf.js";import{S as f,O as p,W as w,a as x,V as h,M as g,P as R}from"./vendor-three-DLyjsxaF.js";const S=()=>{const n=d.useRef(null);return d.useEffect(()=>{if(!n.current)return;const o=n.current,t=new f,l=new p(-1,1,1,-1,0,1),e=new w({antialias:!1,powerPreference:"low-power"});e.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),e.setSize(window.innerWidth,window.innerHeight),Object.assign(e.domElement.style,{position:"fixed",top:0,left:0,zIndex:0,display:"block",pointerEvents:"none"}),o.appendChild(e.domElement);const i=new x({uniforms:{iTime:{value:0},iResolution:{value:new h(window.innerWidth,window.innerHeight)}},vertexShader:"void main(){gl_Position=vec4(position,1.0);}",fragmentShader:`
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
        }`}),v=new g(new R(2,2),i);t.add(v);let r,s=0;const a=c=>{r=requestAnimationFrame(a),!(c-s<16)&&(s=c,i.uniforms.iTime.value+=.016,e.render(t,l))},m=()=>{e.setSize(window.innerWidth,window.innerHeight),i.uniforms.iResolution.value.set(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",m,{passive:!0}),requestAnimationFrame(a),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",m),o.contains(e.domElement)&&o.removeChild(e.domElement),e.dispose(),i.dispose()}},[]),u.jsx("div",{ref:n})};export{S as default};
