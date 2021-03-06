import React, { PureComponent } from "react";
import { applyClasses, uid } from "../../../../utils.js";

class Indicator extends PureComponent {
	constructor(props) {
		super(props);

		this.reinitialize = this.reinitialize.bind(this);
	}

	componentWillMount() {
		_initialize.call(this);
	}

	reinitialize() {
		if (this.props.styleElId && this.props.label) {
			let pseudoStyles = `#${this.id} .react-wizard-indicator-circle:before { content: "${this.props.label}" }`;
			document.getElementById(this.props.styleElId).innerText += pseudoStyles;
		}
	}

	render() {
		let {
			lead,
			style,
			styleElId,
			index,
			currentStep,
			id,
			label,
			iconClasses,
			complete,
			warning,
			error,
			onClick,
			disabled,
			totalCompelted
		} = this.props;

		let _disabled = disabled ? true : totalCompelted < index ? index - currentStep > 1 : false,
			cases = _cases(index === currentStep, { complete: complete, warning: warning, error: error, disabled: _disabled });

		if (!lead) {

			return (
				<div
				    id={ this.id }
					style={ style }
					className={ applyClasses(_classListArray, cases, "react-wizard-indicator") }>
					<div className="react-wizard-indicator-circle" onClick={ !_disabled && index !== currentStep ? onClick.bind(null, index) : null }>
						<span className="react-wizard-indicator-text">
							{
								!iconClasses ?
									(index + 1) :
									<i className={ `react-wizard-indicator-icon ${iconClasses}` } />
							}
						</span>
					</div>
				</div>
			);
		} else {
			return (
				<div
					style={ style }
					className="react-wizard-indicator lead" />
			);
		}
	}
}

export default Indicator;

/* Internal functions, methods, and variables */

function _initialize() {
	this.id = this.props.id ? this.props.id : `rw-indicator-${uid(12)}`;

	if (this.props.styleElId && this.props.label) {
		let pseudoStyles = `#${this.id} .react-wizard-indicator-circle:before { content: "${this.props.label}" }`;
		document.getElementById(this.props.styleElId).innerText += pseudoStyles;
	}
}

const _classListArray = [
	{
		criterion: "isActive",
		className: "active"
	},
	{
		criterion: "complete",
		className: "complete"
	},
	{
		criterion: "warning",
		className: "warning"
	},
	{
		criterion: "error",
		className: "error"
	},
	{
		criterion: "disabled",
		className: "disabled"
	}
];

const _cases = (isActive, status) => {
	return {
		isActive: isActive,
		complete: status.complete,
		warning: status.warning,
		error: status.error,
		disabled: status.disabled
	}
}