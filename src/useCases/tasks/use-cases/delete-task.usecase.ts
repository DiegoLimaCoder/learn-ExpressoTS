import { provide, Report, StatusCode } from "@expressots/core";
import { TaskRepository } from "../repositories/task.repository";

@provide(DeleteTaskUseCase)
export class DeleteTaskUseCase {
    constructor(
        private taskRepository: TaskRepository,
        private report: Report,
    ) {}
    async execute(id: string) {
        const itTaskExist = await this.taskRepository.findById(id);
        if (!itTaskExist) {
            throw this.report.error(
                "id not found",
                StatusCode.NotFound,
                "Create-Task-UseCase",
            );
        }

        return this.taskRepository.deleteTask(id);
    }
}
