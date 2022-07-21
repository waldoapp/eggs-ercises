// Level 1 - Run the function
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let letters = [alphabet[19], alphabet[22], alphabet[4], alphabet[11], alphabet[21], alphabet[4], "-", alphabet[15], alphabet[0], alphabet[13], alphabet[4], alphabet[11]];
	let message = letters.join("");
	console.log(`Go to the following url: https://llamdo.waldo.com/#/eggs-ercises?eggId=${message}`);