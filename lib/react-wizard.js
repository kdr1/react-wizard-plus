(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types")) : factory(root["react"], root["prop-types"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.applyClasses = applyClasses;
exports.uid = uid;
exports.updateChildProps = updateChildProps;
exports.camelCase = camelCase;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function applyClasses(classList, cases, defaultClasses) {

	var classes = defaultClasses ? new Array(defaultClasses) : new Array(),
	    i = void 0,
	    len = classList.length;

	for (i = 0; i < len; i++) {
		if (cases[classList[i].criterion]) {
			classes = classes.concat(classList[i].className);
		}
	}

	return classes.join(" ");
}

function uid(length) {
	var charlist = "abcdefghijklmnopqrstuvwzyxABCDEFGHIJKLMNOPQRSTUVWXYZ-_";

	var _uid = new Array(),
	    i = void 0;

	for (i = 0; i < length; i++) {
		_uid = _uid.concat(charlist.charAt(Math.floor(Math.random() * (charlist.length - 0))));
	}

	return _uid.join("");
}

function updateChildProps(children, propsFn) {
	return _react2.default.Children.map(children, function (child, index) {
		return _react2.default.cloneElement(child, propsFn(child, index));
	});
}

function camelCase(str) {
	var strArr = str.split(" "),
	    i = void 0,
	    len = strArr.length,
	    newArr = new Array();

	for (i = 0; i < len; i++) {
		newArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
	}

	return newArr.join("");
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _step = __webpack_require__(13);

var _step2 = _interopRequireDefault(_step);

var _control2 = __webpack_require__(12);

var _control3 = _interopRequireDefault(_control2);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepContainer = function (_Component) {
	_inherits(StepContainer, _Component);

	function StepContainer(props) {
		_classCallCheck(this, StepContainer);

		var _this = _possibleConstructorReturn(this, (StepContainer.__proto__ || Object.getPrototypeOf(StepContainer)).call(this, props));

		_this.processAction = _this.processAction.bind(_this);
		_this.applyControls = _this.applyControls.bind(_this);
		return _this;
	}

	_createClass(StepContainer, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			this.applyControls(this.props);
		}
	}, {
		key: "shouldComponentUpdate",
		value: function shouldComponentUpdate(nextProps) {
			if (nextProps.rebuildControls) {
				return true;
			}

			var _props = this.props,
			    index = _props.index,
			    current = _props.current,
			    complete = _props.complete,
			    warning = _props.warning,
			    error = _props.error,
			    disableNext = _props.disableNext;


			var isActive = index === current,
			    nextIsActive = nextProps.index === nextProps.current;

			return isActive !== nextIsActive || complete !== nextProps.complete || warning !== nextProps.warning || error !== nextProps.error || disableNext !== nextProps.disableNext;
		}
	}, {
		key: "componentWillUpdate",
		value: function componentWillUpdate(nextProps) {
			if (nextProps.rebuildControls) {
				this.controls = null;
				this.applyControls(nextProps);
			}
		}
	}, {
		key: "applyControls",
		value: function applyControls(props) {
			var i = void 0,
			    len = props.controls.length;

			for (i = 0; i < len; i++) {
				var control = props.controls[i],
				    _control = void 0;

				switch (control.type) {
					case 0:
						_control = _controlWithProps((0, _utils.uid)(8), this.processAction, control.validationFunc, props.index - 1, false, control.label);
						break;
					case 1:
						_control = _controlWithProps((0, _utils.uid)(8), this.processAction, control.validationFunc, props.index + 1, props.disableNext, control.label);
						break;
					case 2:
						_control = _controlWithProps((0, _utils.uid)(8), this.processAction, control.validationFunc, undefined, props.disableNext, control.label);
						break;
				}

				this.controls = this.controls ? this.controls.concat(_control) : new Array(_control);
			}
		}
	}, {
		key: "processAction",
		value: function processAction(validationFunc, indexToGoto) {
			var props = this.props;
			var callback = typeof indexToGoto !== "undefined" ? indexToGoto > props.index ? props._onNextFunc : props._onPrevFunc : props._onCompleteFunc;

			return callback(validationFunc, indexToGoto);
		}
	}, {
		key: "render",
		value: function render() {
			var _props2 = this.props,
			    id = _props2.id,
			    className = _props2.className,
			    index = _props2.index,
			    controls = _props2.controls,
			    current = _props2.current,
			    complete = _props2.complete,
			    warning = _props2.warning,
			    error = _props2.error,
			    disableNext = _props2.disableNext,
			    component = _props2.component,
			    title = _props2.title,
			    subheading = _props2.subheading,
			    indicatorId = _props2.indicatorId,
			    indicatorLabel = _props2.indicatorLabel,
			    indicatorIconClasses = _props2.indicatorIconClasses,
			    prevLabel = _props2.prevLabel,
			    onPrevFunc = _props2.onPrevFunc,
			    _onPrevFunc = _props2._onPrevFunc,
			    nextLabel = _props2.nextLabel,
			    onNextFunc = _props2.onNextFunc,
			    _onNextFunc = _props2._onNextFunc,
			    completeLabel = _props2.completeLabel,
			    onCompleteFunc = _props2.onCompleteFunc,
			    _onCompleteFunc = _props2._onCompleteFunc,
			    rebuildControls = _props2.rebuildControls,
			    rest = _objectWithoutProperties(_props2, ["id", "className", "index", "controls", "current", "complete", "warning", "error", "disableNext", "component", "title", "subheading", "indicatorId", "indicatorLabel", "indicatorIconClasses", "prevLabel", "onPrevFunc", "_onPrevFunc", "nextLabel", "onNextFunc", "_onNextFunc", "completeLabel", "onCompleteFunc", "_onCompleteFunc", "rebuildControls"]);

			return _react2.default.createElement(
				_step2.default,
				{ id: id, className: className, isActive: current === index, status: { complete: complete, warning: warning, error: error, disableNext: disableNext }, controls: this.controls },
				component
			);
		}
	}]);

	return StepContainer;
}(_react.Component);

