import { IsEmail, MaxLength, min, MinLength } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { EncryptionTransformer, ExtendedColumnOptions } from 'typeorm-encrypted';

import UserData from './UserData';

@Entity('user')
export default class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  code: number;

  @OneToOne(type => UserData, user => User, {eager : true, cascade:true})
  @JoinColumn()
  userData : UserData

  @Column({
    type: "varchar",
    nullable: false,
    transformer: new EncryptionTransformer({
      key: 'e41c966f21f9e1577802463f8924e6a3fe3e9751f201304213b2f845d8841d61',
      algorithm: 'aes-256-cbc',
      ivLength: 16,
      iv: 'ff5ac19190424b1d88f9419ef949ae56'
    })
  })

  @MaxLength(50, { message:'Nome deve ter menos de 50 caracteres'})
  @MinLength(2, { message:'Nome deve ter ao menos duas letras'})
  name: string;

  @Column({
    length: 100,
  })
  @IsEmail()
  email: string;

}
