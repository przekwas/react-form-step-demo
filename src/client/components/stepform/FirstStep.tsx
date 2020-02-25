import * as React from 'react';
import { Form, Button } from 'react-bootstrap';

class FirstStep extends React.Component<IFirstStepProps, IFirstStepState> {
	render() {
		return (
			<Form className="border rounded p-3">
				<Form.Label>Country Code</Form.Label>
				<Form.Control onChange={this.props.handleChangeCountryCode} value={this.props.countryCode} as="select">
					<option value="1">Country Code 1</option>
					<option value="2">Country Code 2</option>
					<option value="3">Country Code 3</option>
					<option value="4">Country Code 4</option>
				</Form.Control>
				<Form.Label>Mobile</Form.Label>
				<Form.Control onChange={this.props.handleMobile} value={this.props.mobile} />
				<Form.Label>Password</Form.Label>
				<Form.Control onChange={this.props.handlePassword} value={this.props.password} />
				<Form.Label>Confirm Password</Form.Label>
				<Form.Control onChange={this.props.handleConfirmPassword} value={this.props.confirmPassword} />
				<Button onClick={this.props.nextStep} color="primary" className="mt-3" block>
					Next
				</Button>
			</Form>
		);
	}
}

export interface IFirstStepProps {
	nextStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
	prevStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
	handleMobile: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleConfirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleChangeCountryCode: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	mobile: string;
	countryCode: string;
	password: string;
	confirmPassword: string;
}

export interface IFirstStepState {}

export default FirstStep;