StepContainer.propTypes = {
	component: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
	controls: _propTypes2.default.array,
	title: _propTypes2.default.string,
	subheading: _propTypes2.default.string,
	indicatorId: _propTypes2.default.string,
	indicatorLabel: _propTypes2.default.string,
	indicatorIconClasses: _propTypes2.default.object,
	prevLabel: _propTypes2.default.string,
	onPrevFunc: _propTypes2.default.func,
	nextLabel: _propTypes2.default.string,
	onNextFunc: _propTypes2.default.func,
	completeLabel: _propTypes2.default.string,
	onCompleteFunc: _propTypes2.default.func
};

exports.default = StepContainer;

/* Internal functions, methods, and variables */

function _controlWithProps(key, callback, validationFunc, targetIndex, disabled, label) {
	return _react2.default.createElement(
		_control3.default,
		{ key: key, onClick: function onClick() {
				return callback(validationFunc, targetIndex);
			}, disabled: disabled },
		label
	);
}
module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactWizard = __webpack_require__(10);

var _reactWizard2 = _interopRequireDefault(_reactWizard);

var _step = __webpack_require__(2);

var _step2 = _interopRequireDefault(_step);

var _utils = __webpack_require__(1);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConditionalRenderWrapper = function (_PureComponent) {
	_inherits(ConditionalRenderWrapper, _PureComponent);

	function ConditionalRenderWrapper(props) {
		_classCallCheck(this, ConditionalRenderWrapper);

		var _this = _possibleConstructorReturn(this, (ConditionalRenderWrapper.__proto__ || Object.getPrototypeOf(ConditionalRenderWrapper)).call(this, props));

		_this.reinitialize = _this.reinitialize.bind(_this);
		_this.enableStep = _this.enableStep.bind(_this);
		_this.disableStep = _this.disableStep.bind(_this);
		return _this;
	}

	_createClass(ConditionalRenderWrapper, [{
		key: "reinitialize",
		value: function reinitialize() {
			if (this.wizard) {
				this.wizard.rehydrateState();
			}
		}
	}, {
		key: "enableStep",
		value: function enableStep(index) {
			this.wizard.enableStep(index);
		}
	}, {
		key: "disableStep",
		value: function disableStep(index) {
			this.wizard.disableStep(index);
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    id = _props.id,
			    children = _props.children,
			    loadingSpinnerClass = _props.loadingSpinnerClass,
			    hydrateState = _props.hydrateState,
			    onCompleteFunc = _props.onCompleteFunc,
			    afterCompleteComponent = _props.afterCompleteComponent,
			    rest = _objectWithoutProperties(_props, ["id", "children", "loadingSpinnerClass", "hydrateState", "onCompleteFunc", "afterCompleteComponent"]);

			if (children) {
				return _react2.default.createElement(
					_reactWizard2.default,
					{
						ref: function ref(wizard) {
							return _this2.wizard = wizard;
						},
						id: id,
						hydrateState: hydrateState,
						onCompleteFunc: onCompleteFunc,
						afterCompleteComponent: afterCompleteComponent },
					children
				);
			} else {
				return _react2.default.createElement(
					"section",
					{ className: "react-wizard" },
					_react2.default.createElement("div", { className: "react-wizard-header" }),
					_react2.default.createElement("div", { className: loadingSpinnerClass ? loadingSpinnerClass : "react-wizard-spinner" })
				);
			}
		}
	}]);

	return ConditionalRenderWrapper;
}(_react.PureComponent);

