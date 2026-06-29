import mongoose from "mongoose";

const MONGODB_URI = "mongodb://project_db_user:DFHXBCNuL4Oi3DmX@ac-isqc8bl-shard-00-00.41y8sup.mongodb.net:27017,ac-isqc8bl-shard-00-01.41y8sup.mongodb.net:27017,ac-isqc8bl-shard-00-02.41y8sup.mongodb.net:27017/?ssl=true&replicaSet=atlas-17hqtw-shard-0&authSource=admin";

declare global {
  // eslint-disable-next-line no-var
  var mongooseConn: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
}

let cached = global.mongooseConn;

if (!cached) {
  cached = global.mongooseConn = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
