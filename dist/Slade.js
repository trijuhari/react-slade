'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Direction = require('./elements/Direction');

var _Direction2 = _interopRequireDefault(_Direction);

var _Dialog = require('./elements/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slade = function (_Component) {
  _inherits(Slade, _Component);

  function Slade(props) {
    _classCallCheck(this, Slade);

    var _this = _possibleConstructorReturn(this, (Slade.__proto__ || Object.getPrototypeOf(Slade)).call(this, props));

    _this.state = {
      currentIndex: props.index
    };
    return _this;
  }

  _createClass(Slade, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'slade', style: Slade.defaultStyles },
        'I\'m slade',
        _react2.default.createElement(_Direction2.default, null),
        _react2.default.createElement(_Dialog2.default, null),
        _react2.default.createElement(_Direction2.default, null)
      );
    }
  }]);

  return Slade;
}(_react.Component);

Slade.defaultStyles = {
  color: "blue",
  fontSize: "20px"
};


Slade.propTypes = {
  open: _propTypes2.default.bool,
  items: _propTypes2.default.array,
  index: _propTypes2.default.number
};

exports.default = Slade;