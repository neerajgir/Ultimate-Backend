import express from "express"
import mongoose from "mongoose"


const app = express();
app.use(express.json());

const MONGODB_URI = "mongodb+srv://neeraj:Neeraj@cluster0.vk19rqu.mongodb.net/UltimateBackend"

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log("DB Connect");
  } catch (error) {
    console.log("database error: ", error);
  }
}

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


app.get("/user/:id", (req,res)=>{
    const id = req.params.id
    const existingUser = users.find((user)=>user.id == id)
    res.json(existingUser)
})

app.get("/search",(req,res)=>{
    const query =  req.query
    res.json(query)
})

const password = "Neeraj122";

app.use((req,res,next)=>{
  if(req.body.pass !== password){
    res.send("pass does not match")
  }
  next()
})

app.post("/",(req,res)=>{
  console.log(req.body);
  console.log(req.headers);
  res.status(200).send({success: true})
})


app.listen(3000, ()=>{
    connectDB()
    console.log("Server is running on port 3000");
})

