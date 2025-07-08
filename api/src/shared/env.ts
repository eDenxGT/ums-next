export const config = {
  server: {
    PORT: process.env.PORT || 5000,
  },
  database: {
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/ums",
  },
  client: {
    URL: process.env.CLIENT_URL || "http://localhost:3000",
  },
  jwt: {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "access_token_secret",
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "refresh_token_secret",
  },
};
