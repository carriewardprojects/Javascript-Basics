// A simple javascript program

var myName = "Carrie Ward"
console.log("Hello, may name is " + myName)

var message = "The future is now."
console.log(message)

var value1 = 4
var value2 = 5
console.log(value1 + value2)

var myBool = true
console.log(myBool)
console.log("My code is " + myBool)

// comparison operators act like boolean values
var myValue = 2 > 1
console.log(myValue)

var myBoolean = 10 !== "10"
console.log(myBoolean)
// note: the operator != (not equal to) is a "value"
// however the operator !== is a "value" and a "type"
// the operators === and !=== allow you to compare values and types

function myfunction(){ // create the function
    console.log("Functions are coming!!")
}
myfunction() // call the function

function greetings(){
    console.log("Hello! Welcome to Javascript!")
}
greeting()

// functions() can be stored in a variable
var myAge = function(){
    console.log("I am 1,000 years old!")
}
myAge()

// you can pass values into the parameter ( ) of the function(20)
var getCost = function(price){
    console.log("$" + price)
}
getCost(20)

var dinnerCost = (price, tax){
    var tip = price * .20
    var cost = price + tax + tip
    return cost
}
var lobster = dinnerCost(30, 1.50)
console.log("$" + lobster)


/* If a function() with a parameter is called
    with a missing argument, the parameter is
    assigned the value UNDEFINED by default */
function say(anything){
    console.log(anything)
}
say() // the function has been caleed without an arguement
