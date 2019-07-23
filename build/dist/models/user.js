"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, username, password, email, firstName, lastName, phone, role) {
        if (id === void 0) { id = 0; }
        if (username === void 0) { username = ''; }
        if (password === void 0) { password = ''; }
        if (email === void 0) { email = ''; }
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (phone === void 0) { phone = ''; }
        if (role === void 0) { role = ''; }
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.role = role;
    }
    return User;
}());
exports.default = User;
//# sourceMappingURL=user.js.map