import express from "express";
import * as authUserController from "@controllers/authUser.controller";

const authUserRouter = express.Router();

authUserRouter.route("/register").post(authUserController.register);
authUserRouter.route("/login").post(authUserController.login);
authUserRouter.route("/refresh").post(authUserController.refresh);

export default authUserRouter;
