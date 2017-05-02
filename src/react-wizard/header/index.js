import React from "react";

const Header = (props) => {
	let { totalSteps, currentStep, currentStepStatus, currentStepTitle, currentStepSubheading } = props;
	return (
		<div className="react-wizard-header">
			<div className="padded-area">
				<h2 className="react-wizard-header-title">{ currentStepTitle }</h2>
			</div>
		</div>
	);
}

export default Header;