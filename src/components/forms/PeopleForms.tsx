import { useEffect, useState } from "react";
import { Container, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { FormValues } from "../interface";
import AmountForms from "./AmountsForm";
import PersonDetailForm from "./PersonForm";

interface PeopleFormsProps {
	setFormValues: React.Dispatch<React.SetStateAction<{}>>;
}

const PeopleForms = ({ setFormValues }: PeopleFormsProps) => {
	const [namesValues, setNamesValues] = useState([
		{ id: uuidv4().substring(-6), name: "", amount: "" },
	]);
	const [dollarAmountWithdrawn, setDollarAmountWithdrawn] = useState("");
	const [nairaAmountReceived, setNairaAmountReceived] = useState("");
	const [show, setShow] = useState(false);
	const [namesAndAmount, setNamesAndAmount] = useState("");

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const parseValue = () => {
		const lines = namesAndAmount.split("\n");
		const data = lines.map((line) => {
			const [name, amount] = line.trim().replace(/\s+/g, " ").split(" ");
			return { id: uuidv4().substring(-6), name, amount: amount };
		});

		setNamesValues((prevNamesValues) => {
			const hasValidValues = prevNamesValues.some(
				({ name, amount }) => name !== "" && amount !== ""
			);

			if (hasValidValues) {
				return [...prevNamesValues, ...data];
			} else {
				return data;
			}
		});

		setNamesAndAmount("");
		handleClose();
	};

	useEffect(() => {
		var formValues: FormValues = {
			namesValues: namesValues,
			dollarAmountWithdrawn: dollarAmountWithdrawn,
			nairaAmountReceived: nairaAmountReceived,
		};
		setFormValues(formValues);
	}, [namesValues, dollarAmountWithdrawn, nairaAmountReceived, setFormValues]);

	const addForm = () => {
		setNamesValues((prevNamesValues) => [
			...prevNamesValues,
			{ id: uuidv4().substring(-6), name: "", amount: "" },
		]);
	};

	const removeForm = (id: string) => {
		if (namesValues.length < 2) {
			return;
		}
		setNamesValues((prevNamesValues) =>
			prevNamesValues.filter((nameValue, _) => nameValue.id !== id)
		);
	};

	const handleInputChange = (id: string, field: string, value: string) => {
		setNamesValues((prevNamesValues) =>
			prevNamesValues.map((nameValue, _) =>
				nameValue.id === id ? { ...nameValue, [field]: value } : nameValue
			)
		);
	};

	const handleSaveRandomVar = (value: string) => {
		setNamesAndAmount(value);
	};

	return (
		<>
			<Container>
				<div className="mt-5 mb-5">
					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Quick Fill</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form.Group className="mb-3" controlId="name.ControlInput">
								<Form.Label>Names and Amounts</Form.Label>
								<Form.Control
									type="text"
									placeholder="Paste text copied from csv here"
									as="textarea"
									rows={3}
									value={namesAndAmount}
									onChange={(e) => handleSaveRandomVar(e.target.value)}
								/>
							</Form.Group>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="success" onClick={parseValue}>
								Done
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</Container>
			<div>
				<Form>
					<Container>
						{namesValues.map((data) => {
							return (
								<PersonDetailForm
									key={data.id}
									name={data.name}
									amount={data.amount}
									onNameChange={(value: string) =>
										handleInputChange(data.id, "name", value)
									}
									onAmountChange={(value: string) =>
										handleInputChange(data.id, "amount", value)
									}
								>
									<Button
										variant="danger"
										onClick={() => removeForm(data.id)}
										className="mt-3"
									>
										Remove
									</Button>
								</PersonDetailForm>
							);
						})}
						<div className="btns-group mt-5">
							<Button variant="primary" onClick={addForm}>
								Add More
							</Button>

							<Button variant="secondary" onClick={handleShow}>
								Use Quick Fill
							</Button>
						</div>
					</Container>
					<Container className="mt-5">
						<AmountForms
							dollarAmountWithdrawn={dollarAmountWithdrawn}
							nairaAmountReceived={nairaAmountReceived}
							onDollarAmountWithdrawnChange={(value: string) => {
								setDollarAmountWithdrawn(value);
							}}
							onNairaAmountReceivedChange={(value: string) => {
								setNairaAmountReceived(value);
							}}
						/>
					</Container>
				</Form>
			</div>
		</>
	);
};

export default PeopleForms;
