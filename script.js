// Create a function for each of the 4 basic math operations

// Parameters: Number1, Number2
// Returns: Result

var snum1 = prompt("Enter the first number");
var snum2 = prompt("Enter the second number");

var num1 = Number(snum1);
var num2 = Number(snum2);

var op = prompt("Choose an operation? (add, subtract, multiply, or divide)");


//functions

function addNum(num1,num2) {
	alert(num1 + num2);
}

function subNum(num1,num2) {
	alert(num1 - num2);
}

function mulNum(num1,num2) {
	alert(num1 * num2);
}

function divNum(num1,num2) {
	alert(num1 / num2);
}

// Call the appropriate function to correctly set the value of result

if(op == "add"){
	addNum(num1,num2);

}else if(op == "subtract"){
	subNum(num1,num2);

}else if(op == "multiply"){
	mulNum(num1,num2);	

}else if(op == "divide"){
	divNum(num1,num2);

}
