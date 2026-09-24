# Saurabh's AI Daily — Generation & Publishing Rules

## 1. Core Editorial Mission

Every daily edition should be a broad, current AI newspaper covering the developments that matter to developers, technical leaders, businesses and AI practitioners.

Do not narrow the newspaper to only the largest AI labs. Search broadly across:
- frontier and commercial models
- open-weight and open-source models
- coding agents and developer tools
- agent frameworks and MCP/tooling
- AI infrastructure, inference and cloud
- security and AI incidents
- finance and financial-services AI
- enterprise AI and vertical AI
- voice, multimodal, computer-use and robotics
- AI research and scientific discovery
- biology, DNA/genomics, protein/enzyme discovery and AI-designed therapeutics
- biological safety, misuse and biosecurity incidents involving AI
- generative media
- databases, memory and vector systems
- chips, accelerators and AI economics
- notable product launches, partnerships and deployments

Use current web research for each edition. Prefer primary sources for important claims and use independent reporting when it adds material context.

### Dynamic ecosystem discovery (mandatory)

The newspaper is an **AI intelligence desk**, not a fixed list of provider categories. Do not generate an edition by filling predefined boxes or by checking only OpenAI, Anthropic and Google.

At the start of every edition, perform a broad discovery pass across the AI ecosystem and let the day's evidence determine which beats appear. The rolling taxonomy is a coverage checklist, not a publishing constraint.

The discovery pass must actively look for material developments in:
- foundation models and model updates
- agents, autonomous workflows and computer use
- coding agents and developer platforms
- image, video, 3D, audio, music and generative media
- voice and realtime multimodal systems
- biology, DNA, genomics, proteins, enzymes, drug discovery and wet-lab AI
- healthcare and medical AI
- finance, banking, insurance and financial research
- science and research automation
- cybersecurity, safety, incidents and evaluations
- robotics, humanoids, autonomous vehicles and physical AI
- chips, accelerators, data centers, networking and inference economics
- cloud, deployment, sandboxes and agent infrastructure
- databases, vector search, memory, retrieval and observability
- MCP, connectors, APIs and integration ecosystems
- open-source/open-weight/local AI
- enterprise software and vertical AI deployments
- retail, commerce, logistics, manufacturing, education and government use
- consumer AI products, wearables and AI hardware
- funding, acquisitions, partnerships and major commercial deployments
- policy, regulation, standards and governance when materially relevant
- benchmarks, evaluations, scientific papers and major research results

If a significant story introduces a beat not represented in the taxonomy, create an **EMERGING / NEW BEAT** label rather than excluding it.

### Discovery method

Use multiple discovery queries and source types, including broad searches such as:
- "AI latest" / "artificial intelligence latest" + current date
- "new AI model" / "AI model update" + current date
- "AI agent" / "agentic AI" / "computer use" + current date
- "AI developer" / "SDK" / "MCP" / "coding agent" + current date
- "AI biology" / "AI drug discovery" / "DNA" / "protein" + current date
- "AI robotics" / "physical AI" / "humanoid" + current date
- "AI infrastructure" / "GPU" / "inference" / "data center" + current date
- "AI security" / "AI incident" / "agent security" + current date
- "AI finance" / "financial AI" / "AI healthcare" / "vertical AI" + current date

Use aggregators and trackers for discovery, but verify important stories against primary sources or reputable independent reporting before publication.

### Coverage-gap check

Before publishing, compare the discovered stories against the full ecosystem taxonomy. Ask:
1. Did we search outside the frontier-model vendors?
2. Did we find any important developer, science, biology, security, infrastructure, robotics, media, enterprise or consumer story that deserves inclusion?
3. Did a major story get excluded only because it did not fit a predefined section?
4. Are multiple cards merely repeating the same provider or announcement?
5. Does AI Radar expose the important beats with direct links?

If a major development exists, include it even when it does not fit the usual edition structure. The edition structure is flexible; coverage breadth is mandatory.

## 2A. AI Radar — Detailed Linked Intelligence Map

**AI Radar is a navigation layer, not a short summary sidebar.** Every edition must refresh it from the day's discovery results.

