import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { UserResult } from './User.result';
import { UserBaseResult } from './UserBase.result';

@Exclude()
export class PhotoResult {
  @Expose()
  @ApiProperty({
    description: 'Id bản ghi',
  })
  id: string;

  @Expose()
  @ApiProperty({
    description: 'Url photo',
  })
  url: string;

  @Expose()
  @ApiProperty({
    type: UserBaseResult,
    description: 'User',
  })
  user: UserBaseResult;
}
