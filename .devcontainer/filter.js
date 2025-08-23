// filter is used to return a value by checking condition

let number=[1,2,3,4,5,6,7,8]
//const newNum=number.filter((num)=> num>3)

const newNum=number.filter((num)=>( num>4))

//const newNum=number.filter((num)=>{return num>4;})
//console.log(newNum);

// const newNum1=[];

// newNum.forEach((item) => {
//     if(item > 4 ){
//         newNum1.push(item);
//     }
// } )

// newNum1.forEach((item)=> {console.log(item)}
// )


let books=[
    {
        Bname:"book1", genre:"history", price:1000, published:2001, edition:2004,
    },
    {
        Bname:"book2", genre:"science", price:1200, published:2002, edition:2006,
    },
    {
        Bname:"book3", genre:"history", price:1000, published:2021, edition:2025,
    },
    {
        Bname:"book1", genre:"Math", price:400, published:2021, edition:2022,
    }
];

let newBook = books.filter( (bk) =>{ return bk.genre == "history" && bk.Bname == 'book1'})
//console.log(newBook);




// lets see about map 

const numbers=[1,2,3,4,5,6,7,8,9,10];

//const newNums= numbers.map((num) => { return num + 10})
//console.log(newNums);



//chaining of map and filter

//const newNums = numbers.map( (num)=> num+10).map((num)=> num+1);
const newNums = numbers
                .map( (num)=>num+10)
                .map((num)=> num+1)
                .filter((num)=> num>=14);
console.log(newNums);

