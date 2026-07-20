import User from "../models/user.model.js";

export const Create = async (req,res)=>{
  try {
    let {name, age, email, userName} = req.body
    await User.create({
      name,
      age,
      email,
      userName
    })
    res.status(201).json({message: "User Created"})
  } catch (error) {
    res.status(400).json({message: error})
  }
}

export const Retrieve = async (req,res)=>{
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json("message: user not found ", error)
  }
}

export const retrieveUsername = async (req,res)=>{
  try {
    const users = await User.findOne({userName: req.params.userName})
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json("message: user not found ", error)
  }
}

export const updateById = async (req,res) => {
  try {
    const {name, age} = req.body
    const id = req.params.id
    const user = await User.findByIdAndUpdate(id, {name, age}, {returnDocument: "after"})
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json({message: "user not found", error})
  }
}

export const Update = async (req,res) => {
  try {
    const {name, age, email} = req.body
    const user = await User.updateOne({email}, {name, age}, {returnDocument: "after"})
    return res.status(200).json({message: "user updated successfully", user})
  } catch (error) {
    return res.status(400).json({message: "user not found", error})
  }
}

export const deleteById = async (req,res) => {
  try {
    const id = req.params.id
    const user = await User.findByIdAndDelete(id)
    return res.status(200).json({message: "user deleted successfully"})
  } catch (error) {
    return res.status(400).json({message: "user not found", error})
  }
}

export const Delete = async (req,res) => {
  try {
    const {userName} = req.body
    const user = await User.deleteOne({userName})
    return res.status(200).json({message: "user deleted successfully"}, user)
  } catch (error) {
    return res.status(400).json({message: "user not found", error})
  }
}
