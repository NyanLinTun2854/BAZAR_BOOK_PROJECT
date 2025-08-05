const CONSTANT = {
  baseEndPoint: "/v1/api",
  adminBaseEndPoint: "/v1/api/admin",
  server: {
    basePath: process.env.API_BASE_PATH,
    port: process.env.PORT,
  },
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  saltRounds: 10,
  OAuth: {
    clientID: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
  },
  Mail: {
    accessToken: process.env.MAIL_ACCESS_TOKEN,
    refreshToken: process.env.MAIL_REFRESH_TOKEN,
    sender: process.env.MAIL_SENDER,
  },
};

export default CONSTANT;
