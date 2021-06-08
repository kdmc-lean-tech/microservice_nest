import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService
  ) {
  }

  @MessagePattern('GET_PRODUCTS')
  getProducts(@Payload() data: any) {
    return this.productService.getPorducts();
  }

  @EventPattern('PRODUCT_CREATED')
  async productCreated(product) {
    this.productService.createProduct(product);
  }
}
