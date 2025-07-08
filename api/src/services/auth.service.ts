import { inject, injectable } from "tsyringe";
import { IAuthService } from "./interfaces/auth-service.interface";
import {
  LoginUserDTO,
  RegisterUserDTO,
} from "../shared/dtos/input/user-auth.dto";
import { UserResponseDTO } from "../shared/dtos/output/user-response.dto";
import { IUserRepository } from "../repositories/interfaces/user-repository.interface";
import { UserEntity } from "../models/interfaces/user.entity";
import { AppError } from "../shared/utils/AppError";
import {
  hashPassword,
  verifyPassword,
} from "../shared/utils/helpers/password.helper";
import { ERROR_MESSAGES, HTTP_STATUS } from "../shared/constants";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../shared/utils/helpers/jwt.helper";

@injectable()
export class AuthService implements IAuthService {
  constructor(
    @inject("IUserRepository") private _userRepository: IUserRepository
  ) {}

  async register(user: RegisterUserDTO): Promise<void> {
    if (await this._userRepository.findOne({ email: user.email })) {
      throw new AppError(
        ERROR_MESSAGES.USER_ALREADY_EXISTS,
        HTTP_STATUS.BAD_REQUEST
      );
    }
    const hashedPassword = await hashPassword(user.password);

    const userData: Partial<UserEntity> = {
      name: user.name,
      email: user.email,
      password: hashedPassword,
      role: "user",
      isBlocked: false,
    };

    await this._userRepository.create(userData);
  }

  async login(user: LoginUserDTO): Promise<{
    user: UserResponseDTO;
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  }> {
    const userData = await this._userRepository.findOne({ email: user.email });
    if (!userData) {
      throw new AppError(ERROR_MESSAGES.USER_NOT_FOUND, HTTP_STATUS.NOT_FOUND);
    }
    const isPasswordValid = await verifyPassword({
      password: user.password,
      hashedPassword: userData.password,
    });
    if (!isPasswordValid) {
      throw new AppError(
        ERROR_MESSAGES.INVALID_PASSWORD,
        HTTP_STATUS.UNAUTHORIZED
      );
    }
    const accessToken = generateAccessToken(userData);
    const refreshToken = generateRefreshToken(userData);

    return {
      user: {
        userId: userData.userId,
        name: userData.name,
        email: userData.email,
        role: userData.role,
      },
      tokens: {
        accessToken,
        refreshToken,
      },
    };
  }
}
