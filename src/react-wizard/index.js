import React, { Component } from "react";
import ReactWizard from "./react-wizard.presentational";

import "./styles.scss";

class ReactWizardContainer extends Component {
	constructor(props) {
		super(props);

		this.state = _hydrateState(this.props.hydrateState, this.props.children);

		console.log(this.state)
	}

	componentWillMount() {
		// determine the type of controls each step needs based on its index
		this.childrenWithControls = React.Children.map(this.props.children,
			(child, index) => React.cloneElement(child, {
				controls: _createControls(child.props,	index, ( this.props.children.length - 1 ))
			})
		);
	}

	render() {
		let { children, ...rest } = this.props;

		this.childrenWithControls = React.Children.map(this.childrenWithControls,
			(child, index) => React.cloneElement(child, {
				current: this.state.current,
				disableNext: this.state.steps[index].disableNext
			})
		);

		return <ReactWizard>{ this.childrenWithControls }</ReactWizard>;
	}
}

export default ReactWizardContainer;

























/* Internal functions */

function _hydrateState(stateHydration, steps) {
	let defaultStepState = {
		compelted: false,
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
							compelted: stateHydration.steps[index].complete || false,
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

	return { steps: _steps, current: stateHydration.current || 0 };
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