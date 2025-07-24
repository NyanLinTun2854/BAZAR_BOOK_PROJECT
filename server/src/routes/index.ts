import express from "express";
import status from "@utils/statusCodeUtils";
import authUserRouter from "./authUser.route";
import { HealthCheckResponse } from "@customTypes/index";

const router = express.Router();

const healthCheck = {
  uptime: process.uptime(),
  message: "API is live and running.",
  timestamp: Date.now(),
};

router.get("/", (req, res) => {
  const response: HealthCheckResponse = { status: status.Success, healthCheck };
  res.json(response);
});

router.use("/auth", authUserRouter);

export default router;
