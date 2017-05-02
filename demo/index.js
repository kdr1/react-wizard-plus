import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactWizard, Step } from "../src";

const stateHydration = {
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


const mockData = [
	{
		component: stepOneComponent,
		title: "Contact Information",
		subheading: "Please fill out the below contact information so that we can keep you informed about your order!",
		indicatorLabel: "Contact Information",
		onNextFunc: (state) => 1
	},
	{
		component: stepTwoComponent,
		title: "Shipping Information",
		subheading: "We'll ship your order anywhere in the world!",
		indicatorLabel: "Shipping Information",
		onNextFunc: (state) => 2
	},
	{
		component: stepThreeComponent,
		title: "Billing Information",
		subheading: "How would you like to pay for your order?",
		indicatorLabel: "Billing Information"
	}
];

let i, len = mockData.length, steps = new Array(), step;

for (i = 0; i < len; i++) {
	step = mockData[i];
	steps = steps.concat(
		<Step
			key={ "myWizardStep_" + i }
			component={ step.component({}) }
			title={ step.title }
			subheading={ step.subheading }
			indicatorLabel={ step.indicatorLabel }
			onNextFunc={ step.onNextFunc }
		/>
	)
}


const mockData1 = [
	{
		component: stepOneComponent,
		title: "Contact1 Information",
		subheading: "Please fill out the below contact information so that we can keep you informed about your order!",
		indicatorLabel: "Contact Information",
		onNextFunc: (state) => 1
	},
	{
		component: stepTwoComponent,
		title: "Shipping1 Information",
		subheading: "We'll ship your order anywhere in the world!",
		indicatorLabel: "Shipping Information",
		onNextFunc: (state) => 2
	},
	{
		component: stepThreeComponent,
		title: "Billing1 Information",
		subheading: "How would you like to pay for your order?",
		indicatorLabel: "Billing Information"
	}
];

let i1, len1 = mockData1.length, steps1 = new Array(), step1;

for (i1 = 0; i1 < len1; i1++) {
	step1 = mockData1[i1];
	steps1 = steps1.concat(
		<Step
			key={ "myWizardStep_" + i1 }
			component={ step1.component({}) }
			title={ step1.title }
			subheading={ step1.subheading }
			indicatorLabel={ step1.indicatorLabel }
			onNextFunc={ step1.onNextFunc }
		/>
	)
}

const stateHydration1 = {
	current: 2,
	steps: {
		0: {
			complete: true
		},
		1: {
			complete: true,
			warning: true
		}
	}
}

class Root extends Component {
	constructor(props) {
		super(props);

		this.state = {
			awaitingData: true
		}

		this.steps = null;
		this.stateHydration = null;

		this.injectData = this.injectData.bind(this);
		this.injectDataNewData = this.injectDataNewData.bind(this);
	}

	injectData() {
		this.steps = steps;
		this.stateHydration = stateHydration;
		this.setState({
			...this.state,
			awaitingData: false
		});
	}

	injectDataNewData() {
		this.steps = steps1;
		this.stateHydration = stateHydration1;
		this.setState({
			...this.state,
			awaitingData: false
		}, this.wizard.rehydrateState);
	}

	render() {
		return (
			<div>
				<ReactWizard
					ref={ (wiz) => this.wizard = wiz }
					hydrateState={ this.stateHydration }
					//onComplete={}
					//afterCompleteComponent={}
					>
					{ this.steps }
				</ReactWizard>
				<br />
				<button type="button" onClick={ this.injectData }>Inject data</button>
				<button type="button" onClick={ this.injectDataNewData }>Inject new data</button>
			</div>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById("app"));




/*


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


*/