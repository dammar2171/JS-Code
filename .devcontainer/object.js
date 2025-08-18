const facebook={
    id:1,
    username:{
        fullname:{
            firstName:"dammar",
            lastName:"bhatt",
        },
        password:"dammar123"
    },
    gmail:"dammar@gmail.com",
    isLoggedIn:false,
}

//console.log(facebook);

//console.log(facebook.id);
//console.log(facebook.gmail);

//console.log(facebook.username.fullname.firstName);

const obj1={
    name:'dammar',
    roll:8,
    class:"5th sem",
    subject:"bca"
}
const obj2={
    name:'nirmala',
    roll:9,
    class:"3rd year",
    subject:"bbs",
}

const obj3={...obj1, ...obj2}

//console.log(obj3);

