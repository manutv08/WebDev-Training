function getValue() {
    let name = document.getElementById("user").value
    console.log("Name", name);
    //    console.log(document.getElementById("p1"));
    document.getElementById("p1").style.color = "yellow"
    document.getElementById("p1").style.fontSize = "40px"
}

function changeColor() {
    let color1 = document.getElementById("colors").value
    document.getElementById("heading1").style.color = color1
}

function setContent() {
    // document.getElementById("mydiv").innerText="This is a demo div"
    document.getElementById("mydiv").innerHTML = "<p>This is a p tag</p>"
}

//literas
let s = "hello"
console.log(s);
let i = 124
let j = 10.45
let s1 = String("hello world")
console.log(s1, typeof s1);
let s2 = String(123)
console.log(s2, typeof s2);
let i1 = Number(900)
console.log(i1, typeof i1);
let b = Boolean(true)
console.log(b, typeof b);
let o1 = new String("hello world")
// console.log(o1, typeof o1);
let o2 = o1.concat('hi all')
console.log(o2);
console.log(o1);
console.log(o1.concat("   hi hello  "));
console.log(o1.charAt(4));//srtring
console.log(o1.toLowerCase());
console.log(o1.toUpperCase());
console.log(o1.includes("hello"));
console.log(o1.indexOf("l"));
console.log(o1.indexOf("l", 3));
console.log(o1.indexOf("l", 4));
console.log(o1.lastIndexOf("l"));
console.log(o1.startsWith("hi"));
console.log(o1.endsWith("world"));
let s3 = "    welcome  "
console.log(s3.toLocaleUpperCase());
console.log(s3);
console.log(s3.trim());
console.log(s3.substring(2));
console.log(s3.substring(2,5));
console.log(s3.trimEnd());
console.log(s3.length);
console.log(s3.trimStart(),s3.trimStart().length);
console.log(s3.trimEnd(),s3.trimEnd().length);