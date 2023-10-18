import { Controller, Post, Body, Get } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from 'src/dto/Photo.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Photo } from 'src/entities/Photo.entity';
import { PhotoResult } from 'src/dto/Photo.result';

@Controller('photos')
@ApiTags('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @ApiResponse({
    description: 'Results all photos',
    type: PhotoResult,
    isArray: true,
  })
  @Get()
  async getAllPhotos() {
    return await this.photosService.getAllPhotos();
  }
  @Post()
  async createPhoto(@Body() createPhotoDto: CreatePhotoDto) {
    return await this.photosService.createPhoto(createPhotoDto);
  }
}
