import express from 'express';
import * as userDao from '../daos/sql-user.dao';

// the user router represents a subset of the application
// for all enpoints starting with /users
export const usersRouter = express.Router();

/**
 * /users
 * find all users
 */
usersRouter.get('', async (req, res) => {
    const users = await userDao.findAll();
    res.json(users);
});

/**
 * /users/:id
 * find user by some id
 */
usersRouter.get('/:id', async (req, res) => {
    const user = await userDao.findById(+req.params.id);
    res.json(user);
});


/**
 * /users
 * partially update user resource
 */
usersRouter.patch('', async (req, res) => {
    console.log('beginning patch');
    const userId = req.body.userid;
    console.log(userId);
        const updatedUser = await userDao.update(req.body);
        const user = await userDao.findById(updatedUser);
        res.json(user);
});
