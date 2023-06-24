/*  JavaScript  */


// Comment Your JavaScript Code

// This is an in-line comment.
/* This is a
multi - line comment */

// Declare JavaScript Variables
var ourName;

// Storing Values with the Assignment Operator
myVariable = 5;

// second example
var myVar;
myVar = 5;

// Assigning the Value of One Variable to Anothervar myVar;
myVar = 5;
var myNum;
myNum = myVar;

// Initializing Variables with the Assignment Operator
var myVar = 0;

// Declare String Variables

var myName;
// secondexample
var myName = "your name";

// Declare an uninitialized variable
var myVariable;

// Attempt to access the uninitialized variable
console.log(myVariable);

// Understanding Case Sensitivity in Variables
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

// Explore Differences Between thevar andlet Keywords
var camper = "James";
var camper = "David";
console.log(camper);
// If you replace var with let in the code above, it results in an error:
let camper = "James";
let camper = "David";

// Declare a Read - Only Variable with the const Keyword
const FAV_PET = "Cats";
FAV_PET = "Dogs";

// Add Two Numbers with JavaScript
const myVar = 5 + 10;
// myVar now has the value 15.


// Subtract One Number from Another with JavaScript
const myVar = 12 - 6;
// myVar would have the value 6.


// Multiply Two Numbers with JavaScript
const myVar = 13 * 13;
// myVar would have the value 169.


// Divide One Number by Another with JavaScript
const myVar = 16 / 2;
// myVar now has the value 8.


// Increment a Number with JavaScript
i++;
// or
i = i + 1;


// Decrement a Number with JavaScript
i--;
//or
i = i - 1;


// Finding a Remainder in JavaScript
// Example
let f= 5 % 2; /* = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder) */
// usage
let a= 17 % 2 //= 1 (17 is Odd)
let b= 48 % 2 //= 0 (48 is Even)


// Compound Assignment With Augmented Addition
myVar = myVar + 5;
// or
let myVar = 1;
myVar += 5;
console.log(myVar);


// Compound Assignment With Augmented Subtraction
myVar = myVar - 5;
// or
myVar -= 5;


// Compound Assignment With Augmented Multiplication
myVar = myVar * 5;
// or
myVar *= 5;


// Compound Assignment With Augmented Division
myVar = myVar / 5;
// or
myVar /= 5;


// Escaping Literal Quotes in Strings

/*In JavaScript, you can escape a quote from
considering it as an end of string quote 
by placing a backslash (\) in front of the quote.*/
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";



// Quoting Strings with Single Quotes
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';

const conversation = 'Finn exclaims to Jake, "Algebraic!"';

const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
// const badStr = 'Finn responds, "Let's go!"';
/* Here badStr will throw an error.
In the goodStr above, you can use both quotes safely by using the backslash \ as an escape character.*/


// Concatenating Strings with Plus Operator
const ourStr = "I come first. " + "I come second.";


//Concatenating Strings with the Plus Equals Operator
let ourStr1 = "I come first. ";
ourStr1 += "I come second.";
//ourStr1 now has a value of the string I come first. I come second.



//Constructing Strings with Variables
const ourName = "Anurag";
const ourStr2 = "Hello, my name is " + ourName + ", how are you?";
// ourStr would have a value of the string Hello, my name is Anurag, how are you?



// Appending Variables to Strings
const anAdjective = "awesome!";
let ourStr3 = "Anurag is ";
ourStr3 += anAdjective;
// ourStr3 would have the value Anurag is awesome!



// Find the Length of a String
console.log("Alan Peter".length);


// Understand String Immutability
// the following code will produce an error because the letter B in the string Bob cannot be changed to the letter J:
let myStr = "Bob";
myStr[0] = "J";
// The only way to change myStr would be to assign it with a new value, like this:
let myStr = "Bob";
myStr = "Job";



// Use Conditional Logic with If Statements
function test (myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
  }
  
  test(true);
  test(false);

  
// Comparison with the Equality Operator
function equalityTest(myVal) {
    if (myVal == 10) {
      return "Equal";
    }
    return "Not Equal";
  }


// Comparison with the Strict Equality Operator
  3 ===  3  // true
  3 === '3' // false

  
// Comparison with the Inequality Operator
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false


// Comparison with the Strict Inequality Operator
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true



// Comparison with the Greater Than Operator
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false


// Comparison with the Greater Than Or Equal To Operator
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false


// Comparison with the Less Than Operator
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false


// Comparison with the Less Than Or Equal To Operator
4   <= 5 // true
'7' <= 7 // true
5   <= 5 // true
3   <= 2 // false
'8' <= 4 // false


// Comparisons with the Logical And Operator
if (num > 5 && num < 10) {
    return "Yes";
  }
  return "No";



// Comparisons with the Logical Or Operator
if (num > 10 || num < 5) {
    return "No";
  }
  return "Yes";

  

// Introducing Else Statements
if (num > 10) {
    return "Bigger than 10";
  } else {
    return "10 or Less";
  }

  
// Introducing Else If Statements
if (num > 15) {
    return "Bigger than 15";
  } else if (num < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 15";
  }

  

// Logical Order in If Else Statements
// Here's the first:
function foo(x) {
    if (x < 1) {
      return "Less than one";
    } else if (x < 2) {
      return "Less than two";
    } else {
      return "Greater than or equal to two";
    }
  }
