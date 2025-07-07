import axios from "axios";
import { config } from "@/utils/config";

export const privateApi = axios.create({
  baseURL: config.api.PRIVATE_API_BASE_URL,
  withCredentials: true,
});
