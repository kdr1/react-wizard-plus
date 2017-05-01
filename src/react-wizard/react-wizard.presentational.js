import React from "react";

const ReactWizard = (props) => {
	let { currentStepStatus, children, ...rest } = props;
	return (
		<section className={ _applyClasses(currentStepStatus) }>
			{ children }
		</section>
	);
}

export default ReactWizard;

/* Internal functions */

function _applyClasses(currentStepStatus) {
	let classes = new Array("react-wizard");

	if (currentStepStatus.complete) {
		classes = classes.concat("complete");
	}

	if (currentStepStatus.warning) {
		classes = classes.concat("warning");
	}

	if (currentStepStatus.error) {
		classes = classes.concat("error");
	}

	return classes.join(" ");
}