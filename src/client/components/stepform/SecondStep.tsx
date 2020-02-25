import * as React from 'react';
import { Form, Button } from 'react-bootstrap';

class SecondStep extends React.Component<ISecondStepProps, ISecondStepState> {
	render() {
		return (
			<Form className="border rounded p-3">
				<Form.Label>Email</Form.Label>
				<Form.Control onChange={this.props.handleEmail} value={this.props.email} />
				<Form.Label>First Name</Form.Label>
				<Form.Control onChange={this.props.handleFirstName} value={this.props.firstName} />
				<Form.Label>Last Name</Form.Label>
				<Form.Control onChange={this.props.handleLastName} value={this.props.lastName} />
				<Button onClick={this.props.nextStep} variant="primary" className="mt-3" block>
					Next
				</Button>
				<Button onClick={this.props.prevStep} variant="link">Wrong Info?  Go Back!</Button>
			</Form>
		);
	}
}

export interface ISecondStepProps {
	nextStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
	prevStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
	email: string;
	firstName: string;
	lastName: string;
	handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleFirstName: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ISecondStepState {}

export default SecondStep;
