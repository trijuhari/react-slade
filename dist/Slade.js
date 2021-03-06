'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _StyledSlade = require('./elements/StyledSlade');

var _StyledSlade2 = _interopRequireDefault(_StyledSlade);

var _Backdrop = require('./elements/Backdrop');

var _Backdrop2 = _interopRequireDefault(_Backdrop);

var _Svg = require('./elements/Svg');

var _Svg2 = _interopRequireDefault(_Svg);

var _Image = require('./elements/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Arrow = require('./elements/Arrow');

var _Arrow2 = _interopRequireDefault(_Arrow);

var _Dialog = require('./elements/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|]).(gif|jp?g|tiff|png)$/i;

var Slade = function (_Component) {
  _inherits(Slade, _Component);

  function Slade() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slade);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slade.__proto__ || Object.getPrototypeOf(Slade)).call.apply(_ref, [this].concat(args))), _this), _this.isStartItem = function (index) {
      return index === 0;
    }, _this.isEndItem = function (index, items) {
      return index + 1 === items.length;
    }, _this.previousSlade = function (previousSlade, index) {
      if (!_this.isStartItem(index)) previousSlade();
    }, _this.nextSlade = function (nextSlade, index, items) {
      if (!_this.isEndItem(index, items)) nextSlade();
    }, _this.isEdge = function (index, items, start) {
      return _this.isStartItem(index) && start === 1 || _this.isEndItem(index, items) && start === 0;
    }, _this.renderArrow = function (rightArrow, index, items, start) {
      return typeof rightArrow === 'string' && urlRegex.test(rightArrow) ? _react2.default.createElement(_Image2.default, {
        isEdge: _this.isEdge(index, items, start),
        start: start,
        src: rightArrow,
        alt: 'arrow'
      }) : _react2.default.createElement(
        _Svg2.default,
        {
          isEdge: _this.isEdge(index, items, start),
          start: start,
          width: '100',
          height: '60'
        },
        rightArrow
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slade, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          open = _props.open,
          closeSlade = _props.closeSlade,
          items = _props.items,
          index = _props.index,
          backdrop = _props.backdrop,
          rightArrow = _props.rightArrow,
          previousSlade = _props.previousSlade,
          nextSlade = _props.nextSlade;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Backdrop2.default, { backdrop: backdrop, open: open }),
        _react2.default.createElement(
          _StyledSlade2.default,
          { onClick: closeSlade, open: open },
          _react2.default.createElement(
            _Arrow2.default,
            {
              start: 1,
              onClick: function onClick(e) {
                e.stopPropagation();_this2.previousSlade(previousSlade, index);
              }
            },
            this.renderArrow(rightArrow, index, items, 1)
          ),
          _react2.default.createElement(
            _Dialog2.default,
            { onClick: function onClick(e) {
                return e.stopPropagation();
              } },
            items[index]
          ),
          _react2.default.createElement(
            _Arrow2.default,
            {
              end: 1,
              onClick: function onClick(e) {
                e.stopPropagation();_this2.nextSlade(nextSlade, index, items);
              }
            },
            this.renderArrow(rightArrow, index, items, 0)
          )
        )
      );
    }
  }]);

  return Slade;
}(_react.Component);

Slade.defaultProps = {
  backdrop: 'rgba(0, 0, 0, 0.5)',
  rightArrow: _react2.default.createElement('polyline', { points: '20 5, 50 30, 20 55' })
};

Slade.propTypes = {
  open: _propTypes2.default.bool.isRequired,
  items: _propTypes2.default.arrayOf(_propTypes2.default.element).isRequired,
  index: _propTypes2.default.number.isRequired,

  backdrop: _propTypes2.default.string,
  rightArrow: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),

  closeSlade: _propTypes2.default.func.isRequired,
  nextSlade: _propTypes2.default.func.isRequired,
  previousSlade: _propTypes2.default.func.isRequired
};

exports.default = Slade;