AI Radar should contain approximately 10–16 live signals when news volume supports it. Each signal must have:
- a clear beat name
- a one-sentence current signal describing what is changing
- a direct link to the most relevant primary source or high-quality reporting
- a link that opens the underlying story, release, report, model page, research paper or company announcement

Radar beats should be selected dynamically from the day's actual news. Typical beats include Models, Agents, Coding, Open Source, Developer Tools, Video/Image/3D, Voice/Audio, Biology/Life Sciences, Healthcare, Finance, Cybersecurity, Robotics/Physical AI, Infrastructure/Chips, Enterprise/Vertical AI, Consumer AI/Hardware and Research.

Do not make AI Radar a list of generic evergreen descriptions. A radar item must tell the reader **what changed now** and where to read more. If a beat has no meaningful current development, omit it or mark it as continuing watch rather than inventing activity.

Links in AI Radar must be direct and clickable. Prefer first-party URLs for releases and research; use independent reporting for incidents or context when it is the stronger source.

## 2. Daily Search Flow

Before publishing every edition:

1. Search broad AI news from the current day and recent days.
2. Search the previous 7 days specifically for new model releases and materially changed model versions.
3. Search the previous 7 days specifically for developer releases: SDKs, APIs, CLIs, agents, frameworks, MCP, inference, deployment and observability.
4. Search for AI security incidents, safety evaluations, vulnerabilities and meaningful security research.
5. Search for domain-specific AI launches, including finance, healthcare, legal, retail, customer service, education, science and other enterprise verticals.
6. Search for major open-weight/open-source releases and important checkpoints, model cards, licenses and inference support.
7. Search for multimodal, voice, computer-use and robotics developments.
8. Search specifically for AI + biology/life-sciences developments: DNA/genomics analysis, protein/enzyme discovery, biological foundation models, AI-designed therapeutics, wet-lab agents and meaningful biosecurity incidents or misuse disclosures.
9. Verify important claims against primary sources where possible. For scientific discovery, distinguish vendor/company claims from peer-reviewed or independently validated findings.
10. Build the edition with direct source links and, when useful, an image inside the individual story card.
11. Update the live edition with the current date/time.
12. Preserve the previous dated edition in `archive/YYYY-MM-DD.html`; do not overwrite historical editions.
13. Keep the standalone **“🖼️ Images From Today's AI Coverage”** section removed.
14. Deploy the updated live edition to Railway and verify the deployment before reporting it as live.

## 3. MODEL & OPEN-SOURCE WATCH — Mandatory

Every daily edition MUST include a refreshed **MODEL & OPEN-SOURCE WATCH**.

### New model release scan

Search the previous 7 days for genuinely new or materially updated models. Check, when relevant:
- OpenAI / GPT
- Anthropic / Claude
- Google / Gemini
- Meta / Llama and Muse
- xAI / Grok
- Qwen / Alibaba
- DeepSeek
- Mistral
- NVIDIA
- Microsoft
- Xiaomi / MiMo
- Moonshot / Kimi
- Z.ai / GLM
- MiniMax
- other notable labs and open-model projects

For every qualifying release, capture:
- model/family name
- provider
- release date
- access type: API, hosted, open-weight, open-source, or hybrid
- modalities
- context window when published
- parameter/active-parameter count when relevant
- tool/agent/computer-use capabilities
- pricing when available
- licensing when relevant
- quantization/inference availability for open models
- concise developer impact
- direct primary source/model link

Clearly distinguish:
- **NEW MODEL RELEASE**
- **MODEL UPDATE**
- **DOMAIN-SPECIFIC AI PRODUCT / MODEL APPLICATION**
- **OPEN-WEIGHT / OPEN-SOURCE RELEASE**
- **CONTINUING WATCH**

Do not repeat an old model simply because it remains popular. If no meaningful new model appeared in the lookback window, explicitly say so.

### Domain-specific model and AI product watch

Model coverage must not stop at general-purpose foundation models.

