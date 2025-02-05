"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRperMembers1666151038310 = void 0;
const typeorm_1 = require("typeorm");
class CreateRperMembers1666151038310 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'rper_members',
                columns: [
                    {
                        name: 'rper_id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'uuid',
                        isPrimary: true
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKMemberRper',
                        columnNames: ['rper_id'],
                        referencedColumnNames: ['rper_id'],
                        referencedTableName: 'rpers',
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE'
                    },
                    {
                        name: 'FKMemberUser',
                        columnNames: ['user_id'],
                        referencedColumnNames: ['user_id'],
                        referencedTableName: 'users',
                        onDelete: 'SET NULL',
                        onUpdate: 'CASCADE'
                    },
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('rper_members');
        });
    }
}
exports.CreateRperMembers1666151038310 = CreateRperMembers1666151038310;
