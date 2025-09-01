class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPsd(){
        return `${this.password}xyz`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

// let dammar= new User('dammar','dammar@gmail.com','hackme12');
// console.log(dammar);
// console.log(dammar.changeUsername());
// console.log(dammar.encryptPsd());


//behind the scene
function UserNext(username,email,psd){
    this.username=username
    this.email=email
    this.psd=psd
}

UserNext.prototype.encryptPassword=function (){
    return `${this.psd}xyz`
}
UserNext.prototype.Cusername=function(){
    return `${this.username.toUpperCase()}`
}

let userOne =new UserNext('dipesh',"dipesh@gmail.com",'123456');
console.log(userOne);
console.log(userOne.encryptPassword());
console.log(userOne.Cusername());




