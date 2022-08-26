arr=[]
function getToDo() {
   let task=document.getElementById("todo").value 
   if(task !=''){
       arr.push(task)
   }
   console.log(arr);

    let l = document.createElement("li")
    l.innerText=task
    l.id=arr.length
    console.log(l);
    document.getElementById("mylist").appendChild(l)

    let btn = document.createElement("button")
    btn.innerText="remove"
    btn.id = `btn_${arr.length}`
    btn.setAttribute("onclick", `removeTask(${arr.length})`)
    l.appendChild(btn)
    console.log(arr);
}

function removeTask(index) {
    arr.splice(index-1,1)
    document.getElementById(index).remove()
    for(let i=index+1; i<=arr.length+1; i++){
        document.getElementById(`btn_${i}`).setAttribute("onclick", `removeTask(${i-1})`)
        document.getElementById(`btn_${i}`).setAttribute("id", `btn_${i-1}`)
        document.getElementById(i).setAttribute("id", `${i-1}`)
        console.log(document.getElementById("mylist"));
    }
    console.log(arr);
}
