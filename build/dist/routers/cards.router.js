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
var cardDao = __importStar(require("../daos/sql-card.dao"));
exports.cardsRouter = express_1.default.Router();
/**
 * /cards
 * Find all cards
 */
exports.cardsRouter.get('', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var cards;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, cardDao.findAll()];
            case 1:
                cards = _a.sent();
                res.json(cards);
                return [2 /*return*/];
        }
    });
}); });
/**
 * /cards
 * Find all cards by game
 */
exports.cardsRouter.get('/game/:gameId', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var gameId, cards;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                gameId = +req.params.gameId;
                return [4 /*yield*/, cardDao.findByGameId(gameId)];
            case 1:
                cards = _a.sent();
                res.json(cards);
                return [2 /*return*/];
        }
    });
}); });
/**
 * /cards/game/:game
 * find cards by game
 */
exports.cardsRouter.get('/game/:game', function (req, res) {
    res.send("finding cards by game: " + req.params.game);
});
/**
 * /cards/:id
 * find cards by id
 */
exports.cardsRouter.get('/:id', function (req, res) {
    res.send("finding cards by id: " + req.params.id);
});
/**
 * /cards/owner/:ownerId
 * find cards by owner's id
 */
exports.cardsRouter.get('/owner/:ownerId', function (req, res) {
    res.send("finding cards by owner's id: " + req.params.ownerId);
});
/**
 * /cards
 * create new card resource
 */
exports.cardsRouter.post('', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var card, id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                card = req.body;
                if (!!card) return [3 /*break*/, 1];
                res.sendStatus(400);
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, cardDao.save(card)];
            case 2:
                id = _a.sent();
                if (!id) {
                    res.sendStatus(400);
                }
                else {
                    card.id = id;
                    res.status(201); // created status code
                    res.json(card);
                }
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * /cards
 * partially update card resource
 */
exports.cardsRouter.patch('', function (req, res) {
    res.send("updating card: " + JSON.stringify(req.body));
});
/**
 * /cards
 * delete card by id
 */
exports.cardsRouter.delete('/:id', function (req, res) {
    console.log("deleting card with id: " + req.params.id);
    res.send("deleting card with id: " + req.params.id);
});
//# sourceMappingURL=cards.router.js.map