import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectDB } from './config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PhotosModule } from './photos/photos.module';
import { UsersModule } from './users/users.module';
async function bootstrap() {
  await connectDB();
  setTimeout(async () => {
    const app: INestApplication = await NestFactory.create(AppModule);
    const photoOptions = new DocumentBuilder()
      .setTitle('Photo example')
      .setDescription('The photos API description')
      .setVersion('1.0')
      .addTag('Photos')
      .build();
    const photoDocument = SwaggerModule.createDocument(app, photoOptions, {
      include: [PhotosModule],
    });
    SwaggerModule.setup('api/photos', app, photoDocument);
    const userOptions = new DocumentBuilder()
      .setTitle('User example')
      .setDescription('The users API description')
      .setVersion('1.0')
      .addTag('Users')
      .build();
    const userDocument = SwaggerModule.createDocument(app, userOptions, {
      include: [UsersModule],
    });
    SwaggerModule.setup('api/users', app, userDocument);
    await app.listen(process.env.PORT);
  }, 3000);
}

bootstrap();
