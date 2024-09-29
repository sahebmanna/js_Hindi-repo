var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER:a value -> ", a);
    console.log(`value of b ->${b}`);
    console.log(`value of c ->${c}\n`);
      
}
console.log(`value of a ->${a}`);
// console.log(`value of b is ->${b}`); //it can't work out of scope bound,
console.log(`value of c ->${c}`);

console.log("------------function under function------------");

function one(){
    const username = "saheb"
    console.log(username);
    function two(){
        const website = "youtube"
       console.log(website);
    }
    two()
}

 //one()


 if (true) {
    const username = "saheb"
    if (username === "saheb") {
        const website = " youtube"
        console.log(username + website);
    }
   // console.log(website);
}

//console.log(username);
console.log("------------------------");
//console.log(addone(5))

function addone(num){//basic function
    return num + 1
}

console.log(addTwo(5))
//console.log(addTwo(5)); before Expression declered it function call it can't be recognizeble, (HOIESTING url->"https://www.w3schools.com/js/js_hoisting.asp") 
const addTwo = function(num){
    // it's a Expression, also a function ,
    return num + 2
}
//console.log(addTwo(5));
 
