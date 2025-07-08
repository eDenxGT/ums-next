import { container } from "tsyringe";
import { IUserRepository } from "../../repositories/interfaces/user-repository.interface";
import { UserRepository } from "../../repositories/user.repository";

export class RepositoryRegistry {
  static register(): void {
    container.register<IUserRepository>("IUserRepository", {
      useClass: UserRepository,
    });
  }
}
