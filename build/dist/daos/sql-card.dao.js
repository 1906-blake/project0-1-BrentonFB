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
Object.defineProperty(exports, "__esModule", { value: true });
var connection_util_1 = require("../util/connection.util");
var card_converter_1 = require("../util/card.converter");
function findAll() {
    return __awaiter(this, void 0, void 0, function () {
        var client, queryString, result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, connection_util_1.connectionPool.connect()];
                case 1:
                    client = _a.sent(); // basically .then is everything after this
                    queryString = "\n        SELECT * FROM card\n        LEFT JOIN app_user USING (user_id)\n        INNER JOIN quality USING (quality_id)\n        INNER JOIN game USING (game_id)";
                    return [4 /*yield*/, client.query(queryString)];
                case 2:
                    result = _a.sent();
                    // convert result from sql object to js object
                    return [2 /*return*/, result.rows.map(card_converter_1.cardConverter)];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 5];
                case 4:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 5:
                    console.log('found all');
                    return [2 /*return*/, undefined];
            }
        });
    });
}
exports.findAll = findAll;
function findByGameId(gameId) {
    return __awaiter(this, void 0, void 0, function () {
        var client, queryString, result, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, connection_util_1.connectionPool.connect()];
                case 1:
                    client = _a.sent(); // basically .then is everything after this
                    queryString = "\n        SELECT * FROM card\n        LEFT JOIN app_user USING (user_id)\n        INNER JOIN quality USING (quality_id)\n        INNER JOIN game USING (game_id)\n        WHERE game_id = $1";
                    return [4 /*yield*/, client.query(queryString, [gameId])];
                case 2:
                    result = _a.sent();
                    // convert result from sql object to js object
                    return [2 /*return*/, result.rows.map(card_converter_1.cardConverter)];
                case 3:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 5];
                case 4:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 5:
                    console.log('found all');
                    return [2 /*return*/, undefined];
            }
        });
    });
}
exports.findByGameId = findByGameId;
function save(card) {
    return __awaiter(this, void 0, void 0, function () {
        var client, queryString, params, result, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, 4, 5]);
                    return [4 /*yield*/, connection_util_1.connectionPool.connect()];
                case 1:
                    client = _a.sent(); // basically .then is everything after this
                    queryString = "\n            INSERT INTO card (card_name, card_value, game_id, quality_id, user_id)\n            VALUES \t($1, $2, $3, $4, $5)\n            RETURNING card_id\n        ";
                    params = [card.name, card.value, card.game && card.game.id, card.quality && card.quality.id, card.owner && card.owner.id];
                    return [4 /*yield*/, client.query(queryString, params)];
                case 2:
                    result = _a.sent();
                    return [2 /*return*/, result.rows[0].card_id];
                case 3:
                    err_3 = _a.sent();
                    console.log(err_3);
                    return [3 /*break*/, 5];
                case 4:
                    client && client.release();
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/, undefined];
            }
        });
    });
}
exports.save = save;
//# sourceMappingURL=sql-card.dao.js.map