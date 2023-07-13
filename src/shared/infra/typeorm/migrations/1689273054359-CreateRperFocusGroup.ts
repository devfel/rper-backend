import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRperFocusGroup1689273054359 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'rper_focusgroup',
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
                        name: 'FKRperFocusGroupRper',
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
        await queryRunner.dropTable('rper_focusgroup');
    }


}
