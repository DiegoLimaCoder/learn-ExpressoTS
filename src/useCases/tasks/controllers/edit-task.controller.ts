import { BaseController } from "@expressots/core";
import { body, controller, param, Post } from "@expressots/adapter-express";
import { EditTaskUseCase } from "../use-cases/edit-task.usecase";
import { TaskCreateRequestDTO } from "../dtos/create-task.dto";

@controller("/api")
export class EditTaskController extends BaseController {
    constructor(private readonly taskUseCase: EditTaskUseCase) {
        super();
    }

    @Post("/tasks/:id")
    execute(@param('id') id: string, @body() data: TaskCreateRequestDTO) {
        return this.taskUseCase.execute(id, data);
    }
}
