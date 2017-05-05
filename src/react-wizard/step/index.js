import React, { Component } from "react";
import PropTypes from "prop-types";
import Step from "./step.presentational";
import Control from "./control";
import { uid } from "../../utils.js";

class StepContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		_applyControls(this, this.props);
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.rebuildControls) {
			return true;
		}

		let { index, current, complete, warning, error, disableNext } = this.props;

		let isActive = index === current,
			nextIsActive = nextProps.index === nextProps.current;

		return  isActive !== nextIsActive || complete !== nextProps.complete || warning !== nextProps.warning || error !== nextProps.error ||	disableNext !== nextProps.disableNext;
	}

	componentWillUpdate(nextProps) {
		if (nextProps.rebuildControls) {
			this.controls = null;
			_applyControls(this, nextProps);
		}
	}

	render() {
		let {
			id,
			className,
			index,
			controls,
			current,
			complete,
			warning,
			error,
			disableNext,
			component,
			title,
			subheading,
			indicatorId,
			indicatorLabel,
			indicatorIconClasses,
			prevLabel,
			onPrevFunc,
			_onPrevFunc,
			nextLabel,
			onNextFunc,
			_onNextFunc,
			completeLabel,
			onCompleteFunc,
			_onCompleteFunc,
			rebuildControls,
			...rest
		} = this.props;

		return <Step id={ id } className={ className } isActive={ current === index } status={ { complete: complete, warning: warning, error: error, disableNext: disableNext } } controls={ this.controls } >{ component }</Step>;
	}
}

StepContainer.propTypes = {
	component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
	controls: PropTypes.array,
	title: PropTypes.string,
	subheading: PropTypes.string,
	indicatorId: PropTypes.string,
	indicatorLabel: PropTypes.string,
	indicatorIconClasses: PropTypes.object,
	prevLabel: PropTypes.string,
	onPrevFunc: PropTypes.func,
	nextLabel: PropTypes.string,
	onNextFunc: PropTypes.func,
	completeLabel: PropTypes.string,
	onCompleteFunc: PropTypes.func
}

export default StepContainer;


/* Internal functions, methods, and variables */

function _controlWithProps(key, callback, validationFunc, targetIndex, disabled, label, props) {
	return <Control key={ key } onClick={ () => callback(validationFunc, targetIndex, props) } disabled={ disabled }>{ label }</Control>;
}

const _applyControls = (self, props) => {
	let i, len = props.controls.length;

	for (i = 0; i < len; i++) {
		let control = props.controls[i],
			_control;

		switch (control.type) {
			case 0:
				_control = _controlWithProps(uid(8), _processAction, control.validationFunc, (props.index - 1), false, control.label, self.props);
				break;
			case 1:
				_control = _controlWithProps(uid(8), _processAction, control.validationFunc, (props.index + 1), props.disableNext, control.label, self.props);
				break;
			case 2:
				_control = _controlWithProps(uid(8), _processAction, control.validationFunc, undefined, props.disableNext, control.label, self.props);
				break;
		}
		self.controls = self.controls ? self.controls.concat(_control) : new Array(_control);
	}
}

const _processAction = (validationFunc, indexToGoto, props) => {
	const callback = typeof indexToGoto !== "undefined" ? indexToGoto > props.index ? props._onNextFunc : props._onPrevFunc : props._onCompleteFunc;
	return callback(validationFunc, indexToGoto);
}











