import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;
if (!MONGO_URI) throw new Error("Please define MONGO_URI in .env");

/**
 * MongoDB Connection Helper (Next.js)
 * -----------------------------------
 * - Ensures a single Mongoose connection across API routes.
 * - Uses a global cache to avoid multiple connections in serverless environments.
 * - Reuses the existing connection if already connected.
 * - Safe for Next.js App Router and hot reloads.
 */

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Ensure global exists
declare global {
  var _mongooseCache: MongooseCache | undefined;
}

// Use global variable safely
const cached = global._mongooseCache ?? { conn: null, promise: null };
global._mongooseCache = cached;

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  console.log("MongoDB: Connected successfully");
  return cached.conn;
}
