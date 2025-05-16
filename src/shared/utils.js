export const getRandomElement = arr => {
	let randomIndex = Math.floor(Math.random() * (arr.length - 1));
	return arr[randomIndex];
};
