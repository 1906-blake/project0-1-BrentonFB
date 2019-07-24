import express from 'express';
import * as reimbDao from '../daos/sql-reimb.dao';

export const reimbRouter = express.Router();

/**
 * /reimb
 * Getting reimbursements from status id
 */
reimbRouter.get('/reimb/:reimbId', async (req, res) => {
    const reimbId = +req.params.reimbId;
    const cards = await reimbDao.findByStatusId(reimbId);
    res.json(cards);
});
/**
 * /reimb
 * getting reimbursements from author id
 */
reimbRouter.get('/reimb/author/:reimbId', async (req, res) => {
    const reimbId = +req.params.reimbId;
    const cards = await reimbDao.findByAuthorId(reimbId);
    res.json(cards);
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
            const cards = await reimbDao.findByReimbId(card.id);
            res.json(cards);
        }
    }
});

/**
 * /reimb
 * partially update a reimbursement
 */
reimbRouter.patch('', async (req, res) => {

    const updatedConst = await reimbDao.update(req.body);
    const reimbs = await reimbDao.findByReimbId(updatedConst);
    res.json(reimbs);
});
