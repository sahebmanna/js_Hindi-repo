//Immediately Invoked Function Expressions (IIFE)

/*
function connection(){
    console.log(`DB connected`)
}
connection()
*/
(function connection(nums){
    console.log(`${nums} DB connected `)
})("ibm");

(function connection(nums){
    console.log(`${nums} DB connected `)
})("oracle");


((comp)=>{
console.log(`${comp} db connection error`);
})("aws")



