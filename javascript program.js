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
var dinnerCost = function(price){
    console.log("$" + price)
}
dinnerCost(20)

var getCost = (price, tax){
    var tip = price * .20
    var cost = price + tax + tip
    return cost
}
var lobster = getCost(30, 1.50)
console.log("$" + lobster)

var steak = getCost(25, 1.25)
console.log("steak: $" + steak)

var sandwich = getCost(5, 0.25)

/* If a function() with a parameter is called
    with a missing argument, the parameter is
    assigned the value UNDEFINED by default.
*/
function say(anything){
    console.log(anything)
}
say() // the function has been caleed without an arguement

// callbacks are when an argument is also a function()
// callbacks are called inside the function() which passed the arguement
var list = [1, 2, 3]
    list.function(value){
        console.log(value)
    })

/*  There is a function(callback) being passed into forEach() as an arguement
    The parameter value is each value of the array. */
var plusTwo = function(x){
    return x + 2
}
plusTwo(3)

// conditinal statements are code that executes on true/false conditions.
var raining = true
if(raining){
    console.log("Staying in!")
}
else{
    console.log("Going outdoors!")
}

var time = 10
if(time < 20 && raining){
    console.log("Watch TV")
}
else{
    console.log("Go outside.")
}

/*  If statements can be written as a conditional statement.
    For example: condition ? true value : false value
    the "?" represents "if" and the ":" represents "else"
*/
var elderly = true
var age = elderly ? 80 : 30
console.log(age)

// switch case is used for multiple condition tests
// break ends the switch statement
switch("Friday"){
    case "Friday":
        console.log("TGIF!")
        break
    default:
        console.log("Friday...")
}

// Loops
for (var i = 1; i < 10; i++){
    console.log(i)  // prints the array in ascending order
}
for (var i = 1; i < 10; I--){
    console.log(i)  // prints the array in descending order
}

/*  While loops are great when the loop's false condition is yet to be
    determined increment the i so that the while loop ends at 9
*/
var i = 0
while(i < 10){
    console.log(i)
    i++
}

/*  Continue loop while we are awake, until it is hour 23. Increment one hour
    at a time. when we are !awake (not awake) the loop should end.
*/
var time = 8
var awake = true
while(awake){
    if(time === 23){
        console.log(time)
        awake = false
    }
    time++
}

// do-while loops run at least once even if the conition is false
var condition = false
do{
    console.log("Run once!")
}while(condition)

// arrays can store whatever datatype we choose
var twoTypes = ["string", 1]
console.log(twoTypes)

var groceryList = ["steak", "eggs"]
console.log(groceryList)
// only print the item in the array at index[0]
console.log(groceryList[1])
// print the total number of items in an array using .length
var total = groceryList.length
console.log(total)
// print each item of an array
for (var i = 0; i < groceryList.length; i++){
    console,log(groceryList[i])
}

/*  The push function .push() will add the element to the end of
    the array! Note: The unshift function .unshift() will add the element
    to the beginning of an array.
    Use the .push() function to create a list of numbers 0-9
*/
var numbers = []
for(var i = 1; i < 9; i++){
    numbers.push(i)
}
console.log(numbers)

/*  Values can be removed from an array using the .pop() function, which removes
    the last value from an array and returns it. Note: the .shift() function
    will remove an element from the beginning of an array.
*/
var groceryList = ["steak", "eggs"]
var popped = groceryList.pop()
if(popped === "eggs"){
    console.log("Wonderful!")
}

/*  Matrix - arrays that store other arrays!
    A two-dimensional (2-D) array is called a Matrix
*/
var matrix = [[1,1], [2,2]]
// access the second element in the first row
var myItem = matrix[0][1]
console.log(myItem)

// more arrays
var count = []
for(var i = 0; i <= 10; i++){
    count.push(i)
    console.log(i)
}
console.log(count)
count.pop() // pops out the 10th item
console.log(count)

var number = count[count.length - 1]    // index of the last item
// note: count.length = 10
// note: count.length -1 = 9

// using callback methods in arrays
var list = ["tea", "coffee", "apples"]
list.forEach(function(element, item, array){
    console.log(element)    // should print every element in the array
})

/*  The .indexOf() method takes an array element as an arguement and
    checks if that element exists in the array.
*/
var List = ["beer", "soda", "peanutbutter"]
console.log(List.indexOf("soda"))
/*  note: if a value that is not in the array is passed into the function
    the program will return a value of -1
*/

/*  Concatonate two strings into a new string without effecting
    the original two strings.
*/
var yourList = ["tea", "apples"]
var myList = ["coffee"]
var theList = yourList.concat(myList)
console.log(theList)

/*  Mapping can apply a function to each array element using a callback
    to get a new array.     */
// create an array that adds one value to each element in the array
var report = [1, 2, 3]
var new = report.map(function(item){
    return item + 1
})
console.log("Original Report: " + report)
console.log("New Report: " + new)

/*  The .reduce() function takes the previousValue and currentValue and adds
    them both to the rolling sum.
*/
var List = [1, 2, 3]
var sum = List.reduce(function(prior, current){
    return prior + current  // all items in the array have been added together
})
console.log(sum)    // the result should returna value of 6

// The .filter() function allows you to search for only the elements you want
var List = [1, 2, 3]
var fil = List.filter(function(num){
    return num > 1      // only print values greater than one
})
console.log(fil)
/*  By default .sort() orders values as strings in alphabetical and
    ascending order. Use the .reverse() function to reverse an array.   */
var List = ["apples", "tea", "coffee"]
List.sort()
console.log(List)

// The .splice() function will remove items from the middle of an array
var List = ["apples", "tea", "coffee"]
console.log(List)   // print original List
List.splice(1, 1) // indicate the array index, indicate how many items to remove
console.log(List)   // the item "apples" should have been removed

// Objects
var dog = {
    // properties
    name: "Sparky",
    breed: "Greyhound",
    age: 4
}
console.log("Meet " + dog.name)
console.log("He is " + dog.age + " years old.")
// change properties after they have been initialized
dog.name = "Sally"
console.log("My dog likes to be called " + dog.name)
