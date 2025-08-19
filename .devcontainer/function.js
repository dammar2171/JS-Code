function myFun(num1,num2){
    //console.log(num1+num2);
    return num1+num2;
}

//console.log(myFun(10,20));


function userLogged(username){
    if(!username=== undefined){
    //console.log(`${username} logged in.`);
    return
    }
    
    //console.log(`${username} logged in.`);
}

//userLogged("dammar");
//userLogged("");
//userLogged();


function fun1(a,b){
    return a-b;
}

const result=fun1(20,12);
//console.log(result);


//... spread operator and ... rest operator

//use of rest operator
function goodPrices(...price){
    return price;
}

//console.log(goodPrices(100,200,300))


//lets see how to pass object as an argument 

let newObj1={
    username:"dammar",
    price:300,
}
function myNewObj1(getObj){
    return getObj
}

//console.log(myNewObj1(newObj1));
//console.log(myNewObj1({username:"damar",price:400}))

//lets see how to pass array as an argument.

const arr1=[100,200,300,400];

function arrayFunction(getArray){
    return getArray
}

//console.log(arrayFunction(arr1));
//console.log(arrayFunction([100,200,300,400]));
