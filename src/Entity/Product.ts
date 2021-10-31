import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    code: number;

    @Column()
    description: string;

    @Column()
    buyPrice: number;

    @Column()
    sellPrice: number;

    @Column("int",{array:true})
    tags: string;

    @Column()
    lovers: number;

}