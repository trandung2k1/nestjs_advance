import { ApiProperty } from '@nestjs/swagger';
import { Photo } from 'src/entities/Photo.entity';

export class CreateUserDto {
  @ApiProperty({ type: String })
  readonly name: string;

  @ApiProperty({ type: [Photo] })
  readonly photos: Photo[];
}
