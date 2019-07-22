import express from 'express';

export const userRouter = express.Router();

// find all users;
userRouter.get('/users', (req, res) => {
    res.send('this returns all users');
});

// find user by userid;
userRouter.get('/users/:id', (req, res) => {
    res.send('this returns users with the id ' + req.params.id);
});

// update the user;
userRouter.patch('/users', (req, res) => {
    res.send ('You have patched that user');
});

// login as a user;
userRouter.post('/login', (req, res) => {
    res.send('you have logged in');
});