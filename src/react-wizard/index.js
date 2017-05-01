import React, { Component } from "react";
import ReactWizard from "./react-wizard.presentational";

import "./styles.scss";

class ReactWizardContainer extends Component {
	constructor(props) {
		super(props);

		this.state = _hydrateState(this.props.hydrateState, this.props.children);

		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);

		console.log(this.state)
	}

	componentWillMount() {
		// determine the type of controls each step needs based on its index
		this.childrenWithControls = React.Children.map(this.props.children,
			(child, index) => React.cloneElement(child, {
				index: index,
				_onPrevFunc: this.prev,
				_onNextFunc: this.next,
				controls: _createControls(child.props,	index, ( this.props.children.length - 1 ))
			})
		);
	}

	prev(onPrevCallback) {
		let proceed = true;

		if (onPrevCallback) {
			proceed = onPrevCallback(this.state);
		}

		this.setState({
			...this.state,
			current: proceed ? this.state.current - 1 : this.state.current
		});
	}

	next(validationFunc, finalStep) {
		let newState, validationResponse = typeof validationFunc === "function" ? validationFunc(this.state) : 1;

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

	render() {
		let { children, ...rest } = this.props;

		this.childrenWithControls = React.Children.map(this.childrenWithControls,
			(child, index) => React.cloneElement(child, {
				current: this.state.current,
				complete: this.state.steps[index].complete,
				warning: this.state.steps[index].warning,
				error: this.state.steps[index].error,
				disableNext: this.state.steps[index].disableNext
			})
		);

		return <ReactWizard currentStepStatus={ this.state.steps[this.state.current] }>{ this.childrenWithControls }</ReactWizard>;
	}
}

export default ReactWizardContainer;

























/* Internal functions */

function _hydrateState(stateHydration, steps) {
	let defaultStepState = {
		complete: false,
		warning: false,
		error: false,
		disableNext: false
	}

	let _steps = React.Children.map(steps,
		(child, index) => {
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
						}
					}
					return defaultStepState;
				}
				return defaultStepState;
			}
		}
	);

	return { steps: _steps, current: stateHydration ? stateHydration.current : 0 };
}

function _createControls(childProps, index, endingIndex) {
	// control.type number representation:
	// 0: prev
	// 1: next
	// 2: complete

	let controls;
	switch (index) {
		case 0:
			controls = [ _createControl(1, childProps.nextLabel || "NEXT", childProps.onNextFunc) ];
			break;
		case endingIndex:
			controls = [
			_createControl(0, childProps.prevLabel || "PREVIOUS", childProps.onPrevFunc),
			_createControl(	2,
							childProps.completeLabel || childProps.nextLabel || "COMPLETE",
							childProps.onCompleteFunc || childProps.onNextFunc)
		];
			break;
		default:
			controls = [
				_createControl(0, childProps.prevLabel || "PREVIOUS", childProps.onPrevFunc),
				_createControl(1, childProps.nextLabel || "NEXT", childProps.onNextFunc)
			];
			break;
	}

	return controls;
}

function _createControl(type, label, validationFunc) {
	return {
		type: type,
		label: label,
		validationFunc: validationFunc
	}
}

function _newState(state, changeInCurrentlyActiveStep, currentStepNewStatus) {
	return {
		...state,
		current: state.current + changeInCurrentlyActiveStep,
		steps: state.steps.map((step, index) => {
			if (index !== state.current) {
				return step;
			}

			return currentStepNewStatus;
		})
	}
}