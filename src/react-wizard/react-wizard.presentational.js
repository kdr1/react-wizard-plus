import React from "react";
import { applyClasses } from "../utils.js";

const ReactWizard = (props) => {
	let { currentStepStatus, children, ...rest } = props;

	let cases = _cases(currentStepStatus);

	return (
		<section className={ applyClasses(_classListArray, cases, "react-wizard") }>
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