import { container } from "tsyringe";
import { IAuthService } from "../../services/interfaces/auth-service.interface";
import { AuthService } from "../../services/auth.service";

export class ServiceRegistry {
  static register(): void {
    container.register<IAuthService>("IAuthService", { useClass: AuthService });
  }
}
