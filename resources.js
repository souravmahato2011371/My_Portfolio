(()=>{"use strict";
const bar=document.querySelector(".scroll-line span");
function scroll(){const max=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+Math.max(0,Math.min(1,scrollY/max))+")"}addEventListener("scroll",scroll,{passive:true});scroll();
document.querySelectorAll("[data-copy]").forEach(btn=>btn.addEventListener("click",async()=>{const el=document.getElementById(btn.dataset.copy);try{await navigator.clipboard.writeText(el.textContent);const old=btn.textContent;btn.textContent="COPIED";setTimeout(()=>btn.textContent=old,1400)}catch{btn.textContent="SELECT & COPY";setTimeout(()=>btn.textContent="COPY",1400)}}));
})();