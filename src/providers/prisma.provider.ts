import { PrismaClient } from "@prisma/client";
import { provide } from "@expressots/core";

@provide(PrismaProvider)
export class PrismaProvider {
    public readonly prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }

    async connect(): Promise<void> {
        await this.prisma.$connect();
    }

    async disconnect(): Promise<void> {
        await this.prisma.$disconnect();
    }
}
