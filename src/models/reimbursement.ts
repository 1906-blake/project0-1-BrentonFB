import { ReimbursementStatus } from './reimb.status';
import { ReimbursementType } from './reimb.type';
import UserReimb from './user.reimb';

export default class Reimbursement {
    constructor(
        public reimbursementId = 0,
        public author: UserReimb,
        public amount = 0,
        public dateSubmitted = 0,
        public dateResolved = 0,
        public resolver: UserReimb,
        public status: ReimbursementStatus,
        public type: ReimbursementType
    ) {}
}