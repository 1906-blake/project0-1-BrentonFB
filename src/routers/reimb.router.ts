import express from 'express';

export const reimbRouter = express.Router();

// get reimbursements by statusid;
reimbRouter.get('/status/:id', (req, res) => {
    res.send('this returns reimbursements with the status set to id ' + req.params.id);
});

// get reimbursements by userid;
reimbRouter.get('/author/user/:id', (req, res) => {
    res.send('this returns reimbursements belonging to the user id ' + req.params.id);
});

// submit a reimbursement;
reimbRouter.post('/reimbs', (req, res) => {
    res.send('you posted a reimbursement');
});

// update a reimbursement;
reimbRouter.patch('/reimbs', (req, res) => {
    res.send('you have edited a reimbursement');
});