"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userDao = __importStar(require("../daos/sql-user.dao"));
// import { authMiddleware } from '../middleware/auth.middleware';
// the user router represents a subset of the application
// for all enpoints starting with /users
exports.usersRouter = express_1.default.Router();
/**
 * /users
 * find all users
 */
// usersRouter.get('', [
//     authMiddleware('admin', 'manager'),
//     async (req, res) => {
//         const users = await userDao.findAll();
//         res.json(users);
//     }]);
// usersRouter.get('', async (req, res) => {
//         const users = await userDao.findAll();
//         res.json(users);
//     });
exports.usersRouter.get('', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userDao.findAll()];
            case 1:
                users = _a.sent();
                res.json(users);
                return [2 /*return*/];
        }
    });
}); });
/**
 * /users/:id
 * find user by some id
 */
exports.usersRouter.get('/:id', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userDao.findById(+req.params.id)];
            case 1:
                user = _a.sent();
                res.json(user);
                return [2 /*return*/];
        }
    });
}); });
/**
 * /users/firstName/:firstName
 */
exports.usersRouter.get('/firstName/:firstName', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var firstName, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                firstName = req.params.firstName;
                return [4 /*yield*/, userDao.findByFirstName(firstName)];
            case 1:
                users = _a.sent();
                res.json(users);
                return [2 /*return*/];
        }
    });
}); });
/**
 * /users
 * create new user resource
 */
exports.usersRouter.post('', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var user, id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = req.body;
                if (!!user) return [3 /*break*/, 1];
                res.sendStatus(400);
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, userDao.save(user)];
            case 2:
                id = _a.sent();
                if (!id) {
                    res.sendStatus(400);
                }
                else {
                    user.id = id;
                    res.status(201); // created status code
                    res.json(user);
                }
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * /users
 * partially update user resource
 */
exports.usersRouter.patch('', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var userId, currentLoggedInUser, updatedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = req.body.id;
                currentLoggedInUser = req.session.user;
                if (!(currentLoggedInUser && currentLoggedInUser.id === userId)) return [3 /*break*/, 2];
                return [4 /*yield*/, userDao.update(req.body)];
            case 1:
                updatedUser = _a.sent();
                res.json(updatedUser);
                return [3 /*break*/, 3];
            case 2:
                res.sendStatus(403);
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * /users
 * delete user by id
 */
exports.usersRouter.delete('/:id', function (req, res) {
    // userDao.deleteUser(+req.params.id);
    res.end();
});
//# sourceMappingURL=users.router.js.map