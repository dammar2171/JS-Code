function myFun1(){
const obj1={
    username:"dammar",
    price:999,
    message:function msg(){
       // console.log(`${this.username}, good morning!`);
    }
}
//console.log(obj1.username);
//console.log(obj1.price);
//obj1.message();
//console.log(obj1.message());
}

myFun1()


const arrowFun=()=>{
    //console.log("hello world!");
    const obj1={
        username:"dammar",
        password:"123dam",
        age:12,
    }
   // console.log(obj1.username,obj1.password,obj1.age);
}
arrowFun()

const addTwoNum=(num1,num2)=>{
    return num1+num2
}
//console.log(addTwoNum(12,13))

//const twoAdd=(num1,num2)=> num1+num2
const twoAdd=(num1,num2)=> (num1+num2)
console.log(twoAdd(13,45))


//if we use curly bracess then we have to write return keywords. see above example 
