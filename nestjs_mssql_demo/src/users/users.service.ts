import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/User.entity';
import { CreateUserDto } from 'src/dto/User.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async findAllUsers() {
    return await this.usersRepository.find({
      relations: {
        photos: true,
      },
    });
  }
  async createUser(createUserDto: CreateUserDto) {
    return await this.usersRepository.save(createUserDto);
  }
  async getUserById(id: string) {
    return await this.usersRepository.findOneBy({ id });
  }
  async pagination(pageNumber: number, pageSize: number) {
    const take = pageSize || 10;
    const page = pageNumber || 1;
    const skip = (page - 1) * take;
    const rs = await this.usersRepository
      .createQueryBuilder('user')
      .leftJoinAndMapOne('user.photos', 'user.photos', 'photos')
      .skip(skip)
      .take(take)
      .getOne();
    return rs;
  }
}
