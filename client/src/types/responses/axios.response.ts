import { AxiosError } from "axios";

export interface IAxiosResponse {
  success: boolean;
  message: string;
}

export type CustomAxiosError = AxiosError<IAxiosResponse>;
