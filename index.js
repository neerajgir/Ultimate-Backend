import http from "http";

const server = http.createServer((req, res)=>{
    res.end("Hello this our first server");
})

server.listen(3000, ()=>{
    console.log("server is running on port 3000");
});

