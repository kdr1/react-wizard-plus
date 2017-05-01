import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactWizard, Step } from "../src";

let stateHydration = {
	current: 0,
	steps: {
		0: {
			disableNext: true
		}
	}
}

const stepOneComponent = (props) => {
	return <form>Step One</form>
}

const stepTwoComponent = (props) => {
	return <form>Step Two</form>
}

const stepThreeComponent = (props) => {
	return <form>Step Three</form>
}

class Root extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ReactWizard
					hydrateState={ stateHydration }
					//onComplete={}
					//afterCompleteComponent={}
					>
					<Step
						component={ stepOneComponent({}) }
						title="Step One"
						//subheading=""
						//indicatorId=""
						//indicatorLabel=""
						//indicatorIconClasses={}
						//prevLabel=""
						//onPrevFunc={}
						//nextLabel=""
						//onNextFunc={}
					/>
					<Step
						component={ stepTwoComponent({}) }
						title="Step Two"
						//subheading=""
						//indicatorId=""
						//indicatorLabel=""
						//indicatorIconClasses={}
						//prevLabel=""
						//onPrevFunc={}
						//nextLabel=""
						//onNextFunc={}
					/>
					<Step
						component={ stepThreeComponent({}) }
						title="Step Three"
						//subheading=""
						//indicatorId=""
						//indicatorLabel=""
						//indicatorIconClasses={}
						//prevLabel=""
						//onPrevFunc={}
						//nextLabel=""
						//onNextFunc={}
					/>
				</ReactWizard>
			</div>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById("app"));