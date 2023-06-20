import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PhotoDto } from 'src/dto/photo.dto';
import { Photo } from 'src/schemas/photo.schema';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class PhotoService {
    constructor(
        @InjectModel(Photo.name) private photoModel: Model<Photo>,
        @InjectModel(User.name) private userModel: Model<User>,
    ) {}
    async createPhoto(createPhoto: PhotoDto) {
        const newPhoto = new this.photoModel(createPhoto);
        const rs = await newPhoto.save();
        const user = await this.userModel.findById(createPhoto.user);
        await user.updateOne({ $push: { photos: rs._id } });
        return rs;
    }
    async getPhotoById(id: string) {
        try {
            const findPhoto = await this.photoModel
                .findById(id)
                .populate('user');
            if (!findPhoto) {
                throw new HttpException(
                    'Photo not found',
                    HttpStatus.NOT_FOUND,
                );
            }
            return findPhoto;
        } catch (error) {
            if (error instanceof HttpException) {
                throw new HttpException(error.message, error.getStatus());
            }
            throw new HttpException(
                'INTERNAL_SERVER_ERROR',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
    async getPhotos() {
        try {
            return await this.photoModel.find({}).populate('user');
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(
                    error.message,
                    HttpStatus.INTERNAL_SERVER_ERROR,
                );
            }
        }
    }
}
