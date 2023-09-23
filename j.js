const htp=require('http');
const fs=require('fs');
const ur=require('url');
const serv=htp.createServer((req,res)=>{
    const pathur=ur.parse(req.url,true).pathname;
    if(pathur ==='/'){
        fs.readFile('./index.html','utf-8',(err,page)=>{
            res.writeHead(200,{'content-type':'text/html'})
            res.write(page);
            res.end()
        })
    }
    else if(pathur ==='/home'){
        fs.readFile('./home.html','utf-8',(err,home)=>{
            res.writeHead(200,{'content-type':'text/html'})
            res.write(home)
            res.end()
        })
    }
    else if(pathur ==='/js'){
        fs.readFile('./js.html','utf-8',(err,js)=>{
            res.writeHead(200,{'content-type':"text/html"})
            res.write(js)
            res.end()
        })
    }
    else if(pathur ==='/css'){
        fs.readFile('./css.html','utf-8',(err,css)=>{
            res.writeHead(200,{'content-type':'text/html'})
            res.write(css)
            res.end()
        })
    }
    else if(pathur ==='/html'){
        fs.readFile('./html.html','utf-8',(err,html)=>{
            res.writeHead(200,{'content-type':'text/html'})
            res.write(html)
            res.end()
        })
    }
    else if(pathur ==='/nodejs'){
        fs.readFile('./node.html','utf-8',(err,node)=>{
            res.writeHead(200,{'content-type':"text/html"})
            res.write(node)
            res.end()
        })
    }
}).listen(3000)