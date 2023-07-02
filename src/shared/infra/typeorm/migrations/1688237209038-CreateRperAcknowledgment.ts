import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRperAcknowledgment1688237209038 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'rper_acknowledgments',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'rper_id',
                        type: 'uuid',
                    },
                    {
                        name: 'content',
                        type: 'text',
                    },
                    {
                        name: 'status',
                        type: 'varchar',
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
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKRperAcknowledgmentRper',
                        columnNames: ['rper_id'],
                        referencedColumnNames: ['rper_id'],
                        referencedTableName: 'rpers',
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('rper_acknowledgments');
    }

}
