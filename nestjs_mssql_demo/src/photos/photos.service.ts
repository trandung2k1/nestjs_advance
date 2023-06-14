import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePhotoDto } from 'src/dto/Photo.dto';
import { Photo } from 'src/entities/Photo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo) private photosRepository: Repository<Photo>,
  ) {}
  async getAllPhotos(): Promise<Photo[]> {
    try {
      return await this.photosRepository.find({
        relations: {
          user: true,
        },
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
  async createPhoto(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    try {
      return await this.photosRepository.save(createPhotoDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
