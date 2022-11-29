function Vote_Function() { // Defining a function and giving it a name
    var age, Can_Vote; // Defining variables
    age = document.getElementById("Age").value; // Finding element by its id in the document and assigning its value t oage variable
    Can_Vote = (age < 18) ? "You are not old enough to vote":"You can vote!"; // Defining ternary variable with its condition and possible values
    document.getElementById("Vote").innerHTML = Can_Vote; // Finding element by its id in the document and assinging new innerHTML value
}

function Vehicle(Make, Model, Year, Color) { // Defining constructor function, giving it a name and parameters
    this.Vehicle_Make = Make; // Defining a constructor's property
    this.Vehicle_Model = Model; // Defining a constructor's property
    this.Vehicle_Year = Year; // Defining a constructor's property
    this.Vehicle_Color = Color; // Defining a constructor's property
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // Defining a variable and assinging new Vehicle object as a value
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");// Defining a variable and assinging new Vehicle object as a value
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");// Defining a variable and assinging new Vehicle object as a value
function myFunction() { // Defining a function and giving it a name
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;  // Finding element by its id in the document and assinging new innerHTML value
}
function newFunction() { // Defining a function and giving it a name
    var Tom = new Vehicle("Ford", "Mustang", 1967, "Black");// Defining a variable and assinging new Vehicle object as a value
    document.getElementById("New_and_This").innerHTML = 
    "Tom Drives a " + Tom.Vehicle_Color + " " + Tom.Vehicle_Make + " " + 
    Tom.Vehicle_Model + " made in " + Tom.Vehicle_Year + "." // Finding element by its id in the document and assinging new innerHTML value
}

function nestedFunction() { // Defining a function and giving it a name
    document.getElementById("Nested_Function").innerHTML = addNumbers(); // Finding element by its id in the document and assinging new innerHTML value
    function addNumbers() { // Defining a function and giving it a name
        var a = 7; // Defining variable and assinging a value
        var b = 15; // Defining variable and assinging a value
        function sum() { // Defining a function and giving it a name
            sum = a + b; // Defining variable and assinging a value
            return sum; // Returning sum variable
        } 
        sumOfTwo = sum(); // Defining a variable and assinging a value that is returned by the function
        return sumOfTwo; // Returning sumOfTwo variable
    }
}