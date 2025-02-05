"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [__dirname + '/../../../modules/**/infra/typeorm/entities/*.js'],
    migrations: [__dirname + '/migrations/*.js'],
    cli: {
        migrationsDir: 'src/shared/infra/typeorm/migrations',
    },
})
    .then(() => {
    console.log('Database connected successfully!');
})
    .catch(error => {
    console.error('Database connection error:', error);
});
////////////////////////////////////////////
//   import { createConnection } from "typeorm";
//   createConnection();
////////////////////////////////////////////
// import {DataSource} from "typeorm";
// dataSource.connect();
// import ormconfig from "../../ormconfig.json"
// const MyDataSource = new DataSource(ormconfig)
// import { DataSource } from "typeorm";
// const AppDataSource = new DataSource({
//     "type": "postgres",
//     "host": "localhost",
//     "port": 5432,
//     "username": "postgres",
//     "password": "docker",
//     "database": "rper_database",
//     "migrations": [
//         ".src/database/migrations/*.ts"
//     ]
// })
