let posts=[{"title":"Post1","descriptions":"This is my first post"},
{"title":"Post2","descriptions":"This is my second post"}]
function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
        callback()
    },3000)
}
function viewPosts(){
    setTimeout(()=>{
        posts.forEach((post)=>{
            console.log(post.title);
        })
    },2000)
}

createPost({"title":"Third Post","description":"This is my third post"},viewPosts)


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