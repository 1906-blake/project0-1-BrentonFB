"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import User from '../models/user';
var user_reimb_1 = __importDefault(require("../models/user.reimb"));
var role_1 = require("../models/role");
// export function convertSqlUser(row: any) {
//     return new User(row.user_id, row.username, '', row.email, row.first_name, row.last_name, row.phone, row.role);
// }
function convertSqlUser(row) {
    return new user_reimb_1.default(row.userid, row.username, row.pass, row.firstname, row.lastname, row.email, new role_1.Role(row.positionid, row.positionname));
}
exports.convertSqlUser = convertSqlUser;
//# sourceMappingURL=user.converter.js.map