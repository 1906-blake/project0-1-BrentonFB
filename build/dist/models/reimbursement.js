"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Reimbursement = /** @class */ (function () {
    function Reimbursement(reimbursementId, author, amount, dateSubmitted, dateResolved, resolver, status, type) {
        if (reimbursementId === void 0) { reimbursementId = 0; }
        if (amount === void 0) { amount = 0; }
        if (dateSubmitted === void 0) { dateSubmitted = 0; }
        if (dateResolved === void 0) { dateResolved = 0; }
        this.reimbursementId = reimbursementId;
        this.author = author;
        this.amount = amount;
        this.dateSubmitted = dateSubmitted;
        this.dateResolved = dateResolved;
        this.resolver = resolver;
        this.status = status;
        this.type = type;
    }
    return Reimbursement;
}());
exports.default = Reimbursement;
//# sourceMappingURL=reimbursement.js.map