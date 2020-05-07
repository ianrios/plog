import React from 'react';
import { Link } from "react-router-dom"
import {
	Navbar,
	Nav,
	NavItem,
} from 'reactstrap';

function Example(props) {
	return (
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
	);
}

export default Example;