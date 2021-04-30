//  1
// GIVEN
console.log(hello);
var hello = 'world';
//AFTER HOISTING BY THE INTERPRETER
// var hello; // var declaration hoisted to the top
// console.log(hello): // logs undefined
// hello = 'world' // assignment stays put

// CORRECT

// 2
// GIVEN
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
// var needle; var declaration hoisted to the top
// function test() { // standalone function gets hoisted to the top
    //var needle; // var declaration hoisted to the top, stays in function scope because function create their own scope and act like cages
    //needle = 'magnet'; // assignment stays put
    //console.log(needle);
// }
// needle='haystack' // assignment stays put
// test(); // logs 'magnet'

// CORRECT

// 3
// GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY INTERPRETER
// var brendan // var declaration hoisted to the top of its scope
// brendan = 'supercool' // assignment stays put
// function print() {
    //brendan = 'only okay';
    //console.log(brendan);
// }
// console.log(brendan); // logs 'supercool'

//CORRECT

// 4
// GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY INTERPRETER
// var food; // var declaration hoisted to the top of its scope
//function eat { // standalone function hoisted to the top
    //var food // var declaration hoisted to the top, stays in function scope
    //food = 'half-chicken';
    //console.log(food);
    //food = 'gone';
//}
//food = 'chicken' //assignment stays put
//console.log(food) // logs 'chicken'
// eat(); // logs 'half-chicken'

//CORRECT

//5
//GIVEN
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY INTERPRETER
// var mean
// mean(); // tried to invoke before assigning a function to it, so undefined?
// mean = function() {
    //var food
    //food = 'chicken'
    //console.log(food)
    //food = 'fish'
    //console.log(food)
//}
//console.log(food);

// Kinda correct, we get TypeError: mean is not a function

//6
//GIVEN
console.log(genre);
var genre = "disco";
rewindcopy();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//AFTER HOISTING BY INTERPRETER
//var genre;
//function rewind {
    //var genre;
    //genre = 'rock';
    //console.log(genre);
    //genre = 'r&b'
    //console.log(genre);
//}
//console.log(genre)
//genre = 'disco'
//rewindcopy(); // calling a function that doesn't exist, doesn't run because it stops the code here for run error
//console.log(genre);

//CORRECT

//7
//GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//AFTER HOISTING BY INTERPRETER
//function learn() {
    //var dojo
    //dojo = "seattle";
    //console.log(dojo);
    //dojo = "burbank";
    //console.log(dojo);
//}
//dojo = "san jose"; // var not initialized
//console.log(dojo); // error, so run error and stops here
//learn();
//console.log(dojo);

//WRONG, it prints out the values

// 8 BONUS
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//AFTER HOISTING BY INTERPRETER
//function makeDojo(name, students){
    //const dojo = {}; 
    //dojo.name = name;
    //dojo.students = students;
    //if(dojo.students > 50){
        //dojo.hiring = true;
    //}
    //else if(dojo.students <= 0){
        //dojo = "closed for now"; // second log doesn't go through because it tries to reassign a const var
    //}
    //return dojo;
//}
//console.log(makeDojo("Chicago", 65)); // {name: 'Chicago', students: 65, hiring: true}
//console.log(makeDojo("Berkeley", 0));

//WRONG, first runs, but the second one doesn't log because a typerror, try to reassign a const var, so stops there