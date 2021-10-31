import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProduct1590517456673 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'code',
            type: 'integer',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'buyPrice',
            type: 'integer',
          },
          {
            name: 'sellPrice',
            type: 'integer',
          },
          {
            name: 'tags',
            type: 'varchar',
          },
          {
            name: 'lovers',
            type: 'integer',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('product');
  }
}
