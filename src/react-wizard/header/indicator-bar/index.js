import React, { PureComponent } from "react";
import Indicator from "./indicator";

class IndicatorBar extends PureComponent {
	constructor(props) {
		super(props);
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