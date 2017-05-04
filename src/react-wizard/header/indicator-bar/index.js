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
		let { indicatorProperties, onIndicatorClick, steps, currentStep } = this.props;
		let step, totalCompelted = 0, i, len = steps.length;

		for (i = 0; i < len; i++) {
			if (steps[i].complete) {
				totalCompelted++;
			}
		}

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

							let iconClasses, states;
							if (indicatorProperties[index].iconClasses) {
								states = indicatorProperties[index].iconClasses;
								if (step.error) {
									iconClasses = states.error;
								} else if (step.warning) {
									iconClasses = states.warning;
								} else if (step.complete) {
									iconClasses = states.complete;
								} else {
									iconClasses = states.default;
								}
							}

							return (
								<Indicator
									ref={ (indicator) => this[`indicator${index}`] = indicator }
									index={ index }
									currentStep={ currentStep }
									key={ index }
									style={ { width: ( 100 / ( steps.length + 1 ) + "%") } }
									styleElId={ this.styleElId }
									id={ indicatorProperties[index].id }
									label={ indicatorProperties[index].label }
									iconClasses={ iconClasses }
									complete={ step.complete }
									warning={ step.warning }
									error={ step.error }
									onClick={ onIndicatorClick }
									disabled={ !index ? false : steps[ index - 1 ].disableNext }
									totalCompelted={ totalCompelted } />
							)
						}
					})
				}
			</div>
		);
	}
}

export default IndicatorBar;