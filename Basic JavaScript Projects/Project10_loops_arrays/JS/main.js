function Call_Loop() { // Defining a function
    var i = 0; // Declaring a local variable and giving it a value
    while (i < 5) { // Defining 'while' loop with its condition
        document.getElementById("Loop").innerHTML += i + ", "; // Updating a value of innerHTML property
        i++; // Increasing i value by 1
    }
}

function strLen() { // Defining a function
    str = "Not all those who wander are lost." // Declaring a local variable and giving it a value
    document.getElementById("len").innerHTML = str + " - is " + str.length + " characters long."; // Assigning new value to innerHTML property
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // Declaring global array and giving values to its elements
var Content = ""; // Declaring a global variable and giving it a value
var Y; // Declaring a global variable
function for_Loop() { // Defining a function
    for (Y = 0; Y < Instruments.length; Y++) { // Defining 'for' loop and its condition
        Content += Instruments[Y] + "<br>"; // Updating 'Content' value
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; // Assigning new value to innerHTML property
}

function array_Function() { // Defining a function
    var myArray = []; // Declaring a local variable
    myArray[0] = "Ford"; // Assinging new value to an element of an array
    myArray[1] = "Audi"; // Assinging new value to an element of an array
    myArray[2] = "Lexus"; // Assinging new value to an element of an array
    myArray[3] = "BMW"; // Assinging new value to an element of an array
    myArray[4] = "Dodge"; // Assinging new value to an element of an array
    document.getElementById("Array").innerHTML = "There are 5 car manufacturers listed in my array: " +  // Assigning new value to innerHTML property
    myArray[0] + ", " +
    myArray[1] + ", " +
    myArray[2] + ", " +
    myArray[3] + " and " +
    myArray[4] + ".";
}

function constant_function() { // Defining a function
    const myCar = {make:"Ford", model:"Mustang", year:"1967"}; // Declaring a local constant and giving it properties with values
    document.getElementById("Constant").innerHTML = "My car was a " + myCar.make + " " + myCar.model + " made in " + myCar.year + "."; // Assigning new value to innerHTML property
    myCar.year = "2015"; // Updating 'year' property's value
    myCar.color = "Black"; // Adding new property to 'myCar' and giving it avalue
    document.getElementById("Constant").innerHTML += " But later I upgraded to " + myCar.year + " " + myCar.color + " model."; // Updating a value of innerHTML property
}

function letFunction() { // Defining a function
    var a = 15; // Declaring a local variable and giving it a value
    document.getElementById("let").innerHTML = "var a = " + a + "<br>"; // Assigning new value to innerHTML property
    {
        let a = 21; // Declaring a local variable and giving it a value
        document.getElementById("let").innerHTML += "let a = " + a + "<br>"; // Updating a value of innerHTML property
    }
    document.getElementById("let").innerHTML += "After all this variable a = " + a; // Updating a value of innerHTML property
}

{
    let myCar = { // Declaring a local variable and giving it properties with values
        make:"Ford ",
        model:"Mustang ",
        year:"1967 ",
        description: function() { // Defining a method 
            return "My car is a " + myCar.make + myCar.model + "made in " + myCar.year; // Defining the return parameter once the method is called
        }
    };
    document.getElementById("mycar").innerHTML = myCar.description(); // Assigning new value to innerHTML property
}

function breakFunction() { // Defining a function
    let i = 0; // Declaring a local variable and giving it a value
    while (i < 7) {  // Defining 'while' loop with its condition
        if (i == 3) {break;} // Defining 'if' statement with its condition and stopping 'while' loop once condition is met
        document.getElementById("break").innerHTML += i + ", "; // Assigning new value to innerHTML property
        i++; // Increasing i value by 1
    }
}

function continueFunction() { // Defining a function
    i = 0; // Declaring a local variable and giving it a value
    while (i < 7) { // Defining 'while' loop with its condition
        if (i == 3) { // Defining 'if' statement with its condition
            i++; // Increasing i value by 1
            continue; // Moving to next step of a loop once 'if' condition is met
        }
        document.getElementById("continue").innerHTML += i + ", "; // Assigning new value to innerHTML property
        i++; // Increasing i value by 1
    }
}