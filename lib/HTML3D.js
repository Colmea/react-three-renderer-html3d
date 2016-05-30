'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _CSS3DRenderer = require('../library/CSS3DRenderer');

var _CSS3DRenderer2 = _interopRequireDefault(_CSS3DRenderer);

var _three = require('three');

var _three2 = _interopRequireDefault(_three);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTML3D = function (_React$Component) {
    _inherits(HTML3D, _React$Component);

    function HTML3D() {
        _classCallCheck(this, HTML3D);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(HTML3D).apply(this, arguments));
    }

    _createClass(HTML3D, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Create DOM element with ReactDOM
            this.HTMLElement = document.createElement('div');
            _reactDom2.default.render(this.props.children, this.HTMLElement);

            this._createCSS3DObject();
        }

        /**
         * Create the CSS3D object from HTMLElement property
         * @private
         */

    }, {
        key: '_createCSS3DObject',
        value: function _createCSS3DObject() {
            var CSS3DObject = new _three2.default.CSS3DObject(this.HTMLElement);
            this.refs.group.add(CSS3DObject);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'group',
                {
                    ref: 'group',
                    position: this.props.position,
                    rotation: this.props.rotation
                },
                _react2.default.createElement(
                    'mesh',
                    {
                        receiveShadow: true,
                        castShadow: true
                    },
                    _react2.default.createElement('planeGeometry', {
                        width: 500,
                        height: 220,
                        widthSegments: 10,
                        heightSegments: 10
                    }),
                    _react2.default.createElement('meshBasicMaterial', { wireframe: true })
                )
            );
        }
    }]);

    return HTML3D;
}(_react2.default.Component);

HTML3D.propTypes = {
    position: _react2.default.PropTypes.instanceOf(_three2.default.Vector3),
    rotation: _react2.default.PropTypes.instanceOf(_three2.default.Euler)
};
HTML3D.defaultProps = {
    position: new _three2.default.Vector3(),
    rotation: new _three2.default.Euler()
};
exports.default = HTML3D;