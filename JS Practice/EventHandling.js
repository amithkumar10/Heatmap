// Event handling is the process of executing JavaScript when a user interacts with the page.

// Examples:
// click
// submit
// keypress
// mouseover
// change

//#########################Examples#########################

//Click Event Listener
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e)=>{
    console.log("Button Clicked");
})

//Submit Event Listener
const form = document.querySelector("form");
const formInput = document.querySelector(".ip");

form.addEventListener("submit", (e)=>{
    e.preventDefault(); 

    if(formInput.value.trim() === ""){
        alert("Please eneter an item");
        return;
    }

    alert("Form Submitted");
    formInput.value = "";
})



//Keypress Event Listener
const input = document.addEventListener("keypress", (e)=>{
    console.log(`Key pressed: ${e.key}`);
})

//Mouseover Event Listener
const ul = document.querySelector("#items");

ul.addEventListener("mouseover", (e)=>{
    if(e.target.classList.contains("list-group-item")){
        e.target.style.backgroundColor = "yellow";
        e.target.style.cursor = "pointer";
    }
})

ul.addEventListener("mouseout", (e)=>{
    if(e.target.classList.contains("list-group-item")){
        e.target.style.backgroundColor = 'transparent';
    }
})

//Change Event Listeners
const ip = document.querySelector(".ip");

ip.addEventListener("change", (e)=>{
    console.log("Input changed to: " + e.target.value);
})