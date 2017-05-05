import React, { Component } from "react";
import { updateChildProps } from "../utils";
import ReactWizard from "./react-wizard.presentational";

import "./styles.scss";

class ReactWizardContainer extends Component {
	constructor(props) {
		super(props);

		this.state = _hydrateState(this.props.hydrateState, this.props.children);

		this.rehydrateState = this.rehydrateState.bind(this);
		this.handleIndicatorClick = this.handleIndicatorClick.bind(this);
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
		this.onComplete = this.onComplete.bind(this);
		this.disableStep = this.disableStep.bind(this);
		this.enableStep = this.enableStep.bind(this);

		this.rebuildControls = false;
	}

	componentWillMount() {
		_initialize.call(this);
	}

	rehydrateState() {
		_rehydrateState.call(this);
	}

	handleIndicatorClick(targetIndex) {
		_handleIndicatorClick.call(this, targetIndex);
	}

	prev(onPrevCallback) {
		_prev.call(this, onPrevCallback);
	}

	next(validationFunc) {
		_next.call(this, validationFunc);
	}

	onComplete(validationFunc) {
		_onComplete.call(this, validationFunc);
	}

	enableStep(index) {
		_enableStep.call(this, index);
	}

	disableStep(index) {
		_disableStep.call(this, index);
	}

	render() {
		let { hydrateState, onCompleteFunc, afterCompleteComponent, children, style, ...rest } = this.props, rebuildControls = false;

		if (this.rebuildControls) {
			this.rebuildControls = false;
			rebuildControls = true;
		}

		if (this.state.current === -1) {
			if (this.afterCompleteComponent) {
				this.afterCompleteComponent = React.cloneElement(this.afterCompleteComponent, {
					style: { ...this.afterCompleteComponent.props.style, display: "block" }
				});
			}
		}

		return (
			<ReactWizard
				ref={ (wizard) => this.wizard = wizard }
				indicatorProperties= { this.indicatorProperties }
				steps={ this.state.steps }
				currentStep={ this.state.current }
				currentStepTitle={ children[this.state.current] ? children[this.state.current].props.title : this.afterCompleteComponent ? this.afterCompleteComponent.props.title : null }
				currentStepSubheading={ children[this.state.current] ? children[this.state.current].props.subheading : this.afterCompleteComponent ? this.afterCompleteComponent.props.subheading : null }
				onIndicatorClick={ this.handleIndicatorClick }
				afterCompleteComponent={ this.afterCompleteComponent }
				style={ style }
				{ ...rest }>
				{ _renderChildren.call(this, rebuildControls) }
			</ReactWizard>
		);
	}
}

export default ReactWizardContainer;










/* Internal functions, methods, and variables */

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

function _rehydrateState() {
	this.setState(_hydrateState(this.props.hydrateState, this.props.children), () => { _reinitialize.call(this); });
}

function _initialize(reinitialization) {
	if (this.props.afterCompleteComponent) {
		this.afterCompleteComponent = React.cloneElement(this.props.afterCompleteComponent, {
			style: { ...this.props.afterCompleteComponent.props.style, display: "none" }
		});
	}

	this.childrenWithControls = updateChildProps(this.props.children, (child, index) => {
		return {
			index: index,
			_onPrevFunc: this.prev,
			_onNextFunc: this.next,
			_onCompleteFunc: this.onComplete,
			controls: _createControls(child.props,	index, ( this.props.children.length - 1 ), this.props.onCompleteFunc),
			current: this.state.current,
			complete: this.state.steps[index].complete,
			warning: this.state.steps[index].warning,
			error: this.state.steps[index].error,
			disableNext: this.state.steps[index].disableNext
		}
	});

	this.indicatorProperties = new Array();
	this.onPrevFuncs = new Array();
	this.onNextFuncs = new Array();

	let i, len = this.props.children.length;
	for (i = 0; i < len; i++) {
		this.indicatorProperties = this.indicatorProperties.concat({
			id: this.props.children[i].props.indicatorId,
			label: this.props.children[i].props.indicatorLabel,
			iconClasses: this.props.children[i].props.indicatorIconClasses
		});

		this.onPrevFuncs = [ ...this.onPrevFuncs, this.props.children[i].props.onPrevFunc ];
		this.onNextFuncs = [ ...this.onNextFuncs, this.props.children[i].props.onNextFunc ];
	}

	if (reinitialization) {
		this.rebuildControls = true;
		this.setState(this.state, this.wizard.header.indicatorBar.reinitialize);
	}
}

