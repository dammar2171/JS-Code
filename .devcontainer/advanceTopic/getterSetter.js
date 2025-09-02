class User{
    constructor(username,email){
        this.username=username
        this.email=email
    }

    get email (){
        return `${this._email.toUpperCase()}`
    }
    set email(value){
        this._email=value
    }
}

const user1= new User('dammar','dammar@gmail.com')
console.log(user1.email);
