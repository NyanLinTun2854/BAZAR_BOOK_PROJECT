import "dotenv/config";
import http from "http";
import app from "./app";
import CONSTANT from "@config/constant";
import { mongoConnect } from "@database/mongoConnect";
// import { google } from "googleapis";

const PORT = CONSTANT.server.port;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();

  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();
