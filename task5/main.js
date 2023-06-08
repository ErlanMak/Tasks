const massive = [-1, 1, -1, 1, -1]


var arraySign = function (nums) {
	let count = 0
	for (let i = 0; i < nums.length; ++i) {

		if (nums[i] < 0) {
			count += 1;
		}
		if (nums[i] === 0) {
			return 0;
		}



	}

	if (count % 2 === 1) {
		return -1;
	} else if (count % 2 === 0) {
		return 1;
	}


};

console.log(arraySign(massive));
