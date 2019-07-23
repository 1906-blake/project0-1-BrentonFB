"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_session_1 = __importDefault(require("express-session"));
var sessionConfiguration = {
    secret: 'magic',
    cookie: { secure: false },
};
exports.sessionMiddleware = express_session_1.default(sessionConfiguration);
//# sourceMappingURL=session.middleware.js.map