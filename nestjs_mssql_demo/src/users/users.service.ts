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
}
