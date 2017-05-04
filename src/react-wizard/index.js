import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactWizardContainer from "./react-wizard.container";
import Step from "./step";
import { uid, camelCase } from "../utils.js";

import "./styles.scss";

class ConditionalRenderWrapper extends PureComponent {
	constructor(props) {
		super(props);

		this.reinitialize = this.reinitialize.bind(this);
		this.createSteps = this.createSteps.bind(this);
	}

	reinitialize() {
		if (this.wizard) {
			this.wizard.rehydrateState();
		}
	}

	createSteps(stepsData) {
		if (!Array.isArray(stepsData)) throw new Error(`ReactWizard.createSteps requires the stepsData argument to be an Array.`);
		let i,
			len = stepsData.length,
			steps = new Array(),
			step;

		for (i = 0; i < len; i++) {
			step = stepsData[i];

			if (typeof step !== "object") throw new Error(`Each index of stepsData must be an object representing the props of a <Step /> component`);

			steps = steps.concat(
				<Step
					key={ `${camelCase(step.title)}-${uid(4)}` }
					component={ step.component() }
					title={ step.title }
					subheading={ step.subheading }
					id={ step.id }
					className={ step.className }
					indicatorId={ step.indicatorId }
					indicatorLabel={ step.indicatorLabel }
					indicatorIconClasses={ step.indicatorIconClasses }
					prevLabel={ step.prevLabel }
					onPrevFunc={ step.onPrevFunc }
					nextLabel={ step.nextLabel }
					onNextFunc={ step.onNextFunc }
					completeLabel={ step.completeLabel }
					onCompleteFunc={ step.onCompleteFunc }
				/>
			)
		}
console.log(steps)
		return steps;
	}

	render() {
		let { id, children, loadingSpinner, hydrateState, onCompleteFunc, afterCompleteComponent, ...rest } = this.props;
		if (children) {
			return (
				<ReactWizardContainer
					ref={ (wizard) => this.wizard = wizard }
					id={ id }
					hydrateState={ hydrateState }
					onCompleteFunc={ onCompleteFunc }
					afterCompleteComponent={ afterCompleteComponent }>
					{ children }
				</ReactWizardContainer>
			);
		} else {
			return (
				<div className="react-wizard">
					<div className="react-wizard-header" />
					{
						loadingSpinner ?
							loadingSpinner :
							<div className="react-wizard-spinner" />
					}
				</div>
			);
		}
	}
}

ConditionalRenderWrapper.propTypes = {
	id: PropTypes.string,
	loadingSpinner: PropTypes.element,
	hydrateState: PropTypes.object,
	onCompleteFunc: PropTypes.func,
	afterCompleteComponent: PropTypes.element
}

export default ConditionalRenderWrapper;