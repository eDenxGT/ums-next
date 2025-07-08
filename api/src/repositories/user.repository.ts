import { IUserRepository } from "./interfaces/user-repository.interface";
import { BaseRepository } from "./base.repository";
import { UserEntity } from "../models/interfaces/user.entity";
import { injectable } from "tsyringe";
import { UserModel } from "../models/user.model";

@injectable()
export class UserRepository
  extends BaseRepository<UserEntity>
  implements IUserRepository
{
  constructor() {
    super(UserModel);
  }
}
