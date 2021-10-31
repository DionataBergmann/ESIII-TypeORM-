import {MigrationInterface, QueryRunner} from "typeorm";

export default class relationUserUserdata1634596930087 implements MigrationInterface {
    name = 'relationUserUserdata1634596930087'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "userDataId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_22abf72351fb3a0c9cd84d88bb6" UNIQUE ("userDataId")`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "description" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "UQ_29a733971f71626611bb3808ebe" UNIQUE ("description")`);
        await queryRunner.query(`ALTER TABLE "userData" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "userData" ADD "firstName" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "userData" ADD CONSTRAINT "UQ_99c6b3d0bf2147f6283e9650091" UNIQUE ("firstName")`);
        await queryRunner.query(`ALTER TABLE "userData" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "userData" ADD "lastName" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "userData" ADD CONSTRAINT "UQ_80d802c068c34f13b72f642b0d7" UNIQUE ("lastName")`);
        await queryRunner.query(`ALTER TABLE "userData" DROP COLUMN "genre"`);
        await queryRunner.query(`ALTER TABLE "userData" ADD "genre" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "userData" ADD CONSTRAINT "UQ_3ba3367a391c0c27ae3a72e072c" UNIQUE ("genre")`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_22abf72351fb3a0c9cd84d88bb6" FOREIGN KEY ("userDataId") REFERENCES "userData"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_22abf72351fb3a0c9cd84d88bb6"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "userData" DROP CONSTRAINT "UQ_3ba3367a391c0c27ae3a72e072c"`);
        await queryRunner.query(`ALTER TABLE "userData" DROP COLUMN "genre"`);
        await queryRunner.query(`ALTER TABLE "userData" ADD "genre" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "userData" DROP CONSTRAINT "UQ_80d802c068c34f13b72f642b0d7"`);
        await queryRunner.query(`ALTER TABLE "userData" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "userData" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "userData" DROP CONSTRAINT "UQ_99c6b3d0bf2147f6283e9650091"`);
        await queryRunner.query(`ALTER TABLE "userData" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "userData" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "UQ_29a733971f71626611bb3808ebe"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_22abf72351fb3a0c9cd84d88bb6"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userDataId"`);
    }

}
