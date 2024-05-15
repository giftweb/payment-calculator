import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

interface Props {
	dollarAmountWithdrawn: string
	nairaAmountReceived: string
	onDollarAmountWithdrawnChange: Function
	onNairaAmountReceivedChange: Function
}

const AmountForms = (props: Props) => {
	return (
		<>
			<Row className="align-items-center">
				<Col>
					<Form.Group className="mb-3" controlId="name.ControlInput">
						<Form.Label>Amount received in $</Form.Label>
						<Form.Control
							type="text"
							placeholder=""
							value={props.dollarAmountWithdrawn}
							onChange={(e) => props.onDollarAmountWithdrawnChange(e.target.value)}
							autoComplete="off"
						/>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group className="mb-3" controlId="amountDollars.ControlInput">
						<Form.Label>Amount received in N</Form.Label>
						<Form.Control
							type="text"
							placeholder=""
							value={props.nairaAmountReceived}
							onChange={(e) => props.onNairaAmountReceivedChange(e.target.value)}
							autoComplete="off"
						/>
					</Form.Group>
				</Col>
			</Row>
		</>
	);
};

export default AmountForms;
