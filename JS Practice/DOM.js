//DOM SELECTION

console.log(document.title);
//Get ELement by ID
const header = document.querySelector("#main-header");
console.log(header);

//Get Element by Class Name
const li = document.querySelector(".list-group-item");
console.log(li);

//Select nth child
const nthLi = document.querySelector(".list-group-item:nth-child(4)");
console.log(nthLi);


//DOM MANIPULATION

//Change Content
document.querySelector("#header-title").innerHTML = "My ToDo";

//Change Style
document.querySelector("#header-title").style.color="yellow" 

//Change Classes
main.classList.add("active");
main.classList.remove("card");


//Create Element and append
const lii = document.createElement("li");
lii.textContent = "item 5";
lii.classList.add("list-group-item");
document.getElementById("items").appendChild(lii);


