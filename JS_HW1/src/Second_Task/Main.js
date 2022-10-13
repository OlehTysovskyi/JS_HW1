let login = "admin";
let password = "TheMaster";

console.log("Who`s there?");
if (login == "admin") {
	console.log("Password?");

	if (password == "TheMaster") {
		console.log("Welcome");
	}
	else {
		console.log("Wrong password");
	}
}
else {
	console.log("I don`t know you");
}


console.log("Who`s there?");
switch (login) {
	case "admin": {
		console.log("Password?");

		switch (password) {
			case "TheMaster": {
				console.log("Welcome");
			}
			default: {
				console.log("Wrong password");
			}
		}
		break;
	}
	default: {
		console.log("I don`t know you");
	}
}