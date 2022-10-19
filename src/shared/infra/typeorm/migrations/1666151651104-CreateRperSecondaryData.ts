import { text } from "express";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRperSecondaryData1666151651104 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`create type rper_status as enum ('in_progress', 'completed', 'not_applicable', 'unstarted')`)

        await queryRunner.createTable(new Table({
            name: 'rper_secondary_data',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
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
                    type: 'rper_status'
                },
                {
                    name: 'editable',
                    type: 'boolean',
                    default: false
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
                    name: 'FKSecondaryDataRper',
                    columnNames: ['rper_id'],
                    referencedColumnNames: ['rper_id'],
                    referencedTableName: 'rpers',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('rper_secondary_data');
        await queryRunner.query('drop type rper_status');
    }

}
