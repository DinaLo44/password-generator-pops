//MY CODE STARTS HERE!:

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function userOptions() {
  console.log("calling user options");
  var inputString = [];

  //Password length set up

  var passwordLength = prompt("How many characters do you want for your password?");
  console.log(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    

  } else {
    alert("Sorry, your password must include a minimum of 8 characters and a maximum of 128. Please try again.");
    return;
  }

  
  //Uppercase letters set up

  var wantUpperCaseCharacters = confirm("Do you want to include UPPERCASE characters?")
  console.log(wantUpperCaseCharacters);
  if (wantUpperCaseCharacters) {
    inputString = inputString.concat(upperCase);
  }


  //Lowercase letters set up

  var wantLowerCaseCharacters = confirm("Do you want to include LOWERCASE characters?")
  console.log(wantLowerCaseCharacters);
  if (wantLowerCaseCharacters) {
    inputString = inputString.concat(lowerCase);
  }
  
  
  //Special characters set up

  var wantSpecialCharacters = confirm("Do you want to include SPECIAL characters?")
  console.log(wantSpecialCharacters);
  if (wantSpecialCharacters) {
    inputString = inputString.concat(specialCharacters);
  }
  
  
  //Numbers set up

  var wantNumbers = confirm("Do you want to include NUMBERS?")
  console.log(wantNumbers);
  if (wantNumbers) {
    inputString = inputString.concat(numbers);
  }

  //Objects
  var userPreferences = {
    passLength: passwordLength,
    wantUpper: wantUpperCaseCharacters,
    wantLower: wantLowerCaseCharacters,
    wantSpecial: wantSpecialCharacters,
    wantNumeric: wantNumbers,
    inputString
  };

  console.log(userPreferences,"user preferences");
  return userPreferences;
}

//Calling generatePassword function

function generatePassword() {
  var password = "";
  var passwordOptions = userOptions();
  
 // This loop generates the password within the box 
  for (var i = 0; i < passwordOptions.passLength; i++) {
    password += passwordOptions.inputString[
    Math.floor(Math.random() * passwordOptions.inputString.length)]
    ;
  }return password;
}

//GIVEN CODE STARTS HERE!!!:
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

