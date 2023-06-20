import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoDto } from 'src/dto/photo.dto';

@Controller('photo')
export class PhotoController {
    constructor(private readonly photoService: PhotoService) {}
    @Post()
    async createPhoto(@Body() createPhotoDto: PhotoDto) {
        return await this.photoService.createPhoto(createPhotoDto);
    }
    @Get()
    async getPhotos() {
        return await this.photoService.getPhotos();
    }
    @Get(':id')
    async getPhotoById(@Param('id') id: string) {
        return await this.photoService.getPhotoById(id);
    }
}
