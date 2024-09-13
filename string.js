// Declare the variables
let favActorFirstName = "Jenna";    // Replace with your favorite actor's first name
let favActorLastName = "Ortega";    // Replace with your favorite actor's last name

// Concatenate the first and last names into fullName
let fullName = favActorFirstName + " " + favActorLastName;

// Convert the actor's name to uppercase
let uppercase = fullName.toUpperCase();

// Convert the favorite pet's name to lowercase and capitalize it
let petName = "Tanggols";   // Replace with your favorite pet's name
let lowercase = petName.charAt(0).toUpperCase() + petName.slice(1).toLowerCase();

// Create a message with the actor's full name in uppercase
let message = "My favorite actor is " + uppercase;

// Append more text to the message
message += " and his best show is Scream VI.";

// Log all variables to the console
console.log("First Name:", favActorFirstName);
console.log("Last Name:", favActorLastName);
console.log("Full Name:", fullName);
console.log("Uppercase Actor Name:", uppercase);
console.log("Lowercase Pet Name:", lowercase);
console.log("Message:", message);
