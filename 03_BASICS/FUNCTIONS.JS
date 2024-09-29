// function myname(){
// console.log("saheb");

// }
// myname()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2=10){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(5,1)
// console.log(result);

function f1(...nums){
    return nums;
}


//console.log(f1(200, 400, 500, 2000))

const user = {
    user_name: "saheb",
    user_id: 48
}
user.user_name="sujan"

function printObjectDetails(AnyObject){
console.log(`My user_name is ${AnyObject.user_name} and my user_id is ${AnyObject.user_id} `);
}

//printObjectDetails(user)
// printObjectDetails({
//     user_name: "Xtention_coder",
//     user_id: 1
// })

const arr = [200, 400, 100, 600]

function returnSecondValue(arr){
    return arr[1]
}
console.log(returnSecondValue(arr));

