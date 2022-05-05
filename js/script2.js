// function getValue() {
//     let name = document.getElementById("user").value
//     console.log("Name", name);
//     //    console.log(document.getElementById("p1"));
//     document.getElementById("p1").style.color = "yellow"
//     document.getElementById("p1").style.fontSize = "40px"
// }

// function changeColor() {
//     let color1 = document.getElementById("colors").value
//     document.getElementById("heading1").style.color = color1
// }

// function setContent() {
//     // document.getElementById("mydiv").innerText="This is a demo div"
//     document.getElementById("mydiv").innerHTML = "<p>This is a p tag</p>"
// }

// //literas
// let s = "hello"
// console.log(s);
// let i = 124
// let j = 10.45
// let s1 = String("hello world")
// console.log(s1, typeof s1);
// let s2 = String(123)
// console.log(s2, typeof s2);
// let i1 = Number(900)
// console.log(i1, typeof i1);
// let b = Boolean(true)
// console.log(b, typeof b);
// let o1 = new String("hello world")
// // console.log(o1, typeof o1);
// let o2 = o1.concat('hi all')
// console.log(o2);
// console.log(o1);
// console.log(o1.concat("   hi hello  "));
// console.log(o1.charAt(4));//srtring
// console.log(o1.toLowerCase());
// console.log(o1.toUpperCase());
// console.log(o1.includes("hello"));
// console.log(o1.indexOf("l"));
// console.log(o1.indexOf("l", 3));
// console.log(o1.indexOf("l", 4));
// console.log(o1.lastIndexOf("l"));
// console.log(o1.startsWith("hi"));
// console.log(o1.endsWith("world"));
// let s3 = "    welcome  "
// console.log(s3.toLocaleUpperCase());
// console.log(s3);
// console.log(s3.trim());
// console.log(s3.substring(2));
// console.log(s3.substring(2,5));
// console.log(s3.trimEnd());
// console.log(s3.length);
// console.log(s3.trimStart(),s3.trimStart().length);
// console.log(s3.trimEnd(),s3.trimEnd().length);
let obj1 = new String("hello")
let obj2 = new Number(147)
let obj3 = new Boolean(147)
console.log(obj1);
console.log(obj2);
console.log(obj3);
let date = new Date()
console.log(date);
console.log(date.getDate());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

let arr=new Array()
console.log(arr);
let arr1=[]
console.log(arr1);

let data=[10,20,11,13,44,19,30]
console.log(data.length);
data[10]=100
console.log(data);
console.log(data[8]);
data.push(80)
console.table(data);
data.unshift(100)
console.log(data);
console.log(data.pop());
console.log(data.shift());
console.log(data);
data.splice(2,3)
console.log(data);

data.splice(2,1,111)
console.log(data);
data.splice(2,2,10,15)
console.log(data);

let data1=data.concat([10,20,90,80,40])
console.log(data1);
console.log(data.indexOf(44));
console.log( data.includes(2000));
data.sort()
console.log(data);
data.reverse()
// console.log(data);

for(let i=0; i<data.length; i++){
    console.log(data[i]);
}
console.log("**********************************");
//for each
for(let element of data){
    console.log(element);
}
//
console.log("**********************************");
for(let i in data){
    console.log("Index",i);
    console.log(data[i]);
}
let s= "hi hello, how are you"
let words=s.split(" ")
console.log(words);

for(let element of words){
    console.log(element);
}
let arr4=["java", "python", "c", "c++"]
let s1=arr4.join("-")
console.log(s1);
let data_sub= data.slice(5,8)
console.log((data_sub));
console.log(data);