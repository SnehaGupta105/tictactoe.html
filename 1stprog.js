// name="Sneha Gupta";
// age=24;
// price=99.99;
// x=null;
// y=undefined;
// isFollow=false;
// console.log(name);
// console.log(age);
// console.log(price);
// console.log(x);
// console.log(y);
// console.log(isFollow);

// let age=16;
// if(age>18){
//     console.log("you can vote");
// }
// if(age<=18){
//     console.log("you cannot vote");
// }
// let mode="dark";
// let color;
// if(mode==="dark"){
//     color="black";
// }
// if(mode==="light"){
//     color="white";
// }
// console.log(color);

// let num=prompt("enter a number");
// if(num%5===0){
//     console.log(num,"is a multiple of 5");
// }
// else{
//     console.log(num,"is a not multiple of 5");
// }

// let str="Javascript";
// let size=0;
// for(let val of str){
//     console.log("i=",val);
//     size++;
// }
// console.log("String size= ",size);//10

// let student={
//     name:"Rahul Kumar",
//     age:20,
//     cgpa:7.5,
//     isPass: true,
// };
// for(let key in student){
//     console.log("key= ",key,"value= ",student[key]);
// }

// let gameNum=25;
// let userNum=prompt("Gusses the game no.: ");
// while(userNum!== gameNum){
//     userNum= prompt("you entered wrong number. Guess right");
// }
// console.log("congtrulation, you entered the right number");

// let obj={
//     item:"pen",
//     price:10,
// };
// let output=`the costof ${obj.item} is ${obj.price} rupees`;//template literals
// console.log(output);
// console.log("the cost of", obj.item,"is", obj.price,"rupees");// normal format for string

// //template literals
// let specialString= `This is a template literal`;
// console.log(typeof specialString);
// let species= `This is a template literal ${1+2+3}`;
// console.log(typeof species);
// console.log("This is a template\nliteral");
// let str="Apna\tCollege";
// console.log(str.length);

// let str=prompt("Enter the fullname without spaces:");
// let length=str.length;
// username="@"+str.concat(length);
// console.log(username);

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i of marks){
//     sum+=i;
// }
// avg=sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);

// let items=[250,645,300,900,50];
// let i=0;
// for(let i of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer= i/10;
//     items[i]=item[i]-offer;
//     console.log(`value after offer= ${item[i]}`);
//     i++;
// }

// let arr=[1,2,3,4,5,6];
// arr.splice(2,2,101,102);
// //add element
// arr.splice(2,0,101);
// //delete element
// arr.splice(3,1);
// //replace element
// arr.splice(3,1,101);

// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// // console.log(companies.shift());
// // console.log(companies);
// // companies.splice(2,1,"ola");
// // console.log(companies);
// companies.push("amozon")
// console.log(companies);

// function sum(x,y){
//     s=x+y;
//     return s;
// }
// let val=sum(5,6);
// console.log(val);

// function String(msg){
//     let count=0;
//     for(let i of msg){
//         if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
//             console.log(`${i} is an vowel  `)
//             count++;
//         }
//     }
//     console.log(count);
// }
// String("Sneha Gupta");


// const String=(msg) => {let count=0;
//     for(let i of msg){
//         if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
//             console.log(`${i} is an vowel  `)
//             count++;
//         }
//     }
//     console.log(count);
// };

// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val);
// })

// let arr=[1,2,3,4];
// arr.forEach((val)=> {
//     console.log(val*val);
// })

let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText +"from apna coolege";
