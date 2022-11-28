function addition() { // Defining a function and assigning a name to it
    var addition = 4 + 5; // Defining a variable and assigning a value as an expression
    document.getElementById("add").innerHTML = "4 + 5 = " + addition; // Finding html element by its id and assigning new innerHTML value
}

function subtraction() { // Defining a function and assigning a name to it
    var subtraction = 9 - 2; // Defining a variable and assigning a value as an expression
    document.getElementById("sub").innerHTML = "9 - 2 = " + subtraction;    // Finding html element by its id and assigning new innerHTML value
}

function multiplication() { // Defining a function and assigning a name to it
    var multiplication = 4 * 5; // Defining a variable and assigning a value as an expression
    document.getElementById("multi").innerHTML = "4 * 5 = " + multiplication;   // Finding html element by its id and assigning new innerHTML value 
}

function division() { // Defining a function and assigning a name to it
    var division = 21 / 3; // Defining a variable and assigning a value as an expression
    document.getElementById("div").innerHTML = "21 / 3 = " + division;    // Finding html element by its id and assigning new innerHTML value
}

function increment() { // Defining a function and assigning a name to it
    var increment = 7; // Defining a variable and assigning a value
    increment++; // Increasing variable's value by 1
    document.getElementById("inc").innerHTML = "7++ = " + increment;    // Finding html element by its id and assigning new innerHTML value
}

function decrement() { // Defining a function and assigning a name to it
    var decrement = 9; // Defining a variable and assigning a value
    decrement--; // Decreasing variable's value by 1
    document.getElementById("dec").innerHTML = "9-- = " + decrement;    // Finding html element by its id and assigning new innerHTML value
}

function randomNumber() { // Defining a function and assigning a name to it
    var rng = Math.round(Math.random() * 10); // Defining a variable and assigning a value as an expression
    document.getElementById("rng").innerHTML = "Whole random number in range 0 to 10 = " + rng;    // Finding html element by its id and assigning new innerHTML value
}