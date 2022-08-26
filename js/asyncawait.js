let posts=[{"title":"Post1","descriptions":"This is my first post"},
{"title":"Post2","descriptions":"This is my second post"}]
function createPost(post){
    return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        posts.push(post)
        resolve("Success")
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

async function init(){
    let r=await createPost({"title":"Post3","description":"This is my third post"})
    viewPosts()
}

init()