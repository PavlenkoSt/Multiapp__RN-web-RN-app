"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_native_1 = require("react-native");
var react_1 = __importDefault(require("react"));
var App = function () {
    return (react_1.default.createElement(react_native_1.View, null,
        react_1.default.createElement(react_native_1.Text, null, "App")));
};
exports.App = App;
var styles = react_native_1.StyleSheet.create({});
