// console.log(x);
// // console.log(z);
// // console.log(y);
// console.log("Helllo");
// greetings()
// greetings()
// greetings()
// function greetings() {
//     console.log("hello all");
// }
// // global
// var x=100
// // global
// let y=100
// // block
// for(let i=0; i<3; i++){
// console.log("hello");
// }
// greetings("Good Morinig", "01/21/21")
// greetings("Good eve", "01/21/21")
// greetings("Good Night" )
// function greetings(msg, date ="07-03-95") {
//     console.log("hello all welcome",msg, "Date", date);
// }

// //stack memory, local
// function add(x,y) {
//     var sum=x+y;
//     console.log(sum);
//     return sum
// }
// let result1=add(1,2)
// let result2=add(5,6)
// let result3=greetings("Good day")

function avg(a, b, c) {
    let result;
    if (typeof (a) == "number" && typeof (b) == "number" && typeof (c) == "number") {

        result= ((a + b + c)) / 3
    }
    else {
        console.log("Invalid input");
        result=0
    }
    return result
}
let result = avg(15, 18, 20)
console.log("Average =", result);
console.log(result.toFixed(3));
console.log(result.toString());
console.log(avg(10, 10, 10));

let myfun=function(){
    console.log("My function called");
}
myfun()
console.log(myfun);