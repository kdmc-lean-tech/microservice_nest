import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from 'src/components/products/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/admin-micro'),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
