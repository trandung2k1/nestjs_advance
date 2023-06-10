import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { Photo } from './Photo.entity';

@Index('PK_User', ['id'], { unique: true })
@Entity('User', { schema: 'dbo' })
export class User {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Photo, (photo) => photo.userId)
  photos: Photo[];
}
