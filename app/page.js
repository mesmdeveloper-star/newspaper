"use client";
import {useEffect,useState} from "react";
const sections=["All","AI Inventions","AI Companies","AI Technology","GenAI & LLMs","AI/ML Research","Agents & Automation","AI Security","Developer Tech"];
const seed=[
{section:"AI Inventions",tag:"FRONTIER AI",title:"AI systems are moving from chat to action",dek:"The latest generation of agents increasingly combines reasoning, tools, browser interaction and voice to complete multi-step tasks.",source:"OpenAI",url:"https://openai.com/news/"},
{section:"AI Technology",tag:"CHIPS",title:"Alibaba unveils a new AI chip and larger-model roadmap",dek:"Alibaba announced its Zhenwu V900 accelerator and plans for next-generation models, highlighting the race across the full AI stack.",source:"Reuters",url:"https://www.reuters.com/business/retail-consumer/alibaba-plans-ai-model-with-5-trillion-10-trillion-parameters-unveils-new-chip-2026-09-22/"},
{section:"GenAI & LLMs",tag:"MODELS",title:"Gemini 3.8 Live pushes real-time voice reasoning",dek:"Google says its latest Live models improve near-real-time dialogue, reasoning and visual grounding for voice-agent experiences.",source:"Google",url:"https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-extended-thinking/"},
{section:"AI/ML Research",tag:"RESEARCH",title:"AI-assisted research is accelerating scientific workflows",dek:"Frontier-model labs are increasingly publishing work on coding agents, mathematical reasoning and scientific discovery.",source:"OpenAI Research",url:"https://openai.com/research/index/"},
{section:"AI Security",tag:"SECURITY",title:"AI misuse and autonomous cyber capability remain a major risk",dek:"Recent threat-intelligence reports describe increasingly agentic misuse, model distillation and AI-assisted cyber operations.",source:"Anthropic",url:"https://www.anthropic.com/threat-intelligence-report-september-2026"},
{section:"AI Companies",tag:"INDUSTRY",title:"Frontier labs are expanding independent evaluation",dek:"Anthropic announced a partnership with Accenture for embedded frontier-model evaluation, red-teaming and alignment assessments.",source:"Anthropic",url:"https://www.anthropic.com/news/accenture-embedded-evaluation"},
{section:"Agents & Automation",tag:"AGENTS",title:"The AI industry is shifting toward systems that execute",dek:"Agents are increasingly being designed to browse, call tools, operate software and complete workflows rather than only generate answers.",source:"OpenAI",url:"https://openai.com/news/"},
{section:"Developer Tech",tag:"BUILD",title:"Voice, coding and tool-use APIs are becoming core AI infrastructure",dek:"Developers are getting richer primitives for voice, agents, tool calling, evaluation and production AI systems.",source:"OpenAI",url:"https://openai.com/news/"}
];
function Card({n}){return <article className="card"><div className="tag">{n.tag}</div><h3>{n.title}</h3><p>{n.dek}</p><footer><span>{n.source}</span><a href={n.url} target="_blank" rel="noreferrer">Source ↗</a></footer></article>}
export default function Home(){
 const [active,setActive]=useState("All"),[items,setItems]=useState(seed),[updated,setUpdated]=useState(new Date());
 useEffect(()=>{fetch("/api/news").then(r=>r.ok?r.json():null).then(d=>{if(d?.items?.length){setItems([...d.items,...seed]);setUpdated(new Date())}}).catch(()=>{});},[]);
 const filtered=active==="All"?items:items.filter(x=>x.section===active);
 return <main>
  <div className="topline"><span>AI • TECH • AGENTS • SECURITY</span><span>DAILY EDITION · {updated.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}</span></div>
  <header><div className="eyebrow">THE DAILY INTELLIGENCE PAPER</div><h1>SAURABH'S <em>AI NEWSPAPER</em></h1><p>What changed in AI, what matters, and what builders should watch next.</p></header>
  <div className="ticker"><b>BREAKING AI</b><span>Latest inventions · company moves · new AI technology · GenAI & ML research · agents · security</span></div>
  <nav>{sections.map(s=><button className={active===s?"active":""} onClick={()=>setActive(s)} key={s}>{s}</button>)}</nav>
  <section className="lead"><div><div className="tag">TODAY'S FRONT PAGE</div><h2>AI is becoming an operating layer for software, research and business.</h2><p>The newspaper tracks the fast-moving AI stack—from frontier models and chips to agents, developer platforms, scientific research, security incidents and practical implementation patterns.</p></div><aside><b>ARCHITECT'S CHECKLIST</b><ul><li>Model & capability changes</li><li>New APIs and developer tools</li><li>Agent frameworks & automation</li><li>Security and misuse</li><li>Research worth reading</li></ul></aside></section>
  <div className="sectionhead"><h2>Latest Dispatches</h2><span>{filtered.length} stories</span></div>
  <section className="grid">{filtered.map((n,i)=><Card n={n} key={i}/>)}</section>
  <section className="method"><div><div className="tag">EDITORIAL STANDARD</div><h2>Facts first. Sources attached.</h2><p>Stories are designed to distinguish company announcements, research findings and reported developments. Each item links back to its source so readers can verify the underlying claim.</p></div><div className="sourcebox"><b>Coverage</b><p>Frontier AI · GenAI · LLMs · ML · agents · AI chips · robotics · multimodal AI · developer platforms · research · security · regulation</p></div></section>
  <footer className="sitefoot"><span>© {new Date().getFullYear()} Saurabh's AI Newspaper</span><span>Built for AI architects & builders</span></footer>
 </main>
}