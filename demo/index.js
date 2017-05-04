import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ReactWizard, Step } from "../src";

const stepOneComponent = (props) => {
	return <form>Step One: { props.label }</form>
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
		let stateHydration = null;

		let mockData = [
			{
				component: stepOneComponent.bind(this, { label: "Booyah!" }),
				title: "Contact Information",
				subheading: "Please fill out the below contact information so that we can keep you informed about your order!",
				indicatorLabel: "Contact Information"
			},
			{
				component: stepTwoComponent,
				title: "Shipping Information",
				subheading: "We'll ship your order anywhere in the world!",
				indicatorLabel: "Shipping Information",
				onNextFunc: (state) => 1,
				className: "some-class-I-need",
				id: "my-id"
			},
			{
				component: stepThreeComponent,
				title: "Billing Information",
				subheading: "How would you like to pay for your order?",
				indicatorLabel: "Billing Information"
			}
		];

		this.steps = ReactWizard.createSteps(mockData);
		this.stateHydration = stateHydration;
		this.setState({
			...this.state,
			awaitingData: false
		});
	}

	setNewData() {
		this.dataSet = true;
		let iconClasses = {
			complete: "fa fa-check",
			warning: "fa fa-exclamation-triangle",
			error: "fa fa-exclamation"
		}

		let _mockData = [
			{
				component: stepOneComponent.bind(this, { label: "Brand new and shinny!" }),
				title: "Contact Information",
				subheading: "Please fill out the below contact information so that we can keep you informed about your order!",
				indicatorLabel: "Contact Information",
				onNextFunc: (state) => { console.log("onNextFunc for Contact Information"); return 1; },
				indicatorIconClasses: iconClasses
			},
			{
				component: stepTwoComponent,
				title: "Shipping Information",
				subheading: "We'll ship your order anywhere in the world!",
				indicatorLabel: "Shipping Information",
				onNextFunc: (state) => { console.log("onNextFunc for Shipping Information"); return 1; },
				indicatorIconClasses: iconClasses
			},
			{
				component: (props) => { return <div>Step four componnet</div>; },
				title: "More stuff?",
				subheading: "Another subheading to wow you with!",
				indicatorLabel: "More stuff",
				onNextFunc: (state) => { console.log("onNextFunc for More Stuff?"); return 2; },
				indicatorIconClasses: iconClasses
			},
			{
				component: stepThreeComponent,
				title: "Billing Information",
				subheading: "How would you like to pay for your order?",
				indicatorLabel: "Billing Information",
				onNextFunc: (state) => { console.log("onNextFunc for Billing Information"); return 0; },
				indicatorIconClasses: iconClasses
			},
			{
				component: (props) => { return <div>Step five componnet</div>; },
				title: "This is new",
				subheading: "Ipsum gipsum loriem dipsum",
				indicatorLabel: "This is new",
				nextLabel: "SUBMIT",
				indicatorIconClasses: iconClasses
			}
		];

		let _stateHydration = {
			current: 1,
			steps: {
				0: {
					complete: true
				}
			}
		}

		this.steps = ReactWizard.createSteps(_mockData);
		this.stateHydration = _stateHydration;
		this.onCompleteFunc = (state) => { console.log(state); return 0; };
		this.setState(this.state, this.wizard.reinitialize);
	}

	render() {
		/*if (!this.steps) {
			setTimeout(() => {
				if (!this.dataSet) {
					this.setData();
				}
			}, 250);
		}*/
		this.steps = this.steps ? this.steps : ReactWizard.createSteps([
			{
				component: stepOneComponent.bind(this, { label: "Booyah!" }),
				title: "Contact Information",
				subheading: "Please fill out the below contact information so that we can keep you informed about your order!",
				indicatorLabel: "Contact Information"
			},
			{
				component: stepTwoComponent,
				title: "Shipping Information",
				subheading: "We'll ship your order anywhere in the world!",
				indicatorLabel: "Shipping Information",
				onNextFunc: (state) => 1,
				className: "some-class-I-need",
				id: "my-id"
			},
			{
				component: stepThreeComponent,
				title: "Billing Information",
				subheading: "How would you like to pay for your order?",
				indicatorLabel: "Billing Information"
			}
		]);

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