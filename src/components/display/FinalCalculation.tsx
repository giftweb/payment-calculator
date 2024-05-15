import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FormValues } from "../interface";
const FinalCalculation = ({ data }: any) => {
	const formData: FormValues = data;
	const { namesValues, dollarAmountWithdrawn, nairaAmountReceived } = formData;
	let appConversionRate =
		parseFloat(nairaAmountReceived) / parseFloat(dollarAmountWithdrawn);
	const green = "#c5efc5"
	return (
		<>
			<Container className="mb-5">
				<Table striped bordered>
					<thead>
						<tr>
							<th>Name</th>
							<th>Final Payout in $</th>
							<th style={{backgroundColor: green}}>Final Payout in Naira</th>
						</tr>
					</thead>
					<tbody>
						{namesValues ? (
							namesValues.map((data) => {
								const finalPayout = parseFloat(data.amount) * appConversionRate;
								return (
									<tr key={data.id}>
										<td>{data.name}</td>
										<td>{data.amount}</td>
										<td style={{ backgroundColor: green }}>
											{finalPayout ? finalPayout.toLocaleString("en-US", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											}) : 0}
										</td>
									</tr>
								);
							})
						) : (
							<></>
						)}
					</tbody>
				</Table>
			</Container>
		</>
	);
};

export default FinalCalculation;
