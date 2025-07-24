import cors from "cors";
import helmet from "helmet";
import express from "express";
import passport from "passport";
import v1Routes from "@routes/index";
import bodyParser from "body-parser";
import CONSTANT from "@config/constant";
import PassportConfig from "@config/passport";
import { errorMiddleware } from "@middlewares/errorMiddleware";

const app = express();

app.use(helmet());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb" }));

// Passport Configuration
PassportConfig(passport);
app.use(passport.initialize());

app.use(CONSTANT.baseEndPoint, v1Routes);

app.use(errorMiddleware);

export default app;
