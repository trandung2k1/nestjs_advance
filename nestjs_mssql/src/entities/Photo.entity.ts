import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { User } from './User.entity';

@Index('PK_Photo', ['id'], { unique: true })
@Entity('Photo', { schema: 'dbo' })
export class Photo {
  @PrimaryGeneratedColumn('increment', { type: 'int' })
  id: number;

  @Column('nvarchar', { length: 255 })
  url: string;

  @ManyToOne(() => User, (user) => user.photos)
  @JoinColumn({ referencedColumnName: 'id', name: 'userId' })
  user: User;
}
