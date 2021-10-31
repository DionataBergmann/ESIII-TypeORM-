import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
  } from 'typeorm';

  import User from './User';
  
  @Entity('userData')
  export default class UserData {
  
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({nullable:true})
    code?: number;

    @OneToOne(type => User, userData => UserData)
    user : User
  
    @Column({
      length: 100,
      unique: true,
    })
    firstName: string;

    @Column({
      length: 100,
      unique: true,
    })
    lastName: string;
    
    @Column()
    phone: number;

    @Column({
        length: 20,
        unique: true,
      })
      genre: string;

  }
  