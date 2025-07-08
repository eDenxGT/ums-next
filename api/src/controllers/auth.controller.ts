import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IAuthService } from "./../services/interfaces/auth-service.interface";
import {
  LoginUserSchema,
  RegisterUserSchema,
} from "../shared/dtos/input/user-auth.dto";
import { successResponse } from "../shared/utils/helpers/response.helper";
import { UserResponseDTO } from "../shared/dtos/output/user-response.dto";
import { HTTP_STATUS, SUCCESS_MESSAGES } from "../shared/constants";
import { setCookie } from "../shared/utils/helpers/cookie.helper";

@injectable()
export class AuthController {
  constructor(@inject("IAuthService") private _authService: IAuthService) {}

  register = async (req: Request, res: Response): Promise<void> => {
    const parsedData = RegisterUserSchema.parse(req.body);

    await this._authService.register(parsedData);

    successResponse(
      res,
      SUCCESS_MESSAGES.REGISTER_SUCCESS,
      HTTP_STATUS.CREATED
    );
  };

  login = async (req: Request, res: Response): Promise<void> => {
    const parsedData = LoginUserSchema.parse(req.body);

    const { user, tokens } = await this._authService.login(parsedData);

    setCookie(res, "x-access-token", tokens.accessToken);
    setCookie(res, "x-refresh-token", tokens.refreshToken);

    successResponse<UserResponseDTO>(
      res,
      SUCCESS_MESSAGES.LOGIN_SUCCESS,
      HTTP_STATUS.OK,
      user
    );
  };
}
