
const massive = [2, 6, 4]
const sum = 6;

var twoSum = function (nums, target) {
	let obj = new Object();

	for (let i = 0; i < nums.length; i++) {

		let sumMinus = target - nums[i];


		if (obj[sumMinus]) {
			// return [sumMinus, nums[i]]
			return Object.keys(sumMinus);
		}

		obj[nums[i]] = true;
	}

};

console.log(twoSum(massive, sum));

