import React from "react";
import IndicatorBar from "./indicator-bar";

const Header = (props) => {
	let {
		indicatorProperties,
		steps,
		currentStep,
		currentStepTitle,
		currentStepSubheading
	} = props;

	return (
		<div className="react-wizard-header">
			<div className="padded-area">
				<h2 className="react-wizard-header-title">{ currentStepTitle }</h2>
				{ currentStepSubheading ?
					<span className="react-wizard-header-subheading">{ currentStepSubheading }</span> :
					undefined
				}
			</div>
			<IndicatorBar
				indicatorProperties={ indicatorProperties }
				steps={ steps }
				currentStep={ currentStep } />
		</div>
	);
}

export default Header;