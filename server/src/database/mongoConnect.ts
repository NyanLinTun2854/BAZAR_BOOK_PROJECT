import "dotenv/config";
import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL || "";

mongoose.connection.once("open", (_) => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoClose() {
  await mongoose.disconnect();
}

export { mongoConnect, mongoClose };
