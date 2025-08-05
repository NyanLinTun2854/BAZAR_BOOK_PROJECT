import CONSTANT from "./constant";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "nyanlintun28504@gmail.com",
    clientId: CONSTANT.OAuth.clientID,
    clientSecret: CONSTANT.OAuth.clientSecret,
    refreshToken: CONSTANT.Mail.refreshToken,
  },
});

export default transporter;
