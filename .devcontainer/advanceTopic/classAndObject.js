const user = {
    username:"dammarbhatt",
    password:"123456",
    isLoggedIn:true,
    greet:function(){
       // console.log(`Namaste ${this.username}`);
    }
}

// console.log(user);
// console.log(user.username,user.password);
//console.log(user.greet());


function userTwo(username,password,isLoggedIn){
        this.username=username;
        this.password=password;
        this.isLoggedIn=isLoggedIn;

        return this;
}

const obj1= new userTwo('dammar','1234',true);
const obj2= new userTwo('nisha','1234',false);
console.log(obj1);
console.log(obj2);

