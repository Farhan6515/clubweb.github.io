// const sib=document.querySelector("#signInBtn");
// const sub=document.querySelector("#signUpBtn");
// const sic = document.querySelector(".container1");  
//const suc = document.querySelector(".container");  
// sib.addEventListener('click',()=>{
//       sub.style.display = "none";
//       sib.style.display = "block";
//       sub.style.display = "block";
//       sib.style.display = "none";
// });

// sub.addEventListener('click',()=>{
//       sub.style.display = "block";
//       sib.style.display = "none";
//       sub.style.display = "none";
//       sib.style.display = "block";
// })
const sib = document.querySelector("#signInBtn");
const sub = document.querySelector("#signUpBtn");
const sic = document.querySelector(".container1");  
const suc = document.querySelector(".container");  

sib.addEventListener('click', () => {
        suc.style.display = "none";  
        sic.style.display = "block";  
        sub.style.display = "block";  
        sib.style.display = "none";   
});

sub.addEventListener('click', () => {
         sic.style.display = "none";  
         suc.style.display = "block";  
         sub.style.display = "none";  
         sib.style.display = "block";  
});

