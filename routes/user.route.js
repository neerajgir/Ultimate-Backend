import {Router} from "express"
import express from "express"
import { Create, Delete, deleteById, Retrieve, retrieveUsername, Update, updateById } from "../controllers/user.controllers.js";


let userRouter = express(Router())

userRouter.post("/create", Create)
userRouter.get("/retrieve", Retrieve)
userRouter.get("/retrieve/:userName", retrieveUsername)
userRouter.put("/update/:id", updateById)
userRouter.put("/update", Update)
userRouter.delete("/delete/:id", deleteById)
userRouter.delete("/delete", Delete)

export default userRouter
