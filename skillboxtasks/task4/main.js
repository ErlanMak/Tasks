const n = -3;
const m = -10;
const count = 10;


let maxNumber = Math.max(n, m);
let minNumber = Math.min(n, m);

let resultNumber = maxNumber - minNumber;



let massive = [];
for (let i = 0; i < count; ++i) {
	let randomNumber = Math.round(Math.random() * resultNumber) + minNumber;
	massive.push(randomNumber);
}

console.log(massive);
