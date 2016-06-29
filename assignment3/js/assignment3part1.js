// Practice with arrays

// STEP 1
/*
var favMovies = ["Gladiator", "Terminator 2", "Forrest Gump", "Lion King", "Top Gun"];
console.log(favMovies[1]);
*/

// STEP 2
/*
var movies = [];
movies [0] = "Finding Nemo";
movies [1] = "Pulp Fiction";
movies [2] = "Kill Bill";
movies [3] = "Taladega Nights";
movies [4] = "Anchorman";
console.log(movies[0]);
*/

// STEP 3
/*
var movies = [];
movies [0] = "Finding Nemo";
movies [1] = "Pulp Fiction";
movies [2] = "Kill Bill";
movies [3] = "Taladega Nights";
movies [4] = "Anchorman";
console.log(movies);
movies.splice(2,0, "Training Day");
console.log(movies);
console.log(movies.length);
*/

// Step 4
/*
var movies = [];
movies [0] = "Finding Nemo";
movies [1] = "Pulp Fiction";
movies [2] = "Kill Bill";
movies [3] = "Taladega Nights";
movies [4] = "Anchorman";
console.log(movies);
movies.shift();
console.log(movies);
*/

// Step 5
/*
var movies = [];
movies [0] = "Finding Nemo";
movies [1] = "Pulp Fiction";
movies [2] = "Kill Bill";
movies [3] = "Taladega Nights";
movies [4] = "Anchorman";
movies [5] = "Training Day";
movies [6] = "Friday";
console.log(movies);
for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}
*/

// Step 6
/*
var movies = [];
movies [0] = "Finding Nemo";
movies [1] = "Pulp Fiction";
movies [2] = "Kill Bill";
movies [3] = "Taladega Nights";
movies [4] = "Anchorman";
movies [5] = "Training Day";
movies [6] = "Friday";

for (var i in movies) {
    console.log(movies[i]);
}
*/

// Step 7
/*
var movies = [];
movies [0] = "Finding Nemo";
movies [1] = "Pulp Fiction";
movies [2] = "Kill Bill";
movies [3] = "Taladega Nights";
movies [4] = "Anchorman";
movies [5] = "Training Day";
movies [6] = "Friday";
movies.sort();
for (var i in movies) {
    console.log(movies[i]);
}
*/

// Step 8
/*
var movies = [];
movies [0] = "Finding Nemo";
movies [1] = "Pulp Fiction";
movies [2] = "Kill Bill";
movies [3] = "Taladega Nights";
movies [4] = "Anchorman";
movies [5] = "Training Day";
movies [6] = "Friday";

var leastFavMovies = ["Band of Robbers", "Jaws", "Kangaroo Jack"];

console.log ("Movies I like:\n\n\n");
for (var i in movies) {
    console.log(movies[i]);
}
console.log ("\n\n Movies I regret watching:\n\n\n");
for (var x in leastFavMovies)
    console.log(leastFavMovies[x]);
*/

// Step 9
/*
var movies = [];
movies [0] = "Finding Nemo";
movies [1] = "Pulp Fiction";
movies [2] = "Kill Bill";
movies [3] = "Taladega Nights";
movies [4] = "Anchorman";
movies [5] = "Training Day";
movies [6] = "Friday";

var leastFavMovies = ["Band of Robbers", "Jaws", "Kangaroo Jack"];

movies = movies.concat(leastFavMovies);
console.log(movies.sort());
console.log(movies.reverse());
*/

// Step 10
/*
var movies = [];
movies [0] = "Finding Nemo";
movies [1] = "Pulp Fiction";
movies [2] = "Kill Bill";
movies [3] = "Taladega Nights";
movies [4] = "Anchorman";
movies [5] = "Training Day";
movies [6] = "Friday";
console.log(movies.pop());
*/

// Step 11
/*
var movies = [];
movies [0] = "Finding Nemo";
movies [1] = "Pulp Fiction";
movies [2] = "Kill Bill";
movies [3] = "Taladega Nights";
movies [4] = "Anchorman";
movies [5] = "Training Day";
movies [6] = "Friday";
console.log(movies.shift());
*/

// Step 12
/*
var movies = [];
movies [0] = "Finding Nemo";
movies [1] = "Pulp Fiction";
movies [2] = "Kill Bill";
movies [3] = "Taladega Nights";
movies [4] = "Anchorman";
movies [5] = "Training Day";
movies [6] = "Friday";

var leastFavMovies = ["Band of Robbers", "Jaws", "Kangaroo Jack"];

movies = movies.concat(leastFavMovies);
console.log(movies);

movies.splice(7, 9, "Wolf of Wall Street", "Blow", "Scarface");
console.log(movies);
*/

// Step 13
/*
employee1 = [[10, "Steve", "Web Developer", "Sales", "Current"]];
employee2 = [[55, "Stan", "Accountant", "Accounting", "Former"]];

var employees = employee1.concat(employee2);
console.log(employees[1]);
*/

// Step 14
/*
employee1 = [[10, "Steve", "Web Developer", "Sales", "Current"]];
employee2 = [[55, "Stan", "Accountant", "Accounting", "Former"]];

var employees = employee1.concat(employee2);
console.log(employees);

for (var i = 0; i < employees.length; i++) {
    console.log(employees[i][1]);
}
*/

// Step 15
/*
employee1 = [[10, "Steve", "Web Developer", "Sales", "Current"]];
employee2 = [[55, "Stan", "Accountant", "Accounting", "Current"]];

var employees = employee1.concat(employee2);
employee3 = [[75, "Jeff", "Field Tester", "Development", "False"]];
var employees = employees.concat(employee3);
console.log(employees);
for (var i = 0; i < employees.length; i++) {
   
    if (employees[i][4] == "Current")
     console.log(employees[i][1]);
}
*/

// Step 16
/*
var movies = [["Gladiator", 1], ["Rocky 3", 2], ["Back to the Future", 3], ["Jurassic Park", 4], ["Ghost Busters", 5]];


var newMovies = movies.filter(function(item) {
    console.log(item[0]);
});
*/

// Practice with Functions
// Step 1
/*
 function displayMessage(x) {
     console.log(x);
 };

displayMessage("Hello World");
*/

// Step 2
/*
function calculate(x, y) {
    return x % y; 
};
console.log(calculate(9, 4));
*/

// Step 3
/*
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function (employees) {
    for (i = 0; i < employees.length; i++) {
        console.log(employees[i]);
    }
};
console.log("Employees: \n \n");
showEmployee(employees);
*/