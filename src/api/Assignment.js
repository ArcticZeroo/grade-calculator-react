"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Assignment = /** @class */ (function () {
    function Assignment(_a) {
        var _b = _a.totalPoints, totalPoints = _b === void 0 ? 0 : _b, _c = _a.earnedPoints, earnedPoints = _c === void 0 ? 0 : _c;
        this.earnedPoints = earnedPoints;
        this.totalPoints = totalPoints;
    }
    Object.defineProperty(Assignment.prototype, "percentage", {
        get: function () {
            return this.earnedPoints / this.totalPoints;
        },
        enumerable: true,
        configurable: true
    });
    return Assignment;
}());
exports.default = Assignment;
//# sourceMappingURL=Assignment.js.map