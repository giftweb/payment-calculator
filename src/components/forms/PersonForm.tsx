import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

interface Props {
	name: string;
	amount: string;
	onNameChange: Function;
	onAmountChange: Function;
	children: React.ReactNode;
}

const PersonDetailForm = ({
	name,
	amount,
	onNameChange,
	onAmountChange,
	children,
}: Props) => {
	return (
		<>
			<Row className="align-items-center">
				<Col>
					<Form.Group className="mb-3" controlId="name.ControlInput">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder=""
							value={name}
							onChange={(e) => onNameChange(e.target.value)}
						/>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group className="mb-3" controlId="amountDollars.ControlInput">
						<Form.Label>Final Payout in $</Form.Label>
						<Form.Control
							type="text"
							placeholder=""
							value={amount}
							onChange={(e) => onAmountChange(e.target.value)}
							autoComplete="off"
						/>
					</Form.Group>
				</Col>
				<Col>{children}</Col>
			</Row>
		</>
	);
};
export default PersonDetailForm;