// the second just switches the order of the statements:  
function bar(x) {
    if (x < 2) {
      return "Less than two";
    } else if (x < 1) {
      return "Less than one";
    } else {
      return "Greater than or equal to two";
    }
  }
// While these two functions look nearly identical if we pass a number to both we get different outputs.
foo(0)
bar(0)
// foo(0) will return the string Less than one, and bar(0) will return the string Less than two.




// Chaining If Else Statements
if (condition1) {
    statement1
  } else if (condition2) {
    statement2
  } else if (condition3) {
    statement3
  //...   and many more 
  } else {
    statementN
  }
  



  

/* THE SWITCH STATEMENT*/

//  Selecting from Many Options with Switch Statements
switch (lowercaseLetter) {
    case "a":
      console.log("A");
      break;
    case "b":
      console.log("B");
      break;
  }

  

// Adding a Default Option in Switch Statements
switch (num) {
    case value1:
      statement1;
      break;
    case value2:
      statement2;
      break;
  //... and many more
    default:
      defaultStatement;
      break;
  }

  
// Multiple Identical Options in Switch Statements
let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}



/* Ternary Operators  */

// Use the Conditional (Ternary) Operator
function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
  }

  

//Use Multiple Conditional (Ternary) Operators
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }

  


  

/*  Javascript Arrays and Objects  */

/*  Introduction to Arrays  */

// Store Multiple Values in one Variable using JavaScript Arrays
const sandwich = ["peanut butter", "jelly", "bread"];



// Nest one Array within Another Array
const teams = [["Bulls", 23], ["White Sox", 45]];



// Access Array Data with Indexes
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
// The console.log(array[0]) prints 50, and data has the value 60.


  

// Modify Array Data With Indexes
const ourArray = [50, 40, 30];
ourArray[0] = 15;



// Access Multi-Dimensional Arrays With Indexes
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];
  // subarray has the value [[10, 11, 12], 13, 14], nestedSubarray has the value [10, 11, 12], and element has the value 11 .
  





  /*  Manipulating Arrays  */


// Manipulate Arrays With push Method
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
 // arr1 now has the value [1, 2, 3, 4] and arr2 has the value ["Stimpson", "J", "cat", ["happy", "joy"]]
 
 


// Manipulate Arrays With pop Method
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);



// Manipulate Arrays With shift Method
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();



// Manipulate Arrays With unshift Method
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");




/*  JavaScript Objects  */


// Build JavaScript Objects
const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };


  
// Accessing Object Properties with Dot Notation
const myObj = {
    prop1: "val1",
    prop2: "val2"
  };
  
  const prop1val = myObj.prop1;
  const prop2val = myObj.prop2;

  

// Accessing Object Properties with Bracket Notation
const myObj4 = {
    "Space Name": "Kirk",
    "More Space": "Spock",
    "NoSpace": "USS Enterprise"
  };
  
  myObj4["Space Name"];
  myObj4['More Space'];
  myObj4["NoSpace"];

  


// Updating Object Properties
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };

  

// Add New Properties to a JavaScript Object
ourDog.bark = "bow-wow";



// Delete Properties from a JavaScript Object
delete ourDog.bark;





/*  Javascript Loops and Functions  */

/*  JavaScript Functions  */


// Write Reusable JavaScript with Functions
function functionName() {
    console.log("Hello World");
  }
  


// Passing Values to Functions with Arguments
function testFun(param1, param2) {
    console.log(param1, param2);
  }
/* Then we can call testFun like this: testFun("Hello", "World");.
 We have passed two string arguments, Hello and World. Inside the function,
  param1 will equal the string Hello and param2 will equal the string World.
   Note that you could call testFun again with different arguments and the
    parameters would take on the value of the new arguments.*/



// Return a Value from a Function with Return
function plusThree(num) {
    return num + 3;
  }
  
  const answer = plusThree(5);

  

// Local Scope and Functions
function myTest() {
    const loc = "foo";
    console.log(loc);
  }
  
  myTest();
  console.log(loc);

  

// Global vs. Local Scope in Functions
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}



// Assignment with a Returned Value
ourSum = sum(5, 12);


// Returning Boolean Values from Functions
function isEqual(a, b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }
// now for short form
function isEqual(a, b) {
    return a === b;
  }

  

// Return Early Pattern for Functions
function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
  }
  myFun();

  

  
/*  JavaScript Loops  */ 


// Iterate with JavaScript While Loops
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}



// Iterate with JavaScript For Loops
const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}



// Iterate Odd Numbers With a For Loop
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}



// Count Backwards With a For Loop
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}



// Iterate Through an Array with a For Loop
const arr3 = [10, 9, 8, 7, 6];

for (let i = 0; i < arr3.length; i++) {
   console.log(arr3[i]);
}



// Nesting For Loops
const arr4 = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr4.length; i++) {
    for (let j = 0; j < arr4[i].length; j++) {
      console.log(arr4[i][j]);
    }
  }
  



// Iterate with JavaScript Do...While Loops
const ourArray = [];
let i1 = 0;

do {
  ourArray.push(i);
  i1++;
} while (i1 < 5);
  
  

  

// Use the parseInt Function
const a1 = parseInt("007");
 // The above function converts the string 007 to the integer 7.
 // If the first character in the string can't be converted into a number, then it returns NaN.













































