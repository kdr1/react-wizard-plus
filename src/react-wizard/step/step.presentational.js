import React from "react";
import { applyClasses } from "../../utils.js";

const Step = (props) => {
	let { isActive, status, controls, children, ...rest } = props;

	let controlsWithStatus = React.Children.map(controls,
		(control, index) => React.cloneElement(control, {
			disabled: controls.length < 2 ? status.disableNext : index > 0 ? status.disableNext : false
		})
	);

	let cases = _cases(isActive, status);

	return (
		<div className={ applyClasses(_classListArray, cases, "react-wizard-step") }>
			{ children }
			<div className="react-wizard-controls">{ controlsWithStatus }</div>
		</div>
	);

}

export default Step;

/* Internal functions, methods, and variables */

const _classListArray = [
	{
		criterion: "isActive",
		className: "active"
	},
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

const _cases = (isActive, status) => {
	return {
		isActive: isActive,
		complete: status.complete,
		warning: status.warning,
		error: status.error
	}
}







