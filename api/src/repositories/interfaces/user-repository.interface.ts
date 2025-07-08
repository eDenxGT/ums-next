import { UserEntity } from "../../models/interfaces/user.entity";
import { IBaseRepository } from "./base-repository.interface";

export interface IUserRepository extends IBaseRepository<UserEntity> {}
