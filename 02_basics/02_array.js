const indian_heros=["krish","shaktiman","hanuman","jaguar"]
const foreign_heros=["thor","ironman","hulk","blackpanther"]

const allheros=foreign_heros.concat(indian_heros)
// console.log(foreign_heros);
// console.log(allheros);


//console.log(foreign_heros.indexOf("blackpanther"));

const allnewheros=[...indian_heros,...foreign_heros]
//console.log(allnewheros);

const realarray=[1,2,3,[3,4,5,[6,7]],8]
const realanotherarray=realarray.flat(3)

//console.log(realanotherarray);


console.log(Array.isArray("saheb"))
console.log(Array.from("saheb"));
console.log(Array.from({name:"sahen"}));//interesting

let x=100
let y=200
let z=300
console.log(Array.of(x,y,z));


