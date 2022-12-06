var x = 10; // Defining global variable and assinging a value
function localVar() { // Defining a function and gining it a name
    var a = 15; // Defining local variable and assinging a value
    console.log("Local variable is " + a); // Printing a message in a console
    return a;
}
function addVars() { // Defining a function and gining it a name
    console.log("Sum of variables x and a is " + (x + localVar())); // Printing a message in a console
}

function whatTime() { // Defining a function and gining it a name
    if (new Date().getHours() < 18) { // Defining conditional statement, getting current hours and checking if it's less than 18
        document.getElementById("daytime").innerHTML = "I hope you're having a good day.";  // Finding element by its id in the document and assinging new innerHTML value
    } else { // Defining the steps to be executed when if statement returns false
        document.getElementById("daytime").innerHTML = "Have a nice evening.";  // Finding element by its id in the document and assinging new innerHTML value
    }
}

function speedFunction() { // Defining a function and gining it a name
    var speed = document.getElementById("speed").value; // Finding element by its id in the document and assigning its value to speed variable 
    if (speed < 60) { // Defining conditional statemnt and its condition
        reply = "You are faster than me!"; // Defining local variable and assinging a value
    }
    else { // Defining the steps to be executed when if statement returns false
        reply = "You are not faster than me." // Defining local variable and assinging a value
    }
    document.getElementById("reply").innerHTML = reply;  // Finding element by its id in the document and assinging new innerHTML value
}

function Time_function() { // Defining a function and gining it a name
    var Time = new Date().getHours(); // Defining local variable and assinging a value
    var Reply; // Defining local variable
    if (Time < 12 == Time > 0) { // Defining conditional statemnt and its condition
        Reply = "It is mporning time!"; // Assinging a value to local variable
    }
    else if (Time > 12 == Time < 18) { // Defining conditional statemnt and its condition
        Reply = "It is the afternoon."; // Assinging a value to local variable
    }
    else { // Defining the steps to be executed when if statement returns false
        Reply = "It is evening time."; // Assinging a value to local variable
    }
    document.getElementById("Time_of_day").innerHTML = Reply;  // Finding element by its id in the document and assinging new innerHTML value
}