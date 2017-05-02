import React, { PureComponent } from "react";
import { uid } from "../../../utils.js";
import Indicator from "./indicator";

class IndicatorBar extends PureComponent {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.styleElId = `rw-indicator-bar-${uid(12)}`;

		let styleEl = document.createElement("STYLE"),
			head = document.head || document.getElementsByTagName('head')[0];

		styleEl.type = "text/css";
		styleEl.id = this.styleElId;
		head.appendChild(styleEl);
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
						step = steps[index];
						return (
							<Indicator
								key={ index }
								style={ { width: ( 100 / ( steps.length + 1 ) + "%") } }
								styleElId={ this.styleElId }
								isActive={ currentStep === index }
								id={ indicatorProperties[index].id }
								label={ indicatorProperties[index].label }
								iconClasses={ indicatorProperties[index].iconClasses }
								complete={ step.complete }
								warning={ step.warning }
								error={ step.error }
								onClick={ () => true }
								disabled={ !index ? false : steps[ index - 1 ].disableNext } />
						)
					})
				}
			</div>
		);
	}
}

export default IndicatorBar;