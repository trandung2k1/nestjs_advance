import { Injectable } from '@nestjs/common';
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
    return await this.photosRepository.find({
      relations: {
        userId: true,
      },
    });
  }
  async createPhoto(createPhotoDto: CreatePhotoDto): Promise<Photo> {
    return await this.photosRepository.save(createPhotoDto);
  }
}
