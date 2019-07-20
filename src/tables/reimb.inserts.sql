INSERT INTO positions (position)
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