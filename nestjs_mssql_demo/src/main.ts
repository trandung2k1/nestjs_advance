import { INestApplication, ValidationPipe } from '@nestjs/common';
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
    // SwaggerModule.setup('api', app, document);
    // const photoOptions = new DocumentBuilder()
    //   .setTitle('Photo example')
    //   .setDescription('The photos API description')
    //   .setVersion('1.0')
    //   .addTag('Photos')
    //   .build();
    // const photoDocument = SwaggerModule.createDocument(app, photoOptions, {
    //   include: [PhotosModule],
    // });
    // SwaggerModule.setup('api', app, photoDocument);
    // const userOptions = new DocumentBuilder()
    //   .setTitle('User example')
    //   .setDescription('The users API description')
    //   .setVersion('1.0')
    //   .addTag('Users')
    //   .build();
    // const userDocument = SwaggerModule.createDocument(app, userOptions, {
    //   include: [UsersModule],
    // });
    // SwaggerModule.setup('api', app, userDocument);
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    app.enableCors({
      origin: ['http://127.0.0.1:5173'],
      methods: ['GET', 'POST'],
      credentials: true,
    });
    await app.listen(process.env.PORT);
  }, 3000);
}

bootstrap();
