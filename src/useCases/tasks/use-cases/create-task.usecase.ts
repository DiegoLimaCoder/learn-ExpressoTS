import { provide, Report, StatusCode } from "@expressots/core";
import { TaskRepository } from "../repositories/task.repository";
import { TasksEntity } from "@useCases/tasks/entities/tasks.entity";
import { TaskCreateRequestDTO } from "../dtos/create-task.dto";

@provide(CreateTaskUseCase)
export class CreateTaskUseCase {
    constructor(
        private taskRepository: TaskRepository,
        private report: Report,
    ) {}

    async execute(data: TaskCreateRequestDTO) {
        const task = await this.taskRepository.save(data);
        if (!task) {
            this.report.error(
                "Error saving task",
                StatusCode.BadRequest,
                "Create-Task-UseCase",
            );
        }
        return task;
    }
}
