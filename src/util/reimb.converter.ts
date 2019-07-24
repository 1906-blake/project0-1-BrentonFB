// import Card from '../models/card';
// import { Quality } from '../models/quality';
// import User from '../models/user';
// import { Game } from '../models/game';
// import { usersRouter } from '../routers/users.router';
// import * as userDao from '../daos/sql-user.dao';
import Reimbursement from '../models/reimbursement';
import { ReimbursementStatus } from '../models/reimb.status';
import { ReimbursementType } from '../models/reimb.type';
import UserReimb from '../models/user.reimb';

// export function cardConverter(row) {
//     return new Card(row.card_id, row.card_name, row.card_value,
//         new Quality(row.quality_id, row.quality_label),
//         row.user_id && new User(row.user_id, row.username, '', row.email, row.first_name, row.last_name, row.phone, row.role),
//         new Game(row.game_id, row.game_name, row.producer));
// }




export function reimbConverter(row) {

    return new Reimbursement(row.reimbursementid, new UserReimb(row.auserid, row.ausername,
        row.apass, row.afirstname, row.alastname, row.aemail, row.apositionid), row.amount,
        row.datesubmitted, row.dateresolved, new UserReimb(row.ruserid, row.rusername, row.rpass,
        row.rfirstname, row.rlastname, row.remail, row.rpositionid),
        new ReimbursementStatus(row.reimbstatusid, row.reimbstatus),
        new ReimbursementType (row.reimbtypeid, row.reimbtype));
}