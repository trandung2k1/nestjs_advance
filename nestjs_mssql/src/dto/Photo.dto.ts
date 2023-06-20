import { ApiProperty } from '@nestjs/swagger';

export class CreatePhotoDto {
  @ApiProperty({ type: String, required: true })
  readonly url: string;

  @ApiProperty({ type: Number, required: true })
  readonly user: number;
}
