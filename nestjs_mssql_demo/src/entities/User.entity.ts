import { Entity, Column, OneToMany, Index } from 'typeorm';
import { Photo } from './Photo.entity';
import { BaseIdentityEntity } from './BaseIdentity.entity';

@Index('PK_User', ['id'], { unique: true })
@Entity('User', { schema: 'dbo' })
export class User extends BaseIdentityEntity {
  @Column()
  name: string;

  @Column('datetime', { nullable: false, default: () => 'GETDATE()' })  
  created: Date;
  
  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[];
}
