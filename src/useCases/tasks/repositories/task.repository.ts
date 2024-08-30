import { TasksEntity } from "@useCases/tasks/entities/tasks.entity";
import { BaseRepository, provide } from "@expressots/core";
import { TaskCreateRequestDTO } from "../dtos/create-task.dto";
import { PrismaProvider } from "@providers/prisma.provider";

@provide(TaskRepository)
export class TaskRepository {
    constructor(private readonly prismaProvider: PrismaProvider) {}

    async save(
        data: TaskCreateRequestDTO,
    ): Promise<TaskCreateRequestDTO | null> {
        const task = await this.prismaProvider.prisma.task.create({ data });
        return task;
    }
}
