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
    await app.listen(process.env.PORT);
  }, 3000);
}

bootstrap();
