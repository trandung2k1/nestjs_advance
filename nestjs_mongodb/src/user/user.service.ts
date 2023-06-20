import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
    async createUser(createUserDto: UserDto) {
        try {
            const newUser = new this.userModel(createUserDto);
            return await newUser.save();
        } catch (error) {
            throw new HttpException(
                'INTERNAL_SERVER_ERROR',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
    async getUsers() {
        try {
            return await this.userModel.find().populate('photos');
        } catch (error) {
            throw new HttpException(
                'INTERNAL_SERVER_ERROR',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
    async getUserById(id: string) {
        try {
            const findUser = await this.userModel
                .findById(id)
                .populate('photos');
            if (!findUser) {
                throw new HttpException('User not found', HttpStatus.NOT_FOUND);
            }
            return findUser;
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
}
