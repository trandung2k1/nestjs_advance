import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Photo, PhotoSchema } from 'src/schemas/photo.schema';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Photo.name, schema: PhotoSchema },
            { name: User.name, schema: UserSchema },
        ]),
    ],
    providers: [PhotoService],
    controllers: [PhotoController],
})
export class PhotoModule {}
