import { UserResponseDTO } from "../dtos/user.dto";
import { IAxiosResponse } from "./axios.response";

export interface LoginResponse extends IAxiosResponse {
  data: UserResponseDTO;
}
