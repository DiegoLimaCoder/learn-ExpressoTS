import { BaseController } from "@expressots/core";
import { controller, Delete, param } from "@expressots/adapter-express";
import { DeleteTaskUseCase } from "../use-cases/delete-task.usecase";

@controller("/api")
export class DeleteTaskController extends BaseController {
    constructor(private readonly taskUseCase: DeleteTaskUseCase) {
        super();
    }

    @Delete("/tasks/:id")
    execute(@param("id") id: string) {
        return this.taskUseCase.execute(id);
    }
}
