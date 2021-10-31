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
    unique: true,
  })
  name: string;

  @Column({
    length: 100,
    unique: true,
  })
  email: string;

}
