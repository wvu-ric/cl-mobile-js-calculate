//Josh Matheny "Calculate" Assignment
// Create a function for each of the 4 basic math operations

// Parameters: Number1, Number2
// Returns: Result

var snum1 = prompt("Enter the first number");
var snum2 = prompt("Enter the second number");

var num1 = Number(snum1);
var num2 = Number(snum2);

var op = prompt("Choose an operation? (add, subtract, multiply, or divide)");

var result = 0;
// Call the appropriate function to correctly set the value of result
console.log("Before functions are defined");

  function addition (num1,num2){
		result = num1 + num2;
		return result;
		console.log("add");
  }

  function subtraction (num1,num2) {
		result = num1 - num2;
		return result;
		console.log("subtract");
	}

	function multiplication (num1,num2){
		result = num1 * num2;
		return result;
		console.log("multiply");
	}

	function division (num1,num2) {
		result = num1/num2;
		return result;
		console.log("divide");
	}

console.log("After functions are defined");

if(op == "add"){

result = addition(num1,num2);

}else if(op == "subtract"){

result = subtraction(num1,num2);

}else if(op == "multiply"){

result = multiplication(num1,num2);

}else if(op == "divide"){

result = division(num1,num2)

}
// Display result
alert(result);
