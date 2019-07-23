"use strict";
// export function authMiddleware(...roles) {
//     return (req, res, next) => {
//         if(req.session.user) {
//             if(roles.includes(req.session.user.role)){
//                 next();
//             } else {
//                 // 403 means forbidden which means we know who they are
//                 // they just don't have the right access
//                 res.status(403);
//                 res.send('Permission Denied')
//             }
//         } else {
//             // 401 is Unauthorized which really means Unauthenticated
//             // they don't have access because we don't know who they are
//             res.sendStatus(401);
//         }
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Auth middleware, same as above code just different sytax
 * @param roles
 */
exports.authMiddleware = function () {
    var roles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        roles[_i] = arguments[_i];
    }
    return function (req, res, next) {
        if (req.session.user) {
            // console.log('current user = ', req.session.user);
            if (roles.includes(req.session.user.role)) {
                next();
            }
            else {
                // 403 means forbidden which means we know who they are
                // they just don't have the right access
                res.status(403);
                res.send('Permission Denied');
            }
        }
        else {
            // 401 is Unauthorized which really means Unauthenticated
            // they don't have access because we don't know who they are
            res.sendStatus(401);
        }
    };
};
//# sourceMappingURL=auth.middleware.js.map