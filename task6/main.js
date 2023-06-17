const stroke = "()";

var isValid = function (s) {
	const objSkobki = {
		'(': ')',
		'{': '}',
		'[': ']'
	};

	let masSkobki = [];

	for (let char of s) {
		if (char in objSkobki) {
			masSkobki.push(char);
		} else if (objSkobki[masSkobki[masSkobki.length - 1]] === char) {
			masSkobki.pop();
		} else {
			return false;
		}

	}

	return masSkobki.length === 0;
};

console.log(isValid(stroke))


