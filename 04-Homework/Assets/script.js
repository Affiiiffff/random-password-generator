// Assignment Code

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = [
  "!",
  "£",
  "$",
  "%",
  "&",
  "*",
  "(",
  ")",
  "+",
  "=",
  "/",
  ">",
  "<",
  "#",
];

var newPassword = [];

var generateBtn = document.querySelector("#generate");

function Criteria() {
  newPassword = [];

  characterLength = parseInt(
    prompt(
      "What would you like the total length of the password to be? Please type a number in numeric between 8-128"
    )
  );

  if (confirm("Would you like to include special characters?")) {
    newPassword = newPassword.concat(specialCharacters);
  }

  if (confirm("Would you like lower case letters? "))
    newPassword = newPassword.concat(lowerCase);

  if (confirm("Would you like upper case letters? "))
    newPassword = newPassword.concat(upperCase);

  if (confirm("Would you like to include numbers in your password? "))
    newPassword = newPassword.concat(numbers);
}

function generatePassword() {
  var generatedPassword = Criteria();

  generatedPassword = "";
  for (i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * newPassword.length);
    generatedPassword = generatedPassword + newPassword[randomIndex];
  }
  return generatedPassword;
}

function writePassword() {
  var password = generatePassword();
  // display generated password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
