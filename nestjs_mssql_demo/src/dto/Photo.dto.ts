import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
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

  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  @IsString()
  readonly user: string;
}
