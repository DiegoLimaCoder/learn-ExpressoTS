import { ContainerModule } from "inversify";
import { CreateModule } from "@expressots/core";
import { CreateTaskController } from "./controller/create-task.controller";
import { CreateTaskUseCase } from "./use-cases/create-task.usecase";

export const TaskModule: ContainerModule = CreateModule([
    CreateTaskController,
    CreateTaskUseCase,
]);
