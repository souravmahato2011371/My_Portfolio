(()=>{"use strict";

/*
  =========================
  ADD YOUR RESOURCES HERE
  =========================

  You only need to fill the fields you want.

  VIDEO ONLY:
    video: "https://youtu.be/VIDEO_ID"

  VIDEO + PROMPT:
    video: "...",
    prompt: `your prompt here`

  VIDEO + CODE:
    video: "...",
    code: { language: "javascript", filename: "script.js", content: `your code here` }

  You can also use:
    commands: [{name:"Install",content:"npm install"}]
    links: [{label:"GitHub",url:"https://github.com/..."}]

  Leave anything you don't need out. Empty sections are automatically hidden.
*/

const resources=[
  {
    number:"01",
    title:"Website from a survey",
    description:"The prompt used in the video.",
    video:"", // Paste the YouTube link here when the video is published.
    prompt:`In hinglish, survey me and make a suitable website that suits the results of the survey. Deploy it on my github repo "{NAME_OF_REPO}". Directly deploy in the main branch, make the site so responsive and smooth without compromising. Don't limit yourself in just index.html, make the files that stable hosting on github pages need.`
  },

  {
    number:"02",
    title:"Your next resource",
    description:"Example: a video with a piece of code.",
    video:"",
    code:{
      language:"javascript",
      filename:"example.js",
      content:`// Paste the exact code from your video here.
console.log("Hello, CGX30");`
    }
  }

  // Add resource 03, 04, 05... below.
];

const list=document.querySelector("#resource-list");
const bar=document.querySelector(".scroll-line span");

function escapeHTML(value=""){
  return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
function youtubeId(url=""){
  const match=String(url).match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([A-Za-z0-9_-]{6,})/);
  return match?match[1]:"";
}
function videoBlock(url){
  const id=youtubeId(url);
  if(!id) return `<div class="video-shell"><div class="video-placeholder"><span>VIDEO</span><strong>Video link<br>coming soon.</strong><small>Add the YouTube link in resources.js</small></div></div>`;
  return `<div class="video-shell"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="Video resource" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`;
}
function section(number,label,content){
  return `<section class="resource-section"><div class="resource-label">${number} / ${label}</div><div class="resource-main">${content}</div></section>`;
}
function codeBlock(code,index){
  const id=`code-${index}`;
  return `<div class="code-card"><div class="code-head"><span>${escapeHTML(code.filename||"code.txt")} · ${escapeHTML(code.language||"text")}</span><button data-copy="${id}">COPY</button></div><pre id="${id}">${escapeHTML(code.content||"")}</pre></div>`;
}
function commandsBlock(commands,index){
  return `<div class="command-list">${commands.map((x,i)=>`<div class="command-item"><div><small>${escapeHTML(x.name||"COMMAND")}</small><pre id="cmd-${index}-${i}">${escapeHTML(x.content||"")}</pre></div><button data-copy="cmd-${index}-${i}">COPY</button></div>`).join("")}</div>`;
}
function linksBlock(links){
  return `<div class="link-grid">${links.map(x=>`<a href="${escapeHTML(x.url||"#")}" target="_blank" rel="noopener noreferrer"><span>${escapeHTML(x.label||x.url||"LINK")}</span><b>↗</b></a>`).join("")}</div>`;
}
function render(){
  if(!resources.length){list.innerHTML='<div class="empty-resource">No resources added yet.</div>';return}
  list.innerHTML=resources.map((r,i)=>{
    const n=String(r.number||String(i+1).padStart(2,"0"));
    let out=`<article class="resource-entry" id="resource-${n}"><div class="resource-entry-head"><span>RESOURCE ${n}</span><h2>${escapeHTML(r.title||"Untitled resource")}</h2><p>${escapeHTML(r.description||"")}</p></div>`;
    let part=1;
    if(r.video) out+=section(String(part++).padStart(2,"0"),"VIDEO",videoBlock(r.video));
    if(r.prompt) out+=section(String(part++).padStart(2,"0"),"PROMPT",`<div class="resource-heading">Prompt used<br><em>in the video.</em></div><p class="resource-note">The exact text used for this resource.</p>${codeBlock({filename:"prompt.txt",language:"text",content:r.prompt},`prompt-${i}`) }`);
    if(r.code) out+=section(String(part++).padStart(2,"0"),"CODE",`<div class="resource-heading">Code &<br><em>snippets.</em></div><p class="resource-note">Copy the code directly from here.</p>${codeBlock(r.code,`main-${i}`) }`);
    if(r.commands?.length) out+=section(String(part++).padStart(2,"0"),"COMMANDS",`<div class="resource-heading">Useful<br><em>commands.</em></div>${commandsBlock(r.commands,i)}`);
    if(r.links?.length) out+=section(String(part++).padStart(2,"0"),"LINKS",`<div class="resource-heading">Useful<br><em>links.</em></div>${linksBlock(r.links)}`);
    return out+"</article>";
  }).join("");
}
function updateScroll(){const max=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+Math.max(0,Math.min(1,scrollY/max))+")"}
document.addEventListener("click",async e=>{
 const button=e.target.closest("[data-copy]");if(!button)return;
 const el=document.getElementById(button.dataset.copy);if(!el)return;
 try{await navigator.clipboard.writeText(el.textContent);const old=button.textContent;button.textContent="COPIED";setTimeout(()=>button.textContent=old,1400)}
 catch{button.textContent="SELECT & COPY";setTimeout(()=>button.textContent="COPY",1400)}
});
render();addEventListener("scroll",updateScroll,{passive:true});updateScroll();
})();