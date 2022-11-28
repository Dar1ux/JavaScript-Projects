function changeColor() { // Defining a function and assigning a name to it
    var str = "This text is green!"; // Defining string variable and assigning a value
    var result = str.fontcolor("green"); // Defining string variable and assigning a value with changed color using fontcolor method
    document.getElementById("button_1").innerHTML = result; // Finding button element by its id and assigning new innerHTML value
    document.getElementById("text_1").style.color = "red"; // Finding paragraph element by its id and assigning new color value to its font
    var newString = "This is "; // Defining string variable and assigning a value
    newString += "a concatenated string."; // Concatinating additional string value to previous variable's value
    document.getElementById("text_1").innerHTML = newString; // Finding paragraph element by its id and assigning new innerHTML value
}