ConditionalRenderWrapper.propTypes = {
	id: _propTypes2.default.string,
	loadingSpinnerClass: _propTypes2.default.string,
	hydrateState: _propTypes2.default.object,
	onCompleteFunc: _propTypes2.default.func,
	afterCompleteComponent: _propTypes2.default.element
};

ConditionalRenderWrapper.createSteps = function (stepsData) {
	if (!Array.isArray(stepsData)) throw new Error("ReactWizard.createSteps requires the stepsData argument to be an Array.");
	var i = void 0,
	    len = stepsData.length,
	    steps = new Array(),
	    step = void 0;

	for (i = 0; i < len; i++) {
		step = stepsData[i];

		if ((typeof step === "undefined" ? "undefined" : _typeof(step)) !== "object") throw new Error("Each index of stepsData must be an object representing the props of a <Step /> component");

		steps = steps.concat(_react2.default.createElement(_step2.default, {
			key: (0, _utils.camelCase)(step.title) + "-" + (0, _utils.uid)(4),
			component: step.component,
			title: step.title,
			subheading: step.subheading,
			id: step.id,
			className: step.className,
			indicatorId: step.indicatorId,
			indicatorLabel: step.indicatorLabel,
			indicatorIconClasses: step.indicatorIconClasses,
			prevLabel: step.prevLabel,
			onPrevFunc: step.onPrevFunc,
			nextLabel: step.nextLabel,
			onNextFunc: step.onNextFunc,
			completeLabel: step.completeLabel,
			onCompleteFunc: step.onCompleteFunc
		}));
	}

	return steps;
};

exports.default = ConditionalRenderWrapper;
module.exports = exports["default"];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Step = exports.ReactWizard = undefined;

var _reactWizard = __webpack_require__(5);

var _reactWizard2 = _interopRequireDefault(_reactWizard);

var _step = __webpack_require__(2);

var _step2 = _interopRequireDefault(_step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ReactWizard = _reactWizard2.default;
exports.Step = _step2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _indicatorBar = __webpack_require__(8);

var _indicatorBar2 = _interopRequireDefault(_indicatorBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_PureComponent) {
	_inherits(Header, _PureComponent);

	function Header(props) {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	}

	_createClass(Header, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    indicatorProperties = _props.indicatorProperties,
			    onIndicatorClick = _props.onIndicatorClick,
			    steps = _props.steps,
			    currentStep = _props.currentStep,
			    currentStepTitle = _props.currentStepTitle,
			    currentStepSubheading = _props.currentStepSubheading;


			return _react2.default.createElement(
				"div",
				{ className: "react-wizard-header" },
				_react2.default.createElement(
					"div",
					{ className: "padded-area" },
					_react2.default.createElement(
						"h2",
						{ className: "react-wizard-header-title" },
						currentStepTitle
					),
					currentStepSubheading ? _react2.default.createElement(
						"span",
						{ className: "react-wizard-header-subheading" },
						currentStepSubheading
					) : undefined
				),
				_react2.default.createElement(_indicatorBar2.default, {
					ref: function ref(indicatorBar) {
						return _this2.indicatorBar = indicatorBar;
					},
					indicatorProperties: indicatorProperties,
					onIndicatorClick: onIndicatorClick,
					steps: steps,
					currentStep: currentStep })
			);
		}
	}]);

	return Header;
}(_react.PureComponent);

exports.default = Header;
module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(1);

var _indicator = __webpack_require__(9);

