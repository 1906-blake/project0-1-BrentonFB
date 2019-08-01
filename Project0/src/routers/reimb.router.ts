import express from 'express';
import * as reimbDao from '../daos/sql-reimb.dao';

export const reimbRouter = express.Router();

/**
 * /reimb
 * Getting all reimbursements
 */
reimbRouter.get('', async (req, res) => {
    const reimbs = await reimbDao.findAllReimbs();
    res.json(reimbs);
    console.log('found all reimbs');
});

/**
 * /reimb/reimb/:ID
 * Getting reimbursements from status id
 */
reimbRouter.get('/reimb/:reimbId', async (req, res) => {
    const reimbId = +req.params.reimbId;
    const reimbs = await reimbDao.findByStatusId(reimbId);
    res.json(reimbs);
});
/**
 * /reimb/reimb/author/:ID
 * getting reimbursements from author id
 */
reimbRouter.get('/reimb/author/:reimbId', async (req, res) => {
    const reimbId = +req.params.reimbId;
    const reimbs = await reimbDao.findByAuthorId(reimbId);
    res.json(reimbs);
});

/**
 * /reimb
 * adding a reimbursement to the table
 */
reimbRouter.post('', async (req, res) => {
    const card = req.body;
    if (!card) {
        res.sendStatus(400);
    } else {
        const id = await reimbDao.save(card);
        if (!id) {
            res.sendStatus(400);
        } else {
            card.id = id;
            res.status(201); // created status code
            const reimbs = await reimbDao.findByReimbId(card.id);
            res.json(reimbs);
        }
    }
});

/**
 * /reimb
 * partially update a reimbursement
 */
reimbRouter.patch('', async (req, res) => {
    const card = req.body;
    console.log(card);
    if (!card) {
        res.sendStatus(400);
    } else {
        console.log('sending to update');
        const id = await reimbDao.update(card);
        if (!id) {
            res.sendStatus(400);
        } else {
            card.id = id;
            res.status(201);
            console.log('sending to the find by id');
            const reimbs = await reimbDao.findByReimbId(card.id);
            res.json(reimbs);
        }
    }

    // const updatedConst = await reimbDao.update(req.body);
    // const reimbs = await reimbDao.findByReimbId(updatedConst);
    // res.json(reimbs);
});
