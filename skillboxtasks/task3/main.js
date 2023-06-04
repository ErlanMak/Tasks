const password = "a_-";

if ((password.includes('_') || password.includes('-')) && password.length > 4) {
	console.log(password.length);

	console.log('DA');
}
else {
	console.log('NO');

}

