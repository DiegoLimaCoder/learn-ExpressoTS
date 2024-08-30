import { provide } from "@expressots/core";
import { randomUUID } from "node:crypto";

@provide(TasksEntity)
export class TasksEntity {
    id: string;
    name: string;
    description: string;

    constructor() {
        this.id = randomUUID();
    }
}
