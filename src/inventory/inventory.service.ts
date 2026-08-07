import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.inventory.create({
      data,
    });
  }

  findAll() {
    return this.prisma.inventory.findMany();
  }
}
