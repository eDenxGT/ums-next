import { RepositoryRegistry } from "./registries/repository.registry";
import { ServiceRegistry } from "./registries/service.registry";

export class Container {
  static registerAll(): void {
    RepositoryRegistry.register();
    ServiceRegistry.register();
  }
}
