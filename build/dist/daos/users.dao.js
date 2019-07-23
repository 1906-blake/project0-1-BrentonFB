"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * No longer in use
 */
var user_1 = __importDefault(require("../models/user"));
var users = [
    new user_1.default(1, 'btkruppa', 'password', 'blake.kruppa@revature.com', 'blake', 'kruppa', '90210', 'admin'),
    new user_1.default(2, 'bill', 'password', 'bill@revature.com', 'bill', 'bob', '90210', 'manager'),
    new user_1.default(3, 'larry', 'password', 'larry@revature.com', 'larry', 'the cableman', '90210', 'employee'),
];
function findAll() {
    return users;
}
exports.findAll = findAll;
function findById(id) {
    return users.filter(function (user) { return user.id === id; })[0];
}
exports.findById = findById;
function findByFirstName(firstName) {
    return users.filter(function (user) { return user.firstName === firstName; });
}
exports.findByFirstName = findByFirstName;
function findByUsernameAndPassword(username, password) {
    return users.filter(function (user) { return user.username === username && user.password === password; })[0];
}
exports.findByUsernameAndPassword = findByUsernameAndPassword;
function save(user) {
    var newId = Math.floor(Math.random() * 100000000);
    user.id = newId;
    users.push(user);
}
exports.save = save;
/**
 * {
 *  id: 1,
 * username: 'btkruppa'
 * password: 'password'
 * firstName: 'blake'
 * lastName: 'kruppa'
 * email: 'blake.kruppa@revature.com'
 * phone: '0903294'
 * }
 *
 * {
 *  id: 1,
 *  phone: '9329304'
 * }
 * @param user
 */
function patch(user) {
    users = users.map(function (ele) {
        if (user.id === ele.id) {
            return __assign({}, ele, user);
        }
        else {
            return ele;
        }
    });
}
exports.patch = patch;
function deleteUser(id) {
    users = users.filter(function (user) { return user.id !== id; });
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.dao.js.map