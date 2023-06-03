const massive = [3, 3];
const sum = 6;

var twoSum = function (nums, target) {
	let da = [];

	for (let i = 0; i < nums.length; i++) {

		let number1 = nums[i];
		// console.log(nums[number1]);

		for (let j = i + 1; j < nums.length; j++) {

			if (number1 + nums[j] === target) {
				da.push(i);
				da.push(j);

			}

		}

	}

	return da;
};
console.log(twoSum(massive, sum));





	// if (da.length = 4) {
	// 	da.pop();
	// 	da.pop();
	// } else if (da.length = 3) {
	// 	da.pop();
	// }