import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("DB Connect");
  } catch (error) {
    console.log("database error: ", error);
  }
}

export default connectDB