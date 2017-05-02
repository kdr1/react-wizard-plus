import React from "react";
import Header from "./header";
import { applyClasses } from "../utils.js";

const ReactWizard = (props) => {
	let {
		totalSteps,
		currentStep,
		currentStepStatus,
		currentStepTitle,
		currentStepSubheading,
		children,
		...rest
	} = props;

	let cases = _cases(currentStepStatus);

	return (
		<section className={ applyClasses(_classListArray, cases, "react-wizard") }>
			<Header
				totalSteps={ totalSteps}
				currentStep={ currentStep }
				currentStepStatus={ currentStepStatus }
				currentStepTitle={ currentStepTitle }
				currentStepSubheading={ currentStepSubheading } />
			{ children }
		</section>
	);
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