// console.log("hello");
// console.log("joe");

// set variables for buttons
var addition = document.getElementById("button-plus");
// var subtraction
// var multiplication
// var division 
// var exponent
// var equal
// var openParen
// var closeParen
var button = document.querySelectorAll("button");
// add eventlistener to buttons -> click,function(event)
button.addEventListener("click", function(event){
        var elements = event.target;
        console.log("elements:", elements)
});
// >>>> var el = event.target
//use textContent 


// create logic that represents button function: - + * /
// display each button that is clicked
// ensure no html is overwritten 
// display items that makeup the mathmatical formula desired ie. "9*9+6" 
// display results of math formula 
// clear results and reset calculator 