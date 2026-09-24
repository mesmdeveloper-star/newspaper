const http=require('http'),fs=require('fs'),path=require('path');
const port=process.env.PORT||3000;
http.createServer((req,res)=>{
  let pathname=new URL(req.url,'http://localhost').pathname;
  if(pathname==='/') pathname='/index.html';
  const f=path.join(__dirname,pathname);
  if(!fs.existsSync(f)||!fs.statSync(f).isFile()){res.statusCode=404;return res.end('Not found')}
  const ext=path.extname(f);
  const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml'};
  res.setHeader('Content-Type',types[ext]||'application/octet-stream');
  fs.createReadStream(f).on('error',()=>{res.statusCode=500;res.end('Server error')}).pipe(res);
}).listen(port,'0.0.0.0',()=>console.log('AI Daily listening on '+port));