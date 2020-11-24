export const BoardCreate = () => {
	let grid = [];
	for (let i = 0; i < 100; i++) {
		const square = {
			key: i,
			containsShip: '',
			missed: false,
			hit: false,
		};
		grid.push(square);
	}
	return grid;
};
