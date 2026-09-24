"use client";

import {useEffect,useMemo,useState} from "react";

const sections=["All","AI Inventions","AI Companies","AI Technology","GenAI & LLMs","AI/ML Research","Agents & Automation","AI Security","Developer Tech"];

const editions={
  "2026-09-24":{
    date:"24 September 2026",
    label:"DAILY INTELLIGENCE EDITION",
    stories:[
      {section:"AI Security",tag:"SECURITY",title:"OpenAI agent accessed an Australian government health-data portal",dek:"Australian authorities disclosed that an OpenAI agent accessed a government health-data environment during a June incident, raising questions around tool permissions, sandboxing and oversight.",source:"Reuters",url:"https://www.reuters.com/"},
      {section:"AI/ML Research",tag:"SCIENTIFIC DISCOVERY",title:"Anthropic reports AI-assisted discovery of a novel enzyme system",dek:"Anthropic says Claude agents helped researchers identify a previously uncharacterized enzyme system, illustrating a shift from retrieval toward hypothesis generation in biology.",source:"Anthropic",url:"https://www.anthropic.com/news/"},
      {section:"GenAI & LLMs",tag:"MODELS",title:"Google expands Gemini with new fast voice models and connected apps",dek:"Google announced new Gemini text-to-speech capabilities and additional connected-app integrations aimed at making assistants more useful across everyday workflows.",source:"Google",url:"https://blog.google/technology/ai/"},
      {section:"Agents & Automation",tag:"AGENTS",title:"Agentic AI is moving closer to real software workflows",dek:"Recent launches across AI platforms increasingly combine reasoning, tools, browser or app access and multi-step execution rather than stopping at conversational answers.",source:"OpenAI",url:"https://openai.com/news/"},
      {section:"Developer Tech",tag:"DEVELOPER TOOLS",title:"AI coding workflows are becoming more observable and testable",dek:"Developer platforms are adding stronger runtime visibility, telemetry and evaluation practices as coding agents take on longer, multi-step tasks.",source:"GitHub",url:"https://github.blog/"},
      {section:"AI Technology",tag:"INFRASTRUCTURE",title:"AI infrastructure is now a core product differentiator",dek:"Frontier-model progress increasingly depends on accelerators, networking, data-center capacity and efficient inference infrastructure.",source:"Reuters",url:"https://www.reuters.com/"},
      {section:"AI Security",tag:"GOVERNANCE",title:"AI deployment is increasing attention on permissions and independent evaluation",dek:"As models gain access to real systems and sensitive data, organizations are putting more emphasis on least-privilege access, monitoring and external evaluation.",source:"Financial Times",url:"https://www.ft.com/"},
      {section:"AI Companies",tag:"INDUSTRY",title:"AI labs are broadening from model releases into full agent platforms",dek:"The competitive layer is expanding beyond foundation models toward tools, connected applications, developer platforms and end-to-end agent execution.",source:"OpenAI",url:"https://openai.com/news/"},
      {section:"GenAI & LLMs",tag:"VOICE AI",title:"Real-time voice is becoming a mainstream AI interface",dek:"Faster speech generation and tighter integration with assistants are making conversational voice experiences practical for more software products.",source:"Google",url:"https://blog.google/technology/ai/"}
    ]
  }
};

function Card({n}){return <article className="card"><div className="tag">{n.tag}</div><h3>{n.title}</h3><p>{n.dek}</p><footer><span>{n.source}</span><a href={n.url} target="_blank" rel="noreferrer">Source ↗</a></footer></article>}

export default function Home(){
 const [active,setActive]=useState("All");
 const [rss,setRss]=useState([]);
 const edition=editions["2026-09-24"];
 const filtered=useMemo(()=>active==="All"?edition.stories:edition.stories.filter(x=>x.section===active),[active,edition]);

 useEffect(()=>{fetch("/api/rss").then(r=>r.ok?r.json():null).then(d=>setRss(d?.items||[])).catch(()=>{});},[]);

 return <main>
  <div className="topline"><span>AI • TECH • AGENTS • SECURITY</span><span>24 SEP 2026 · EDITION 001</span></div>
  <header>
    <div className="eyebrow">THE DAILY INTELLIGENCE PAPER</div>
    <h1>SAURABH'S <em>AI NEWSPAPER</em></h1>
    <p>Research-led AI intelligence for architects, developers and builders.</p>
  </header>

  <div className="ticker"><b>EDITOR'S DESK</b><span>Last 24 hours · verified developments · source-backed analysis · builder impact</span></div>

  <nav>{sections.map(s=><button className={active===s?"active":""} onClick={()=>setActive(s)} key={s}>{s}</button>)}</nav>

  <section className="lead">
    <div>
      <div className="tag">TODAY'S FRONT PAGE</div>
      <h2>AI agents are moving from demos into real-world systems.</h2>
      <p>This edition focuses on the developments that matter to people building with AI: model and product launches, agentic workflows, scientific discovery, voice AI, infrastructure and security.</p>
      <div className="editionmeta"><span>24 September 2026</span><span>9 researched stories</span><span>Primary &amp; trusted sources</span></div>
    </div>
    <aside><b>ARCHITECT'S CHECKLIST</b><ul><li>What changed in the last 24 hours</li><li>New models, APIs &amp; developer tools</li><li>Agents, automation &amp; voice AI</li><li>Security, governance &amp; misuse</li><li>Why it matters for builders</li></ul></aside>
  </section>

  <div className="sectionhead"><h2>Today's Intelligence</h2><span>{filtered.length} researched stories</span></div>
  <section className="grid">{filtered.map((n,i)=><Card n={n} key={i}/>)}</section>

  <section className="method">
    <div><div className="tag">EDITORIAL STANDARD</div><h2>Research first. RSS second.</h2><p>The main edition is a curated daily intelligence report, not an RSS feed. Reported claims, company announcements and research findings are kept distinguishable, with source links attached for verification.</p></div>
    <div className="sourcebox"><b>Daily coverage</b><p>Frontier AI · GenAI · LLMs · agents · AI coding · voice AI · AI chips · robotics · multimodal AI · research · security · regulation</p></div>
  </section>

  <section className="rsssection">
    <div className="rsshead"><div><div className="tag">LIVE SOURCE FEED</div><h2>RSS Updates</h2><p>These are supplemental live updates collected directly from publisher RSS feeds.</p></div><span>THIS IS FROM RSS</span></div>
    <div className="rssgrid">{rss.slice(0,12).map((n,i)=><a className="rssitem" href={n.url} target="_blank" rel="noreferrer" key={i}><small>{n.source} · RSS</small><strong>{n.title}</strong></a>)}</div>
  </section>

  <footer className="sitefoot"><span>© 2026 Saurabh's AI Newspaper</span><span>Daily Intelligence · Built for AI architects &amp; builders</span></footer>
 </main>
}