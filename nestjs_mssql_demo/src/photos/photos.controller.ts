import { Controller, Post, Body, Get } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { CreatePhotoDto } from 'src/dto/Photo.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('photos')
@ApiTags('Photos')
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

  @Post('pagination')
  async pagination(@Body() model: { page: number; limit: number }) {
    return this.photosService.pagination(model.page, model.limit);
  }
}
