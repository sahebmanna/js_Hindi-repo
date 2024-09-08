const myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.getMonth()+1);
console.log(myDate.getDay());



console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

const newdate=new Date(2023,0,22,22,39)
console.log(newdate.toLocaleString());

const newdate2=new Date("2024-09-8")
console.log(newdate2.toLocaleString());

let myCreatedDate = new Date("08-09-2024")
 console.log(myCreatedDate.toLocaleString());

 //time stamp
 const myTimeStamp=Date.now()
 console.log(myTimeStamp);

 console.log(Math.floor(Date.now()/1000));
 
 


