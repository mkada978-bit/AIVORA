import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';

@Injectable()
export class BusinessService {
  constructor(private prisma: PrismaService) {}

  create(createBusinessDto: CreateBusinessDto) {
    return this.prisma.company.create({
      data: createBusinessDto,
    });
  }

  findAll() {
    return this.prisma.company.findMany();
  }

  findOne(id: number) {
    return this.prisma.company.findUnique({
      where: { id },
    });
  }

  update(id: number, updateBusinessDto: UpdateBusinessDto) {
    return this.prisma.company.update({
      where: { id },
      data: updateBusinessDto,
    });
  }

  remove(id: number) {
    return this.prisma.company.delete({
      where: { id },
    });
  }
}
