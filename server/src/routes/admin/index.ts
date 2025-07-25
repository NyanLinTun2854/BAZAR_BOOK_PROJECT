import express from "express";
import authAdminUserRouter from "./authAdminUser.route";

const router = express.Router();

router.use("/auth", authAdminUserRouter);

export default router;
