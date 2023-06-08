let binary = [-9, -7, 7, 24, 32, 45, 56, 69, 100];

function binarySearch(array, number) {

	let start = 0;

	let end = array.length;

	for (let i = start; i < end; i++) {

		let average = Math.floor((start + end) / 2);


		if (number > array[average]) {
			start = average + 1;

		} else if (number < array[average]) {
			end = average - 1;

		} else if (number === array[average]) {
			return array[average];
		}

	}
}

console.log(binarySearch(binary, -7));