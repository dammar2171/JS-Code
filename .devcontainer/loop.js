// there are three types of loop 
// 1.for loop 2.while loop 3. do while loop


//-------------For loop --------------------

for (let index = 0; index < 10; index++) {
    //console.log(index);
}

//-------------While loop--------------

let a=1;
while(a<=10){
    //console.log(a);
    a++;
}


//--------------Do While loop------------

let x=1;
do{
   // console.log(x);
    x++;
}while(x<=10);


//lets see the use of break keyword

let num=1;
for (let i = 1; i <=10; i++) { 
    if(i==5){
        //console.log(`${i} is best`);
        break;
    }  
   // console.log(i);
}


let superHeros=["ironman","thor","hulk","batman","superman"]

for (let index = 0; index < superHeros.length; index++) {
    const element = superHeros[index];
    if(element=="superman"){
        //console.log(`${element} is best super hero in marvel`);
    }
   //console.log(element);
}