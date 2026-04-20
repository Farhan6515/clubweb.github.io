
let memberCount=document.querySelector(".mcount")
let jointBtn=document.querySelector("#joinbtn")
let member=0
console.log(jointBtn)

jointBtn.addEventListener("click",()=>{
     member++;
     console.log(member)
     memberCount.innerText=member;
})