// Assignment code here
var charTypes = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: "!@#$%^&*()_-+=.?/,|~{}",
};

// Write password to the #password input
function writePassword() {
  var passwordLength;
  var passwordLengthPrompt = window.prompt(
    "Make a password with 8-128 characters."
  );
  var isNumber = Number.isInteger(Number(passwordLengthPrompt));
  if (isNumber && passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128) {
    passwordLength = passwordLengthPrompt;
    var selectedTypes = [];
    for (var key in charTypes) {
      var promptResponse = window.confirm(
        "Do you want your password to include " + key + " characters"
      );
      if (promptResponse === true) {
        selectedTypes.push(charTypes[key].split(""));
      }
    }

    if (selectedTypes.length === 0) {
      window.alert("Select at least one of the following");
    }

    var concatSelectedTypes = selectedTypes.flat();
    var password = [];

    for (i = 0; i < passwordLength; i++) {
      var randomIndex = Math.round(Math.random() * (concatSelectedTypes.length - 1) + 0);
      password.push(concatSelectedTypes[randomIndex]);
    }
    
    var randomPassword = password.join("");
    document.getElementById("password").value = randomPassword;
  } else {
    window.alert("password needs 8-128 characters, punk");
    return;
  }
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);