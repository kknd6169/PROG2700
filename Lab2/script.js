// Access the div with the id 'output'
const outputDiv = document.getElementById('output');

// Test
console.log('The first javascript file!');

function isDateInRange(inputDate) {
    // Create a Date object from the input
    let date = new Date(inputDate);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
        console.log("Invalid Date");
        return false;
    }

    // Define the start and end dates of the range
    let year = date.getFullYear();
    let startDate = new Date(year, 0, 19); 
    let endDate = new Date(year, 1, 19);  

    // Check if the date is within the range
    return date >= startDate && date <= endDate;
}

var myLocation = "Halifax"; 
var travelLocation = "Costa Rica"
var inputDate = "January 20, 2024";
var airport = "YHZ";
var airportNum = "(902) 873 - 4422";

var resultLocation = (myLocation == "Halifax") ? airport + " " + airportNum : "I will stay home.";

var result = ""; 

if (isDateInRange(inputDate)) {
   
    console.log("I am traveling in " + travelLocation + "!");

    result = "I am traveling in " + travelLocation + "!"; 
} else {
    console.log("I am home in " + myLocation + ".");

    result = "I am home in " + myLocation + ".";
}


console.log(resultLocation);

outputDiv.innerText = result; 