var _indicator2 = _interopRequireDefault(_indicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndicatorBar = function (_PureComponent) {
	_inherits(IndicatorBar, _PureComponent);

	function IndicatorBar(props) {
		_classCallCheck(this, IndicatorBar);

		var _this = _possibleConstructorReturn(this, (IndicatorBar.__proto__ || Object.getPrototypeOf(IndicatorBar)).call(this, props));

		_this.init = _this.init.bind(_this);
		_this.reinit = _this.reinit.bind(_this);
		return _this;
	}

	_createClass(IndicatorBar, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			this.init();
		}
	}, {
		key: "init",
		value: function init() {
			this.styleElId = "rw-indicator-bar-" + (0, _utils.uid)(12);

			var styleEl = document.createElement("STYLE"),
			    head = document.head || document.getElementsByTagName('head')[0];

			styleEl.type = "text/css";
			styleEl.id = this.styleElId;
			head.appendChild(styleEl);
		}
	}, {
		key: "reinit",
		value: function reinit() {
			document.getElementById(this.styleElId).innerText = "";
			var step = void 0;
			for (step in this.props.steps) {
				this["indicator" + step].reinit();
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    indicatorProperties = _props.indicatorProperties,
			    onIndicatorClick = _props.onIndicatorClick,
			    steps = _props.steps,
			    currentStep = _props.currentStep;

			var step = void 0,
			    totalCompelted = 0,
			    i = void 0,
			    len = steps.length;

			for (i = 0; i < len; i++) {
				if (steps[i].complete) {
					totalCompelted++;
				}
			}

			return _react2.default.createElement(
				"div",
				{ className: "react-wizard-indicator-bar" },
				_react2.default.createElement(_indicator2.default, {
					style: { width: 100 / (steps.length + 1) + "%" },
					lead: true }),
				steps.map(function (indicator, index) {
					if (indicatorProperties[index]) {
						step = steps[index];

						var iconClasses = void 0,
						    states = void 0;
						if (indicatorProperties[index].iconClasses) {
							states = indicatorProperties[index].iconClasses;
							if (step.error) {
								iconClasses = states.error;
							} else if (step.warning) {
								iconClasses = states.warning;
							} else if (step.complete) {
								iconClasses = states.complete;
							} else {
								iconClasses = states.default;
							}
						}

						return _react2.default.createElement(_indicator2.default, {
							ref: function ref(indicator) {
								return _this2["indicator" + index] = indicator;
							},
							index: index,
							currentStep: currentStep,
							key: index,
							style: { width: 100 / (steps.length + 1) + "%" },
							styleElId: _this2.styleElId,
							id: indicatorProperties[index].id,
							label: indicatorProperties[index].label,
							iconClasses: iconClasses,
							complete: step.complete,
							warning: step.warning,
							error: step.error,
							onClick: onIndicatorClick,
							disabled: !index ? false : steps[index - 1].disableNext,
							totalCompelted: totalCompelted });
					}
				})
			);
		}
	}]);

	return IndicatorBar;
}(_react.PureComponent);

exports.default = IndicatorBar;
module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Indicator = function (_PureComponent) {
	_inherits(Indicator, _PureComponent);

	function Indicator(props) {
		_classCallCheck(this, Indicator);

		var _this = _possibleConstructorReturn(this, (Indicator.__proto__ || Object.getPrototypeOf(Indicator)).call(this, props));

		_this.init = _this.init.bind(_this);
		_this.reinit = _this.reinit.bind(_this);
		return _this;
	}

	_createClass(Indicator, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			this.init();
		}
	}, {
		key: "init",
		value: function init() {
			this.id = this.props.id ? this.props.id : "rw-indicator-" + (0, _utils.uid)(12);

			if (this.props.styleElId && this.props.label) {
				var pseudoStyles = "#" + this.id + " .react-wizard-indicator-circle:before { content: \"" + this.props.label + "\" }";
				document.getElementById(this.props.styleElId).innerText += pseudoStyles;
			}
		}
	}, {
		key: "reinit",
		value: function reinit() {
			if (this.props.styleElId && this.props.label) {
				var pseudoStyles = "#" + this.id + " .react-wizard-indicator-circle:before { content: \"" + this.props.label + "\" }";
				document.getElementById(this.props.styleElId).innerText += pseudoStyles;
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    lead = _props.lead,
			    style = _props.style,
			    styleElId = _props.styleElId,
			    index = _props.index,
			    currentStep = _props.currentStep,
			    id = _props.id,
			    label = _props.label,
			    iconClasses = _props.iconClasses,
			    complete = _props.complete,
			    warning = _props.warning,
			    error = _props.error,
			    onClick = _props.onClick,
			    disabled = _props.disabled,
			    totalCompelted = _props.totalCompelted;


			var _disabled = disabled ? true : totalCompelted < index ? index - currentStep > 1 : false,
			    cases = _cases(index === currentStep, { complete: complete, warning: warning, error: error, disabled: _disabled });

			if (!lead) {

				return _react2.default.createElement(
					"div",
					{
						id: this.id,
						style: style,
						className: (0, _utils.applyClasses)(_classListArray, cases, "react-wizard-indicator") },
					_react2.default.createElement(
						"div",
						{ className: "react-wizard-indicator-circle", onClick: !_disabled && index !== currentStep ? onClick.bind(null, index) : null },
						_react2.default.createElement(
							"span",
							{ className: "react-wizard-indicator-text" },
							!iconClasses ? index + 1 : _react2.default.createElement("i", { className: "react-wizard-indicator-icon " + iconClasses })
						)
					)
				);
			} else {
				return _react2.default.createElement("div", {
					style: style,
					className: "react-wizard-indicator lead" });
			}
		}
	}]);

	return Indicator;
}(_react.PureComponent);

