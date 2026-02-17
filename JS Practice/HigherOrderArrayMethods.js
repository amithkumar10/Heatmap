const Companies = [
    {name: "Google", category: "Finance", start: 1981, end: 2004},
    {name: "Microsoft", category: "Retail", start: 1992, end: 2008},
    {name: "Oracle", category: "Auto", start: 1999, end: 2007},
    {name: "Apple", category: "Retail", start: 1989, end: 2010},
    {name: "Amazon", category: "Technology", start: 2009, end: 2014},
    {name: "Odoo", category: "Management", start: 1987, end: 2010},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



//Convert to JSON

const companiesJSON =  JSON.stringify(Companies);
console.log(companiesJSON);
console.log(typeof companiesJSON);

// Convert back to JS Object

const companiesObj = JSON.parse(companiesJSON);
console.log(companiesObj);
console.log(typeof companiesObj);

console.log(Companies);
console.log(typeof Companies);



// #######################--NEXT TOPIC--#######################################

// HERE WE ARE DISCUSSING HIGHER ORDER ARRAY METHODS LIKE 
// forEach, filter, map, sort, reduce
//some,every, find, findIndex, flatMap

// NOTE: THESE METHODS DO NOT CHANGE THE ORIGINAL ARRAY, INSTEAD THEY RETURN A NEW ARRAY. ALSO, THEY TAKE A CALLBACK FUNCTION AS AN ARGUMENT, HENCE THEY ARE CALLED HIGHER ORDER METHODS.


//forEach

//Arrow Function
Companies.forEach((company) => {
    console.log(company.name);
    console.log(company.category);
})

//Regular Function
Companies.forEach(function(company, index, Companies){
    console.log(index, company.name, Companies[index]);
})

//You can also write it using only a single parameter
Companies.forEach(function(company){
    console.log(company.name);
});


// #######################--NEXT TOPIC--#######################################




//filter

//Normally done using for loop

let canDrink = [];

for(let i =0; i<ages.length; i++){
    if(ages[i] >= 21){
        canDrink.push(ages[i]);
    }
}

console.log(canDrink);

//Using filter method 
const canDrinkkk = ages.filter(function(age){
    if(age >= 21){
        return true;
}

});
console.log(canDrinkkk);

//Using filter method  & arrow function

const canDrinkk = ages.filter((age)=> {
    if(age >= 21){
        return true;
    }
})

console.log(canDrinkk);

//One liner
const canDrinkk1 = ages.filter((age) => age >= 21);
console.log(canDrinkk1);

// Practice Questions
// 1. Get all retail companies
// 2. Get all companies that started in the 80s
// 3. Get all companies that lasted 10 years or more


// #######################--NEXT TOPIC--#######################################



//map - used when you want to create a new array from an existing array with some modifications. Note that we do not modify the original array.

const companyNames = Companies.map((company)=> company.name);
console.log(companyNames);   

const newCompanies =  Companies.filter((company)=> company.start > 1985);

const newCompanyNames = newCompanies.map((company)=> company.name); 
console.log(newCompanyNames);

const squaredAged = ages.map((age) => Math.pow(age, 2)); //new array from ages array with squared values
console.log(squaredAged);



// #######################--NEXT TOPIC--#######################################



//sort - accepts comparative callback function that tells how to sort the array elements.

//ASCENDING ORDER
const sortedCompanies = Companies.sort((c1, c2)=>(c1.start-c2.start));
console.log(sortedCompanies);

const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);

//DESCENDING ORDER
const sortedCompaniesDesc = Companies.sort((c1, c2)=>(c2.start - c1.start));
console.log(sortedCompaniesDesc);

const sortedAgesDesc = ages.sort((a, b) => b - a);
console.log(sortedAgesDesc);



// #######################--NEXT TOPIC--#######################################

//reduce -- is used to combine all elements of an array into a single value.

let ageSum = 0;
ages.forEach((age) => {
    ageSum += age;
});
console.log(ageSum);    

//Using reduce method
// array.reduce((accumulator, currentValue, index, array) => {
//   // accumulation logic
// }, initialValue)


const ageSum1 = ages.reduce((total, age) => total + age, 0);
console.log(ageSum1);


// #######################--NEXT TOPIC--#######################################

//some - Checks if there is **any** adult.
const hasAdult = ages.some((age) => age >= 18);
console.log(hasAdult);

// #######################--NEXT TOPIC--#######################################
//every - ALL elements must match**
const allAdults = ages.every((age) => age >= 18);
console.log(allAdults); //Checks if **everyone** is an adult.


// #######################--NEXT TOPIC--#######################################
//find() → **Returns FIRST matching element**
const retailCompany = Companies.find((c) => c.category === "Retail");
console.log(retailCompany); // Finds the **first Retail company object**.


// #######################--NEXT TOPIC--#######################################
//findIndex - Index of FIRST match
const oracleIndex = Companies.findIndex((c) => c.name === "Oracle"); //Returns the **index** of Oracle.
console.log(oracleIndex);

