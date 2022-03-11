import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createOrderTable1647013069647 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Order',
        columns: [
          {
            name: 'id',
            type: 'integer',
            generationStrategy: 'increment',
            isGenerated: true,
            isUnique: true,
          },
          {
            name: 'totalOrder',
            type: 'integer',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Order');
  }
}
