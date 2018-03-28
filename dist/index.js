'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactClickOutside = require('react-click-outside');

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var beaconrootCls = "userGuidance--beaconroot";

var UserGuide = function (_PureComponent) {
  _inherits(UserGuide, _PureComponent);

  function UserGuide() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UserGuide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserGuide.__proto__ || Object.getPrototypeOf(UserGuide)).call.apply(_ref, [this].concat(args))), _this), _this.renderBeacons = function (_ref2) {
      var steps = _ref2.steps;
      // eslint-disable-line
      // console.log(steps);
      steps.map(function (step) {
        if (window.localStorage.getItem(step.name) === '1') return;

        var el = document.querySelector(step.selector);
        if (el) {
          var hasExist = el.querySelector('.' + beaconrootCls);
          if (!hasExist) {
            var div = document.createElement('div');
            div.className = beaconrootCls;
            el.appendChild(div);
            _reactDom2.default.render(_react2.default.createElement(Beacon, {
              el: el,
              step: step }), div);
          }
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UserGuide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderBeacons(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.renderBeacons(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var steps = this.props.steps;


      steps.map(function (step) {
        var el = document.querySelector(step.selector);
        var beacon = el ? el.querySelector('.' + beaconrootCls) : false;
        if (el && beacon) {
          _reactDom2.default.unmountComponentAtNode(beacon);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return UserGuide;
}(_react.PureComponent);

UserGuide.defaultProps = {
  steps: []
};
exports.default = UserGuide;


var positions = {
  'top': {
    top: -6,
    left: -6
  },
  'left': {
    top: -6,
    left: -6
  },
  'top-left': {
    top: -6,
    left: -6
  },
  'top-right': {
    top: -6,
    right: -6
  },
  'right': {
    top: -6,
    right: -6
  },
  'bottom': {
    bottom: -6,
    left: -6
  },
  'bottom-left': {
    bottom: -6,
    left: -6
  },
  'bottom-right': {
    bottom: -6,
    right: -6
  }
};

var Beacon = function (_PureComponent2) {
  _inherits(Beacon, _PureComponent2);

  function Beacon() {
    var _ref3;

    var _temp2, _this2, _ret2;

    _classCallCheck(this, Beacon);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref3 = Beacon.__proto__ || Object.getPrototypeOf(Beacon)).call.apply(_ref3, [this].concat(args))), _this2), _this2.onRenderTooltip = function () {
      var _this2$props = _this2.props,
          el = _this2$props.el,
          step = _this2$props.step;


      if (typeof step.onBeaconTrigger === 'function') step.onBeaconTrigger(el);

      var div = document.createElement('div');
      div.className = "userGuidance--guideroot";
      document.body.appendChild(div);
      _reactDom2.default.render(_react2.default.createElement(Guide, { el: el, step: step }), div);

      var beaconroot = el.querySelector('.' + beaconrootCls);
      _reactDom2.default.unmountComponentAtNode(beaconroot);
      beaconroot.remove();
    }, _temp2), _possibleConstructorReturn(_this2, _ret2);
  }

  _createClass(Beacon, [{
    key: 'render',
    // eslint-disable-line

    value: function render() {
      var _props$step = this.props.step,
          position = _props$step.position,
          trigger = _props$step.trigger,
          style = _props$step.style;

      var shadowStyle = style || { beacon: {} };
      var propsToBeacon = {
        style: _extends({}, positions[position], shadowStyle.beacon)
      };
      if (trigger === 'hover') {
        propsToBeacon.onMouseEnter = this.onRenderTooltip;
      } else {
        propsToBeacon.onClick = this.onRenderTooltip;
      }

      return _react2.default.createElement(
        'span',
        _extends({ className: 'userGuidance--beacon'
        }, propsToBeacon),
        _react2.default.createElement('span', { className: 'userGuidance--beacon__inner' }),
        _react2.default.createElement('span', { className: 'userGuidance--beacon__outer' })
      );
    }
  }]);

  return Beacon;
}(_react.PureComponent);

var Guide = function (_PureComponent3) {
  _inherits(Guide, _PureComponent3);

  function Guide() {
    var _ref4;

    var _temp3, _this3, _ret3;

    _classCallCheck(this, Guide);

    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return _ret3 = (_temp3 = (_this3 = _possibleConstructorReturn(this, (_ref4 = Guide.__proto__ || Object.getPrototypeOf(Guide)).call.apply(_ref4, [this].concat(args))), _this3), _this3.unMount = function () {
      // eslint-disable-line
      var _this3$props = _this3.props,
          el = _this3$props.el,
          _this3$props$step = _this3$props.step,
          name = _this3$props$step.name,
          onTooltipUnMount = _this3$props$step.onTooltipUnMount;

      var thisEl = document.body.querySelector('.userGuidance--guideroot');
      if (thisEl) {
        if (typeof onTooltipUnMount === 'function') onTooltipUnMount(el);
        window.localStorage.setItem(name, 1);
        _reactDom2.default.unmountComponentAtNode(thisEl);
        thisEl.remove();
      }
    }, _temp3), _possibleConstructorReturn(_this3, _ret3);
  }

  _createClass(Guide, [{
    key: 'render',
    // eslint-disable-line

    value: function render() {
      var _props = this.props,
          el = _props.el,
          _props$step2 = _props.step,
          text = _props$step2.text,
          close = _props$step2.close,
          position = _props$step2.position,
          style = _props$step2.style;

      var _el$getBoundingClient = el.getBoundingClientRect(),
          top = _el$getBoundingClient.top,
          left = _el$getBoundingClient.left,
          width = _el$getBoundingClient.width,
          height = _el$getBoundingClient.height;

      var shadowStyle = style || { hole: {}, tooltip: {} };
      var tooltipStyle = function () {
        switch (position) {
          case 'top':
          case 'top-left':
            return _extends({
              top: top,
              left: left,
              transform: 'translateX(-18px) translateY(calc(-100% - 36px))'
            }, shadowStyle.tooltip);
          case 'left':
            return _extends({
              top: top,
              left: left,
              transform: 'translateX(calc(-100% - 36px)) translateY(-18px)'
            }, shadowStyle.tooltip);
          case 'right':
            return _extends({
              top: top - 18,
              left: left + width
            }, shadowStyle.tooltip);
          case 'top-right':
            return _extends({
              top: top,
              right: window.innerWidth - left - width,
              transform: 'translateX(18px) translateY(calc(-100% - 36px))'
            }, shadowStyle.tooltip);
          case 'bottom':
          case 'bottom-left':
            return _extends({
              top: top + height,
              left: left,
              transform: 'translateX(-18px)'
            }, shadowStyle.tooltip);
          case 'bottom-right':
            return _extends({
              top: top + height,
              right: window.innerWidth - left - width,
              transform: 'translateX(18px)'
            }, shadowStyle.tooltip);
        }
      }();

      return _react2.default.createElement(
        'div',
        { className: 'userGuidance--guide__overlay' },
        _react2.default.createElement(
          _reactClickOutside2.default,
          { onClickOutside: this.unMount },
          _react2.default.createElement('div', { className: 'userGuidance--guide__hole',
            style: _extends({ top: top, left: left, width: width, height: height }, shadowStyle.hole) }),
          _react2.default.createElement(
            'div',
            { className: 'userGuidance--guide__tooltip',
              style: tooltipStyle },
            _react2.default.createElement('p', {
              // eslint-disable-next-line
              dangerouslySetInnerHTML: { __html: text } }),
            _react2.default.createElement(
              'span',
              { onClick: this.unMount },
              close
            )
          )
        )
      );
    }
  }]);

  return Guide;
}(_react.PureComponent);

module.exports = exports['default'];