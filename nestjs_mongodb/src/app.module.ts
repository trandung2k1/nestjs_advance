import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PhotoModule } from './photo/photo.module';

@Module({
    imports: [
        //Run docker
        MongooseModule.forRoot('mongodb://mongo:27017/db'),

        //Run local
        // MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),
        UserModule,
        PhotoModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
