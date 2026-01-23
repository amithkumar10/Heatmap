//Closure - is a function defined inside another function, that has access to the outer function's variables and scope of the outer function. Allows for private variables and state management.


//Example of how closure allows us to access outer function's variable
function outer(){
    let m = 1;
    function inner(){
        console.log(m);
    }

    inner();
}

outer();

//Example of closure state management

function counter(){
    let count  = 0;

    function increament(){
        count++;

    }

  

    function getCount(){
        console.log("Current Count is "+ `${count}`);
    }

     return {increament,getCount}
       
}

let count  =  counter();

count.increament(); //1
count.increament(); //2
count.getCount();
count.increament(); //4
count.increament(); //5
count.getCount();