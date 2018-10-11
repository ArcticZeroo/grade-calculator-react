"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.getRandomQuadString = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return Util;
}());
exports.default = Util;
//# sourceMappingURL=Util.js.map