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
var react_1 = require("react");
var React = require("react");
var Button_1 = require("@material-ui/core/Button");
var EditorView = /** @class */ (function (_super) {
    __extends(EditorView, _super);
    function EditorView(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            rows: []
        };
        return _this;
    }
    EditorView.prototype.componentDidMount = function () {
        this._createRow();
    };
    EditorView.prototype._createRow = function () {
        this.setState({
            rows: this.state.rows.slice()
        });
    };
    EditorView.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", null, this.state.rows),
            React.createElement("div", null,
                React.createElement(Button_1.default, { onClick: this._createRow.bind(this) }, "Add row"))));
    };
    return EditorView;
}(react_1.Component));
exports.default = EditorView;
//# sourceMappingURL=EditorView.js.map