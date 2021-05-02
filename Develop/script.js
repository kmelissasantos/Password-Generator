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
confirmNumber = confirm("Would you like it to contain numbers?");
confirmCharacter = confirm("Would you like it to contain Uppercase letters?");
confirmLowercase = confirm("Would you like it to contain Lowercase letters?");
};

// Else if for 4 negative options

if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {

  choices = alert("You must choose a criteria!");
  
  }


// Else if for 4 positive options

else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

  choices = character.concat(number, alpha, alpha2);
  
  }
  
  // Else if for 3 positive options
  
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
  
  choices = character.concat(number, alpha2);
  
  }
  
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
  
  choices = character.concat(number, alpha);
  
  }
  
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  
  choices = character.concat(alpha, alpha2);
  
  }
  
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
  
  choices = number.concat(alpha, alpha2);
  
  }
  
  // Else if for 2 positive options
  
  else if (confirmCharacter && confirmNumber) {
  
  choices = character.concat(number);
  
  } else if (confirmCharacter && confirmLowercase) {
  
  choices = character.concat(alpha);
  
  } else if (confirmCharacter && confirmUppercase) {
  
  choices = character.concat(alpha2);
  
  }
  
  else if (confirmLowercase && confirmNumber) {
  
  choices = alpha.concat(number);
  
  } else if (confirmLowercase && confirmUppercase) {
  
  choices = alpha.concat(alpha2);
  
  } else if (confirmNumber && confirmUppercase) {
  
  choices = number.concat(alpha2);
  
  }

  // Else if for 1 positive option

else if (confirmCharacter) {

  choices = character;
  
  }
  
  else if (confirmNumber) {
  
  choices = number;
  
  }
  
  else if (confirmLowercase) {
  
  choices = alpha;
  
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
