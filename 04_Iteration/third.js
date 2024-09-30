const arr = [1, 2, 3, 4, 5]
let i=0
for (const x of arr) {
    console.log(x);
    i++
}
//console.log(i);

const greetings = "Hello world!"
for (const i of greetings) {
    console.log(`Each char is ${i}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


 //console.log(map);

for (const [key, value] of map) {
     //console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
/////////////myObject is not iterable 
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
