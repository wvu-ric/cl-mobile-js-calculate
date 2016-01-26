// Create a function for each of the 4 basic math operations
function add(num1, num2) {
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

if(op == "add"){
	add();
		alert("Your answer is " + (num1 + num2))
		
}else if(op == "subtract"){
	subtract();
	alert("Your answer is " + (num1 - num2))

}else if(op == "multiply"){
	multiply();
	alert("Your answer is " + (num1 * num2))

}else if(op == "divide"){
	divide();
	alert("Your answer is " + (num1 / num2))

}
