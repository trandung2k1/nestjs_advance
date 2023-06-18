import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { User } from './User.entity';
import { BaseIdentityEntity } from './BaseIdentity.entity';

@Index('PK_Photo', ['id'], { unique: true })
@Entity('Photo', { schema: 'dbo' })
export class Photo extends BaseIdentityEntity {
  @Column('nvarchar', { length: 255 })
  url: string;

  @Column('datetime', {
    name: 'FromDate',
    nullable: true,
  })
  fromDate?: Date;

  @ManyToOne(() => User, (user) => user.photos)
  @JoinColumn({ referencedColumnName: 'id', name: 'user' })
  user: User;
}
