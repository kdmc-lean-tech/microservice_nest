import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>
  ) {
  }

  public async getPorducts() {
    return await this.productModel.find().exec();
  }

  public async createProduct(product) {
    return await this.productModel.create(product);
  }
}
