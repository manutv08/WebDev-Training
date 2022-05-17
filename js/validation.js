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
    let regex_e = /^[A-Za-z]+[\w\W]*@[a-zA-Z0-9]+\.[a-z]{2,3}$/
    if(!regex_e.test(email.value)){
        alert("Invalid email")
        email.focus()
        return false
    }
    if(email.value==="" ){
        alert("email field can't be empty")
        email.focus()
        return false
    }
    let regex_p = /^[\w\W]{5,8}$/
    if(!regex_p.test(password.value)){
        alert("Password length must be between 5 to 8")
        password.focus()
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

// let myarry=[10,20,30,40,50]
// let myarry2=[10,20,30,40,90]
// myarry=[90,...myarry]
// console.log(myarry);
// let obj1={x1:10,y1:20}
// let obj={...obj1,y1:30,z:100}
// console.log(obj);
// let myarr=[...myarry,...myarry2]
// console.log(myarr);
// document.write("\u00A3")
// document.write("\u4F60")
// document.write("\u597D")
// document.write("😑")