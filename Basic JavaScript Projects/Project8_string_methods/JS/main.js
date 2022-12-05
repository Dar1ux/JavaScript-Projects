function fullSentence() { // Defining a function and giving it a name
    var sent_1 = "I am "; // Defining local variable and assinging a value
    var sent_2 = "a full "; // Defining local variable and assinging a value
    var sent_3 = "sentence."; // Defining local variable and assinging a value
    var whole_sentence = sent_1.concat(sent_2, sent_3); // Defining local variable and assinging a value of 2 variables concatinated to a variable sent_1
    document.getElementById("text").innerHTML = whole_sentence;  // Finding element by its id in the document and assinging new innerHTML value
}

function slice_Method() { // Defining a function and giving it a name
    var sentence = "Not all those who wander are lost."; // Defining local variable and assinging a value
    document.getElementById("slice").innerHTML = sentence.slice(4, 24);  // Finding element by its id in the document and assinging new innerHTML value which is a slice of sentence variable
}

function allCAPS() { // Defining a function and giving it a name
    document.getElementById("caps").innerHTML = document.getElementById("caps").innerHTML.toUpperCase();  // Finding element by its id in the document and assinging new innerHTML value which is old value converted to all CAPS
}

function searchPosition() { // Defining a function and giving it a name
    var text = document.getElementById("search").innerHTML; // Defining local variable and assinging a value which equals to innerHTML of the element found in the document by its id
    var position = text.search("wander"); // Defining local variable and assinging a value which is an index of position where the search value first discovered
    document.getElementById("position").innerHTML = document.getElementById("position").innerHTML.concat(position);  // Finding element by its id in the document and assinging new innerHTML value which is old value concatinated with position vcariable
}

function numToText() { // Defining a function and giving it a name
    var a = 123; // Defining local variable and assinging a value
    document.getElementById("numText").innerHTML = a.toString();  // Finding element by its id in the document and assinging new innerHTML value which is variable's 'a' value converted to string type
}

function precisionMethod() { // Defining a function and giving it a name
    var x = 3.14159265358979; // Defining local variable and assinging a value
    document.getElementById("precision").innerHTML = x.toPrecision(10);  // Finding element by its id in the document and assinging new innerHTML value which is 'x' variable's value rounded to firs 10 digits
}

function toFixedMethod() { // Defining a function and giving it a name
    var x = 3.14159265358979; // Defining local variable and assinging a value
    document.getElementById("fixed").innerHTML = x.toFixed(2);  // Finding element by its id in the document and assinging new innerHTML value which is 'x' variable's value rounded to 2 decimal places
}

function valueOfMethod() { // Defining a function and giving it a name
    var t1 = "Not all those who wander are lost."; // Defining local variable and assinging a value
    document.getElementById("valueof").innerHTML = t1.valueOf();  // Finding element by its id in the document and assinging new innerHTML value which is 't1' variable's string value
}