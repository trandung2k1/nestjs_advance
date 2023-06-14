import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
