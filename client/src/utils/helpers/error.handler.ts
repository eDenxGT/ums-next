import { CustomAxiosError } from "@/types/responses/axios.response";

export function handleAxiosError(error: unknown): string {
  const err = error as CustomAxiosError;
  return err.response?.data?.message || "Something went wrong";
}
