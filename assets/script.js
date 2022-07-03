var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharacters = ['!','@','#', '$', '%', '^','&','*','(',')'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function userOptions() {
  console.log("you call user options");
  var passwordLength = prompt("typing a number");
  // console.log(passwordLength);

  var wantUpperCaseCharacters = confirm("Do you want upper case characters?")
  console.log(wantUpperCaseCharacters);

  var wantLowerCaseCharacters = confirm("Do you want lower case characters?")
  console.log(wantLowerCaseCharacters);

  var wantSpecialCharacters = confirm("Do you want special characters?")
  console.log(wantSpecialCharacters);

  var wantNumbers = confirm("Do you want numbers?")
  console.log(wantNumbers);

var userPreferences = {
  passLength: passwordLength,
  wantUpper: wantUpperCaseCharacters,
  wantLower: wantLowerCaseCharacters,
  wantSpecial: wantSpecialCharacters,
  wantNumeric: wantNumbers,
}

// console.log(userPreferences,"user preferences");
return userPreferences;
}

function generatePassword() {
  var passwordOptions = userOptions();
  console.log(passwordOptions, "generate password");

  if (passwordOptions.wantUpper){
    console.log("they want upper case");
  }
}








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
