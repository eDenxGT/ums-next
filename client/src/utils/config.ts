export const config = {
  client: {
    C_URL: process.env.CLIENT_URL || "http://localhost:3000",
  },
  api: {
    PRIVATE_API_BASE_URL: process.env.PRIVATE_API_BASE_URL || "http://localhost:5000/api/v1/pvt",
    AUTH_API_BASE_URL: process.env.AUTH_API_BASE_URL || "http://localhost:5000/api/v1/auth",
  },
};