Also track specialized or industry-focused AI systems and launches, including:
- finance / banking / wealth management / insurance
- healthcare / life sciences
- legal
- coding / software engineering
- cybersecurity
- science / research
- customer service / contact center
- sales / marketing
- document intelligence
- voice / speech
- robotics / physical AI
- computer-use systems
- biology / DNA / genomics / protein science
- AI-designed therapeutics and wet-lab automation
- biological safety, misuse and biosecurity

Important example pattern:
- GPT-6 Astra is a general frontier model, but its finance relevance must also be reported when OpenAI launches financial-services capabilities around Astra.
- OpenAI's **ChatGPT for Financial Services**, announced September 10, 2026, combines GPT-6 Astra with built-in financial data for research, financial models, earnings analysis, valuation/LBO work and client materials.
- Anthropic's **Claude for Financial Advisors** and finance-specific Claude workflows/connectors are domain-specific AI developments and should be surfaced even when they are product/workflow launches rather than a separately named foundation-model release.
- When a specialized model is actually released, label it as a model; when the release is a product, agent template, connector, or vertical solution, label it accurately as such.

Finance coverage should watch for:
- financial reasoning models
- finance-specialized benchmarks
- financial-data integrations
- research/earnings analysis agents
- valuation/LBO/model-building agents
- portfolio and wealth-management assistants
- compliance/risk/fraud models
- trading/market-intelligence AI
- Excel/PowerPoint/financial-model tooling
- financial MCP servers/connectors
- regulated-enterprise controls and auditability

Never turn a finance model into investment advice.

### Biology / DNA / life-sciences watch

Every edition should also scan for meaningful AI developments in biological R&D and biosecurity, including:
- DNA and genomic sequence analysis
- protein and enzyme discovery
- biological foundation models
- AI-designed drugs and therapeutics
- wet-lab agents and automated experimentation
- gene-editing research and AI-assisted hypothesis generation
- synthetic-biology tooling
- biological safety evaluations and misuse disclosures
- incidents where AI systems are reported to have materially enabled or attempted high-risk biological activity

Keep three categories separate:
1. **Research discovery:** a model helped identify a hypothesis, sequence, protein or biological mechanism.
2. **Product/R&D platform:** a company launched a biological model, agent, dataset or therapeutic-design workflow.
3. **Biosecurity incident:** a credible source reports misuse, attempted misuse, safeguard failure or other high-risk biological activity involving AI.

Do not provide operational instructions for harmful biological activity. Report incidents at a high level, identify the source, date and status, and distinguish vendor-reported activity from independently validated findings. Report capabilities, data sources, release details, limitations and documented use cases factually.

### Open-source/open-weight watch

Search for:
- new model weights
- new checkpoints
- new model families
- major fine-tunes/distillations
- new licenses
- new multimodal/open-agent models
- quantized releases
- GGUF/AWQ/GPTQ/FP8/INT8 support
- Ollama, llama.cpp, vLLM, SGLang and other inference support
- model cards and benchmark/evaluation updates

Prefer official model repositories, Hugging Face model pages, GitHub releases and provider documentation.

## 4. Developer Corner — Mandatory

Every daily edition MUST include **Developer Corner**.

Search the previous 7 days and include 3–6 genuinely new or materially changed developer developments.

Prioritize:
- AI SDKs and APIs
- coding agents and CLIs
- agent frameworks and orchestration
- MCP and tool integrations
- inference/serving stacks
- open-weight/local AI tooling
- databases, vector stores and memory systems
- observability/evaluation
- sandboxes and deployment platforms
- multimodal/voice developer tooling
- model routing and gateway infrastructure

Each item must include:
- category
- release/development title
- date when available
- practical developer impact
- direct source link

Prefer official release notes, GitHub releases, engineering blogs, changelogs and documentation.

## 5. AI Security & Incident Desk

Maintain a dedicated security/incident layer for meaningful developments.

Track:
- real-world AI-agent incidents
- unauthorized access or data exposure
- model jailbreaks and safeguards
- autonomous cyber activity
- AI-assisted attacks
- agent sandbox escapes
- MCP/tool permission failures
- credential and identity risks
- browser/computer-use security
- security evaluations and red-team findings
- major AI vulnerabilities
- biological misuse and biosecurity incidents involving AI systems
- wet-lab/agent safety failures and unsafe autonomy findings

