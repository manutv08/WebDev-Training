
let posts=[{"title":"Post1","descriptions":"This is my first post"},
{"title":"Post2","descriptions":"This is my second post"}]
function createPost(post){
    return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        posts.push(post)
        callback()
    },3000)
    })
}
function viewPosts(){
    setTimeout(()=>{
        posts.forEach((post)=>{
            console.log(post.title);
        })
    },2000)
}

createPost({"title":"Third Post","description":"This is my third post"}).
then(x=>{console.log(x); viewPosts()}).catch(err=>console.log(err))


// console.log("start");
// let count=0
// setTimeout(()=>{
// console.log("inside timeout");
// },3000)

// while(count<20){
//     console.log("inside timeout");
//     count++
//     console.log(count);
// }
// console.log('end');

let p1=Promise.resolve(40)
let p2=fetch("https://jsonplaceholder.typicode.com/users").then(data=>data.json())
let p3 = new Promise((res,rej)=>setTimeout(()=>res(100),2000))
Promise.all([p1,p2,p3]).then(x=>console.log(x)).catch(err=>console.log(err))