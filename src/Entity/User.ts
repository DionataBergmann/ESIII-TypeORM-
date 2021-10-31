import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    code: number;

    @Column()
    nome: string;

    @Column()
    email: number;

}