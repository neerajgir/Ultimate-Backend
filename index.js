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

let users = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "department": "Engineering",
    "email": "alice.johnson@example.com"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "department": "Design",
    "email": "bob.smith@example.com"
  },
  {
    "id": 3,
    "name": "Carlos Mendez",
    "department": "Marketing",
    "email": "carlos.mendez@example.com"
  },
  {
    "id": 4,
    "name": "Diana Prince",
    "department": "Product Management",
    "email": "diana.prince@example.com"
  },
  {
    "id": 5,
    "name": "Evan Wright",
    "department": "Data Science",
    "email": "evan.wright@example.com"
  }
]

app.get("/user/:id", (req,res)=>{
    const id = req.params.id
    const existingUser = users.find((user)=>user.id == id)
    res.json(existingUser)
})

app.get("/search",(req,res)=>{
    const query =  req.query
    res.json(query)
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})

