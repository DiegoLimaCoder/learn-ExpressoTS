import { provide, Report, StatusCode } from "@expressots/core";
import { TaskRepository } from "../repositories/task.repository";

@provide(FindByIdUseCase)
export class FindByIdUseCase {
    constructor(
        private readonly taskRepository: TaskRepository,
        private report: Report,
    ) {}

    async execute(id: string) {
        const itTaskExist = await this.taskRepository.findById(id);

        if (!itTaskExist) {
            throw this.report.error(
                "Task not found",
                StatusCode.NotFound,
                "Create-Task-UseCase",
            );
        }

        return itTaskExist;
    }
}
