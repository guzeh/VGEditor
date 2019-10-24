"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseRegister = _interopRequireDefault(require("./BaseRegister"));

var _default = {
  mixins: [_BaseRegister.default],
  name: 'RegisterGroup',
  created: function created() {
    this.type = 'group';
    this.bindEvent();
  }
};
exports.default = _default;