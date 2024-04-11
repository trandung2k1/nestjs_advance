import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';
import { Photo } from './Photo.entity';
import { classToPlain, Exclude } from 'class-transformer';
@Index('PK_User', ['id'], { unique: true })
@Entity('User', { schema: 'dbo' })
export class User {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number;

  @Column()
  name: string;

  @Exclude()
  @Column('nvarchar', {
    nullable: true,
  })
  password: string;

  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[];

  toJSON() {
    return classToPlain(this);
  }
}