exports.default = Indicator;

/* Internal functions, methods, and variables */

var _classListArray = [{
	criterion: "isActive",
	className: "active"
}, {
	criterion: "complete",
	className: "complete"
}, {
	criterion: "warning",
	className: "warning"
}, {
	criterion: "error",
	className: "error"
}, {
	criterion: "disabled",
	className: "disabled"
}];

var _cases = function _cases(isActive, status) {
	return {
		isActive: isActive,
		complete: status.complete,
		warning: status.warning,
		error: status.error,
		disabled: status.disabled
	};
};
module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(1);

var _reactWizard = __webpack_require__(11);

var _reactWizard2 = _interopRequireDefault(_reactWizard);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactWizardContainer = function (_Component) {
	_inherits(ReactWizardContainer, _Component);

	function ReactWizardContainer(props) {
		_classCallCheck(this, ReactWizardContainer);

		var _this = _possibleConstructorReturn(this, (ReactWizardContainer.__proto__ || Object.getPrototypeOf(ReactWizardContainer)).call(this, props));

		_this.state = _hydrateState(_this.props.hydrateState, _this.props.children);

		_this.rehydrateState = _this.rehydrateState.bind(_this);
		_this.init = _this.init.bind(_this);
		_this.reinitHeader = _this.reinitHeader.bind(_this);
		_this.handleIndicatorClick = _this.handleIndicatorClick.bind(_this);
		_this.prev = _this.prev.bind(_this);
		_this.next = _this.next.bind(_this);
		_this.onComplete = _this.onComplete.bind(_this);
		_this.renderChildren = _this.renderChildren.bind(_this);
		_this.disableStep = _this.disableStep.bind(_this);
		_this.enableStep = _this.enableStep.bind(_this);

		_this.rebuildControls = false;
		return _this;
	}

	_createClass(ReactWizardContainer, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			this.init();
		}
	}, {
		key: "rehydrateState",
		value: function rehydrateState() {
			this.setState(_hydrateState(this.props.hydrateState, this.props.children), this.reinitHeader);
		}
	}, {
		key: "init",
		value: function init(reinitHeader) {
			var _this2 = this;

			this.afterCompleteComponent = _react2.default.cloneElement(this.props.afterCompleteComponent, {
				style: _extends({}, this.props.afterCompleteComponent.props.style, { display: "none" })
			});

			this.childrenWithControls = (0, _utils.updateChildProps)(this.props.children, function (child, index) {
				return {
					index: index,
					_onPrevFunc: _this2.prev,
					_onNextFunc: _this2.next,
					_onCompleteFunc: _this2.onComplete,
					controls: _createControls(child.props, index, _this2.props.children.length - 1, _this2.props.onCompleteFunc),
					current: _this2.state.current,
					complete: _this2.state.steps[index].complete,
					warning: _this2.state.steps[index].warning,
					error: _this2.state.steps[index].error,
					disableNext: _this2.state.steps[index].disableNext
				};
			});

			this.indicatorProperties = new Array();
			this.onPrevFuncs = new Array();
			this.onNextFuncs = new Array();

			var i = void 0,
			    len = this.props.children.length;
			for (i = 0; i < len; i++) {
				this.indicatorProperties = this.indicatorProperties.concat({
					id: this.props.children[i].props.indicatorId,
					label: this.props.children[i].props.indicatorLabel,
					iconClasses: this.props.children[i].props.indicatorIconClasses
				});

				this.onPrevFuncs = [].concat(_toConsumableArray(this.onPrevFuncs), [this.props.children[i].props.onPrevFunc]);
				this.onNextFuncs = [].concat(_toConsumableArray(this.onNextFuncs), [this.props.children[i].props.onNextFunc]);
			}

			if (reinitHeader) {
				this.rebuildControls = true;
				this.setState(this.state, this.wizard.header.indicatorBar.reinit);
			}
		}
	}, {
		key: "reinitHeader",
		value: function reinitHeader() {
			this.init(true);
		}
	}, {
		key: "handleIndicatorClick",
		value: function handleIndicatorClick(targetIndex) {
			var current = this.state.current,
			    steps = this.state.steps,
			    advancing = targetIndex > current ? true : false,
			    i = void 0,
			    cumulativeEndState = { current: this.state.current, steps: Object.assign([], this.state.steps) },
			    validationResult = void 0;

			if (advancing) {
				for (i = current; i < targetIndex; i++) {

					validationResult = this.onNextFuncs[i] ? this.onNextFuncs[i](this.state) : 1;

					switch (validationResult) {
						case 0:
							cumulativeEndState = _extends({}, cumulativeEndState, {
								steps: _newStepState(cumulativeEndState.steps, i, { complete: false, warning: false, error: true, disableNext: true })
							});
							break;
						case 1:
							cumulativeEndState = _extends({}, cumulativeEndState, {
								current: cumulativeEndState.current + 1,
								steps: _newStepState(cumulativeEndState.steps, i, { complete: true, warning: false, error: false, disableNext: false })
							});
							break;
						case 2:
							cumulativeEndState = _extends({}, cumulativeEndState, {
								current: cumulativeEndState.current + 1,
								steps: _newStepState(cumulativeEndState.steps, i, { complete: true, warning: true, error: false, disableNext: false })
							});
							break;
					}
				}
			} else {
				for (i = current; i > targetIndex; i--) {

					validationResult = this.onPrevFuncs[i] ? this.onPrevFuncs[i](this.state) : 1;

					switch (validationResult) {
						case 1:
							cumulativeEndState = _extends({}, cumulativeEndState, {
								current: cumulativeEndState.current - 1
							});
							break;
					}
				}
			}

			this.setState(_extends({}, this.state, {
				current: cumulativeEndState.current,
				steps: Object.assign([], this.state.steps, cumulativeEndState.steps)
			}));
		}
	}, {
		key: "prev",
		value: function prev(onPrevCallback) {
			var proceed = true;

			if (onPrevCallback) {
				proceed = onPrevCallback(this.state);
			}

			this.setState(_extends({}, this.state, {
				current: proceed ? this.state.current - 1 : this.state.current
			}));
		}
	}, {
		key: "next",
		value: function next(validationFunc) {
			var newState = void 0,
			    validationResponse = typeof validationFunc === "function" ? validationFunc(this.state) : 1;

			// case 0 means validation failed
			// case 1 means validation passed
			// case 2 means validation returned a warning

			switch (validationResponse) {
				case 0:
					newState = _newState(this.state, 0, { complete: false, warning: false, error: true, disableNext: true });
					break;
				case 1:
					newState = _newState(this.state, 1, { complete: true, warning: false, error: false, disableNext: false });;
					break;
				case 2:
					newState = _newState(this.state, 1, { complete: true, warning: true, error: false, disableNext: false });;
					break;
			}

			this.setState(newState);
		}
	}, {
		key: "onComplete",
		value: function onComplete(validationFunc) {
			var newState = void 0,
			    validationResponse = typeof validationFunc === "function" ? validationFunc(this.state) : 1,
			    completed = false;

			switch (validationResponse) {
				case 0:
					newState = _newState(this.state, 0, { complete: false, warning: false, error: true, disableNext: true });
					break;
				case 1:
					newState = _newState(this.state, 0, { complete: true, warning: false, error: false, disableNext: true });
					completed = true;
					break;
			}

			if (completed) {
				newState = _extends({}, newState, { current: -1 });
			}

			this.setState(newState);
		}
	}, {
		key: "renderChildren",
		value: function renderChildren(rebuildControls) {
			var _this3 = this;

			return (0, _utils.updateChildProps)(this.childrenWithControls, function (child, index) {
				return {
					current: _this3.state.current,
					complete: _this3.state.steps[index].complete,
					warning: _this3.state.steps[index].warning,
					error: _this3.state.steps[index].error,
					disableNext: _this3.state.steps[index].disableNext,
					rebuildControls: rebuildControls
				};
			});
		}
	}, {
		key: "enableStep",
		value: function enableStep(index) {
			if (index < 1) return false;
			var targetIndex = index - 1,
			    newStepsState = _newStepState(this.state.steps, targetIndex, _extends({}, this.state.steps[targetIndex], { disableNext: false }));
			this.setState(_extends({}, this.state, { steps: newStepsState }));
		}
	}, {
		key: "disableStep",
		value: function disableStep(index) {
			if (index < 1) return false;
			var targetIndex = index - 1,
			    newStepsState = _newStepState(this.state.steps, targetIndex, _extends({}, this.state.steps[targetIndex], { disableNext: true }));
			this.setState(_extends({}, this.state, { steps: newStepsState }));
		}
	}, {
		key: "render",
		value: function render() {
			var _this4 = this;

			var _props = this.props,
			    hydrateState = _props.hydrateState,
			    onCompleteFunc = _props.onCompleteFunc,
			    afterCompleteComponent = _props.afterCompleteComponent,
			    children = _props.children,
			    style = _props.style,
			    rest = _objectWithoutProperties(_props, ["hydrateState", "onCompleteFunc", "afterCompleteComponent", "children", "style"]),
			    rebuildControls = false;

			if (this.rebuildControls) {
				this.rebuildControls = false;
				rebuildControls = true;
			}

			if (this.state.current === -1) {
				this.afterCompleteComponent = _react2.default.cloneElement(this.afterCompleteComponent, {
					style: _extends({}, this.afterCompleteComponent.props.style, { display: "block" })
				});
			}

			return _react2.default.createElement(
				_reactWizard2.default,
				_extends({
					ref: function ref(wizard) {
						return _this4.wizard = wizard;
					},
					indicatorProperties: this.indicatorProperties,
					steps: this.state.steps,
					currentStep: this.state.current,
					currentStepTitle: children[this.state.current] ? children[this.state.current].props.title : this.afterCompleteComponent.props.title,
					currentStepSubheading: children[this.state.current] ? children[this.state.current].props.subheading : this.afterCompleteComponent.props.subheading,
					onIndicatorClick: this.handleIndicatorClick,
					afterCompleteComponent: this.afterCompleteComponent,
					style: style
				}, rest),
				this.renderChildren(rebuildControls)
			);
		}
	}]);

	return ReactWizardContainer;
}(_react.Component);

