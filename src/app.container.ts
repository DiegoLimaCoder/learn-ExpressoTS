import { Container } from "inversify";
import { AppContainer } from "@expressots/core";
import { TaskModule } from "@useCases/tasks/task.module";

export const appContainer: AppContainer = new AppContainer({
    autoBindInjectable: false,
});

export const container: Container = appContainer.create([
    // Add your modules here
    TaskModule,
]);
