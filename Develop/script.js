// Assignment code here

var enter;

var confirmNumber;

var confirmCharacter;

var confirmUppercase;

var confirmLowercase;

// Password variable values:
// Special characters

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numeric characters

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical characters

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Space is for the Uppercase conversion

space = [];

// choices declared outside if statement so they can be concatenated upon condition

var choices;

// converts letters to uppercase

var toUpper = function (x) {

return x.toUpperCase();

};

// creates variable for uppercase conversion

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {

ps = generatePassword();

document.getElementById("password").placeholder = ps;

});

//function to generate password
function generatePassword () {
  //user input
  enter = parseInt(prompt("What length would you like the password to be? (Between 8 to 128 characters)"));
}
// if statement for user validation
if (!enter) {
  alert("This needs a value");
} 

else if (enter < 8 || enter > 128) {
  enter = parseInt(prompt("You must choose between 8 and 128"));
} 
//user input validated
else {
confirmNumber= confirm("Would you like it to contain numbers?")
}

