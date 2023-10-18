import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dto/User.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserResult } from 'src/dto/User.result';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiResponse({
    description: 'Results all users',
    type: UserResult,
    isArray: true,
  })
  @Get()
  async getAllUsers() {
    return await this.usersService.findAllUsers();
  }
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.createUser(createUserDto);
  }
}
