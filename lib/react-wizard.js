(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types")) : factory(root["react"], root["prop-types"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_8__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactWizard = __webpack_require__(4);

var _reactWizard2 = _interopRequireDefault(_reactWizard);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactWizardContainer = function (_Component) {
	_inherits(ReactWizardContainer, _Component);

	function ReactWizardContainer(props) {
		_classCallCheck(this, ReactWizardContainer);

		var _this = _possibleConstructorReturn(this, (ReactWizardContainer.__proto__ || Object.getPrototypeOf(ReactWizardContainer)).call(this, props));

		_this.state = _hydrateState(_this.props.hydrateState, _this.props.children);

		_this.prev = _this.prev.bind(_this);
		_this.next = _this.next.bind(_this);

		console.log(_this.state);
		return _this;
	}

	_createClass(ReactWizardContainer, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			var _this2 = this;

			// determine the type of controls each step needs based on its index
			this.childrenWithControls = _react2.default.Children.map(this.props.children, function (child, index) {
				return _react2.default.cloneElement(child, {
					index: index,
					_onPrevFunc: _this2.prev,
					_onNextFunc: _this2.next,
					controls: _createControls(child.props, index, _this2.props.children.length - 1)
				});
			});
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
		value: function next(validationFunc, finalStep) {
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
		key: "render",
		value: function render() {
			var _this3 = this;

			var _props = this.props,
			    children = _props.children,
			    rest = _objectWithoutProperties(_props, ["children"]);

			this.childrenWithControls = _react2.default.Children.map(this.childrenWithControls, function (child, index) {
				return _react2.default.cloneElement(child, {
					current: _this3.state.current,
					complete: _this3.state.steps[index].complete,
					warning: _this3.state.steps[index].warning,
					error: _this3.state.steps[index].error,
					disableNext: _this3.state.steps[index].disableNext
				});
			});

			return _react2.default.createElement(
				_reactWizard2.default,
				{ currentStepStatus: this.state.steps[this.state.current] },
				this.childrenWithControls
			);
		}
	}]);

	return ReactWizardContainer;
}(_react.Component);

exports.default = ReactWizardContainer;

/* Internal functions */

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

function _createControls(childProps, index, endingIndex) {
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
			controls = [_createControl(0, childProps.prevLabel || "PREVIOUS", childProps.onPrevFunc), _createControl(2, childProps.completeLabel || childProps.nextLabel || "COMPLETE", childProps.onCompleteFunc || childProps.onNextFunc)];
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
module.exports = exports["default"];

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

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _step = __webpack_require__(6);

var _step2 = _interopRequireDefault(_step);

var _control2 = __webpack_require__(5);

var _control3 = _interopRequireDefault(_control2);

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

		_this.gotoStep = _this.gotoStep.bind(_this);
		return _this;
	}

	_createClass(StepContainer, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			var i = void 0,
			    props = this.props,
			    len = props.controls.length;

			for (i = 0; i < len; i++) {
				var control = props.controls[i],
				    _control = void 0;

				switch (control.type) {
					case 0:
						_control = _controlWithProps(i, this.gotoStep, control.validationFunc, props.index - 1, false, control.label);
						break;
					case 1:
						_control = _controlWithProps(i, this.gotoStep, control.validationFunc, props.index + 1, props.disableNext, control.label);
						break;
					case 2:
						_control = _controlWithProps(i, this.gotoStep, control.validationFunc, undefined, props.disableNext, control.label);
						break;
				}

				this.controls = this.controls ? this.controls.concat(_control) : new Array(_control);
			}
		}
	}, {
		key: "gotoStep",
		value: function gotoStep(validationFunc, indexToGoto) {
			var props = this.props;
			var callback = typeof indexToGoto !== "undefined" ? indexToGoto > props.index ? props._onNextFunc : props._onPrevFunc : props._onCompleteFunc;

			return callback(validationFunc, indexToGoto);
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    index = _props.index,
			    controls = _props.controls,
			    current = _props.current,
			    complete = _props.complete,
			    warning = _props.warning,
			    error = _props.error,
			    disableNext = _props.disableNext,
			    component = _props.component,
			    title = _props.title,
			    subheading = _props.subheading,
			    indicatorId = _props.indicatorId,
			    indicatorLabel = _props.indicatorLabel,
			    indicatorIconClasses = _props.indicatorIconClasses,
			    prevLabel = _props.prevLabel,
			    onPrevFunc = _props.onPrevFunc,
			    _onPrevFunc = _props._onPrevFunc,
			    nextLabel = _props.nextLabel,
			    onNextFunc = _props.onNextFunc,
			    _onNextFunc = _props._onNextFunc,
			    completeLabel = _props.completeLabel,
			    onCompleteFunc = _props.onCompleteFunc,
			    _onCompleteFunc = _props._onCompleteFunc,
			    rest = _objectWithoutProperties(_props, ["index", "controls", "current", "complete", "warning", "error", "disableNext", "component", "title", "subheading", "indicatorId", "indicatorLabel", "indicatorIconClasses", "prevLabel", "onPrevFunc", "_onPrevFunc", "nextLabel", "onNextFunc", "_onNextFunc", "completeLabel", "onCompleteFunc", "_onCompleteFunc"]);

			return _react2.default.createElement(
				_step2.default,
				{ isActive: current === index, status: { complete: complete, warning: warning, error: error }, controls: this.controls },
				component
			);
		}
	}]);

	return StepContainer;
}(_react.Component);

