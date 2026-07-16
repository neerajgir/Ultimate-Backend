import http from "http";

const server = http.createServer((req, res)=>{
    if(req.url=="/"){
        res.end("Welcome to Homepage")
    }else if(req.url == "/about"){
        res.end("Welcome to About Page")
    }else if(req.url == "/contact"){
        res.end("Welcome to Contact Page")
    }else{
        res.end("404 Not Found")
    }
})

server.listen(3000, ()=>{
    console.log("server is running on port 3000");
});

