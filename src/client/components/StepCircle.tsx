import * as React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const StepCircle: React.FC<StepCircleProps> = props => {
	switch (props.numSteps) {
		case 1:
			return (
				<div className="d-flex justify-content-around align-items-center">
					<div className="step-circle bg-primary"></div>
                    <FaLongArrowAltRight />
					<div className="step-circle"></div>
                    <FaLongArrowAltRight />
					<div className="step-circle"></div>
				</div>
			);
		case 2:
			return (
				<div className="d-flex justify-content-around align-items-center">
					<div className="step-circle bg-primary"></div>
                    <FaLongArrowAltRight />
					<div className="step-circle bg-primary"></div>
                    <FaLongArrowAltRight />
					<div className="step-circle"></div>
				</div>
			);
		case 3:
			return (
				<div className="d-flex justify-content-around align-items-center">
					<div className="step-circle bg-primary"></div>
                    <FaLongArrowAltRight />
					<div className="step-circle bg-primary"></div>
                    <FaLongArrowAltRight />
					<div className="step-circle bg-primary"></div>
				</div>
			);
		default:
			return <div></div>;
	}
};

interface StepCircleProps {
	numSteps: number;
}

export default StepCircle;
