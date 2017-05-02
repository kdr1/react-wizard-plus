import React, { PureComponent } from "react";
import { applyClasses } from "../../../../utils.js";

class Indicator extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		let { lead, style, isActive, id, label, iconClasses, complete, warning, error, onClick, disabled } = this.props;

		let cases = _cases({ complete: complete, warning: warning, error: error, disabled: disabled });

		if (!lead) {
			return (
				<div
				    id={ id }
					style={ style }
					className={ applyClasses(_classListArray, cases, "react-wizard-indicator") }>
					<div
						className="react-wizard-indicator-circle" />
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

const _classListArray = [
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

const _cases = (status) => {
	return {
		complete: status.complete,
		warning: status.warning,
		error: status.error,
		disabled: status.disabled
	}
}