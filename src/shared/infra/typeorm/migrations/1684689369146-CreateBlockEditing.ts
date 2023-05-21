import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateBlockEditing1684689369146 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_edit_resources',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'rper_id',
            type: 'uuid',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'resource',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKEditResourceRPER',
            columnNames: ['rper_id'],
            referencedColumnNames: ['rper_id'],
            referencedTableName: 'rpers',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'FKEditResourceUser',
            columnNames: ['user_id'],
            referencedColumnNames: ['user_id'],
            referencedTableName: 'users',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
    await queryRunner.dropColumn('rper_secondary_data', 'editable');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_edit_resources');
    await queryRunner.addColumn(
      'rper_secondary_data',
      new TableColumn({
        name: 'editable',
        type: 'boolean',
        default: true,
      }),
    );
  }
}
