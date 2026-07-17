import express from "express"

const app = express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello Welcome To Express")
})
app.post("/about", (req, res)=>{
    const body = req.body
    console.log(body);
    res.send("Hello Welcome To About Page")
})
app.get("/contact", (req, res)=>{
    res.send("Hello Welcome To Contact Page")
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})

