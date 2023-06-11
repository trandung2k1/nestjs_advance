import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectDB } from './config';
async function bootstrap() {
  await connectDB();
  setTimeout(async () => {
    const app: INestApplication = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT);
  }, 3000);
}

bootstrap();
