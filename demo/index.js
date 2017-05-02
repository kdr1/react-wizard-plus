import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactWizard, Step } from "../src";

let stateHydration = {
	current: 1,
	steps: {
		0: {
			complete: true
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

const stepFourComponent = (props) => {
	return <form>Step Four</form>
}

class Root extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ReactWizard
					//hydrateState={ stateHydration }
					//onComplete={}
					//afterCompleteComponent={}
					>
					<Step
						component={ stepOneComponent({}) }
						title="Step One Title"
						//subheading=""
						indicatorId="contact-information"
						indicatorLabel="Contact Information"
						indicatorIconClasses={ { complete: "fa fa-check", warning: "fa fa-exclamation-triangle", error: "fa fa-exclamation" } }
						//prevLabel=""
						//onPrevFunc={}
						//nextLabel=""
						onNextFunc={ (state) => 1 }
					/>
					<Step
						component={ stepTwoComponent({}) }
						title="Step Two Title"
						//subheading=""
						//indicatorId=""
						//indicatorLabel=""
						//indicatorIconClasses={}
						//prevLabel=""
						//onPrevFunc={}
						//nextLabel=""
						onNextFunc={ (state) => 2 }
					/>
					<Step
						component={ stepThreeComponent({}) }
						title="Step Three Title"
						//subheading=""
						//indicatorId=""
						//indicatorLabel=""
						//indicatorIconClasses={}
						//prevLabel=""
						//onPrevFunc={}
						//nextLabel=""
						onNextFunc={ (state) => 0 }
					/>
					<Step
						component={ stepFourComponent({}) }
						title="Step Four Title"
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