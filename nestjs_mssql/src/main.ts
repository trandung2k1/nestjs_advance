import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { connectDB } from './config';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}

(async () => {
  await connectDB();
  await bootstrap();
})();
