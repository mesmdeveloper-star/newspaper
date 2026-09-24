"use client";

import {useMemo,useState} from "react";

const sections=["All","Front Page","Models","Agents","Developer","Research","Security","Robotics","IoT & Edge","Big AI","Policy"];

const stories=[
 {section:"Security",tag:"AGENT SECURITY",color:"red",title:"AI agents are moving into real systems — and permissions are becoming the new security boundary",dek:"Australia's disclosure of an OpenAI agent accessing a government health-data environment puts identity, tool permissions, sandboxing and auditability at the centre of agent architecture.",source:"ABC News",url:"https://www.abc.net.au/news/2026-09-24/ai-agent-accessed-australian-government-site-pm-says/107189078"},
 {section:"Models",tag:"MODEL WATCH",color:"blue",title:"OpenAI launches GPT-6 Sol and Luna",dek:"OpenAI introduced two GPT-6 variants positioned around different capability, speed and cost profiles, reinforcing the shift toward model routing by workload.",source:"OpenAI",url:"https://openai.com/index/introducing-gpt-6-sol-and-luna/"},
 {section:"Research",tag:"AI + SCIENCE",color:"green",title:"Claude agents help identify a previously uncharacterized enzyme system",dek:"Anthropic reports that Claude agents searched biological data, generated hypotheses and narrowed candidates for laboratory investigation around a system with CRISPR-like repeats.",source:"Anthropic",url:"https://www.anthropic.com/news/claude-discovers-novel-enzyme-system"},
 {section:"Agents",tag:"AGENTIC AI",color:"purple",title:"AI agents are becoming infrastructure, not just chatbot features",dek:"Hosted execution, isolated sessions, tool access and long-running workflows are turning agents into a new application runtime with identity, policy and observability requirements.",source:"Microsoft",url:"https://devblogs.microsoft.com/agent-framework/foundry-hosted-agent-isolation-with-microsoft-agent-framework/"},
 {section:"Developer",tag:"AI CODING",color:"orange",title:"Coding agents are moving from autocomplete toward software execution",dek:"The direction is shifting from code suggestions toward agents that understand repositories, modify code, run tests, debug failures and operate across development tools.",source:"OpenAI",url:"https://help.openai.com/en/articles/6825453-chatgpt-release-notes"},
 {section:"Robotics",tag:"PHYSICAL AI",color:"teal",title:"NVIDIA brings agentic development deeper into robotics",dek:"Isaac ROS 5.0 adds agentic capabilities to the ROS ecosystem and expands the tooling available for building and optimizing physical-AI systems.",source:"NVIDIA",url:"https://blogs.nvidia.com/blog/isaac-ros-5-0-agentic-open-source-robotics/"},
 {section:"IoT & Edge",tag:"EDGE AI",color:"cyan",title:"AI + IoT is converging around local intelligence",dek:"Wearables, robotics and edge systems are increasingly combining sensors, local inference and agents so decisions can happen closer to the physical world.",source:"NVIDIA",url:"https://developer.nvidia.com/blog/accelerating-a-ros-2-node-with-an-ai-agent-and-nvidia-isaac-ros/"},
 {section:"Big AI",tag:"GOOGLE",color:"blue",title:"Google expands Gemini around voice, connected apps and private memory",dek:"Google's current direction combines multimodal interaction with connected applications and privacy-oriented infrastructure for persistent AI context.",source:"Google DeepMind",url:"https://deepmind.google/models/model-cards/"},
 {section:"Big AI",tag:"META",color:"pink",title:"Meta pushes personal AI beyond the screen with AI glasses",dek:"Meta is connecting its Muse personal AI direction with AI glasses, moving assistants toward ambient, hands-free interaction.",source:"Meta",url:"https://about.fb.com/news/2026/09/introducing-ray-ban-meta-audio-glasses-new-styles-plus-muse/"},
 {section:"Research",tag:"RESEARCH → AGENT",color:"green",title:"Paper2Agent turns research resources into interactive AI agents",dek:"The Nature paper presents a framework for converting research papers, code and datasets into agent-accessible workflows — a step beyond simply chatting with documents.",source:"Nature",url:"https://www.nature.com/articles/s41586-026-11044-y"},
 {section:"Security",tag:"MCP SECURITY",color:"red",title:"MCP infrastructure is emerging as a new agent attack surface",dek:"Recent security research has identified exposed MCP services and potential network-boundary risks, highlighting the need for isolated tools, scoped credentials and monitoring.",source:"OX Security / reporting",url:"https://www.unite.ai/ox-security-finds-mcp-servers-reaching-china-russia-and-home-networks/"},
 {section:"Policy",tag:"GOVERNANCE",color:"gold",title:"AI governance is becoming an engineering concern",dek:"As AI systems gain access to data, tools and production environments, compliance increasingly overlaps with model inventory, evaluation, permissions, monitoring and incident response.",source:"European Commission",url:"https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"}
];

