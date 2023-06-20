import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Post()
    async createUser(@Body() createUserDto: UserDto) {
        return await this.userService.createUser(createUserDto);
    }
    @Get()
    async getUsers() {
        return await this.userService.getUsers();
    }
    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return await this.userService.getUserById(id);
    }
}
