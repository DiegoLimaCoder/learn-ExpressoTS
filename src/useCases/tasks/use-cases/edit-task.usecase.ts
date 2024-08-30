import { provide, Report, StatusCode } from "@expressots/core";
import { TaskRepository } from "../repositories/task.repository";
import { TaskCreateRequestDTO } from "../dtos/create-task.dto";

@provide(EditTaskUseCase)
export class EditTaskUseCase {
    constructor(
        private readonly taskRepository: TaskRepository,
        private report: Report,
    ) {}
    async execute(id: string, data: TaskCreateRequestDTO) {
        const itTaskExist = await this.taskRepository.findById(id);

        if (!itTaskExist) {
            throw this.report.error(
                "Task not found",
                StatusCode.NotFound,
                "Create-Task-UseCase",
            );
        }

        const task = await this.taskRepository.editTask(id, data);
        return task;
    }
}
