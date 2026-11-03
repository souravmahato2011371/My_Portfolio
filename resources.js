(()=>{"use strict";
const prompt="I want you to redesign my existing website using **Neo-Constructivist Pop**. Treat this as a complete visual design system, not just a colour palette.\n\n## The visual direction\nCreate a bold, contemporary design that combines:\n- Swiss design: 60% — clear grid systems, disciplined spacing, strong typographic hierarchy, editorial layouts, alignment, and purposeful negative space.\n- Brutalist character: 20% — confident geometry, visible structure, crisp borders, squared corners, and occasional hard offset shadows.\n- The remaining 20%, split evenly between:\n  - Tactile interactions: satisfying but restrained press, hover, and focus feedback.\n  - Maximalist artwork: expressive geometric compositions, oversized type, and striking visual moments.\n  - Y2K details: tiny technical labels, futuristic micro-details, and selective nostalgic accents.\n\n## Colour and typography\nBuild a coherent palette around warm paper or cream, near-black, vivid red, electric blue, and a controlled yellow accent. Use colour with intention; do not make every section equally loud. Keep text highly readable and maintain strong contrast. Choose a confident display typeface, a highly legible body typeface, and a mono typeface for small labels and metadata.\n\n## Design rules\n1. First inspect my existing website, its pages, content, components, and current code structure.\n2. Preserve my identity, wording, project information, links, and working features. Do not invent achievements, content, or projects.\n3. Establish a consistent responsive grid, spacing scale, typography scale, colour tokens, borders, and interaction rules.\n4. Make the layout feel art-directed and memorable while keeping navigation and reading effortless.\n5. Use expressive geometric artwork where it adds meaning. Keep decorative effects away from important content.\n6. Make buttons and interactive elements feel tactile with subtle, quick feedback. Respect keyboard navigation and visible focus states.\n7. Make every page work beautifully on phones, tablets, and desktops. Prevent horizontal overflow and cramped layouts.\n8. Respect reduced-motion preferences. Keep animations lightweight and purposeful.\n9. Use clean, maintainable HTML, CSS, and JavaScript. Reuse existing project structure and avoid unnecessary dependencies.\n10. Do not use generic AI-looking gradients, excessive glassmorphism, random decorations, emoji icons, or visual effects that reduce clarity.\n\n## Implementation process\n- Briefly explain the design system you plan to apply.\n- Then make the actual changes directly in the existing website code, not just a mockup or explanation.\n- Check all pages, navigation, links, buttons, and existing features after editing.\n- Review mobile, tablet, and desktop layouts; fix visual inconsistencies and accessibility issues.\n- Summarize the files changed and any remaining issues.\n\nThe result should feel like a distinctive, professionally art-directed website: Swiss clarity first, brutalist confidence second, with tactile, maximalist, and Y2K details used as carefully controlled accents.";
const list=document.querySelector("#resource-list");
if(!list)return;
const safePrompt=prompt.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
list.innerHTML=`
  <article class="resource-entry" id="neo-constructivist-pop">
    <div class="resource-entry-head">
      <span>THE DESIGN PROMPT</span>
      <h2>Neo-Constructivist<br><em>Pop.</em></h2>
      <p>Copy this prompt into ChatGPT, share your website or its code, and ask it to apply the style to your site.</p>
    </div>
    <section class="resource-section">
      <div class="resource-label">01 / COPY PROMPT</div>
      <div class="resource-main">
        <div class="code-card">
          <div class="code-head"><span>NEO-CONSTRUCTIVIST-POP.TXT</span><button type="button" data-copy-prompt>COPY PROMPT</button></div>
          <pre id="neo-style-prompt">${safePrompt}</pre>
        </div>
        <p class="resource-note">Tip: For the best result, open ChatGPT in the same conversation where you can provide your website files or repository.</p>
      </div>
    </section>
  </article>`;
const button=list.querySelector("[data-copy-prompt]");
button.addEventListener("click",async()=>{
  const original="COPY PROMPT";
  try{
    await navigator.clipboard.writeText(prompt);
    button.textContent="COPIED";
  }catch{
    const area=document.createElement("textarea");
    area.value=prompt;area.setAttribute("readonly","");
    area.style.position="fixed";area.style.opacity="0";
    document.body.appendChild(area);area.select();
    const copied=document.execCommand("copy");area.remove();
    button.textContent=copied?"COPIED":"SELECT TEXT";
  }
  window.setTimeout(()=>button.textContent=original,1600);
});
const bar=document.querySelector(".scroll-line span");
function updateScroll(){if(!bar)return;const max=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+Math.max(0,Math.min(1,scrollY/max)) +")"}
addEventListener("scroll",updateScroll,{passive:true});updateScroll();
})();