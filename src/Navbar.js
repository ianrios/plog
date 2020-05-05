import React, { useState } from 'react';
import { Link } from "react-router-dom"
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
} from 'reactstrap';

const Example = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="light" light expand="md">

				<Nav className="mr-auto" navbar>
					<NavItem>
						<Link className="nav-link" to="/">Home</Link>
					</NavItem>
					<NavItem>
						<Link className="nav-link" to="/new">New Plant</Link>
					</NavItem>
				</Nav>

			</Navbar>
		</div>
	);
}

export default Example;