import { PoolClient } from 'pg';
import { connectionPool } from '../util/connection.util'
import { cardConverter } from '../util/card.converter';
// import Card from '../models/card';
import Reimbursement from '../models/reimbursement';


export async function findAll() {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
        SELECT * FROM card
        LEFT JOIN app_user USING (user_id)
        INNER JOIN quality USING (quality_id)
        INNER JOIN game USING (game_id)`;
        const result = await client.query(queryString);
        // convert result from sql object to js object
        return result.rows.map(cardConverter);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}

export async function findByGameId(gameId: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
        SELECT * FROM card
        LEFT JOIN app_user USING (user_id)
        INNER JOIN quality USING (quality_id)
        INNER JOIN game USING (game_id)
        WHERE game_id = $1`;
        const result = await client.query(queryString, [gameId]);
        // convert result from sql object to js object
        return result.rows.map(cardConverter);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}

export async function findByStatusId(gameId: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
        SELECT * FROM reimbursement a
        LEFT JOIN resolverview r
        ON (a.resolver = r.ruserid)
        LEFT JOIN authorview b
        ON (a.userid = b.auserid)
        LEFT JOIN reimbursementstatus
        USING (reimbstatusid)
        LEFT JOIN reimbursementtype
        USING (reimbtypeid)
        WHERE reimbstatusid = $1`;
        const result = await client.query(queryString, [gameId]);
        // convert result from sql object to js object
        return result.rows.map(cardConverter);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}

export async function findByAuthorId(gameId: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
        SELECT * FROM reimbursement a
        LEFT JOIN resolverview r
        ON (a.resolver = r.ruserid)
        LEFT JOIN authorview b
        ON (a.userid = b.auserid)
        LEFT JOIN reimbursementstatus
        USING (reimbstatusid)
        LEFT JOIN reimbursementtype
        USING (reimbtypeid)
        WHERE auserid = $1;`;
        const result = await client.query(queryString, [gameId]);
        // convert result from sql object to js object
        return result.rows.map(cardConverter);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}

export async function findByReimbId(gameId: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const queryString = `
        SELECT * FROM reimbursement a
        LEFT JOIN resolverview r
        ON (a.resolver = r.ruserid)
        LEFT JOIN authorview b
        ON (a.userid = b.auserid)
        LEFT JOIN reimbursementstatus
        USING (reimbstatusid)
        LEFT JOIN reimbursementtype
        USING (reimbtypeid)
        WHERE reimbursementid = $1`;
        const result = await client.query(queryString, [gameId]);
        // convert result from sql object to js object
        return result.rows.map(cardConverter);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}

export async function update(card: Reimbursement) {
    const oldReimb = await findByReimbId(card.reimbursementId);
    if (!oldReimb) {
        return undefined;
    }
    card = {
        ...oldReimb,
        ...card
    };
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const queryString = `
            UPDATE reimbursement SET userid = $1, amount = $2,
            datesubmitted = $3, dateresolved = $4, resolver = $5,
            reimbstatusid = $6, reimbtypeid = $7
            RETURNING reimbursementid;
        `;
        const params = [card.author, card.amount, card.dateSubmitted, card.dateResolved, card.resolver,
        card.status, card.type];
        const result = await client.query(queryString, params);
        return result.rows[0].reimbursementid;
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}


export async function save(card: Reimbursement) {
    let client: PoolClient;
    console.log('connected to the save function');
    try {
        client = await connectionPool.connect(); // basically .then is everything after this

        const queryString = `
        INSERT INTO reimbursement (userid, amount,
            datesubmitted, dateresolved, resolver,
            reimbstatusid, reimbtypeid)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING reimbursementid
        `;
        console.log('query went through');
        const params = [card.author, card.amount, card.dateSubmitted, card.dateResolved, card.resolver,
             card.status, card.type];
             console.log('params went through');
        const result = await client.query(queryString, params);
        console.log('merged both of them');
        console.log('returned the updated id');
        return result.rows[0].reimbursementid;

    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}