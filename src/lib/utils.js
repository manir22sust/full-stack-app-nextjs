import { mongoose } from "mongoose";

const connection = {};
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connection.readyState === 1;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw new Error("Error connecting to database");
  }
};