function _reinitialize() {
	_initialize.call(this, true);
}

function _createControls(childProps, index, endingIndex, wizardOnCompleteFunc) {
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
							wizardOnCompleteFunc || childProps.onCompleteFunc || childProps.onNextFunc)
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

function _newStepState(steps, index, newStepState) {
	return Object.assign([], steps, { [index]: newStepState });
}

function _insertAtIndexWithoutMutating(arr, index, insertion) {
	return arr.map((item, i) => {
		if (index !== i) {
			return item;
		}

		return insertion;
	});
}

function _handleIndicatorClick(targetIndex) {
	let current = this.state.current,
		steps = this.state.steps,
		advancing = targetIndex > current ? true : false,
		i,
		cumulativeEndState = { current: this.state.current, steps: Object.assign([], this.state.steps) },
		validationResult;

	if (advancing) {
		for (i = current; i < targetIndex; i++) {

			validationResult = this.onNextFuncs[i] ? this.onNextFuncs[i](this.state) : 1;

			switch (validationResult) {
				case 0:
					cumulativeEndState = {
						...cumulativeEndState,
						steps: _newStepState(cumulativeEndState.steps, i, { complete: false, warning: false, error: true, disableNext: true })
					};
					break;
				case 1:
					cumulativeEndState = {
						...cumulativeEndState,
						current: cumulativeEndState.current + 1,
						steps: _newStepState(cumulativeEndState.steps, i, { complete: true, warning: false, error: false, disableNext: false })
					};
					break;
				case 2:
					cumulativeEndState = {
						...cumulativeEndState,
						current: cumulativeEndState.current + 1,
						steps: _newStepState(cumulativeEndState.steps, i, { complete: true, warning: true, error: false, disableNext: false })
					};
					break;
			}
		}
	} else {
		for (i = current; i > targetIndex; i--) {

			validationResult = this.onPrevFuncs[i] ? this.onPrevFuncs[i](this.state) : 1;

			switch (validationResult) {
				case 1:
					cumulativeEndState = {
						...cumulativeEndState,
						current: cumulativeEndState.current - 1
					};
					break;
			}
		}
	}

	this.setState({
		...this.state,
		current: cumulativeEndState.current,
		steps: Object.assign([], this.state.steps, cumulativeEndState.steps)
	});
}

function _prev(onPrevCallback) {
	let proceed = true;

	if (onPrevCallback) {
		proceed = onPrevCallback(this.state);
	}

	this.setState({
		...this.state,
		current: proceed ? this.state.current - 1 : this.state.current
	});
}

function _next(validationFunc) {
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

function _onComplete(validationFunc) {
	let newState,
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
		newState = { ...newState, current: -1 };
	}

	this.setState(newState);
}

function _enableStep(index) {
	if (index < 1) return false;
	let targetIndex = index - 1,
		newStepsState = _newStepState(this.state.steps, targetIndex, { ...this.state.steps[targetIndex], disableNext: false });
	this.setState({ ...this.state, steps: newStepsState });
}

function _disableStep(index) {
	if (index < 1) return false;
	let targetIndex = index - 1,
	    newStepsState = _newStepState(this.state.steps, targetIndex, { ...this.state.steps[targetIndex], disableNext: true });
	this.setState({ ...this.state, steps: newStepsState });
}

function _renderChildren(rebuildControls) {
	return updateChildProps(this.childrenWithControls, (child, index) => {
		return {
			current: this.state.current,
			complete: this.state.steps[index].complete,
			warning: this.state.steps[index].warning,
			error: this.state.steps[index].error,
			disableNext: this.state.steps[index].disableNext,
			rebuildControls: rebuildControls
		}
	});
}