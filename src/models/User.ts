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
    length: 100,
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
