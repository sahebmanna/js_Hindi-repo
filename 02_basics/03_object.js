//object declared in two types 
//first is singleton & second is NonSingleton
//singleton object declared using -->"Object.xyz"
//NonSingleton object declared using-->"Object6Literals"

//here we discus about NonSingleton technique

const myobj={
    name:"saheb",
    "full name":"saheb manna",
    age:23,
    emailid:"www.saheb@gmail.com",
    location:"tamluk",
    pin:721633

}
//console.log(myobj.pin);
//console.log(myobj.full name);
//while we called the object using dot operator,we can't acces this type("full name") of keys
//console.log(myobj["full name"]);
//this is the actuall procedure,

//now create a symbol and used as a object key//

const mysym=Symbol("firstSymbol")
const myobj2={
    name:"sujan",
    [mysym]:"symbol_1",
    "full name":"sujan mondal",
    age:23
}
// console.log(myobj2[mysym]);
// console.log(typeof myobj2.mysym);

myobj2.greetings=function(){
    console.log("hello user");
    
}
myobj2.greetings2=function(){
    console.log(`hello user ${this.name}`);
    
}
console.log(myobj2.greetings());

console.log(myobj2.greetings2());





