import environments from "@/helpers/configurations";
import mongoose from "mongoose";

const server = environments.server;

const connectToDb = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(server.db_url);
      console.log("connected to database successfully");
    }
  } catch (err) {
    console.log("database connection error =>", err);
  }
};

export default connectToDb;
