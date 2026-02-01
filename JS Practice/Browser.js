//Local Storgage Example

localStorage.setItem("Name", "Amith"); //Setting item in local storage  

console.log(localStorage.getItem("Name")); //Getting item from local storage

localStorage.removeItem("Name"); //Removing item from local storage
console.log(localStorage.getItem("Name")); //Now it will return null as the item is removed

localStorage.clear(); //Clearing all items from local storagee



//Session Storage Example

sessionStorage.setItem("Session", "Active"); //Setting item in session storage
console.log(sessionStorage.getItem("Session")) //Getting item from session storage

sessionStorage.removeItem("Session"); //Removing item from session storage
console.log(sessionStorage.getItem("Session")); //Now it will return null as the item is removed

sessionStorage.clear(); //Clearing all items from session storage




//Cookies Example

document.cookie = "username=Amith; expires=Fri, 31 Dec 2027 23:59:59 UTC; path=/";
console.log("COOKIEE: "+document.cookie); //Getting all cookies

document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
console.log("cookie:"+document.cookie); //Removing all cookies