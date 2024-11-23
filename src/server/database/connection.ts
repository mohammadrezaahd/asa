import mongoose from "mongoose";
import connectionUri from "../configs/db";

const connectToDb = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(connectionUri);
      console.log("connected to database successfully");
    }
  } catch (err) {
    console.log("database connection error =>", err);
    throw err;
  }
};

export default connectToDb;
