const http=require('http');
const fs=require('fs');
const path=require('path');
const port=process.env.PORT||3000;
const root=__dirname;
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json; charset=utf-8'};
const server=http.createServer((req,res)=>{
  const pathname=new URL(req.url,'http://localhost').pathname;
  let file;
  if(pathname==='/'||pathname==='/index.html') file=path.join(root,'index.html');
  else if(pathname==='/archive'||pathname==='/archive/') file=path.join(root,'archive','index.html');
  else if(pathname.startsWith('/archive/')) file=path.join(root,pathname.replace(/^\\/+/,''));
  else file=null;
  if(!file || !file.startsWith(root) || !fs.existsSync(file)){res.statusCode=404;res.setHeader('Content-Type','text/plain');return res.end('Not found');}
  fs.readFile(file,(err,data)=>{if(err){console.error(err);res.statusCode=500;return res.end('Server error');}res.statusCode=200;res.setHeader('Content-Type',mime[path.extname(file)]||'text/plain');res.setHeader('Cache-Control','no-store, no-cache, must-revalidate, proxy-revalidate');res.setHeader('Pragma','no-cache');res.setHeader('Expires','0');res.end(data);});
});
server.listen(port,'0.0.0.0',()=>console.log('AI Daily listening on '+port));
server.on('error',err=>{console.error('Server error:',err);process.exit(1)});