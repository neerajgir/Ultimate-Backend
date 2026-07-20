# Ultimate Backend

A simple Express + MongoDB backend built to practice modern Node.js backend development. This repository demonstrates building a REST API with Express, routing, controllers, and Mongoose schema modeling.

---

## 🚀 Project Overview

This project is a backend sample called **Ultimate Backend**. It includes:

- Express server setup with JSON parsing
- MongoDB connection using Mongoose
- Environment configuration using `dotenv`
- CRUD routes for `User` data
- Clean separation between routes, controllers, and models

---

## 🧠 Learning Summary

### 1. Express App Basics

You learned how to set up a basic Express application and parse JSON request bodies.

```js
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRouter from "./routes/user.route.js"

const app = express()
app.use(express.json())
dotenv.config()
app.use("/api", userRouter)

app.listen(3000, () => {
  connectDB()
  console.log("Server is running on port 3000")
})
```

### 2. Environment Variables with dotenv

Using `dotenv` allows your database connection string and secrets to remain outside the source code.

```js
dotenv.config()

await mongoose.connect(process.env.MONGODB_URL)
```

### 3. MongoDB Connection with Mongoose

You created a reusable database connection helper.

```js
import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("DB Connect")
  } catch (error) {
    console.log("database error:", error)
  }
}

export default connectDB
```

### 4. Mongoose Models and Validation

A `User` schema was created to define required fields and unique constraints.

```js
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  age: {
    type: Number,
    require: true
  },
  userName: {
    type: String,
    require: true,
    unique: true
  }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)
export default User
```

### 5. Route Organization

Routes are separated into a dedicated router file for cleaner structure.

```js
import { Router } from "express"
import express from "express"
import {
  Create,
  Retrieve,
  retrieveUsername,
  updateById,
  Update,
  deleteById,
  Delete
} from "../controllers/user.controllers.js"

let userRouter = express(Router())

userRouter.post("/create", Create)
userRouter.get("/retrieve", Retrieve)
userRouter.get("/retrieve/:userName", retrieveUsername)
userRouter.put("/update/:id", updateById)
userRouter.put("/update", Update)
userRouter.delete("/delete/:id", deleteById)
userRouter.delete("/delete", Delete)

export default userRouter
```

> Note: This project uses Express router logic in a compact style. In the future, `const userRouter = Router()` is a good alternative for clarity.

### 6. Controller Functions and CRUD Operations

The controller file contains functions for creating, reading, updating, and deleting users.

```js
export const Create = async (req, res) => {
  try {
    let { name, age, email, userName } = req.body
    await User.create({ name, age, email, userName })
    res.status(201).json({ message: "User Created" })
  } catch (error) {
    res.status(400).json({ message: error })
  }
}
```

```js
export const Retrieve = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json("message: user not found", error)
  }
}
```

```js
export const updateById = async (req, res) => {
  try {
    const { name, age } = req.body
    const id = req.params.id
    const user = await User.findByIdAndUpdate(id, { name, age }, { returnDocument: "after" })
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json({ message: "user not found", error })
  }
}
```

```js
export const deleteById = async (req, res) => {
  try {
    const id = req.params.id
    await User.findByIdAndDelete(id)
    return res.status(200).json({ message: "user deleted successfully" })
  } catch (error) {
    return res.status(400).json({ message: "user not found", error })
  }
}
```

---

## 📦 Installation

```bash
npm install
```

Create a `.env` file in the project root with your MongoDB connection string:

```env
MONGODB_URL=mongodb+srv://username:password@cluster.example.com/mydatabase
```

Start the development server:

```bash
npm run dev
```

---

## 🔌 API Endpoints

Base path: `http://localhost:3000/api`

| Method | Path | Description |
| --- | --- | --- |
| POST | `/create` | Create a new user |
| GET | `/retrieve` | Retrieve all users |
| GET | `/retrieve/:userName` | Retrieve a user by username |
| PUT | `/update/:id` | Update user by ID |
| PUT | `/update` | Update user by email |
| DELETE | `/delete/:id` | Delete user by ID |
| DELETE | `/delete` | Delete user by username |

---

## 💡 Example Requests

### Create User

```http
POST /api/create
Content-Type: application/json

{
  "name": "Neeraj",
  "age": 24,
  "email": "neeraj@example.com",
  "userName": "neeraj123"
}
```

### Retrieve All Users

```http
GET /api/retrieve
```

### Update User by ID

```http
PUT /api/update/USER_ID
Content-Type: application/json

{
  "name": "Neeraj Kumar",
  "age": 25
}
```

### Delete User by Username

```http
DELETE /api/delete
Content-Type: application/json

{
  "userName": "neeraj123"
}
```

---

## 🎯 What You Learned

- How to create a backend API using Express
- How to organize routes, controllers, and models
- How to connect to MongoDB with Mongoose
- How to use schema validation and unique constraints
- How to handle JSON requests, route params, query params, and response status codes

---

## ✨ Next Improvements

- Add validation middleware for request bodies
- Add better error handling and response formatting
- Add authentication and authorization
- Add tests for routes and controllers
- Add logging and request tracing

---

## 📚 Notes

This README is created to help you remember the main backend patterns you have learned while building this project. Keep updating it as you learn new features like middleware, authentication, and advanced Mongoose queries.
