"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var connectionConfiguration = {
    user: process.env.CARD_DB_USERNAME,
    host: process.env.CARD_DB_URL || 'localhost',
    database: process.env.CARD_DB_NAME || 'cardapi',
    password: process.env.CARD_DB_PASSWORD,
    port: +process.env.CARD_DB_PORT || 5432,
    max: 5
};
// console.log(connectionConfiguration);
exports.connectionPool = new pg_1.Pool(connectionConfiguration);
//# sourceMappingURL=connection.util.js.map