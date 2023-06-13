import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddBackgroundUrlToRper1686697220746 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn(
      'rpers',
      new TableColumn({
        name: 'background',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn('rpers', 'background');
  }
}
