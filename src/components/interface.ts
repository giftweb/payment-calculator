export interface NamesValues {
	id: string;
	name: string;
	amount: string;
}

export interface FormValues {
	namesValues: NamesValues[];
	dollarAmountWithdrawn: string;
	nairaAmountReceived: string;
}

export interface Data {
	data: Data;
}
