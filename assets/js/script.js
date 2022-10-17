// Assignment Code
var generateBtn = document.querySelector("#generate");
// Setting up the arrays containing all of the information for each
var passwordCapital = "";
var passwordLowercase = "";
var passwordNumeric = "";
var passwordSpecial = "";
var capital =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var lower =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numeric =[1,2,3,4,5,6,7,8,9,0];
var special =['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']'];
var passString = "";
var passResult = "";
// the variable 'textArea' displays the password on screen
var textArea = document.getElementById("password");

function characterTypes() {
  var passwordCapital = confirm("Would you like your password to include uppercase letters? (ABCDE)");
  var passwordLowercase = confirm("Would you like your password to include lowercase letters? (abcde)");
  var passwordNumeric = confirm("Would you like your password to include numbers? (12345)");
  var passwordSpecial = confirm("Would you like your password to include special characters? (!?@#$)");
  if (passwordCapital === true || passwordLowercase === true || passwordNumeric === true || passwordSpecial === true) {
//if uppercase letters are chosen, its added to the variable "passString"
    if (passwordCapital === true) {
      passString += capital
    }
//if lowercase letters are chosen, its added to the variable "passString"
    if (passwordLowercase === true) {
      passString += lower
    }
//if numbers are chosen, its added to the variable "passString"
    if (passwordNumeric === true) {
      passString += numeric
    }
//if special characters are chosen, its added to the variable "passString"
    if (passwordSpecial === true) {
      passString += special
    }

  }
// The else statement creates an alert if none of the character types are chosen then goes back to the beginning of the characterTypes function
  else {
    alert("Please choose at least one character type.")
    characterTypes()
  };
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var text = '';
// This function lets the prompt loop back should the user input a value that is less than 8 or larger than 128
  function questions() {
    var passwordLength = prompt("How long would you like your password to be? (Please choose a number between 8 and 128 characters.)");
    if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
      characterTypes()
      
      for (let i = 0; i < passwordLength; i++) {
        let x = passString[Math.floor(Math.random() * passString.length)]
        passResult += x;
      }
      console.log(passResult);
      console.log(textArea);
      text = document.createTextNode(passResult);
// Removes the old password as soon as the 'Generate Password' button is pressed again
      textArea.innerHTML = '';
      textArea.appendChild(text);
      passResult = '';

    };


  }
  questions()
}

// writePassword now connected with the generate password button
generateBtn.addEventListener("click", () => {
  writePassword();
});