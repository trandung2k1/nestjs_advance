import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/entities/User.entity';
import { Transform } from 'class-transformer';

export class CreatePhotoDto {
  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  @IsString()
  readonly url: string;

  @ApiProperty({ description: 'Thời gian bắt đầu' })
  @IsOptional()
  @Transform(({ value }) => value && new Date(value))
  @IsDate()
  readonly fromDate?: Date;

  @ApiProperty({ type: User, required: true })
  @IsNotEmpty()
  @IsString()
  readonly user: User;
}