function Card({n,featured=false}){return <article className={`card ${featured?"featured":""}`}><div className={`tag ${n.color}`}>{n.tag}</div><h3>{n.title}</h3><p>{n.dek}</p><footer><span>{n.source}</span><a href={n.url} target="_blank" rel="noreferrer">Read source ↗</a></footer></article>}

export default function Home(){
 const [active,setActive]=useState("All");
 const filtered=useMemo(()=>active==="All"?stories:stories.filter(x=>x.section===active),[active]);

 return <main>
  <div className="utility"><span>AI • TECH • AGENTS • SECURITY • SCIENCE • ROBOTICS</span><span>THURSDAY · 24 SEPTEMBER 2026 · EDITION 001</span></div>

  <header className="masthead">
   <div className="cityline">THE DAILY AI INTELLIGENCE PAPER</div>
   <h1>SAURABH'S <span>AI NEWSPAPER</span></h1>
   <p>What changed in AI in the last 24 hours — researched, verified and explained for builders.</p>
  </header>

  <div className="breaking"><b>BREAKING AI INTELLIGENCE</b><span>Models · Agents · Research · Security · Developer Tech · Robotics · IoT · Infrastructure · Policy</span></div>

  <nav className="sections">{sections.map(s=><button className={active===s?"active":""} onClick={()=>setActive(s)} key={s}>{s}</button>)}</nav>

  <section className="frontpage">
   <div className="hero">
    <div className="tag red">FRONT PAGE · BIG STORY</div>
    <h2>AI is moving from <i>answering</i> to <i>acting</i> — and the security architecture is struggling to keep up</h2>
    <p className="heroDek">The industry's biggest shift is no longer just better models. Agents are gaining access to tools, data, software and physical interfaces. That changes the core architecture from model safety to end-to-end control.</p>
    <div className="heroFacts"><span><b>12</b> researched stories</span><span><b>24h</b> research window</span><span><b>0</b> RSS dependency</span></div>
   </div>
   <aside className="frontbox">
    <div className="tag blue">TODAY'S SIGNALS</div>
    <div className="signal"><b>01</b><span>Frontier models are becoming workload routers.</span></div>
    <div className="signal"><b>02</b><span>Agents are acquiring real system access.</span></div>
    <div className="signal"><b>03</b><span>AI is entering science and robotics.</span></div>
    <div className="signal"><b>04</b><span>MCP and agent identity are security concerns.</span></div>
    <div className="signal"><b>05</b><span>Edge AI is moving intelligence closer to devices.</span></div>
   </aside>
  </section>

  <div className="paperRule"><h2>{active==="All"?"Today's Intelligence":active}</h2><span>{filtered.length} stories · source-backed</span></div>

  <section className="newsgrid">{filtered.map((n,i)=><Card n={n} featured={i===0 && active!=="All"} key={n.title}/>)}</section>

  <section className="architect">
   <div className="architectMain"><div className="tag purple">SAURABH'S ARCHITECT DESK</div><h2>The stack is changing</h2><p>Production AI is increasingly a system, not a model. The emerging architecture connects reasoning with memory, tools, identity, policy, observability and evaluation.</p>
    <div className="stack"><span>MODEL</span><b>→</b><span>AGENT</span><b>→</b><span>MEMORY</span><b>→</b><span>TOOLS</span><b>→</b><span>IDENTITY</span><b>→</b><span>ACTION</span></div>
   </div>
   <div className="watch"><div className="tag orange">FUTURE WATCH</div><h3>5 areas to watch</h3><ol><li>Agent identity & permissions</li><li>Persistent private memory</li><li>Executable research knowledge</li><li>Physical AI & robotics</li><li>Edge-native AI agents</li></ol></div>
  </section>

  <section className="impact">
   <div><div className="tag green">DEVELOPER IMPACT</div><h2>What changes for builders?</h2></div>
   <div className="impactGrid"><div><b>OLD</b><p>Prompt → Model → Answer</p></div><div><b>NOW</b><p>Agent → Tools → Data → Action</p></div><div><b>NEXT</b><p>Agent → Software → Devices → Physical world</p></div></div>
  </section>

  <section className="method">
   <div><div className="tag gold">EDITORIAL STANDARD</div><h2>Research first. No RSS.</h2><p>Every edition is built from fresh research across primary announcements, research publications and reliable reporting. Company claims are attributed, uncertain claims are labelled, and older material is used only when it explains a current development.</p></div>
   <div className="coverage"><b>DAILY RESEARCH MAP</b><p>Models · Companies · Agents · Coding · Research · Science · Security · Robotics · IoT · Edge AI · Voice · Infrastructure · Business · Policy · Benchmarks</p></div>
  </section>

  <footer className="sitefoot"><span>© 2026 Saurabh's AI Newspaper</span><span>Research-led · Source-backed · Built for AI architects & builders</span></footer>
 </main>
}
