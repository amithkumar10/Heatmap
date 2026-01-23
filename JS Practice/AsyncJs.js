function walkDog(){
    return new Promise((resolve, reject)=>{

        const walkDog = true;

        setTimeout(()=>{
            resolve("Dog walked");
        }, 3000)
    })
}


function cleanKitchen(){
    return new Promise((resolve, reject)=>{ 
        const cleanKitchen = true;                                  
        setTimeout(()=>{    
            resolve("Kitchen cleaned");
        }, 2000)
    })
}

function doLaundry(){
    return new Promise((resolve, reject)=>{
        const doLaundry = false;
        setTimeout(()=>{
            if(doLaundry){
                resolve("Laundry done");
            }else{
                reject("Laundry not done");
            }
        }, 1000)
    })
}


async function performTasks(){
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const doLaundryResult = await doLaundry();
    console.log(doLaundryResult);
}

performTasks().then(()=>{
    console.log("All tasks done!");
}).catch((error)=>{
    console.log("Error: "+error);
});