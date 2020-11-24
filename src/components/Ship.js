export function Ship(length, position, direction, name) {
	this.boat = [];
	this.position = position;
	this.direction = direction;
	this.boat.length = length;
	this.name = name;
	this.sunk = false;
	this.isSunk = (b) => {
		if (this.boat.length === b) {
			alert('sunk!!');
			this.sunk = true;
		} else {
			console.log('still afloat');
		}
	};
}
