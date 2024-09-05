// caching database connection in a servless environment like Vercel to prevent too many new connections everytime
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { connection: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.connection) {
    return cached.connection;
  }
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    );
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "ReeBolly",
      bufferCommands: false,
    });

  cached.connection = await cached.promise;
  return cached.connection;
};
