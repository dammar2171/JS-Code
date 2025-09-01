class Organization{
    constructor(username){
        this.username=username
    }
    displayUser(){
        console.log(`Username is ${this.username}`);
    }
}
class Boss extends Organization{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    displayBoss(){
        console.log(`Boss name is ${this.username}`);
    }
}
class Employee extends Organization{
    constructor(username,email){
        super(username)
        this.email=email
    }
    displayEmployee(){
    console.log(`employee name is ${this.username} and email is ${this.email}`);
    }
}

let empOne= new Employee('dammar','dammar@gmail.com');
empOne.displayUser();
empOne.displayEmployee();

let empTwo= new Employee('dammar2','dammar111@gmail.com');
empTwo.displayUser();
empTwo.displayEmployee();

console.log(empOne === empTwo);
console.log(empOne instanceof Organization);

