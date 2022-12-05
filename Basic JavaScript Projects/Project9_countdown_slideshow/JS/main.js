document.getElementById("seconds").value = 3; // Setting a default value for the input element
function countdown() { // Defining a function and giving it a name
    var seconds = document.getElementById("seconds").value; // Defining local variable and assinging a value from an element locatedin a document by its id
    function tick() { // Defining a function and giving it a name
        seconds = seconds - 1; // Setting new variables value
        var timer = document.getElementById("timer"); // Defining local variable and assinging a value as an element from a document found by its id
        timer.innerHTML = seconds; // Setting new value to innerHTML attribute of a timer object
        myTimeOut1 = setTimeout(tick, 1000); // Setting 1 second delay for a tick() function
        if (seconds < 0) { // Checking if 'seconds' variable's value is less than 0
            alert("Time's up!"); // Calling alert() function if above statemnet is true
            clearTimeout(myTimeOut1); // Resets timeout function to prevent counting further down once the limit is reached
            timer.innerHTML = 0; // Assigning new value to object's innerHTML attribute
        }
    }
    tick(); // Calling a function
}

let slideIndex = 0; // Defining global variable and assigning it a value
showSlides(slideIndex, false); // Calling a function and sending 2 parameters


// Next/previous contorls
function plusSlides(n) { // Defining a function, giving it a name and giving 1 parameter
    showSlides(slideIndex += n-1, true); // Calling a function and sending 2 parameters
}

// Thumbnail image controls
function currentSlide(n) { // Defining a function, giving it a name and giving 1 parameter
    showSlides(slideIndex = n-1, true); // Calling a function and sending 2 parameters
}

function showSlides(n, running) { // Defining a function, giving it a name and giving 2 parameters
    if (running) {clearTimeout(myTimeOut)} // Checking if setTimeout() function is already running and resetting it if it is
    running = false; // Setting new value to a variable
    let i; // Defining new variable
    let slides = document.getElementsByClassName("mySlides"); // Defining new variable and assinging it a value as a list of obejcts from a document with 'mySlides' class assigned to them
    let dots = document.getElementsByClassName("dot"); // Defining new variable and assinging it a value as a list of obejcts from a document with 'dot' class assigned to them
    slideIndex++; // Increasing variable's value by 1
    n = slideIndex; // Setting new value to variable
    if (n > slides.length) {slideIndex = 1;} // Checking if variable's n value is bigger than the size of 'slides' list, and if it is setting new value to 'slideIndex' variable
    if (n < 1) {slideIndex = slides.length;} // Checking if variable's n value is smaller than 1, and if it is setting new value to 'slideIndex' variable, which is the size of the 'slides' list
    for (i = 0; i < dots.length; i++) { // Defining for cycle to run while i is less that the size of 'dots' list
        slides[i].style.display = "none"; // Settin new value to style.display for each slides element
    }
    for (i = 0; i < dots.length; i++) {  // Defining for cycle to run while i is less that the size of 'dots' list
        dots[i].className = dots[i].className.replace(" active", ""); // Replacing className for each 'dots' element
    }
    
    slides[slideIndex-1].style.display = "block"; // Setting new style.display value for current 'slides' element
    dots[slideIndex-1].className += " active"; // Setting new className value for current 'dots' element
    myTimeOut = setTimeout(showSlides, 5000); // Change image every 5 seconds 
}