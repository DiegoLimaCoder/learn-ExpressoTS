import { BaseController } from "@expressots/core";
import { controller, Get } from "@expressots/adapter-express";
import { FindAllTaskUseCase } from "../use-cases/find-all-task.usecase";

@controller("/api")
export class FindAllTaskController extends BaseController {
    constructor(private readonly taskUseCase: FindAllTaskUseCase) {
        super();
    }

    @Get("/tasks")
    execute() {
        return this.taskUseCase.execute();
    }
}
