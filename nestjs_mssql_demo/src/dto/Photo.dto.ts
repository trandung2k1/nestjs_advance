import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/entities/User.entity';

export class CreatePhotoDto {
  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  @IsString()
  readonly url: string;

  @ApiProperty({ type: User, required: true })
  @IsNotEmpty()
  @IsString()
  readonly user: User;
}
