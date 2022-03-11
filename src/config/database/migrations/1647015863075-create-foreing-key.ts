import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class createForeingKey1647015863075 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const foreignKey = new TableForeignKey({
      columnNames: ['items'],
      referencedTableName: 'Item',
      referencedColumnNames: ['id'],
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
    await queryRunner.createForeignKey('Order', foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('Order', 'items');
  }
}
