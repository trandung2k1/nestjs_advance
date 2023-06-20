import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { Photo } from 'src/entities/Photo.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Photo]), UsersModule],
  providers: [PhotosService],
  controllers: [PhotosController],
})
export class PhotosModule {}
