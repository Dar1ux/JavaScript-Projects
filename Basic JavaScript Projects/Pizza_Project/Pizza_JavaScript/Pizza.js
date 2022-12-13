function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); // Getting all html elements with class name 'size' and assigning them to variable
    for (var i = 0; i < sizeArray.length; i++) { // Iterating through all size options to find which one was selected
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>"; // Adding size option to the receipt
        }
    }
    // Assigning sizeTotal value based on Pizza size selected
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; // Assigning new value to runningTotal variable
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    // These variables will get passed on to each function
    getTopping(runningTotal, text1); // Calling a function to find selected toppings
};

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings"); // Getting all html elements with class name 'toppings' and assigning them to variable
    var vegeArray = document.getElementsByClassName("veg"); // Getting all html elements with class name 'veg' and assigning them to variable
    for (var k = 0; k < vegeArray.length; k++) { // Iterating through all vegetable options to find which ones were selected
        if (vegeArray[k].checked) {
            selectedTopping.push(vegeArray[k].value); // Adding selected vegetable to the toppings list
            console.log("selected vegetable item: (" + vegeArray[k].value + ")");
            text1 = text1 + vegeArray[k].value + "<br>"; // Adding selected vegetable to the receipt
        }
    }
    for (var j = 0; j < toppingArray.length; j++) { // Iterating through all meat options to find which ones were selected
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); // Adding selected meat option to the toppings list
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>"; // Adding selected meat options to the receipt
        }
    }
    var toppingCount = selectedTopping.length; // toppingCount equals to the length of the toppings list we were making earlier
    // Checking topping count and assigning toppingTotal value considering that 1 topping is free
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal); // Adding toppings to runningTotal
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1; // Displaying receipt in HTML element with 'showText' ID
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>"; // Displaying total price in HTML element with 'totalPrice' ID
};