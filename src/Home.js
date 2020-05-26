import React, {useState} from 'react'
import { Container, Row, Col, Button, Progress } from "reactstrap"
import { Link } from "react-router-dom"
import plantData from "./data/plantData.json";

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

function Home() {

	const [plantIdx, setPlantIdx] = useState(-1)
	const [modal, setModal] = useState(false)
	const toggleOpen = (id) => {
		setPlantIdx(id)
		setModal(!modal)
	};
	const toggleClosed = () => {
		setPlantIdx(-1)
		setModal(!modal)
	};

	// const mappedPlants = plantData.map((i, j) => {
	// 	return (
	// 		<Col sm="4" onClick={() => toggleOpen(j)} key={j}>
	// 			<h3>{i.name}</h3>
	// 			<img src={"/img/" + i.img} alt={i.name} />
	// 		</Col>
	// 	)
	// })


	const editPlant = () => {
		console.log()
		let plantarray = JSON.parse(window.localStorage.getItem("plantArray"))
		plantarray = plantarray ? plantarray : []
		const time = Date.now()
		const plantObj = new Plant({ id: plantIdx, name: name, time: time })
		plantarray.push(plantObj)
		window.localStorage.setItem("plantArray", JSON.stringify(plantarray))

		toggleClosed()

	}
	const deletePlant = () => {
		console.log()
		let plantarray = JSON.parse(window.localStorage.getItem("plantArray"))
		plantarray = plantarray ? plantarray : []
		const time = Date.now()
		const plantObj = new Plant({ id: plantIdx, name: name, time: time })
		plantarray.push(plantObj)
		window.localStorage.setItem("plantArray", JSON.stringify(plantarray))

		toggleClosed()

	}
	const [name, setName] = useState("")

	let plantArray = JSON.parse(localStorage.getItem("plantArray"))

	const myPlants = plantArray ?
		plantArray.map((i, j) => {
			console.log(i)
			const num = .90
			return (
				<Col key={j} sm="4" className="text-center">
					<h3>{i.name}</h3>
					<img src={"/img/" + plantData[i.plantID].img} alt={i.name} />
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
					<Link to="/new" className="btn btn-regular btn-dark">Add a new Plant!</Link>
				</Col>
			</Row>
			{plantIdx === -1 ? null :
				<Modal isOpen={modal} toggle={toggleClosed} className="">
					<ModalHeader toggle={toggleClosed}>New Plant</ModalHeader>
					<ModalBody>
						<Col className="text-center">
							<h3>{plantData[plantIdx].name}</h3>
							<img src={"/img/" + plantData[plantIdx].img} alt={plantData[plantIdx].name} className="img-fluid" />
							<Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder={plantArray[plantIdx]} />
						</Col>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={editPlant}>Save Edit</Button>{' '}
						<Button color="secondary" onClick={toggleClosed}>Cancel</Button>
					</ModalFooter>
				</Modal>
			}
		</Container>
	)
}

export default Home;