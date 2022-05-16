function validate(){
    let name=document.getElementById("name")
    let email=document.getElementById("email")
    let password=document.getElementById("password")
    let mobile=document.getElementById("mobile")

    if(name.value===""){
        alert("Name field can't be empty")
        name.focus()
        return false
    }
    let regex = /^[A-Za-z]+[\w\W]*@(gmail.com|yahoo.in)$/
    if(email.value==="" && regex.test()){
        alert("email field can't be empty")
        email.focus()
        return false
    }

    if(password.value===""){
        alert("Password field can't be empty")
        password.focus()
        return false
    }

    if(mobile.value===""){
        alert("mobile field can't be empty")
        mobile.focus()
        return false
    }
    if(isNaN(mobile.value)){
        alert("Invalid mobile no.")
        mobile.focus()
        return false
    }
}

let myarry=[10,20,30,40,50]
let myarry2=[10,20,30,40,90]
myarry=[90,...myarry]
console.log(myarry);
let obj1={x1:10,y1:20}
let obj={...obj1,y1:30,z:100}
console.log(obj);
let myarr=[...myarry,...myarry2]
console.log(myarr);
document.write("\u00A3")
document.write("\u4F60")
document.write("\u597D")
document.write("😑")