"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game(id, name, producer) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ''; }
        if (producer === void 0) { producer = ''; }
        this.id = id;
        this.name = name;
        this.producer = producer;
    }
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map