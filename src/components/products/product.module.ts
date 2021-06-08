import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './services/product.service';
import { Product, ProductSchema } from './models/product.model';
import { ProductController } from './controllers/product.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
  ],
  providers: [
    ProductService
  ],
  controllers: [
    ProductController
  ]
})
export class ProductModule {}
