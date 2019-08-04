import express from 'express';
import * as reimbDao from '../daos/sql-reimb.dao';
import { authMiddleware } from '../middleware/auth.middleware';

export const reimbRouter = express.Router();

/**
 * /reimb
 * Getting all reimbursements
 */
reimbRouter.get('', [
    authMiddleware(2),
    async (req, res) => {
    const reimbs = await reimbDao.findAllReimbs();
    res.json(reimbs);
    console.log('found all reimbs');
}]);

/**
 * /reimb/reimb/:ID
 * Getting reimbursements from status id
 */
reimbRouter.get('/reimb/:statusId', [
    authMiddleware(2),
    async (req, res) => {
    const statusId = +req.params.statusId;
    const reimbs = await reimbDao.findByStatusId(statusId);
    res.json(reimbs);
}]);
/**
 * /reimb/reimb/author/:ID
 * getting reimbursements from author id
 */
reimbRouter.get('/reimb/author/:reimbId', async (req, res) => {
    if (req.session.user && req.session.user.role.roleId) {
        if (req.session.user.role.roleId === 1) {
            const reimbId = +req.params.reimbId;
            const reimbs = await reimbDao.findByAuthorId(reimbId);
            res.json(reimbs);
        } else if (req.session.user.role.roleId === 2) {
            const reimbId = +req.params.reimbId;
            const reimbs = await reimbDao.findByAuthorId(reimbId);
            res.json(reimbs);
        } else {
            if (req.session.user.userId && req.session.user.userId === +req.params.reimbId) {
                const reimbId = +req.params.reimbId;
                const reimbs = await reimbDao.findByAuthorId(reimbId);
                res.json(reimbs);
            } else {
                // 403 means forbidden which means we know who they are
                res.status(403);
                res.send('Permission Denied');
            }
        }
    } else {
        // 401 is Unauthorized which really means Unauthenticated
        res.sendStatus(401);
    }
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
reimbRouter.patch('', [
    authMiddleware(2),
    async (req, res) => {
    const card = req.body;
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
            const reimbs = await reimbDao.findByReimbId(card.id);
            res.json(reimbs);
        }
    }
}]);
