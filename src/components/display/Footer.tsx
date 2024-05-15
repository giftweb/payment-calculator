import { Col, Container, Row } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";

const Footer = () => {
	return (
		<footer className="mt-auto">
			<br />
			<hr />
			<Container>
				<Row>
					<Col className="text-center py-3">
						Made with <HeartFill color="red" size={16} />
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
