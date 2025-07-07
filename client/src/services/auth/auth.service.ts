import { authApi } from "@/api/auth-axios.instance";
import { LoginResponse, LoginUserDTO, RegisterUserDTO } from "@/types";
import { IAxiosResponse } from "@/types/responses/axios.response";

export const register = async (
  user: RegisterUserDTO
): Promise<IAxiosResponse> => {
  const response = await authApi.post<IAxiosResponse>("/register", user);
  return response.data;
};

export const login = async (user: LoginUserDTO): Promise<LoginResponse> => {
  const response = await authApi.post<LoginResponse>("/login", user);
  return response.data;
};
