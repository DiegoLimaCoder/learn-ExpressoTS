import { BaseRepository, provide } from "@expressots/core";
import { TaskCreateRequestDTO } from "../dtos/create-task.dto";
import { PrismaProvider } from "@providers/prisma.provider";
import { TaskEntity } from "../entities/task.entity";

@provide(TaskRepository)
export class TaskRepository extends BaseRepository<TaskEntity> {
    constructor(private readonly prismaProvider: PrismaProvider) {
        super("Task");
    }

    async save(data: TaskCreateRequestDTO): Promise<TaskEntity | null> {
        const task = await this.prismaProvider.prisma.task.create({ data });
        return task;
    }

    async findAllTask(): Promise<TaskEntity[]> {
        const task = await this.prismaProvider.prisma.task.findMany();
        return task;
    }

    async findById(id: string): Promise<TaskEntity | null> {
        const task = await this.prismaProvider.prisma.task.findUnique({
            where: { id: id },
        });
        return task;
    }

    async deleteTask(id: string) {
        const task = await this.prismaProvider.prisma.task.delete({
            where: {
                id: id,
            },
        });
        return task;
    }

    async editTask(id: string, data: TaskCreateRequestDTO) {
        const task = await this.prismaProvider.prisma.task.update({
            where: {
                id,
            },
            data: {
                ...data,
            },
        });

        return task;
    }
}
