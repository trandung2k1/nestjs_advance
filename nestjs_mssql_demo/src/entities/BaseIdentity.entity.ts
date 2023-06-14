import { ApiHideProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseIdentityEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'CreatedAt',
    type: 'datetime',
  })
  @ApiHideProperty()
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn({ name: 'UpdatedAt', type: 'datetime' })
  @ApiHideProperty()
  @Exclude()
  updatedAt: Date;

  @ApiHideProperty()
  @Exclude()
  @DeleteDateColumn({
    name: 'DeletedAt',
    type: 'datetime',
  })
  deletedAt?: Date;
}
