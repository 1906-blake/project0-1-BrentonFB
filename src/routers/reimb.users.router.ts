import express from 'express';

export const userRouter = express.Router();

// find all users;
userRouter.get('/users', (req, res) => {
    res.send('this returns all users');
} );

// find user by userid;

// update the user;

// get reimbursements by reimbursementid;

// get reimbursements by userid;

// submit a reimbursement;

// update a reimbursement;

// login as a user;