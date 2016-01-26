// Create a function for each of the 4 basic math operations

// Parameters: Number1, Number2
// Returns: Result

var snum1 = prompt("Enter the first number");
var snum2 = prompt("Enter the second number");

var num1 = Number(snum1);
var num2 = Number(snum2);

var op = prompt("Choose an operation? (add, subtract, multiply, or divide)");

var result = false;
//
// function definitions 
function add(n1,n2) {
    return (n1+n2);
}
function sub(n1,n2) {
    return (n1-n2);
}
function mutli(n1,n2) {
    return (n1*n2);
}
function div(n1,n2) {
    return (n1/n2);
}
//
// Call the appropriate function to correctly set the value of result
//
if (isNaN(num1) || isNaN(num2)) {
    alert('An invalid input was provided: '+snum1+' -> '+num1+', '+snum2+' -> '+num2);
}
else if (op.match(/add|\+/i)) {
	result = add(num1,num2);
}
else if (op.match(/sub|-/i)){
    result = sub(num1,num2);
}
else if (op.match(/mult|\*/i)){
    result = mutli(num1,num2);
}
else if (op.match(/div|\//i)){
    result = div(num1,num2);
}
else {
    alert('Invalid operator: '+op+' provided.');  
}
//
// Display result
if (result) {
    alert('Your answer is: '+result);
}