import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class UserBaseResult {
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
}
