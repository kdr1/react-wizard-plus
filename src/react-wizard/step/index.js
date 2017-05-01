import React, { Component } from "react";
import PropTypes from "prop-types";
import Step from "./step.presentational";
import Control from "./control";

class StepContainer extends Component {
	constructor(props) {
		super(props);

		this.gotoStep = this.gotoStep.bind(this);
	}

	componentWillMount() {
		let i, props = this.props, len = props.controls.length;

		for (i = 0; i < len; i++) {
			let control = props.controls[i],
				_control;

			switch (control.type) {
				case 0:
					_control = _controlWithProps(i, this.gotoStep, control.validationFunc, (props.index - 1), false, control.label);
					break;
				case 1:
					_control = _controlWithProps(i, this.gotoStep, control.validationFunc, (props.index + 1), props.disableNext, control.label);
					break;
				case 2:
					_control = _controlWithProps(i, this.gotoStep, control.validationFunc, undefined, props.disableNext, control.label);
					break;
			}

			this.controls = this.controls ? this.controls.concat(_control) : new Array(_control);
		}
	}

	shouldComponentUpdate(nextProps) {
		let { index, current, complete, warning, error, disableNext } = this.props;

		let isActive = index === current,
			nextIsActive = nextProps.index === nextProps.current;

		return  isActive !== nextIsActive || complete !== nextProps.complete || warning !== nextProps.warning || error !== nextProps.error ||	disableNext !== nextProps.disableNext;
	}

	gotoStep(validationFunc, indexToGoto) {
		const props = this.props;
		const callback = typeof indexToGoto !== "undefined" ? indexToGoto > props.index ? props._onNextFunc : props._onPrevFunc : props._onCompleteFunc;

		return callback(validationFunc, indexToGoto);
	}

	render() {
		let {
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
			...rest
		} = this.props;

		return <Step isActive={ current === index } status={ { complete: complete, warning: warning, error: error, disableNext: disableNext } } controls={ this.controls } >{ component }</Step>;
	}
}

StepContainer.propTypes = {
	component: PropTypes.element.isRequired,
	controls: PropTypes.array,
	title: PropTypes.string,
	subheading: PropTypes.string,
	indicatorId: PropTypes.string,
	indicatorLabel: PropTypes.string,
	indicatorIconClasses: PropTypes.object,
	prevLabel: PropTypes.string,
	onPrevFunc: PropTypes.func,
	nextLabel: PropTypes.string,
	onNextFunc: PropTypes.func
}

export default StepContainer;


/* Internal functions */

function _controlWithProps(key, callback, validationFunc, targetIndex, disabled, label) {
	return <Control key={ key } onClick={ () => callback(validationFunc, targetIndex) } disabled={ disabled }>{ label }</Control>;
}











