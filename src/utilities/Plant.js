class Plant {
	constructor(props) {
		this.plantID = props.id; //foreign key
		this.name = props.name; //user name
		this.createdOn = props.time; //primary key
		this.lastWatered = props.time; //last watered
	}
}
export default Plant