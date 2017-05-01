import React from "react";

const Step = (props) => {
	let { controls, children, ...rest } = props;
	return (
		<div className="react-wizard-step">
			{ children }
			{ controls }
		</div>
	);
}

export default Step;