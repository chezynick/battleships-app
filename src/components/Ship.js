export function Ship(length, position, direction) {
  this.boat = [];
  this.position = position;
  this.direction = direction;
  this.boat.length = length;

  this.isHit = (where) => {
    this.boat[where] = true;
    this.isSunk();
  };
  this.sunk = false;
  this.isSunk = () => {
    const sunken = this.boat.filter((a) => a === true);
    if (sunken.length === this.boat.length) {
      console.log("sunk!!");
    } else {
      console.log("still afloat");
    }
  };
}
