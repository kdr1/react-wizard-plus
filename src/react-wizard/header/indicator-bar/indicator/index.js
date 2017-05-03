import React, { PureComponent } from "react";
import { applyClasses, uid } from "../../../../utils.js";

class Indicator extends PureComponent {
	constructor(props) {
		super(props);

		this.init = this.init.bind(this);
		this.reinit = this.reinit.bind(this);
	}

	componentWillMount() {
		this.init();
	}

	init() {
		this.id = this.props.id ? this.props.id : `rw-indicator-${uid(12)}`;

		if (this.props.styleElId && this.props.label) {
			let pseudoStyles = `#${this.id} .react-wizard-indicator-circle:before { content: "${this.props.label}" }`;
			document.getElementById(this.props.styleElId).innerText += pseudoStyles;
		}
	}

	reinit() {
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
			isActive,
			id,
			label,
			iconClasses,
			complete,
			warning,
			error,
			onClick,
			disabled
		} = this.props;

		let cases = _cases({ complete: complete, warning: warning, error: error, disabled: disabled });

		if (!lead) {

			return (
				<div
				    id={ this.id }
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