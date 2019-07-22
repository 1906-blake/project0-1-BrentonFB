INSERT INTO positions (name)
VALUES ('admin'), 
('finance_manager'), 
('employee');

INSERT INTO reimbursementstatus (statusdesc)
VALUES ('pending'), 
('approved'),
('denied');

INSERT INTO reimbursementtype (typeof)
VALUES ('lodging'),
('travel'),
('food'),
('other');

INSERT INTO users (username, pass, 
firstname, lastname, email, position)
VALUES ('nepgear', 'password', 'brenton', 
'byrd', 'fosterbyrdbrenton@gmail.com', 1),
('tjerry', 'password', 'tom', 'jerry',
'tom.jerry@gmail.com', 2),
('lagnation', 'password', 'logan', 'nathaniel',
'lagnation@gmail.com', 3),
('shrued', 'password', 'shane', 'dewgon',
'shaneshrued@gmail.com', 3);

INSERT INTO reimbursement (author, amount,
datesubmitted, dateresolved, resolver,
reimbursementstatus, reimbursementtype)
VALUES (2, 250,'2016-01-01', '2016-03-28',
1, 2, 2),
(3, 370, '2019-07-01', null, 1, 1, 3),
(4, 1500, '2018-03-12', '2018-03-25', 1, 3, 4);