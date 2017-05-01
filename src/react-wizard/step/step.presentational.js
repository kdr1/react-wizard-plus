import React from "react";

const Step = (props) => {
	let { isActive, status, controls, children, ...rest } = props;
	return (
		<div className={ _applyClasses(isActive, status) }>
			{ children }
			<div className="react-wizard-controls">{ controls }</div>
		</div>
	);
}

export default Step;

/* Internal functions */

function _applyClasses(isActive, status) {
	let classes = new Array("react-wizard-step");

	if (isActive) {
		classes = classes.concat("active");
	}

	if (status.complete) {
		classes = classes.concat("complete");
	}

	if (status.warning) {
		classes = classes.concat("warning");
	}

	if (status.error) {
		classes = classes.concat("error");
	}

	return classes.join(" ");
}