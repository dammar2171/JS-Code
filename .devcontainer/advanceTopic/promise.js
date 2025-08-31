/*Promises in JavaScript are used to handle asynchronous operations by representing a value that may be available now, later, or never.
They make code easier to manage by avoiding callback hell and allowing chaining with .then(), .catch(), and .finally(). */

// const promiseOne = new Promise ((resolve,reject)=>{
// setTimeout(()=>{
//     console.log('data is fetching..');
//     resolve();
// },1000)
// })
// promiseOne.then(()=>{
// console.log('promise resolved');
// })

// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log('data two is fetching..');
//         resolve();
//     }, 2000);
// }).then(()=>{
//     console.log('promise resolved');
// })


//passing parameter to resolve 
// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"dammrbhatt",password:"12345"});
//     },2000)
// })
// promiseThree.then((info)=>{
//     console.log(info.username);
//     console.log(info.password);
    
// })


// .then, .catch and .finally 

/*const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let sucess = true;
        if(sucess){
            resolve('Data fetched sucessfully!');
        }else{
            reject('Data feching failed!');
        }
    }, 2000);
})

promiseFour.then((msg)=>{
    console.log(msg);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("this will run whatever happen with promise.");
}) */

// chaining (.then)

/*const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let sucess=true;
        if(sucess){
            resolve({firstN:"dammar",lastN:"bhatt"});
        }else{
            reject("ERROR: something went wrong!");
        }
    },2000)
})

promiseFive
.then((fullName)=>{
    console.log(fullName);
    return fullName;
})
.then((name)=>{
    console.log(name.firstN);
    return name;
})
.then((name)=>{
    console.log(name.lastN);
})
.catch((error)=>{
    console.log(error);
}) */

/* The main use of async/await is to write asynchronous code that looks and behaves like synchronous code, making it easier to read and debug.
It’s mainly used to handle promises in a cleaner and more structured way than .then() and .catch(). */

// lets see use of async and await 

const promiseSix = new Promise((resolve,reject)=>{
    setInterval(() => {
        let error=false;
        if(!error){
            resolve('database connected sucessfully!')
        }else{
            reject('ERROR: something went wrong!')
        }
    }, 2000);
});

async function promiseResolved(){
   try {
    const response= await promiseSix
   console.log(response);
   } catch (error) {
    console.log(error);
   }
}

promiseResolved();