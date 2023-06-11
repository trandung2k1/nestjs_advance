import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/entities/User.entity';

export class CreatePhotoDto {
  @ApiProperty({ type: String, required: true })
  readonly url: string;

  @ApiProperty({ type: User, required: true })
  readonly userId: User;
}
