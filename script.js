(() => {
"use strict";
const root=document.documentElement, progress=document.querySelector(".progress i"), spotlight=document.querySelector(".spotlight");
let ticking=false;
function scrollFX(){
  const max=document.documentElement.scrollHeight-innerHeight;
  progress.style.transform="scaleX("+Math.max(0,Math.min(1,scrollY/max))+")";
  ticking=false;
}
addEventListener("scroll",()=>{if(!ticking){requestAnimationFrame(scrollFX);ticking=true}},{passive:true});scrollFX();

if(matchMedia("(pointer:fine)").matches){
  addEventListener("pointermove",e=>{root.style.setProperty("--mx",e.clientX+"px");root.style.setProperty("--my",e.clientY+"px")},{passive:true});
  document.querySelectorAll(".magnetic").forEach(el=>{
    el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)*.12,y=(e.clientY-r.top-r.height/2)*.12;el.style.transform="translate("+x+"px,"+y+"px)"});
    el.addEventListener("pointerleave",()=>el.style.transform="");
  });
  document.querySelectorAll(".magnetic-card").forEach(el=>{
    el.addEventListener("pointermove",e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform="perspective(1100px) rotateX("+(-y*2.2)+"deg) rotateY("+(x*2.2)+"deg) translateY(-3px)"});
    el.addEventListener("pointerleave",()=>el.style.transform="");
  });
}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const theme=document.getElementById("theme");
const saved=localStorage.getItem("cgx-theme");
if(saved==="light")document.documentElement.classList.add("light");
theme.addEventListener("click",()=>{document.documentElement.classList.toggle("light");localStorage.setItem("cgx-theme",document.documentElement.classList.contains("light")?"light":"dark")});

const secret=document.getElementById("secret"),close=document.getElementById("secretClose"),trigger=document.querySelector(".secret-trigger");
let taps=0,last=0;
trigger.addEventListener("click",e=>{
  const now=Date.now();
  if(now-last>650)taps=0;
  last=now;taps++;
  if(taps===5){e.preventDefault();taps=0;secret.classList.add("open");secret.setAttribute("aria-hidden","false");close.focus()}
});
function closeSecret(){secret.classList.remove("open");secret.setAttribute("aria-hidden","true")}
close.addEventListener("click",closeSecret);
secret.addEventListener("click",e=>{if(e.target===secret)closeSecret()});
addEventListener("keydown",e=>{if(e.key==="Escape")closeSecret()});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",()=>{const id=a.getAttribute("href");if(id&&id!=="#top")history.replaceState(null,"",id)}));
})();