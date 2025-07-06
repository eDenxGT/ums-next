import {
  LoginUserDTO,
  RegisterUserDTO,
  UserResponseDTO,
} from "../../shared/dtos/user.dtos";

export interface IAuthServiceInterface {
  register: (user: RegisterUserDTO) => Promise<UserResponseDTO>;
  login: (user: LoginUserDTO) => Promise<UserResponseDTO>;
}
