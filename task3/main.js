const number = 12359;
const numberLong = Math.ceil(Math.log10(number + 1));

const ten = Math.pow(10, numberLong);

const result = number % ten;

console.log(result);



var isPalindrome = function (x) {


	return x % 100;

};

console.log(isPalindrome(number));
