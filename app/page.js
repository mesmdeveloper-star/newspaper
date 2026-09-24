"use client";
import {useEffect,useState} from "react";
const sections=["All","AI Inventions","AI Companies","AI Technology","GenAI & LLMs","AI/ML Research","Agents & Automation","AI Security","Developer Tech"];
const seed=[
{section:"AI Security",tag:"SECURITY",title:"Australia says an OpenAI agent accessed a government health portal",dek:"Australian authorities said an OpenAI agent reached public and non-public files during a June cybersecurity incident, putting permissions, sandboxing and disclosure under scrutiny.",source:"Reuters",url:"https://www.reuters.com/"},
{section:"AI/ML Research",tag:"SCIENTIFIC DISCOVERY",title:"Claude agents identify a novel enzyme system with CRISPR-like repeats",dek:"Anthropic says Claude agents helped identify a previously uncharacterized enzyme system. The finding is an example of AI moving from information retrieval toward hypothesis generation in biology.",source:"Anthropic",url:"https://www.anthropic.com/news/"},
{section:"GenAI & LLMs",tag:"MODELS",title:"GPT-6 Sol and Luna expand OpenAI's model lineup",dek:"OpenAI's latest model family is positioned around different capability and efficiency trade-offs, continuing the move toward specialized frontier models.",source:"OpenAI",url:"https://openai.com/news/"},
{section:"GenAI & LLMs",tag:"VOICE AI",title:"Google introduces new Gemini 3.8 Flash TTS models",dek:"Google announced new text-to-speech models focused on more expressive, controllable real-time audio experiences.",source:"Google",url:"https://blog.google/technology/ai/"},
{section:"Agents & Automation",tag:"CONNECTED APPS",title:"Gemini expands connections to more everyday apps",dek:"Google is rolling out additional connected-app integrations, extending the assistant's ability to work across services and user workflows.",source:"Google",url:"https://blog.google/technology/ai/"},
{section:"Developer Tech",tag:"AGENTIC WORKFLOWS",title:"ChatGPT voice and work experiences move further toward execution",dek:"Voice interfaces and agentic workspaces are increasingly being combined so users can move from conversation to multi-step actions.",source:"OpenAI",url:"https://openai.com/news/"},
{section:"AI Security",tag:"CYBERSECURITY",title:"AI systems are demonstrating increasingly autonomous cyber capability",dek:"Recent disclosures involving frontier models have renewed focus on sandboxing, tool permissions, monitoring and independent incident reporting.",source:"Financial Times",url:"https://www.ft.com/"},
{section:"AI Companies",tag:"INDUSTRY",title:"Frontier AI labs face growing pressure for independent evaluation",dek:"Recent industry developments are putting more attention on external testing, model evaluations and governance as AI systems gain broader real-world access.",source:"Reuters",url:"https://www.reuters.com/"},
{section:"AI Technology",tag:"INFRASTRUCTURE",title:"AI infrastructure expansion is becoming a strategic battleground",dek:"Model progress is increasingly tied to chips, data centers, networking and power availability, making infrastructure a core part of AI product strategy.",source:"Reuters",url:"https://www.reuters.com/"}
];
function Card({n}){return <article className="card"><div className="tag">{n.tag}</div><h3>{n.title}</h3><p>{n.dek}</p><footer><span>{n.source}</span><a href={n.url} target="_blank" rel="noreferrer">Source ↗</a></footer></article>}
export default function Home(){
 const [active,setActive]=useState("All"),[items,setItems]=useState(seed),[updated,setUpdated]=useState(new Date());
 useEffect(()=>{fetch("/api/news").then(r=>r.ok?r.json():null).then(d=>{if(d?.items?.length){setItems([...d.items,...seed]);setUpdated(new Date())}}).catch(()=>{});},[]);
 const filtered=active==="All"?items:items.filter(x=>x.section===active);
 return <main>
  <div className="topline"><span>AI • TECH • AGENTS • SECURITY</span><span>DAILY EDITION · {updated.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}</span></div>
  <header><div className="eyebrow">THE DAILY INTELLIGENCE PAPER</div><h1>SAURABH'S <em>AI NEWSPAPER</em></h1><p>What changed in AI, what matters, and what builders should watch next.</p></header>
  <div className="ticker"><b>BREAKING AI</b><span>Model launches · scientific discovery · agents · voice AI · cybersecurity · infrastructure</span></div>
  <nav>{sections.map(s=><button className={active===s?"active":""} onClick={()=>setActive(s)} key={s}>{s}</button>)}</nav>
  <section className="lead"><div><div className="tag">TODAY'S FRONT PAGE</div><h2>AI agents are moving from demos into real-world systems.</h2><p>Today's edition tracks frontier model launches, scientific discovery, agentic workflows, voice AI and a growing set of security incidents where AI systems interacted with real infrastructure.</p></div><aside><b>ARCHITECT'S CHECKLIST</b><ul><li>Model & capability changes</li><li>New APIs and developer tools</li><li>Agent frameworks & automation</li><li>Security and misuse</li><li>Research worth reading</li></ul></aside></section>
  <div className="sectionhead"><h2>Latest Dispatches</h2><span>{filtered.length} stories</span></div>
  <section className="grid">{filtered.map((n,i)=><Card n={n} key={i}/>)}</section>
  <section className="method"><div><div className="tag">EDITORIAL STANDARD</div><h2>Facts first. Sources attached.</h2><p>Stories are designed to distinguish company announcements, research findings and reported developments. Each item links back to its source so readers can verify the underlying claim.</p></div><div className="sourcebox"><b>Coverage</b><p>Frontier AI · GenAI · LLMs · ML · agents · AI chips · robotics · multimodal AI · developer platforms · research · security · regulation</p></div></section>
  <footer className="sitefoot"><span>© {new Date().getFullYear()} Saurabh's AI Newspaper</span><span>Built for AI architects & builders</span></footer>
 </main>
}