import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  create(@Body() data: any) {
    return this.suppliersService.create(data);
  }

  @Get()
  findAll() {
    return this.suppliersService.findAll();
  }
}
