export const getRandomElement = arr => {
	let randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
};
