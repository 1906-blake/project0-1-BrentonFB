"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = __importDefault(require("../models/card"));
var quality_1 = require("../models/quality");
var user_1 = __importDefault(require("../models/user"));
var game_1 = require("../models/game");
function cardConverter(row) {
    return new card_1.default(row.card_id, row.card_name, row.card_value, new quality_1.Quality(row.quality_id, row.quality_label), row.user_id && new user_1.default(row.user_id, row.username, '', row.email, row.first_name, row.last_name, row.phone, row.role), new game_1.Game(row.game_id, row.game_name, row.producer));
}
exports.cardConverter = cardConverter;
//# sourceMappingURL=card.converter.js.map