exports.default = ReactWizardContainer;

/* Internal functions, methods, and variables */

function _hydrateState(stateHydration, steps) {
	var defaultStepState = {
		complete: false,
		warning: false,
		error: false,
		disableNext: false
	};

	var _steps = _react2.default.Children.map(steps, function (child, index) {
		if (!stateHydration) {
			return defaultStepState;
		} else {
			if (stateHydration.steps) {
				if (stateHydration.steps[index]) {
					return {
						complete: stateHydration.steps[index].complete || false,
						warning: stateHydration.steps[index].warning || false,
						error: stateHydration.steps[index].error || false,
						disableNext: stateHydration.steps[index].disableNext || false
					};
				}
				return defaultStepState;
			}
			return defaultStepState;
		}
	});

	return { steps: _steps, current: stateHydration ? stateHydration.current : 0 };
}

function _createControls(childProps, index, endingIndex, wizardOnCompleteFunc) {
	// control.type number representation:
	// 0: prev
	// 1: next
	// 2: complete

	var controls = void 0;
	switch (index) {
		case 0:
			controls = [_createControl(1, childProps.nextLabel || "NEXT", childProps.onNextFunc)];
			break;
		case endingIndex:
			controls = [_createControl(0, childProps.prevLabel || "PREVIOUS", childProps.onPrevFunc), _createControl(2, childProps.completeLabel || childProps.nextLabel || "COMPLETE", wizardOnCompleteFunc || childProps.onCompleteFunc || childProps.onNextFunc)];
			break;
		default:
			controls = [_createControl(0, childProps.prevLabel || "PREVIOUS", childProps.onPrevFunc), _createControl(1, childProps.nextLabel || "NEXT", childProps.onNextFunc)];
			break;
	}

	return controls;
}

