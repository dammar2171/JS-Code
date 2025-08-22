//for in loop  used  to iterate object 

const object={
        Fname:"dammar",
            Lname:"bhatt",
                age:22,
                    address:"bhamka",
                    }

for (const key in object) {
    //console.log(key);
}

for (const key in object) {
    //console.log(`${key} is ${object[key]} `);
}

//for of loop mostly used for Array,string,map

let arr=[1,2,3,4,5,6];
const a=arr.length
//console.log(a);

for (const val of arr) {
   // console.log(val);
}

const object2={ 
            Fname:"dammar",
            Lname:"bhatt",
            age:22,
            address:"bhamka",   
        }
for (const value of Object.keys(object2)) {
   // console.log(value); 
}
//this will give just key name only 

for (const value of Object.values(object2)) {
   // console.log(` ${value}`);
}

for (const [key,value] of Object.entries(object2)) {
    //.log(`${key} : ${value}`);
}

//For each loop --mostly used in Array

let coding=["java","javascript","kotlin","c#"];

// coding.forEach(function (item){console.log(item);
// })

// coding.forEach( (value)=>{console.log(value);
// } )


const arrObj=[
    {
        language:"java",
        filename:"java"
    },
    {
        language:"javaScript",
        filename:"js"
    },
    {
        language:"Python",
        filename:"py"
    },
]

// arrObj.forEach((item)=>{console.log(`${item.language}:${item.filename}`);
// })

let refExample=[1,2,3,5,9];

function loop(value){
   // console.log(value);
}
loop();
refExample.forEach(loop);
