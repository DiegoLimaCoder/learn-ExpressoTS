import { body, controller, Http, Post } from "@expressots/adapter-express";
import { TaskCreateRequestDTO } from "../dtos/create-task.dto";
import { CreateTaskUseCase } from "../use-cases/create-task.usecase";

@controller("/api")
export class CreateTaskController {
    constructor(private readonly taskUseCase: CreateTaskUseCase) {}
    @Post("/tasks")
    execute(@body() data: TaskCreateRequestDTO) {
        return this.taskUseCase.execute(data);
    }
}
