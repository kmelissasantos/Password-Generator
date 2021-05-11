// Assignment code here
// Password variable values:
var passwordLength;
var confirmNumber;
var confirmCharacter;
var confirmUpper;
var confirmLower;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Var To Upper Case ------------
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
//--------------------------------------
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


// Start Function
function generatePassword() {
  // user Input
  passwordLength = prompt("What length would you like the password to be? (Choose between 8 and 128)");
  console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("This needs a value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  
  } else { 
    confirmLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Will this contain numbers?");
    console.log("Number " + confirmNumber);
    confirmCharacter = confirm("Will this contain special characters?");
    console.log("Special Character " + confirmCharacter);

  };

  // No answer then
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmCharacter) {
    userChoices = alert("You must choose a criteria");
  // 4 true options
  } else if (confirmLower && confirmUpper && confirmNumber && confirmCharacter) {
    userChoices = lowerCase.concat(upperCase, numbers, character);
    console.log(userChoices);
  }
  // 3 true options
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper && confirmCharacter) {
    userChoices = lowerCase.concat(upperCase, character);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber && confirmCharacter) {
    userChoices = lowerCase.concat(numbers, character);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber && confirmCharacter) {
    userChoices = upperCase.concat(numbers, character);
    console.log(userChoices);
  }
  // 2 true options
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmCharacter) {
    userChoices = lowerCase.concat(character);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmCharacter) {
    userChoices = upperCase.concat(character);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmCharacter) {
    userChoices = numbers.concat(character);
    console.log(userChoices);
  }
  // 1 true option
  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmCharacter) {
    userChoices = character;
    console.log(userChoices);
  };

// Empty variable for the password length
var passwordBlank = [];

  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
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
