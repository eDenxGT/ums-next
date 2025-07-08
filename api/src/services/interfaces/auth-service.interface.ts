import {
  LoginUserDTO,
  RegisterUserDTO,
} from "../../shared/dtos/input/user-auth.dto";
import { UserResponseDTO } from "../../shared/dtos/output/user-response.dto";

export interface IAuthService {
  register: (user: RegisterUserDTO) => Promise<void>;
  login: (
    user: LoginUserDTO
  ) => Promise<{
    user: UserResponseDTO;
    tokens: { accessToken: string; refreshToken: string };
  }>;
}
