// async function usersData(){
//    const response = await fetch("https://jsonplaceholder.typicode.com/users");
//    const data = await response.json();
//    console.log(data);
// }
// usersData();


//doing samething using using .then

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})