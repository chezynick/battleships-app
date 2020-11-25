export function Ship(length, position, direction, name) {
	this.boat = [];
	this.position = position;
	this.direction = direction;
	for (let i = 0; i < length; i++) {
		this.boat.push([i]);
	}
	this.name = name;
	this.hits = 0;
	this.isSunk = (b) => {
		if (this.boat.length === b) {
			alert('sunk!!');
		} else {
			console.log('still afloat');
		}
	};
}
