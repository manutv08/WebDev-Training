let obj={name:"Anna",greetings:function(msg,date){
    console.log(`hello ${this.name} ${msg} ${date}`);
}}

let obj1={name:"Raj"}
obj.greetings.call(obj1,"Good Morning", new Date())
obj.greetings.apply(obj1,["Good Morning", new Date()])
let f = obj.greetings.bind(obj1,"Good Night")// partial function application or function currying
f(new Date())

function greet (gender, age, name){
    var salutation = gender ==="male" ? "Mr. " : "Ms. ";
    if(age > 25){
        return "Hello, " + salutation + name + "."; 
    }
    else{
        return "Hey. " + name + "."
    }
}

let greetAnAdultMale = greet.bind(null, "male", 35)
console.log(greetAnAdultMale("Ravi"));
console.log(greetAnAdultMale("Remo"));
console.log(Math.max(10,20,30,90));
let data = [90,70,60,34,100]
console.log(Math.max.apply(null,data));
console.log(Math.floor(19.4));