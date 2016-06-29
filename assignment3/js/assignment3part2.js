// Assignment 3, Part 2
// The Rock, Paper, Scissors Game

// Step 1 and 6
/*
var userChoice = prompt("Choose rock, paper or scissors");
    if (userChoice.toLowerCase() === 'rock' || userChoice.toLowerCase() === 'paper' || userChoice.toLowerCase() === 'scissors') {
    } else {
        userChoice = prompt('That is not a valid entry. Please choose rock, paper or scissors.');
    }
    if (userChoice.toLowerCase() === 'rock' || userChoice.toLowerCase() === 'paper' || userChoice.toLowerCase() === 'scissors') {
        
    }else {
        alert("That is not a valid entry.");
    }

// Step 2
var computerChoice = Math.random();
console.log(computerChoice);

// Step 3
    if (computerChoice < 0.33) {
        computerChoice = "rock";
    }
    else if (computerChoice > 0.66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    
console.log("Computer: " + computerChoice);

var areThey = function (value1, value2, choice1, choice2) {
    if (value1 === choice1 && value2 === choice2) {
        return (true);
    } else if (value1 === choice2 && value2 === choice1) {
        return (true);
    }
    return (false);
}

// Step 4 and 5

var compare = function (choice1, choice2) {
    if (areThey("paper", "rock", choice1, choice2)) {
        return alert("paper wins");
    } else if (areThey("paper", "scissors", choice1, choice2)) {
        return alert("scissors wins");
    } else if (areThey("scissors", "rock", choice1, choice2)) {
        return ("rock wins");
    }
    return alert("it's a tie!");
}

console.log(compare(userChoice, computerChoice));
*/

// The Basic Calculator
/*
// Step 1
var num1 = prompt("Enter a Number");
// Step 2
var num2 = prompt("Enter another Number");
// Step 3
var op = prompt ("Enter an operator: +,-,* or /");
if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
    alert("This is not a valid entry");
}
// Step 4 and 5
var calculate = function(num1, num2, op) {
    var x = Number(num1);
    var y = Number(num2); 
// Step 6    
var result;
    switch(op) {
        case '+': 
        result =  (x + y);
        break;
        case '-':
        result = (x - y);
        break;
        case '*':
        result = (x * y);
        break;
        case '/':
        result = (x / y);
        break;
//Step 7
        default:
        result = 'not valid. Please refresh page and start again';
    }
    alert('The answer is ' + result);
}
    calculate(num1,num2,op);
*/

// Death by JavaScript

// Step 1

var userWord = prompt("Enter a word.");
function alphabeticalOrder(word) {
    return word.split("").sort().join("");
}
console.log(alphabeticalOrder(userWord));


// Step 2
var userSentence = prompt("Enter a sentence.");
var arrChopUpSentence = userSentence.split(" ");
function arrCapitalizing(words) {
    return words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}
console.log(arrCapitalizing(arrChopUpSentence));


// Step 3
var userSentence = prompt("Enter a sentence.");
function getVowels(string) {
    var vowels = string.match(/[aeiou]/gi);
    return vowels === null ? 0 : vowels.length;
}
console.log(getVowels(userSentence));


// Step 4
var randomId;
function generateId() {
    randomId = Math.random().toString(36).substring(2, 10);
}
generateId();
console.log(randomId);


// Step 5
var userArray = prompt("Enter three coutry names separated by commas.").split(",");
function longestCountry(countryArr) {
    var longest = "";
    for (i = 0; i < countryArr.length; i++) {
        if (countryArr[i].length > longest.length) {
            longest = countryArr[i];
        }
    }
    return longest;
}
console.log(longestCountry(userArray));












