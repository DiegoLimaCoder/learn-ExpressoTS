import { ContainerModule } from "inversify";
import { CreateModule } from "@expressots/core";
import { CreateTaskController } from "./controllers/create-task.controller";
import { CreateTaskUseCase } from "./use-cases/create-task.usecase";
import { FindAllTaskController } from "./controllers/find-all-task.controller";
import { FindAllTaskUseCase } from "./use-cases/find-all-task.usecase";
import { FindByIdController } from "./controllers/find-by-id.controller";
import { FindByIdUseCase } from "./use-cases/find-by-id.usecase";
import { DeleteTaskController } from "./controllers/delete-task.controller";
import { DeleteTaskUseCase } from "./use-cases/delete-task.usecase";
import { EditTaskController } from "./controllers/edit-task.controller";
import { EditTaskUseCase } from "./use-cases/edit-task.usecase";

export const TaskModule: ContainerModule = CreateModule([
    // Create
    CreateTaskController,
    CreateTaskUseCase,

    // FindAll
    FindAllTaskController,
    FindAllTaskUseCase,

    //FindByID
    FindByIdController,
    FindByIdUseCase,

    //Delele
    DeleteTaskController,
    DeleteTaskUseCase,

    // Edit
    EditTaskController,
    EditTaskUseCase,
]);
