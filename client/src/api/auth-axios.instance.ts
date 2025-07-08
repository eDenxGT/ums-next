import axios from "axios";
import { config } from "@/utils/config";

export const authApi = axios.create({
  baseURL: config.api.AUTH_API_BASE_URL,
  withCredentials: true,
});