function _createControl(type, label, validationFunc) {
	return {
		type: type,
		label: label,
		validationFunc: validationFunc
	};
}

function _newState(state, changeInCurrentlyActiveStep, currentStepNewStatus) {
	return _extends({}, state, {
		current: state.current + changeInCurrentlyActiveStep,
		steps: state.steps.map(function (step, index) {
			if (index !== state.current) {
				return step;
			}

			return currentStepNewStatus;
		})
	});
}

function _newStepState(steps, index, newStepState) {
	return Object.assign([], steps, _defineProperty({}, index, newStepState));
}

function _insertAtIndexWithoutMutating(arr, index, insertion) {
	return arr.map(function (item, i) {
		if (index !== i) {
			return item;
		}

		return insertion;
	});
}
module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(7);

var _header2 = _interopRequireDefault(_header);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactWizard = function (_Component) {
	_inherits(ReactWizard, _Component);

	function ReactWizard(props) {
		_classCallCheck(this, ReactWizard);

		return _possibleConstructorReturn(this, (ReactWizard.__proto__ || Object.getPrototypeOf(ReactWizard)).call(this, props));
	}

	_createClass(ReactWizard, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    steps = _props.steps,
			    currentStep = _props.currentStep,
			    indicatorProperties = _props.indicatorProperties,
			    currentStepTitle = _props.currentStepTitle,
			    currentStepSubheading = _props.currentStepSubheading,
			    children = _props.children,
			    onIndicatorClick = _props.onIndicatorClick,
			    style = _props.style,
			    afterCompleteComponent = _props.afterCompleteComponent,
			    rest = _objectWithoutProperties(_props, ["steps", "currentStep", "indicatorProperties", "currentStepTitle", "currentStepSubheading", "children", "onIndicatorClick", "style", "afterCompleteComponent"]);

			var cases = _cases(currentStep > -1 ? steps[currentStep] : { complete: true });

			if (currentStep > -1) {
				return _react2.default.createElement(
					"section",
					_extends({ className: (0, _utils.applyClasses)(_classListArray, cases, "react-wizard"), style: style }, rest),
					_react2.default.createElement(_header2.default, {
						ref: function ref(header) {
							return _this2.header = header;
						},
						indicatorProperties: indicatorProperties,
						onIndicatorClick: onIndicatorClick,
						steps: steps,
						currentStep: currentStep,
						currentStepTitle: currentStepTitle,
						currentStepSubheading: currentStepSubheading }),
					children
				);
			} else {
				return _react2.default.createElement(
					"section",
					_extends({ className: (0, _utils.applyClasses)(_classListArray, cases, "react-wizard after-complete"), style: style }, rest),
					_react2.default.createElement("div", { className: "react-wizard-header" }),
					afterCompleteComponent
				);
			}
		}
	}]);

	return ReactWizard;
}(_react.Component);

