import cors from "cors";
import helmet from "helmet";
import express from "express";
import passport from "passport";
import v1Routes from "@routes/index";
import bodyParser from "body-parser";
import CONSTANT from "@config/constant";
import v1AdminRoutes from "@routes/admin";
import PassportConfig from "@config/passport";
import { errorMiddleware } from "@middlewares/errorMiddleware";

const app = express();

// app.use(cors());

app.use(
  cors({
    origin: true, // or specify your client origins explicitly
    credentials: true, // required when using withCredentials
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb" }));

// Passport Configuration
PassportConfig(passport);
app.use(passport.initialize());

app.use(CONSTANT.baseEndPoint, v1Routes);
app.use(CONSTANT.adminBaseEndPoint, v1AdminRoutes);

app.use(errorMiddleware);

export default app;
