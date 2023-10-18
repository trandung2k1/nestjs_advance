import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { PhotoResult } from './Photo.result';

@Exclude()
export class UserResult {
  @Expose()
  @ApiProperty({
    description: 'Id bản ghi',
  })
  id: string;

  @Expose()
  @ApiProperty({
    description: 'Name',
  })
  name: string;

  @Expose()
  @ApiProperty({
    type: PhotoResult,
    isArray: true,
    description: 'All photos',
  })
  photos: PhotoResult[];
}
