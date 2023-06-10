import { Photo } from 'src/entities/Photo.entity';

export class CreateUserDto {
  readonly name: string;
  readonly photos: Photo[];
}
