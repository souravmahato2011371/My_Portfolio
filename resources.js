(()=>{"use strict";
const prompt = `Apply **Neo-Constructivist Pop** as the design language for this project. It can be any kind of project—website, app, software, game, brand identity, presentation, publication, dashboard, product, or something else. Adapt the style to the medium and purpose; do not turn every project into a website.

## The visual direction
Create a bold, contemporary design that combines:
- **Swiss design: 60%** — clear grid systems, disciplined spacing, strong typographic hierarchy, editorial layouts, alignment, and purposeful negative space.
- **Brutalist character: 20%** — confident geometry, visible structure, crisp borders, squared or deliberate geometric corners, and occasional hard offset shadows.
- **The remaining 20%, split evenly between:**
  - Tactile interactions: satisfying but restrained press, hover, and focus feedback.
  - Maximalist artwork: expressive geometric compositions, oversized type, and striking visual moments.
  - Y2K details: tiny technical labels, futuristic micro-details, and selective nostalgic accents.

## Colour and typography
Build a coherent palette around warm paper or cream, near-black, vivid red, electric blue, and a controlled yellow accent. Use colour with intention; do not make every section equally loud. Adapt the palette to the project's context without losing the recognisable character. Use confident display typography, highly readable text, and monospaced details where appropriate.

## Design principles
1. First understand the project's purpose, audience, medium, existing content, structure, and technical constraints.
2. Adapt the design language to the project. Do not blindly apply website-specific patterns to apps, games, documents, or other formats.
3. Preserve my identity, content, data, wording, links, and working features unless I ask you to change them. Never invent facts or features.
4. Establish a consistent system for colour, typography, spacing, shapes, layout, and interactions.
5. Balance visual impact with usability, accessibility, readability, responsiveness, and performance.
6. Use expressive geometry and graphic details with purpose. Avoid clutter and random decoration.
7. Avoid generic AI-looking gradients, excessive glassmorphism, needless effects, emoji icons, and trend imitation without purpose.
8. Work within the project's existing tools and constraints; avoid unnecessary dependencies or complexity.

## How to work
- Briefly explain how Neo-Constructivist Pop will translate to this specific project.
- Then create or implement the requested work in the available format and tools—not merely a description or mockup.
- Make sound creative decisions independently when details are unspecified; ask only when a missing detail genuinely blocks progress.
- Check the result against real use cases, relevant sizes, states, screens, pages, and edge cases.
- Finish with a concise summary of what was created or changed and any remaining limitations.

**Creative north star:** Swiss discipline is the foundation; brutalist confidence gives it character; tactile details, maximalist expression, and Y2K references add controlled energy. Make it unmistakably Neo-Constructivist Pop, while making it unmistakably right for this project.`;
const list=document.querySelector("#resource-list");
if(!list)return;
const safePrompt=prompt.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
list.innerHTML=`
  <article class="resource-entry" id="neo-constructivist-pop">
    <div class="resource-entry-head">
      <span>ONE UNIVERSAL PROMPT / ANY PROJECT / ANY AGENT</span>
      <h2>Neo-Constructivist<br><em>Pop.</em></h2>
      <p>Copy the prompt and give it to any AI agent with the project you want to transform.</p>
    </div>
    <section class="resource-section">
      <div class="resource-label">01 / COPY PROMPT</div>
      <div class="resource-main">
        <div class="code-card">
          <div class="code-head"><span>NEO-CONSTRUCTIVIST-POP.TXT</span><button type="button" data-copy-prompt>COPY PROMPT</button></div>
          <pre id="neo-style-prompt">${safePrompt}</pre>
        </div>
      </div>
    </section>
  </article>`;
const button=list.querySelector("[data-copy-prompt]");
button.addEventListener("click",async()=>{
  const original="COPY PROMPT";
  try{await navigator.clipboard.writeText(prompt);button.textContent="COPIED";}
  catch{
    const area=document.createElement("textarea");area.value=prompt;area.setAttribute("readonly","");
    area.style.position="fixed";area.style.opacity="0";document.body.appendChild(area);area.select();
    const copied=document.execCommand("copy");area.remove();button.textContent=copied?"COPIED":"SELECT TEXT";
  }
  window.setTimeout(()=>button.textContent=original,1600);
});
const bar=document.querySelector(".scroll-line span");
function updateScroll(){if(!bar)return;const max=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+Math.max(0,Math.min(1,scrollY/max))+")";}
addEventListener("scroll",updateScroll,{passive:true});updateScroll();
})();