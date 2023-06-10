import { Controller, Post, Body, Get } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from 'src/dto/Photo.dto';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}
  @Get()
  async getAllPhotos() {
    return await this.photosService.getAllPhotos();
  }
  @Post()
  async createPhoto(@Body() createPhotoDto: CreatePhotoDto) {
    return await this.photosService.createPhoto(createPhotoDto);
  }
}
