import * as React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FirstStep from './components/stepform/FirstStep';
import SecondStep from './components/stepform/SecondStep';
import ThirdStep from './components/stepform/ThirdStep';
import StepCircle from './components/StepCircle';

// SIGNUP FORM
class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			stepTracker: 0,
			mobile: '',
			countryCode: '',
			password: '',
			confirmPassword: '',
			email: '',
			firstName: '',
			lastName: ''
		};
	}

	nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		this.setState({ stepTracker: this.state.stepTracker + 1 });
	};

	prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const { stepTracker } = this.state;
		if (stepTracker - 1 < 0) {
			this.setState({ stepTracker: 0 });
		} else {
			this.setState({ stepTracker: stepTracker - 1 });
		}
	};

	handleMobile = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ mobile: e.target.value });
	handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value });
	handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ confirmPassword: e.target.value });
	handleChangeCountryCode = (e: React.ChangeEvent<HTMLSelectElement>) => this.setState({ countryCode: e.target.value });
	handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value });
	handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ firstName: e.target.value });
	handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ lastName: e.target.value });

	render() {
		if (this.state.stepTracker === 0) {
			return (
				<Container>
					<Row className="justify-content-center my-2">
						<Col md={5}>
							<FirstStep
								nextStep={this.nextStep}
								prevStep={this.prevStep}
								countryCode={this.state.countryCode}
								mobile={this.state.mobile}
								password={this.state.password}
								confirmPassword={this.state.confirmPassword}
								handleMobile={this.handleMobile}
								handlePassword={this.handlePassword}
								handleConfirmPassword={this.handleConfirmPassword}
								handleChangeCountryCode={this.handleChangeCountryCode}
							/>
						</Col>
					</Row>
					<Row className="justify-content-center">
						<Col md={5}>
							<StepCircle numSteps={1} />
						</Col>
					</Row>
				</Container>
			);
		} else if (this.state.stepTracker === 1) {
			return (
				<Container>
					<Row className="justify-content-center my-2">
						<Col md={5}>
							<SecondStep
								nextStep={this.nextStep}
								prevStep={this.prevStep}
								email={this.state.email}
								firstName={this.state.firstName}
								lastName={this.state.lastName}
								handleEmail={this.handleEmail}
								handleFirstName={this.handleFirstName}
								handleLastName={this.handleLastName}
							/>
						</Col>
					</Row>
					<Row className="justify-content-center">
						<Col md={5}>
							<StepCircle numSteps={2} />
						</Col>
					</Row>
				</Container>
			);
		} else {
			return (
				<Container>
					<Row className="justify-content-center my-2">
						<Col md={5}>
							<ThirdStep prevStep={this.prevStep} values={this.state} />
						</Col>
					</Row>
					<Row className="justify-content-center">
						<Col md={5}>
							<StepCircle numSteps={3} />
						</Col>
					</Row>
				</Container>
			);
		}
	}
}

export interface IAppProps {}

export interface IAppState {
	stepTracker: number;
	mobile: string;
	countryCode: string;
	password: string;
	confirmPassword: string;
	email: string;
	firstName: string;
	lastName: string;
}

export default App;