exports.default = ReactWizard;

/* Internal functions, methods, and variables */

var _classListArray = [{
	criterion: "complete",
	className: "complete"
}, {
	criterion: "warning",
	className: "warning"
}, {
	criterion: "error",
	className: "error"
}];

var _cases = function _cases(status) {
	return {
		complete: status.complete,
		warning: status.warning,
		error: status.error
	};
};
module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Control = function (_PureComponent) {
	_inherits(Control, _PureComponent);

	function Control(props) {
		_classCallCheck(this, Control);

		return _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).call(this, props));
	}

	_createClass(Control, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    disabled = _props.disabled,
			    onClick = _props.onClick,
			    children = _props.children;

			if (disabled) {
				return _react2.default.createElement(
					"button",
					{
						type: "button",
						className: "react-wizard-control disabled",
						disabled: true },
					children
				);
			} else {
				return _react2.default.createElement(
					"button",
					{
						type: "button",
						className: "react-wizard-control",
						onClick: onClick },
					children
				);
			}
		}
	}]);

	return Control;
}(_react.PureComponent);

;

exports.default = Control;
module.exports = exports["default"];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Step = function Step(props) {
	var id = props.id,
	    className = props.className,
	    isActive = props.isActive,
	    status = props.status,
	    controls = props.controls,
	    children = props.children,
	    rest = _objectWithoutProperties(props, ["id", "className", "isActive", "status", "controls", "children"]);

	var controlsWithStatus = _react2.default.Children.map(controls, function (control, index) {
		return _react2.default.cloneElement(control, {
			disabled: controls.length < 2 ? status.disableNext : index > 0 ? status.disableNext : false
		});
	});

	var cases = _cases(isActive, status);

	return _react2.default.createElement(
		"div",
		{ id: id, className: (0, _utils.applyClasses)(_classListArray, cases, !className ? "react-wizard-step" : "react-wizard-step " + className) },
		children,
		_react2.default.createElement(
			"div",
			{ className: "react-wizard-controls" },
			controlsWithStatus
		)
	);
};

exports.default = Step;

/* Internal functions, methods, and variables */

var _classListArray = [{
	criterion: "isActive",
	className: "active"
}, {
	criterion: "complete",
	className: "complete"
}, {
	criterion: "warning",
	className: "warning"
}, {
	criterion: "error",
	className: "error"
}];

var _cases = function _cases(isActive, status) {
	return {
		isActive: isActive,
		complete: status.complete,
		warning: status.warning,
		error: status.error
	};
};
module.exports = exports["default"];

/***/ })
/******/ ]);
});