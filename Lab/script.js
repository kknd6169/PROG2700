// Access the div with the id 'output'
const outputDiv = document.getElementById('output');



// Log a message to the console
console.log('Hello from the console!');

// Display the same message on the HTML page
outputDiv.innerText = 'Hello from the HTML!';


//Test
var age = 17;

//statement 1
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Ternary Example statement 2
var result = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(result);