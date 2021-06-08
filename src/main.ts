import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api/v1');
  // await app.listen(8081);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://kfbrawgc:0fCr8ukefFN_v7f1OKNLaWsb7m0OcCqL@shrimp.rmq.cloudamqp.com/kfbrawgc'],
        queue: 'main_queue',
        queueOptions: {
          durable: false
        },
      },
    }
  );
  app.listen(() => console.log('Microservice main is listening'));
}
bootstrap();
