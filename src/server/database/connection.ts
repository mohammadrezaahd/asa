import environments from "@/helpers/configurations";
import isProduction from "@/utils/isProduction";
import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = isProduction()
  ? `mongodb+srv://${environments.server.db_username}:${environments.server.db_pwd}@${environments.server.db_server}.gxao1.mongodb.net/?retryWrites=true&w=majority&appName=${environments.server.db_server}`
  : `mongodb://${environments.server.db_server}:${environments.server.db_port}/${environments.server.db_name}`;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const globalCache = global as unknown as {
  mongoose?: { conn: Mongoose | null; promise: Promise<Mongoose> | null };
};

const cached: { conn: Mongoose | null; promise: Promise<Mongoose> | null } =
  globalCache.mongoose || { conn: null, promise: null };

const connectToDb = async (): Promise<Mongoose> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: environments.server.db_name,
        bufferCommands: false,
      })
      .then((mongooseInstance: Mongoose) => {
        console.log("Connected to MongoDB");
        return mongooseInstance;
      })
      .catch((err: unknown) => {
        console.error("Database connection error:", err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

globalCache.mongoose = cached;

export default connectToDb;
