export function Ship(length, position, direction, name) {
	this.boat = [];
	this.position = position;
	this.direction = direction;
	this.name = name;
	for (let i = 0; i < length; i++) {
		this.boat.push([i]);
	}
}
