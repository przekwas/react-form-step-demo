import * as React from 'react';
import { Button, Card } from 'react-bootstrap';

class ThirdStep extends React.Component<IThirdStepProps, IThirdStepState> {
	handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.group('fetch POST to: /auth/register/seeker');
		console.log('req.body');
		console.log({
			mobile: this.props.values.mobile,
			countryCode: this.props.values.countryCode,
			password: this.props.values.password,
			confirmPassword: this.props.values.confirmPassword,
			email: this.props.values.email,
			firstName: this.props.values.firstName,
			lastName: this.props.values.lastName
		});
		console.groupEnd();
	};

	render() {
		return (
			<Card>
				<Card.Body>
					<Card.Title className="text-center">Almost there ... !</Card.Title>
					<Card.Body>
						<p>
							Name: {this.props.values.firstName} {this.props.values.lastName}
						</p>
						<p>
							Mobile: +{this.props.values.countryCode} {this.props.values.mobile}
						</p>
						<p>
							Email: {this.props.values.email}
						</p>
						<Button onClick={this.handleRegister} variant="success" block>
							Confirm Register
						</Button>
						<Button onClick={this.props.prevStep} variant="link">
							Wrong Info? Go Back!
						</Button>
					</Card.Body>
				</Card.Body>
			</Card>
		);
	}
}

export interface IThirdStepProps {
	prevStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
	values: {
		stepTracker: number;
		mobile: string;
		countryCode: string;
		password: string;
		confirmPassword: string;
		email: string;
		firstName: string;
		lastName: string;
	};
}

export interface IThirdStepState {}

export default ThirdStep;
