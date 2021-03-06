'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: static;\n  max-height: 75%;\n  max-width: 75%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n'], ['\n  position: static;\n  max-height: 75%;\n  max-width: 75%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Dialog = _styledComponents2.default.div(_templateObject);

exports.default = Dialog;