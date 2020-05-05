import React from 'react'
import { Container, Row, Col, Button, Progress } from "reactstrap"
import { Link } from "react-router-dom"


import plantdata from "./plantdata.json";

function waterStatus(value) {
	let status = ""
	if (value > .9) {
		status = "just watered"
	}
	else if (value > .75) {
		status = "feeling good"

	}
	else if (value > .5) {
		status = "halfway"
	}
	else if (value > .25) {
		status = "Needs water soon"
	}
	else if (value > .15) {
		status = "water me"
	}
	else if (value < .10) {
		status = "im thirsty"
	}
	return status;

}

export default function Home() {

	let plantArray = JSON.parse(localStorage.getItem("plantArray"))

	const myPlants = plantArray ?
		plantArray.map((i, j) => {
			console.log(i)
			const num = .90
			return (
				<Col key={j} sm="4" className="text-center">
					<h3>{i.name}</h3>
					<img src={"/img/" + plantdata[i.plantID].img} alt={i.name} />
					<Progress animated value={num * 100} color={num > .25 ? null : num > .05 ? "warning" : "danger"} >{waterStatus(num)}</Progress>
				</Col>
			)
		})
		: null
	return (
		<Container>
			<Row className="text-center">
				<Col >
					<h2>
						Home
					</h2>
				</Col>
				{/* <Col className="text-center">
					<Button onClick={() => window.localStorage.clear()}>
						clear localstorage
				</Button>
				</Col> */}
			</Row>
			<Row>
				{myPlants}
			</Row>
			<Row className="text-right">
				<Col>
					<Link to="/new" className="btn btn-regular btn-dark" >Add a new Plant!</Link>
				</Col>
			</Row>
		</Container>
	)
}
