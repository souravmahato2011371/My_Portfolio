(()=>{"use strict";
const doc=document.documentElement;
const bar=document.querySelector(".scroll-line span");
const glow=document.querySelector(".cursor-glow");
let scrollQueued=false;
function updateScroll(){const max=doc.scrollHeight-innerHeight;bar.style.transform="scaleX("+Math.max(0,Math.min(1,scrollY/max))+")";scrollQueued=false}
addEventListener("scroll",()=>{if(!scrollQueued){requestAnimationFrame(updateScroll);scrollQueued=true}},{passive:true});updateScroll();
const reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!reduced&&matchMedia("(pointer:fine)").matches){addEventListener("pointermove",e=>{glow.style.setProperty("--x",e.clientX+"px");glow.style.setProperty("--y",e.clientY+"px")},{passive:true});
document.querySelectorAll(".button").forEach(el=>{el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect();el.style.transform="translate("+((e.clientX-r.left-r.width/2)*.08)+"px,"+((e.clientY-r.top-r.height/2)*.08)+"px)"});el.addEventListener("pointerleave",()=>el.style.transform="")})}
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>{const id=a.getAttribute("href");if(id&&id!=="#top")history.replaceState(null,"",id)}));
})();