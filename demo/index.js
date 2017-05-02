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
						title="Contact Information"
						subheading="Please fill out the below contact information so that we can keep you informed about your order!"
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
						title="Shipping Information"
						subheading="We'll ship your order anywhere in the world!"
						//indicatorId=""
						indicatorLabel="Shipping Information"
						//indicatorIconClasses={}
						//prevLabel=""
						//onPrevFunc={}
						//nextLabel=""
						onNextFunc={ (state) => 2 }
					/>
					<Step
						component={ stepThreeComponent({}) }
						title="Billing Information"
						subheading="How would you like to pay for your order?"
						//indicatorId=""
						indicatorLabel="Billing Information"
						//indicatorIconClasses={}
						//prevLabel=""
						//onPrevFunc={}
						//nextLabel=""
						onNextFunc={ (state) => 0 }
					/>
					<Step
						component={ stepFourComponent({}) }
						title="Survey"
						subheading="Take a quick survey and get 10% off your order!"
						//indicatorId=""
						indicatorLabel="Take a Survey"
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