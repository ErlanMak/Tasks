const userName = 'АнЕль', userSurname = "жуКеШЕвА";


let firstStrName = userName.substring(1, 0);
let firstStrSurname = userSurname.substring(1, 0);

let lasttStrName = userName.substring(1);
let lastStrSurname = userSurname.substring(1);

let resultName = firstStrName.toUpperCase() + lasttStrName.toLowerCase();
let resultSurname = firstStrSurname.toUpperCase() + lastStrSurname.toLowerCase();

// console.log(resultName);
// console.log(resultSurname);

console.log(resultName !== userName ? "Имя было преобразовано" : "Имя осталось без изменений");
console.log(resultSurname !== userSurname ? "Фамилия была преобразовано" : "Фамилия осталось без изменений");




