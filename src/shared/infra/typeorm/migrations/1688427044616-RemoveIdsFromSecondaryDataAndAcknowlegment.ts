import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class RemoveIdsFromSecondaryDataAndAcknowlegment1688427044616
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<any> {
    // Changing SecondaryData
    await queryRunner.dropColumn('rper_acknowledgments', 'id')
    await queryRunner.changeColumn(
      'rper_secondary_data',
      'rper_id',
      new TableColumn({
        name: 'rper_id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      }),
    )
    // Changing Acknowlegdment
    await queryRunner.dropColumn('rper_acknowledgments', 'id')
    await queryRunner.changeColumn(
      'rper_acknowledgments',
      'rper_id',
      new TableColumn({
        name: 'rper_id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    // Changing SecondaryData
    await queryRunner.addColumn(
      'rper_secondary_data',
      new TableColumn({
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      }),
    )
    await queryRunner.changeColumn(
      'rper_secondary_data',
      'rper_id',
      new TableColumn({
        name: 'rper_id',
        type: 'uuid',
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      }),
    )
    // Changing Acknowlegdment
    await queryRunner.addColumn(
      'rper_acknowledgments',
      new TableColumn({
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      }),
    )
    await queryRunner.changeColumn(
      'rper_acknowledgments',
      'rper_id',
      new TableColumn({
        name: 'rper_id',
        type: 'uuid',
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      }),
    )
  }
}