StepContainer.propTypes = {
	component: _propTypes2.default.element.isRequired,
	controls: _propTypes2.default.array,
	title: _propTypes2.default.string,
	subheading: _propTypes2.default.string,
	indicatorId: _propTypes2.default.string,
	indicatorLabel: _propTypes2.default.string,
	indicatorIconClasses: _propTypes2.default.object,
	prevLabel: _propTypes2.default.string,
	onPrevFunc: _propTypes2.default.func,
	nextLabel: _propTypes2.default.string,
	onNextFunc: _propTypes2.default.func
};

exports.default = StepContainer;

/* Internal functions */

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Step = exports.ReactWizard = undefined;

var _reactWizard = __webpack_require__(1);

var _reactWizard2 = _interopRequireDefault(_reactWizard);

var _step = __webpack_require__(2);

var _step2 = _interopRequireDefault(_step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ReactWizard = _reactWizard2.default;
exports.Step = _step2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ReactWizard = function ReactWizard(props) {
	var currentStepStatus = props.currentStepStatus,
	    children = props.children,
	    rest = _objectWithoutProperties(props, ["currentStepStatus", "children"]);

	return _react2.default.createElement(
		"section",
		{ className: _applyClasses(currentStepStatus) },
		children
	);
};

exports.default = ReactWizard;

/* Internal functions */

function _applyClasses(currentStepStatus) {
	var classes = new Array("react-wizard");

	if (currentStepStatus.complete) {
		classes = classes.concat("complete");
	}

	if (currentStepStatus.warning) {
		classes = classes.concat("warning");
	}

	if (currentStepStatus.error) {
		classes = classes.concat("error");
	}

	return classes.join(" ");
}
module.exports = exports["default"];

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Step = function Step(props) {
	var isActive = props.isActive,
	    status = props.status,
	    controls = props.controls,
	    children = props.children,
	    rest = _objectWithoutProperties(props, ["isActive", "status", "controls", "children"]);

	return _react2.default.createElement(
		"div",
		{ className: _applyClasses(isActive, status) },
		children,
		_react2.default.createElement(
			"div",
			{ className: "react-wizard-controls" },
			controls
		)
	);
};

exports.default = Step;

/* Internal functions */

function _applyClasses(isActive, status) {
	var classes = new Array("react-wizard-step");

	if (isActive) {
		classes = classes.concat("active");
	}

	if (status.complete) {
		classes = classes.concat("complete");
	}

	if (status.warning) {
		classes = classes.concat("warning");
	}

	if (status.error) {
		classes = classes.concat("error");
	}

	return classes.join(" ");
}
module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ })
/******/ ]);
});