const user = {
    username: "saheb",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);//we are in node environment so herse return empty object,

function chai(){
    let username = "saheb"
    console.log(username);
}
chai()

console.log("--------------")


const Chai= function(){
    let username = "saheb"
    console.log(username);
}
Chai()

console.log("-------arrowfun-------")

const fun=(num1,num2)=>{
    return num1+num2//type one arrow fun
}
console.log(fun(16,5));

const Fun=(num1,num2)=> (num1+num2)//here implicitly return value
console.log(Fun(6,5));

//if i want to return object then use carlibraces

const un=(num1,num2)=> ({username:"saheb"})
//here implicitly return value
console.log(un(6,5));



