const http=require('http');
const fs=require('fs');
const path=require('path');

const port=process.env.PORT||3000;
const indexFile=path.join(__dirname,'index.html');

const server=http.createServer((req,res)=>{
  const pathname=new URL(req.url,'http://localhost').pathname;
  if(pathname!=='/' && pathname!=='/index.html'){
    res.statusCode=404;
    return res.end('Not found');
  }
  fs.readFile(indexFile,(err,data)=>{
    if(err){
      console.error('Failed to read index.html:',err);
      res.statusCode=500;
      return res.end('Server error');
    }
    res.statusCode=200;
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma','no-cache');
    res.setHeader('Expires','0');
    res.end(data);
  });
});

server.listen(port,'0.0.0.0',()=>console.log('AI Daily listening on '+port));
server.on('error',err=>{console.error('Server error:',err);process.exit(1)});