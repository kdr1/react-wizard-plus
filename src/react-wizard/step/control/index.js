import React, { PureComponent } from "react";

class Control extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		let { disabled, onClick, children } = this.props;
		if (disabled) {
			return (
				<button
					type="button"
					className="react-wizard-control disabled"
					disabled>{ children }</button>
			);
		} else {
			return (
				<button
					type="button"
					className="react-wizard-control"
					onClick={ onClick }>{ children }</button>
			);
		}
	}
};

export default Control;