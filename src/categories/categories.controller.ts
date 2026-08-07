import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() data: any) {
    return this.categoriesService.create(data);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }
}
