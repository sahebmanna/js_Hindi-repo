//const tinderUser=new object{} //[singleton technique]

const tinderUser = {}

tinderUser.name="saheb"
tinderUser.id=1234
tinderUser.emailid="www.xyz@gmail.com"
tinderUser.location="kolkata"
tinderUser.logedin=true

//console.log(tinderUser);

const regularuser={
    name:"babu",
    email:"www.xyz@yahoo",
    fullname:{
        firstName:"saheb",
        lastName:"manna"
    }
}

//console.log(regularuser.fullname.lastName);

const object1={
    1:"saheb",
    2:22
}
const object2={
    3:"sujan",
    4:22
}
const object3={
    5:"lakshman",
    6:23
}
//using assignment function
// const newobject=Object.assign({},object1,object2,object3)

// console.log(newobject);

//<!-Using spred(...) operator -!>
const obj={...object1,...object2,...object3}

//console.log(obj);

const newobj=[
    {
        id:"saheb",
        email:22
    },
    {
        id:"sujan",
        email:22
    },
    {
        id:"lakshman",
        email:23
    }
]

//console.log(newobj[0].id);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("logedin"));

//de structured of object
const object11={
    features:"grafics deasigning",
    optimization:false,
    powerconsuming:"high",
    productivity:"high"
}
//lets destructrized the object

const {productivity:xyz}=object11
console.log(xyz);





