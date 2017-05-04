import React, { PureComponent } from "react";
import { uid } from "../../../utils.js";
import Indicator from "./indicator";

class IndicatorBar extends PureComponent {
	constructor(props) {
		super(props);

		this.init = this.init.bind(this);
		this.reinit = this.reinit.bind(this);
	}

	componentWillMount() {
		this.init();
	}

	componentWillReceiveProps(nextProps) {
		//console.log(nextProps)
	}

	init() {
		this.styleElId = `rw-indicator-bar-${uid(12)}`;

		let styleEl = document.createElement("STYLE"),
			head = document.head || document.getElementsByTagName('head')[0];

		styleEl.type = "text/css";
		styleEl.id = this.styleElId;
		head.appendChild(styleEl);
	}

	reinit() {
		document.getElementById(this.styleElId).innerText = "";
		let step;
		for (step in this.props.steps) {
			this[`indicator${step}`].reinit();
		}
	}

	render() {
		let { indicatorProperties, steps, currentStep } = this.props;
		let step;

		return (
			<div className="react-wizard-indicator-bar">
				<Indicator
					style={ { width: ( 100 / ( steps.length + 1 ) + "%") } }
					lead={ true }>
				</Indicator>
				{
					steps.map((indicator, index) => {
						if (indicatorProperties[index]) {
							step = steps[index];

							let iconClasses;
							if (indicatorProperties[index].iconClasses) {
								if (step.error) {
									iconClasses = indicatorProperties[index].iconClasses.error;
								} else if (step.warning) {
									iconClasses = indicatorProperties[index].iconClasses.warning;
								} else if (step.complete) {
									iconClasses = indicatorProperties[index].iconClasses.complete;
								}
							}

							return (
								<Indicator
									ref={ (indicator) => this[`indicator${index}`] = indicator }
									index={ index }
									key={ index }
									style={ { width: ( 100 / ( steps.length + 1 ) + "%") } }
									styleElId={ this.styleElId }
									isActive={ currentStep === index }
									id={ indicatorProperties[index].id }
									label={ indicatorProperties[index].label }
									iconClasses={ iconClasses }
									complete={ step.complete }
									warning={ step.warning }
									error={ step.error }
									onClick={ () => true }
									disabled={ !index ? false : steps[ index - 1 ].disableNext } />
							)
						}
					})
				}
			</div>
		);
	}
}

export default IndicatorBar;