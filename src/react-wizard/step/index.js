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
					_control = _controlWithProps(i, this.gotoStep, control.validationFunc, (props.current - 1), false, control.label);
					break;
				case 1:
					_control = _controlWithProps(i, this.gotoStep, control.validationFunc, (props.current + 1), props.disableNext, control.label);
					break;
				case 2:
					_control = _controlWithProps(i, this.gotoStep, control.validationFunc, undefined, props.disableNext, control.label);
					break;
			}

			this.controls = this.controls ? this.controls.concat(_control) : new Array(_control);
		}

		console.log(this.controls);
	}

	gotoStep(validationFunc, indexToGoto) {
		console.log(validationFunc, indexToGoto);
	}

	render() {
		let {
			controls,
			disableNext,
			component,
			title,
			subheading,
			indicatorId,
			indicatorLabel,
			indicatorIconClasses,
			prevLabel,
			onPrevFunc,
			nextLabel,
			onNextFunc,
			completeLabel,
			onCompleteFunc,
			...rest
		} = this.props;

		return <Step controls={ this.controls } >{ component }</Step>;
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











