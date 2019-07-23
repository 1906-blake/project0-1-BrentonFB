"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var users_router_1 = require("./routers/users.router");
var cards_router_1 = require("./routers/cards.router");
var session_middleware_1 = require("./middleware/session.middleware");
var auth_router_1 = require("./routers/auth.router");
// specify the port will run on
var port = process.env.PORT || 8012;
var app = express_1.default();
/**
 * Loggin middleware
 * This callback will be invoked anytime a request is made
 * regardless of url or http method
 */
app.use(function (req, res, next) {
    console.log("request made with url: " + req.url + " and method " + req.method);
    next(); // pass request on to search for the next piece of middleware
});
// set up body parser to convert json body to object stored on req.body
app.use(body_parser_1.default.json());
/**
 * Session middleware to give us access to req.session for session data
 */
app.use(session_middleware_1.sessionMiddleware);
/*******************************************
 * Register Routers
 ******************************************/
app.use('/users', users_router_1.usersRouter);
app.use('/cards', cards_router_1.cardsRouter);
app.use(auth_router_1.authRouter);
app.listen(port, function () {
    console.log('app started on port: ' + port);
});
//# sourceMappingURL=index.js.map