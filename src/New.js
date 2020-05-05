import React, { useState } from 'react'
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import {useHistory} from "react-router-dom"
import Plant from "./Plant"

import plantdata from "./plantdata.json";


function Plants() {
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

	const mappedPlants = plantdata.map((i, j) => {
		return (
			<Col sm="4" onClick={() => toggleOpen(j)} key={j}>
				<h3>{i.name}</h3>
				<img src={"/img/" + i.img} alt={i.name} />
			</Col>
		)
	})

	const history = useHistory();
	
	const addPlant = () => {
		console.log()
		let plantarray = JSON.parse(window.localStorage.getItem("plantArray"))
		plantarray = plantarray ? plantarray : []
		const time = Date.now()
		const plantObj = new Plant({ id: plantIdx, name: name, time: time })
		plantarray.push(plantObj)
		window.localStorage.setItem("plantArray", JSON.stringify(plantarray))

		toggleClosed()
		history.push("/");
	}

	const [name, setName] = useState("")
	return (
		<Container>
			<Row className="text-center">
				<Col>
					<h2>
						Choose a Plant
					</h2>
				</Col>
			</Row>
			<Row className="text-center my-4">
				{mappedPlants}
			</Row>
			{plantIdx === -1 ? null :
				<Modal isOpen={modal} toggle={toggleClosed} className="">
					<ModalHeader toggle={toggleClosed}>New Plant</ModalHeader>
					<ModalBody>
						<Col className="text-center">
							<h3>{plantdata[plantIdx].name}</h3>
							<img src={"/img/" + plantdata[plantIdx].img} alt={plantdata[plantIdx].name} className="img-fluid" />
							<Input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="give me a name!" />
						</Col>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={addPlant}>Add Plant</Button>{' '}
						<Button color="secondary" onClick={toggleClosed}>Cancel</Button>
					</ModalFooter>
				</Modal>
			}
		</Container>


	)
}
export default Plants;