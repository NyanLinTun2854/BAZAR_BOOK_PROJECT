import express from "express";
import * as authAdminUserController from "@controllers/authAdminUser.controller";

const authAdminUserRouter = express.Router();

authAdminUserRouter.route("/register").post(authAdminUserController.register);
authAdminUserRouter.route("/login").post(authAdminUserController.login);
authAdminUserRouter.route("/refresh").post(authAdminUserController.refresh);

export default authAdminUserRouter;
