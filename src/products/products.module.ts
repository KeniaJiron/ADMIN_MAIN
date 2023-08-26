import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsService } from './services/products.service';
import { Category } from './entities/category.entity';
import CategoryService from './services/category.service';
import CatgoryController from './controllers/categoria.controller';
import ProductsController from './controllers/products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Category])],
  exports: [TypeOrmModule],
  controllers: [ProductsController,
    CatgoryController
  ],
  providers: [ProductsService,
    CategoryService,
  ],
})
export class ProductsModule {}