For incidents:
- distinguish confirmed facts from claims or preliminary findings
- state the date and status
- identify the source
- do not exaggerate
- update status when investigations change

## 6. Enterprise & Vertical AI Watch

Search beyond model vendors for real deployments and specialized products.

Include material developments in:
- finance
- healthcare
- legal
- insurance
- retail
- logistics
- manufacturing
- education
- government
- customer support
- sales
- marketing
- HR
- scientific research

For each, explain what was actually launched and what workflow it changes.

## 7. News Quality Rules

- Prefer primary sources.
- Use reputable independent reporting for incidents, market context and developments not fully documented by vendors.
- Do not manufacture releases, dates, benchmark results or capabilities.
- Separate model releases from product launches, integrations and announcements.
- Avoid ranking models as “best”, “worst”, “winner” or “loser”.
- Do not present vendor benchmark claims as independent facts; attribute them to the vendor.
- When a claim is uncertain or under investigation, say so.
- Do not recycle old news merely to fill space.
- Keep source links on individual cards.
- Use images only when they materially improve an individual story.
- Never restore the standalone image gallery/visual desk section.

## 8. Edition Structure

The live newspaper should generally contain:

1. Current date/time header
2. Fresh AI Developments
3. Breaking/current ticker when justified
4. Lead story
5. AI Incident & Security Desk
6. Broad AI news across multiple categories
7. **AI Radar — detailed live signals with direct links**
8. More AI News From Today's Search
9. More AI Developments Worth Tracking
10. **Developer Corner**
11. **MODEL & OPEN-SOURCE WATCH**
12. AI Incident Status Board
13. Practical takeaways
14. Source desk
15. Dated archive link

The exact number of stories can change with the news volume.

## 9. Archives

Each daily edition is historical.

When generating a new edition:
- create/update `archive/YYYY-MM-DD.html` for that date
- never rewrite prior dates unless correcting a factual or technical error
- keep the archive index current
- keep the live homepage focused on the latest edition

## 10. Deployment & Verification

After publishing:
1. Push the updated edition and generation rules to GitHub `main`.
2. Trigger/update the Railway deployment.
3. Check the deployment status.
4. If it fails, inspect build/deploy logs and fix the problem.
5. Verify the public Railway URL serves the new edition.
6. Verify the new Developer Corner and Model & Open-Source Watch are present.
7. Verify the standalone image section remains absent.
8. Only report the site as live after successful verification.

## 11. Daily Header

The newspaper header must contain the actual edition date and current IST time, for example:

`THURSDAY, SEPTEMBER 24, 2026 • 6:58 PM IST`

Do not leave an old edition timestamp in the live homepage.

## 12. Historical Integrity

The daily newspaper is an archive as well as a live product.

Do not replace yesterday's news with today's news inside yesterday's archive. Every archive should represent what was published for that date.

## 13. Editorial Safety

For political/electoral stories, remain neutral and factual. Attribute contested claims and do not rank political actors or choices.

For finance stories, report AI products, models, benchmarks, workflows and market developments factually. Do not convert the newspaper into personalized investment advice or model-selection recommendations.

## 14. Pre-Publish Checklist

Before considering an edition complete, verify:

- [ ] Current date/time is correct
- [ ] Broad AI search completed
- [ ] New-model 7-day scan completed
- [ ] Open-source/open-weight scan completed
- [ ] Domain-specific AI scan completed
- [ ] Finance/financial-services AI scan completed
- [ ] Developer Corner refreshed
- [ ] Model & Open-Source Watch refreshed
- [ ] Security/incident scan completed
- [ ] Biology/DNA/life-sciences and biosecurity scan completed
- [ ] Important claims verified against primary sources
- [ ] Direct links included
- [ ] Individual article images used only when useful
- [ ] Standalone image gallery is absent
- [ ] New archive created/preserved
- [ ] GitHub updated
- [ ] Railway deployment checked
- [ ] Public URL verified
