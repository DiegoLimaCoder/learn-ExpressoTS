import { BaseController } from "@expressots/core";
import { controller, Get, param } from "@expressots/adapter-express";
import { FindByIdUseCase } from "../use-cases/find-by-id.usecase";

@controller("/api")
export class FindByIdController extends BaseController {
    constructor(private taskUseCase: FindByIdUseCase) {
        super();
    }

    @Get("/tasks/:id")
    execute(@param("id") id: string) {
        return this.taskUseCase.execute(id);
    }
}
