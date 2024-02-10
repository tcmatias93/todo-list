import mongoose from "mongoose";

const mongoUrl = process.env.MONGODB_URI;

export async function connectMongoDB() {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connectet to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
