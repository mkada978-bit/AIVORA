import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CompaniesService {
  constructor(private readonly prisma: PrismaService) {}

  create(name: string) {
    return this.prisma.company.create({
      data: { name },
    });
  }

  findAll() {
    return this.prisma.company.findMany({
      include: { users: true },
    });
  }

  findOne(id: number) {
    return this.prisma.company.findUnique({
      where: { id },
      include: { users: true },
    });
  }

  update(id: number, name: string) {
    return this.prisma.company.update({
      where: { id },
      data: { name },
    });
  }

  remove(id: number) {
    return this.prisma.company.delete({
      where: { id },
    });
  }
}
