import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    readonly age: string;
}
