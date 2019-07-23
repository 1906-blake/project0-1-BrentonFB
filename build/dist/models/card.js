"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    function Card(id, name, value, quality, owner, game) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = ''; }
        if (value === void 0) { value = 0; }
        this.id = id;
        this.name = name;
        this.value = value;
        this.quality = quality;
        this.owner = owner;
        this.game = game;
    }
    return Card;
}());
exports.default = Card;
//# sourceMappingURL=card.js.map