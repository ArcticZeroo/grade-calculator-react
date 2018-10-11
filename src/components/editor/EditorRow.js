"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("../../api/Util");
var react_1 = require("react");
var React = require("react");
var EditorRow = /** @class */ (function (_super) {
    __extends(EditorRow, _super);
    function EditorRow(props) {
        if (props === void 0) { props = {}; }
        var _this = _super.call(this, props) || this;
        _this._key = Util_1.default.getRandomQuadString();
        return _this;
    }
    EditorRow.prototype.render = function () {
        return (React.createElement("div", null, "test"));
    };
    return EditorRow;
}(react_1.Component));
exports.default = EditorRow;
//# sourceMappingURL=EditorRow.js.map