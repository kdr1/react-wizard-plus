import React from "react";

const ReactWizard = (props) => {
	let { children, ...rest } = props;
	return (
		<section className="react-wizard">
			{ children }
		</section>
	);
}

export default ReactWizard;