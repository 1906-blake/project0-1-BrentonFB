"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserReimb = /** @class */ (function () {
    function UserReimb(userId, username, pass, firstName, lastName, email, role) {
        if (userId === void 0) { userId = 0; }
        if (username === void 0) { username = ''; }
        if (pass === void 0) { pass = ''; }
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (email === void 0) { email = ''; }
        this.userId = userId;
        this.username = username;
        this.pass = pass;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.role = role;
    }
    return UserReimb;
}());
exports.default = UserReimb;
//# sourceMappingURL=user.reimb.js.map