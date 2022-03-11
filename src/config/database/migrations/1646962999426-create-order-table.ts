import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createOrderTable1646962999426 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Order',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'totalOrder',
            type: 'double',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Order');
  }
}
