import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('product')
export default class Product {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  buyPrice: number;

  @Column()
  code: number;

  @Column({
    length:100,
    unique:true,
  })
  description: string;

  @Column()
  lovers: number;

  @Column()
  sellPrice: number;

  @Column()
  tags: string;

  
}