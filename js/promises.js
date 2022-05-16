let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("Success")
        reject("error occured")
    },4000)
})
console.log(p);
p.then((data)=>{
    console.log("Data received",data);
}).catch(err=>console.log("Error",err))
// fetch("https://jsonplaceholder.typicode.com/posts").then(response=>response.json())
fetch("https://jsonplaceholder.typicode.com/posts").
then(response=>response.json()).then(data=>{
console.log(data);
let s=""
data = data.slice(0,50)
console.log((data.length));
for(let item of data){
    s+= `<li>${item.title}</li>`
}
document.getElementById("list").innerHTML=s
}).catch(err=>console.log(err))