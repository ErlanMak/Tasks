const massiveNumber = [1, 2, 3, 4];

var containsDuplicate = function (nums) {
	let newMassive = [];
	newMassive.push(nums[0]);

	for (let i = 1; i < nums.length; i++) {
		if (!newMassive.includes(nums[i])) {
			newMassive.push(nums[i]);
		} else {
			return true;
		}
	}
	return false;
};

console.log(containsDuplicate(massiveNumber));
