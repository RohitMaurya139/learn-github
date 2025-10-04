// Dummy JavaScript Code Example

// Function to greet a user
function greetUser(name) {
  console.log(`Hello, ${name}! Welcome to our app.`);
}

// Function to calculate sum
function addNumbers(a, b) {
  return a + b;
}

// Function to simulate loading
function showLoading() {
  console.log("Loading...");
  setTimeout(() => {
    console.log("Done!");
  }, 2000);
}

// Array example
const users = ["Rohit", "Aman", "Priya", "Sneha"];

// Loop through array
users.forEach((user) => greetUser(user));

// Call functions
const sum = addNumbers(10, 20);
console.log(`The sum is: ${sum}`);

showLoading();
