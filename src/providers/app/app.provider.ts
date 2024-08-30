import { AppExpress } from "@expressots/adapter-express";
import {
    Env,
    IMiddleware,
    InMemoryDB,
    Middleware,
    provide,
    ProviderManager,
} from "@expressots/core";
import { container } from "../../app.container";

@provide(App)
export class App extends AppExpress {
    private middleware: IMiddleware;
    private provider: ProviderManager;

    constructor() {
        super();
        this.middleware = container.get<IMiddleware>(Middleware);
        this.provider = container.get(ProviderManager);
    }

    protected configureServices(): void {
        this.provider.register(Env);
        this.middleware.addBodyParser();
        this.middleware.setErrorHandler();
        this.provider.register(InMemoryDB, "Singleton");
    }

    protected serverShutdown(): void {
        this.provider.get(Env).checkAll();
    }
}
