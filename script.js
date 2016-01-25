// Create a function for each of the 4 basic math operations
function add(num1, num2) {
	return num1 + num2;
}
function subtract(num1, num2) {
	return num1 - num2;
}
function divide(num1, num2) {
	return num1 / num2;
}
function multiply(num1, num2) {
	return num1 * num2;
}

function calculator() {

// Parameters: Number1, Number2
// Returns: Result

var snum1 = prompt("Enter the first number");
var snum2 = prompt("Enter the second number");

var num1 = Number(snum1);
var num2 = Number(snum2);

// test num1 and num2 to be integers and not strings
var num1NaN = isNaN(num1);
var num2NaN = isNaN(num2);
var numNaN = "Not a number! Try again using an integer!";

if( num1NaN || num2NaN) {
// tried to do as switch initially, couldn't get to work
/*
switch( num1NaN + "|" + num2NaN){
	case "False|False":
		break;
	case "False|True":
		alert("Not a number! Try again using an integer!");
		break;
	case "True|False":
		alert("Not a number! Try again using an integer!");
		break;
	case "True|True":
		alert("Not a number! Try again using an integer!");
		break;
	}
*/
alert("Not a number! Try again using an integer!");
//reset();
//calculator(); if left in adds a second calculator prompt of only prompting for op
// left out ends if NaN
end();
}

var op = prompt("Choose an operation? (add, subtract, multiply, or divide)");

var result = 0;

// Call the appropriate function to correctly set the value of result
if(op == "add" || op == "+") {
	result = add(num1, num2);
	result = "" + num1 + "+" + num2 + "=" + result;
}else if(op == "subtract" || op == "-") {
	result = subtract(num1, num2);
  result = "" + num1 + "-" + num2 + "=" + result;
}else if(op == "multiply" || op == "*") {
	result = multiply(num1, num2);
  result = "" + num1 + "*" + num2 + "=" + result;
}else if(op == "divide" || op == "/") {
	result = divide(num1, num2);
  result = "" + num1 + "/" + num2 + "=" + result;
}

// Display result

alert(result);
}
calculator();
//calculator(); //doesn't re-record num1 for some reason when trying to loop;
//end();
