const feeds=[
["OpenAI","https://openai.com/news/rss.xml"],
["Google AI","https://blog.google/technology/ai/rss/"],
["Anthropic","https://www.anthropic.com/news/rss.xml"],
["Hugging Face","https://huggingface.co/blog/feed.xml"],
["Microsoft AI","https://blogs.microsoft.com/ai/feed/"],
["AWS ML","https://aws.amazon.com/blogs/machine-learning/feed/"]
];
function parse(xml,source){
 const out=[]; const blocks=xml.match(/<item[\\s\\S]*?<\\/item>/gi)||xml.match(/<entry[\\s\\S]*?<\\/entry>/gi)||[];
 for(const b of blocks.slice(0,6)){
  const title=(b.match(/<title[^>]*>([\\s\\S]*?)<\\/title>/i)||[])[1];
  const link=(b.match(/<link[^>]*>([\\s\\S]*?)<\\/link>/i)||[])[1] || (b.match(/<link[^>]+href=["']([^"']+)/i)||[])[1];
  const date=(b.match(/<(?:pubDate|published|updated)[^>]*>([\\s\\S]*?)<\\/(?:pubDate|published|updated)>/i)||[])[1];
  if(title&&link) out.push({section:"Latest AI",tag:"SOURCE FEED",title:strip(title),dek:"Fresh update from "+source+". Open the source for the full announcement.",source,url:strip(link),date});
 }
 return out;
}
function strip(s){return s.replace(/<!\\[CDATA\\[/g,"").replace(/\\]\\]>/g,"").replace(/<[^>]+>/g,"").trim()}
export async function GET(){
 const all=[];
 await Promise.all(feeds.map(async ([source,url])=>{try{const r=await fetch(url,{next:{revalidate:900}});if(r.ok){const x=await r.text();all.push(...parse(x,source))}}catch{}}));
 return Response.json({items:all.slice(0,30),generatedAt:new Date().toISOString()},{headers:{"Cache-Control":"s-maxage=900, stale-while-revalidate=3600"}});
}