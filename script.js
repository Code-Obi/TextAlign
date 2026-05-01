let text = document.getElementsByTagName("p")[0];
let left = document.getElementsByTagName("button")[0];
let center = document.getElementsByTagName("button")[1];
let right = document.getElementsByTagName("button")[2];

left.addEventListener("click",()=>{
    text.style.textAlign = "left";
    document.body.bgColor = "green";
});
center.addEventListener("click",()=>{
    text.style.textAlign = "center";
});
center.addEventListener("dblclick",()=>{
    text.style.lineHeight = "20rem";
});
right.addEventListener("click",()=>{
    text.style.textAlign = "right";
});