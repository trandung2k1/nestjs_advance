import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePhotoDto } from 'src/dto/Photo.dto';
import { Photo } from 'src/entities/Photo.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo) private photosRepository: Repository<Photo>,
    private readonly usersService: UsersService,
  ) {}
  async getAllPhotos(): Promise<Photo[]> {
    try {
      return await this.photosRepository.find({
        relations: {
          user: false,
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
  async createPhoto(createPhotoDto: CreatePhotoDto) {
    try {
      const user = await this.usersService.getUserById(createPhotoDto.user);
      return await this.photosRepository.save({ ...createPhotoDto, user });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async pagination(pageNumber: number, pageSize: number) {
    const take = pageSize || 10;
    const page = pageNumber || 1;
    const skip = (page - 1) * take;
    const rs = await this.photosRepository
      .createQueryBuilder('photo')
      .leftJoinAndMapMany('photo.user', 'photo.user', 'user')
      .skip(skip)
      .take(take)
      .getMany();
    console.log(rs.length);
    return rs;
  }
}
