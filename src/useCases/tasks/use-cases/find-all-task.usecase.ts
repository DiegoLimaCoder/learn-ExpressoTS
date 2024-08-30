import { provide, Report, StatusCode } from "@expressots/core";
import { TaskRepository } from "../repositories/task.repository";

@provide(FindAllTaskUseCase)
export class FindAllTaskUseCase {
    constructor(
        private readonly taskRepository: TaskRepository,
        private report: Report,
    ) {}
    async execute() {
        const taskAlreadyExist = await this.taskRepository.findAllTask();

        if (!taskAlreadyExist.length) {
            throw this.report.error(
                "Task not found",
                StatusCode.NotFound,
                "Create-Task-UseCase",
            );
        }

        return taskAlreadyExist;
    }
}
