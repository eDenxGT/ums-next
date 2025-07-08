import { RepositoryRegistry } from "./registries/repository.registry";
import { ServiceRegistry } from "./registries/service.registry";

export class DependencyInjection {
  static registerAll(): void {
    ServiceRegistry.register();
    RepositoryRegistry.register();
  }
}
