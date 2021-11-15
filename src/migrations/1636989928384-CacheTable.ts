import {MigrationInterface, QueryRunner} from "typeorm";

export default class CacheTable1636989928384 implements MigrationInterface {
    name = 'CacheTable1636989928384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "userData" ALTER COLUMN "code" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_065d4d8f3b5adb4a08841eae3c8" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "userData" ALTER COLUMN "code" SET NOT NULL`);
    }

}
