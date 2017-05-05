import React, { Component } from "react";
import Header from "./header";
import { applyClasses } from "../utils.js";

class ReactWizard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {
			steps,
			currentStep,
			indicatorProperties,
			currentStepTitle,
			currentStepSubheading,
			children,
			onIndicatorClick,
			style,
			afterCompleteComponent,
			...rest
		} = this.props;

		let cases = _cases(currentStep > -1 ? steps[currentStep] : { complete: true });

		if (currentStep > -1) {
			return (
				<section className={ applyClasses(_classListArray, cases, "react-wizard") } style={ style } { ...rest }>
					<Header
						ref={ (header) => this.header = header }
						indicatorProperties={ indicatorProperties }
						onIndicatorClick={ onIndicatorClick }
						steps={ steps }
						currentStep={ currentStep }
						currentStepTitle={ currentStepTitle }
						currentStepSubheading={ currentStepSubheading } />
					{ children }
				</section>
			);
		} else {
			return (
				<section className={ applyClasses(_classListArray, cases, "react-wizard after-complete") } style={ style } { ...rest }>
					<div className="react-wizard-header" />
					{ afterCompleteComponent }
				</section>
			);
		}
	}
}

export default ReactWizard;

/* Internal functions, methods, and variables */

const _classListArray = [
	{
		criterion: "complete",
		className: "complete"
	},
	{
		criterion: "warning",
		className: "warning"
	},
	{
		criterion: "error",
		className: "error"
	}
];

const _cases = (status) => {
	return {
		complete: status.complete,
		warning: status.warning,
		error: status.error
	}
}