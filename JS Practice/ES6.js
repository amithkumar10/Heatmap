//DESTRUCTURING - Arrays and Objects
//They allow us to extract values from arrays or properties from objects into distinct variables.

//Array Destructuring []
//1. Swap variables

let a=1, b=2;

[a, b] = [b, a];
console.log(a);
console.log(b);

//2. Swap array elements

colors = ["Red", "Green", "Blue"];

[colors[0], colors[2]] = [colors[2], colors[0]];
console.log(colors);

//Extracting values from Objects -- Object Destructuring {}

const person1 ={
    firstName: "Amith",
    lastName: "Kumar",
    age:22
};

const person2 = {
    Naam: "Shubham",
    Surnaam: "Chede",
    Umar: 23,
    Kaam: "SDE"
};

const {firstName, lastName, age, job = "Unemployed"} = person1;
const {Naam, Surnaam, Umar, Kaam} = person2; 

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job); //Default value as job is not present in person1

console.log(Naam)
console.log(Surnaam)
console.log(Umar)
console.log(Kaam)


//Destructuring in Function Parameters
function printPerson({firstName, lastName, age, job = "Unemployed"} ){
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`, `Job: ${job}`);
}

printPerson(person1);

//#######################################-NEXT TOPIC-#########################################

//SPREAD OPERATOR - (...) It allows an iterable such as an array or string to be expanded into separate elements (unpacks elements)

//Example 1: 
const arr1 = [1,2,3,4,5];
const max = Math.max(...arr1); //Instead of passing array, we are passing individual elements using spread operator
console.log(max)

//Example 2: Spreading a string
const str = "Hello! I am Amith";
const char = [...str]; //Spreading string into individual characters
console.log(char);

//Example 3: Copying an Array
const arrCopy = [...arr1];
console.log(arrCopy);

const arrCopy2 = [...arrCopy, -1, 0]; //Copying arrCopy and adding extra elements
console.log(arrCopy2);

//Example 4: Merging Arrays
const arr2 = [6,7,8,9,10];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray)

//#######################################-NEXT TOPIC-#########################################

//REST PARAMETER (Opposite of Spread Operator) - It allows us to represent an indefinite number of arguments as an array.

function comnbineStrings(...strings){
    return strings.join(" ");
}

  const fullName = comnbineStrings("Amith", "Kumar")
  console.log(fullName);

function sum(...numbers){
    return numbers.reduce((acc, num)=> acc + num, 0);
}

console.log(sum(1,2,3,4,5)); 

function OpenFridge(...items){
    console.log(items)    
}

const food1 = "Apple";
const food2 = "Banana";
const food3 = "Orange"; 
OpenFridge(food1, food2, food3);
  
//#######################################-NEXT TOPIC-#########################################

//ARROW FUNCTIONS - (=>)
//They provide a concise syntax for writing function expressions and lexically bind the 'this' value.

//Example 1: Basic Arrow Function
const add = (x, y) => x + y;
console.log(add(3, 4));

//Example 2: Arrow Function with Single Parameter
const square = (x) => x * x;
console.log(square(5));

//Example 3: Arrow Function with No Parameters
const greet = () => console.log("Hello, World!");
greet();

//Example 4: Arrow Function with Block Body
const factorial = (n) => {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };
  console.log(factorial(5));



    
