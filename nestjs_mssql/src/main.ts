import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectDB } from './config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  await connectDB();
  setTimeout(async () => {
    const app: INestApplication = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle('Api example')
      .setDescription('The API description')
      .setVersion('1.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    app.enableCors({
      origin: ['http://localhost:8000'],
      methods: ['GET', 'POST'],
      credentials: true,
    });
    retryToStart(app, 10);
  }, 3000);
}

async function retryToStart(app: INestApplication, retryTime?: number) {
  if (!retryTime) {
    console.log('Không thể khởi chạy máy chủ');
    return;
  }
  try {
    await app.listen(process.env.PORT, () => {
      console.log(`http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    setTimeout(async () => {
      await retryToStart(app, retryTime--);
    }, 1000);
  }
}

bootstrap();
