function add (a, b) {
	return a + b;	
}

function subtract (a, b) {
	return a - b;
}

function sum ([...args]) {
	if (!Array.isArray(args) || !args.length) {return 0};
	return args.reduce((total, args) => total + args);
}

function multiply ([...args]) {
	return args.reduce((total, args) => total * args);	
}

function power(a, b) {
	return a ** b;	
}

function factorial(a) {
	if (a < 1) {return 1};
	return a * factorial(a - 1);	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}