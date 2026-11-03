(()=>{"use strict";
const prompt = `Apply **Neo-Constructivist Pop** as the visual and interaction design language for this project. This is a reusable design direction for **any kind of project**—website, app, software interface, game, brand identity, presentation, publication, dashboard, product, or something else. Adapt the system to the medium and purpose. Do not turn every project into a website.

# NEO-CONSTRUCTIVIST POP

## Core design DNA
A contemporary, expressive design language built on Swiss clarity, Constructivist geometry, confident Pop colour, and carefully controlled digital nostalgia.

Use this balance:
- **60% Swiss modernism:** rigorous grids, alignment, editorial hierarchy, functional clarity, disciplined spacing, and purposeful negative space.
- **20% brutalist influence:** bold geometry, visible structure, strong contrast, crisp outlines, direct layouts, and occasional hard offset shadows.
- **20% expressive accents, divided evenly:** tactile interactions, maximalist visual moments, and selective Y2K-inspired details. These are accents—not competing design systems.

The result should feel structured but energetic, intelligent but playful, bold but usable.

## Colour system
Build a coherent palette around:
- Warm paper / soft cream as the main neutral.
- Near-black for structure, text, and contrast.
- Vivid signal red as the primary expressive accent.
- Electric or cobalt blue as a secondary accent.
- Bright yellow as a controlled highlight.

Use colour purposefully. Establish clear roles and contrast; do not make every surface loud. Adapt the palette to the project's context while retaining the recognisable Neo-Constructivist Pop character. Do not force cream backgrounds onto products where another base is more appropriate.

## Typography
Use expressive, confident display typography paired with highly readable text. Add a monospaced face for technical labels, metadata, captions, or small interface details where appropriate. Create a clear hierarchy through scale, weight, spacing, and alignment. Typography should feel intentional, not randomly oversized.

## Shape, layout, and composition
- Prefer strong grids, asymmetry with purpose, geometric blocks, circles, bars, rules, and clear alignment.
- Use crisp borders, squared or deliberately geometric corners, and occasional hard-edged shadows.
- Create memorable compositions through scale, cropping, overlap, rhythm, and negative space.
- Use oversized type and graphic forms only when they improve the concept or hierarchy.
- Keep layouts coherent, legible, and appropriate to the project's actual content and use.

## Interaction and motion
Where the medium supports interaction, make controls feel tactile and responsive through subtle press, hover, focus, and state feedback. Use purposeful, lightweight motion—not decoration for its own sake. Respect accessibility needs, keyboard navigation, reduced-motion settings, and clear focus states.

## Graphic language
Create original geometric motifs and visual assets that feel like part of one system. Use icons consistently; prefer clean custom or SVG-style iconography where suitable. Avoid emoji as interface icons. Do not add random shapes merely to make a screen look busy.

## Rules for applying the style
1. First understand the project's purpose, audience, medium, existing content, technical constraints, and current structure.
2. Adapt Neo-Constructivist Pop to the project; do not blindly apply website-specific patterns to apps, games, documents, or other formats.
3. Preserve the owner's identity, content, data, wording, functionality, and working features unless asked to change them. Never invent facts, features, achievements, or content.
4. Establish reusable design tokens and consistent rules for colour, type, spacing, shape, layout, and interaction.
5. Prioritise usability, accessibility, readability, responsiveness, and performance alongside visual impact.
6. Avoid generic AI-looking gradients, excessive glassmorphism, random decoration, clutter, needless effects, and trend imitation without purpose.
7. Do not introduce unnecessary dependencies, complexity, or technology changes. Work within the project's existing tools and constraints whenever possible.
8. If a requested change cannot be implemented directly, explain the limitation and provide the most practical alternative.

## Working method
- Briefly state how the style will translate to this specific project.
- Then produce the actual requested work in the available format and tools—not merely a description or moodboard.
- Make coherent decisions independently when details are not specified; ask only when a missing detail genuinely blocks progress.
- Check the result against the project's real use cases and constraints. Review relevant states, screens, pages, sizes, and edge cases where applicable.
- Finish with a concise summary of what was created or changed and any remaining limitations.

**Creative north star:** Swiss discipline is the foundation; brutalist confidence gives it character; tactile details, maximalist expression, and Y2K references add controlled energy. Make it unmistakably Neo-Constructivist Pop, while making it unmistakably right for the project. `;
const list=document.querySelector("#resource-list");
if(!list)return;
const safePrompt=prompt.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
list.innerHTML=`
  <section class="resource-section" id="neo-constructivist-pop" aria-label="Neo-Constructivist Pop universal prompt">
    <div class="resource-label">01 / UNIVERSAL STYLE PROMPT</div>
    <div class="resource-main">
      <div class="code-card">
        <div class="code-head"><span>NEO-CONSTRUCTIVIST-POP.TXT</span><button type="button" data-copy-prompt>COPY PROMPT</button></div>
        <pre id="neo-style-prompt">${safePrompt}</pre>
      </div>
    </div>
  </section>`;
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