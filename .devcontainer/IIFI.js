//immediately invoked function expressions

(function connection(){
    //named IIFI
    console.log("Database connected sucessfully1");
})();


(()=>(console.log("Database connected sucessfully2")
))();


((name)=>{
    console.log(`${name} Database connected sucessfully `)
})("Oracle")