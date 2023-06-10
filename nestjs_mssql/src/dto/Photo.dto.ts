import { User } from 'src/entities/User.entity';

export class CreatePhotoDto {
  readonly url: string;
  readonly userId: User;
}
