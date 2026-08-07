import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { CompaniesModule } from './companies/companies.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { InventoryModule } from './inventory/inventory.module';
import { CustomersModule } from './customers/customers.module';
import { BusinessModule } from './business/business.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, CompaniesModule, ProductsModule, CategoriesModule, SuppliersModule, InventoryModule, CustomersModule, BusinessModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
