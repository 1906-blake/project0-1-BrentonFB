import { Pool } from 'pg';

const connectionConfiguration = {
    user: process.env.REIMB_DB_USERNAME,
    host: process.env.REIMB_DB_URL || 'localhost',
    database: process.env.REIMB_DB_NAME || 'card_api',
    password: process.env.REIMB_DB_PASSWORD,
    port: +process.env.REIMB_DB_PORT || 5432,
    max: 5
};

console.log(connectionConfiguration);
export const connectionPool = new Pool(connectionConfiguration);