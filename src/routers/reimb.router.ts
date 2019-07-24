import express from 'express';
import * as cardDao from '../daos/sql-reimb.dao';

export const cardsRouter = express.Router();

/**
 * /reimb
 * Getting reimbursements from status id
 */
cardsRouter.get('/reimb/:reimbId', async (req, res) => {
    const reimbId = +req.params.reimbId;
    const cards = await cardDao.findByStatusId(reimbId);
    res.json(cards);
});
/**
 * /reimb
 * getting reimbursements from author id
 */
cardsRouter.get('/reimb/author/:reimbId', async (req, res) => {
    const reimbId = +req.params.reimbId;
    const cards = await cardDao.findByAuthorId(reimbId);
    res.json(cards);
});

/**
 * /reimb
 * adding a reimbursement to the table
 */
cardsRouter.post('', async (req, res) => {
    const card = req.body;
    if (!card) {
        res.sendStatus(400);
    } else {
        const id = await cardDao.save(card);
        if (!id) {
            res.sendStatus(400);
        } else {
            card.id = id;
            res.status(201); // created status code
            const cards = await cardDao.findByReimbId(card.id);
            res.json(cards);
        }
    }
});

/**
 * /reimb
 * partially update a reimbursement
 */
cardsRouter.patch('', async (req, res) => {

    const updatedConst = await cardDao.update(req.body);
    const reimbs = await cardDao.findByReimbId(updatedConst);
    res.json(reimbs);
});
