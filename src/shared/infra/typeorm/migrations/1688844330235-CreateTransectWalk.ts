import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateTransectWalk1688844330235 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'rper_transect_walk',
        columns: [
          {
            name: 'rper_id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'content',
            type: 'text',
          },
          {
            name: 'status',
            type: 'rper_status',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKRperHistoricalMapping',
            columnNames: ['rper_id'],
            referencedColumnNames: ['rper_id'],
            referencedTableName: 'rpers',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('rper_transect_walk')
  }
}
