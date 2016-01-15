// Create a function for each of the 4 basic math operations
function add (num1, num2) {
	return num1 + num2;
}
function subtract(num1, num2) {
	return num1 - num2;
}
function multiply(num1, num2) {
	return num1 * num2;
}
function divide(num1, num2) {
	return num1 / num2;
}
// Parameters: Number1, Number2
// Returns: Result

var snum1 = prompt("Enter the first number");
var snum2 = prompt("Enter the second number");

var num1 = Number(snum1);
var num2 = Number(snum2);

var op = prompt("Choose an operation? (add, subtract, multiply, or divide)");

var result = 0;

// Call the appropriate function to correctly set the value of result

if(op == "add" || op == "+"){
	result = add(num1, num2);
	result = "" + num1 + " + " + num2 + " = " + result;
}else if(op == "subtract" || op == "-"){
	result = subtract(num1, num2);
	result = "" + num1 + " - " + num2 + " = " + result;
}else if(op == "multiply" || op == "*"){
	result = multiply(num1, num2);
	result = "" + num1 + " x " + num2 + " = " + result;
}else if(op == "divide" || op == "/"){
	result = divide(num1, num2);
	result = "" + num1 + " / " + num2 + " = " + result;
}

// Display result

alert(result);
