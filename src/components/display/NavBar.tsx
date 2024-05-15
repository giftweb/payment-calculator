import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/images/logo192.png';
const NavBar = () => {
	return (
		<>
			<Navbar className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src={logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						Payment Calculator
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
