import { Body, Controller, Get, Post } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  create(@Body() data: any) {
    return this.inventoryService.create(data);
  }

  @Get()
  findAll() {
    return this.inventoryService.findAll();
  }
}
