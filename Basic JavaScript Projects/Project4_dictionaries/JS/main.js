function myDictionary(id) {  // Defining a function, giving it a name and a parameter
    var employee = { // Defining a dictionary variable and giving it a name
        Job:"Programmer", // Defining key:value pair in a dictionary
        Job:"Manager", // Defining key:value pair in a dictionary
        Name:"Tom", // Defining key:value pair in a dictionary
        Surname:"Riddle", // Defining key:value pair in a dictionary
        Salary:100000, // Defining key:value pair in a dictionary
    }

    delete employee.Job; // Delete statement removes key:value pair from dictionary
    document.getElementById(id).innerHTML = employee.Job; // Finding html element by its id and assigning new innerHTML value
}