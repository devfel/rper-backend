import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRperFinalConsideration1689106966464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'rper_finalconsideration',
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
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKRperFinalConsiderationRper',
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
        await queryRunner.dropTable('rper_finalconsideration');
    }

}
