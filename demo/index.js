import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactWizard, Step } from "../src";

const stepOneComponent = (props) => {
	return <form>Step One</form>
}

const stepTwoComponent = (props) => {
	return <form>Step Two</form>
}

const stepThreeComponent = (props) => {
	return <form>Step Three</form>
}

function comp1callback(state) {
	this.setNewData();
	return 1;
}



class Root extends Component {
	constructor(props) {
		super(props);

		this.state = {
			awaitingData: true
		}

		this.steps = null;
		this.stateHydration = null;

		this.setData = this.setData.bind(this);
		this.setNewData = this.setNewData.bind(this);
	}

	setData() {
		let stateHydration = {
			current: 1,
			steps: {
				0: {
					complete: true
				}
			}
		}

		let mockData = [
			{
				component: stepOneComponent,
				title: "Contact Information",
				subheading: "Please fill out the below contact information so that we can keep you informed about your order!",
				indicatorLabel: "Contact Information",
				onNextFunc: comp1callback.bind(this)
			},
			{
				component: stepTwoComponent,
				title: "Shipping Information",
				subheading: "We'll ship your order anywhere in the world!",
				indicatorLabel: "Shipping Information",
				onNextFunc: (state) => 1
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
					nextLabel={ step.nextLabel }
					onNextFunc={ step.onNextFunc }
				/>
			)
		}

		this.steps = steps;
		this.stateHydration = stateHydration;
		this.setState({
			...this.state,
			awaitingData: false
		});
	}

	setNewData() {
		let _mockData = [
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
				onNextFunc: (state) => 1
			},
			{
				component: (props) => { return <div>Step four componnet</div>; },
				title: "More stuff?",
				subheading: "Another subheading to wow you with!",
				indicatorLabel: "More stuff",
				nextLabel: "FORWARD NOW",
				onNextFunc: (state) => 1
			},
			{
				component: stepThreeComponent,
				title: "Billing Information",
				subheading: "How would you like to pay for your order?",
				indicatorLabel: "Billing Information"
			},
			{
				component: (props) => { return <div>Step five componnet</div>; },
				title: "This is new",
				subheading: "Ipsum gipsum loriem dipsum",
				indicatorLabel: "This is new",
				nextLabel: "WE'RE DONE HERE",
			}
		];

		let _i, _len = _mockData.length, _steps = new Array(), _step;

		for (_i = 0; _i < _len; _i++) {
			_step = _mockData[_i];
			_steps = _steps.concat(
				<Step
					key={ "myWizardStep_" + _i }
					component={ _step.component({}) }
					title={ _step.title }
					subheading={ _step.subheading }
					indicatorLabel={ _step.indicatorLabel }
					nextLabel={ _step.nextLabel }
					onNextFunc={ _step.onNextFunc }
				/>
			)
		}

		let _stateHydration = {
			current: 1,
			steps: {
				0: {
					complete: true
				}
			}
		}

		this.steps = _steps;
		this.stateHydration = _stateHydration;
		this.onCompleteFunc = (state) => { console.log(state); return 0; };
		this.setState(this.state, this.wizard.reinitialize);
	}

	render() {
		if (!this.steps) {
			setTimeout(() => {
				this.setData();
			}, 1000);
		}
		return (
			<div>
				<ReactWizard
					ref={ (wiz) => this.wizard = wiz }
					hydrateState={ this.stateHydration }
					onCompleteFunc={ this.onCompleteFunc }
					//afterCompleteComponent={}
					>
					{ this.steps }
				</ReactWizard>
				<br />
				<button type="button" onClick={ this.setNewData }>Inject new data</button>
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