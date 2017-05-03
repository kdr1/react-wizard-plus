import React, { Component } from "react";
import IndicatorBar from "./indicator-bar";

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {
			indicatorProperties,
			steps,
			currentStep,
			currentStepTitle,
			currentStepSubheading
		} = this.props;

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
					ref={ (indicatorBar) => this.indicatorBar = indicatorBar }
					indicatorProperties={ indicatorProperties }
					steps={ steps }
					currentStep={ currentStep } />
			</div>
		);
	}
}

export default Header;