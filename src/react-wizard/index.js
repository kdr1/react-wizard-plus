import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ReactWizardContainer from "./react-wizard.container";

import "./styles.scss";

class ConditionalRenderWrapper extends PureComponent {
	constructor(props) {
		super(props);
	}

	rehydrateState() {
		if (this.wizard) {
			this.wizard.rehydrateState();
		}
	}

	render() {
		let { id, children, loadingSpinner, hydrateState, onComplete, afterCompleteComponent, ...rest } = this.props;
		if (children) {
			return (
				<ReactWizardContainer
					ref={ (wizard) => this.wizard = wizard }
					id={ id }
					hydrateState={ hydrateState }
					onComplete={ onComplete }
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
	onComplete: PropTypes.func,
	afterCompleteComponent: PropTypes.element
}

export default ConditionalRenderWrapper;