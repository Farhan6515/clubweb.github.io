let bookApi="https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyCtVFZGYnjylyzXQhlsQ48i8LgMHVL892I";

let search =document.querySelector("#search")
let input =document.getElementById("input");



let book =document.querySelector("#book")
let book1 =document.querySelector("#book1")
let book2=document.querySelector("#book2")
let book3=document.querySelector("#book3")
let book4=document.querySelector("#book4")
let book5=document.querySelector("#book5")

let img=document.querySelector("#img")
let img1=document.querySelector("#img1")
let img2=document.querySelector("#img2")
let img3=document.querySelector("#img3")
let img4=document.querySelector("#img4")
let img5=document.querySelector("#img5")

let t=document.querySelector("#t")
let t1=document.querySelector("#t1")
let t2=document.querySelector("#t2")
let t3=document.querySelector("#t3")
let t4=document.querySelector("#t4")
let t5=document.querySelector("#t5")

let p=document.querySelector("#p")
let p1=document.querySelector("#p1")
let p2=document.querySelector("#p2")
let p3=document.querySelector("#p3")
let p4=document.querySelector("#p4")
let p5=document.querySelector("#p5")

let page=document.querySelector("#page")
let page1=document.querySelector("#page1")
let page2=document.querySelector("#page2")
let page3=document.querySelector("#page3")
let page4=document.querySelector("#page4")
let page5=document.querySelector("#page5")

let authar=document.querySelector("#authar")
let authar1=document.querySelector("#authar1")
let authar2=document.querySelector("#authar2")
let authar3=document.querySelector("#authar3")
let authar4=document.querySelector("#authar4")
let authar5=document.querySelector("#authar5")

let pd=document.querySelector("#pd")
let pd1=document.querySelector("#pd1")
let pd2=document.querySelector("#pd2")
let pd3=document.querySelector("#pd3")
let pd4=document.querySelector("#pd4")
let pd5=document.querySelector("#pd5")


let s=async (a)=>{
   
    let check=await fetch(a);
    
    console.log(check)
    result= await check.json();
    book.style.display="block"
    console.log(result)
    console.log(result.items[0])
    console.log(result.items[0].volumeInfo.title  );
    t.innerText=result.items[0].volumeInfo.title;
    img.src=result.items[0].volumeInfo.imageLinks.thumbnail;
    p.href=result.items[0].volumeInfo.previewLink
    page.innerText=`${result.items[0].volumeInfo.pageCount} Pages`
    pd.innerText=`Publish:${result.items[0].volumeInfo.publishedDate}`
    authar.innerText=`Author:${result.items[0].volumeInfo.authors}`;
    

}

let s1=async (a)=>{
   
    let check=await fetch(a);
    
    console.log(check)
    result= await check.json();
     book1.style.display="block"
    console.log(result)
    console.log(result.items[1])
    console.log(result.items[1].volumeInfo.title  );
    t1.innerText=result.items[1].volumeInfo.title;
    img1.src=result.items[1].volumeInfo.imageLinks.thumbnail;
    p1.href=result.items[1].volumeInfo.previewLink
    page1.innerText=`${result.items[1].volumeInfo.pageCount} Pages`
    pd1.innerText=`Publish:${result.items[1].volumeInfo.publishedDate}`
    authar1.innerText=`Author:${result.items[1].volumeInfo.authors}`;
    

}

let s2=async (a)=>{
   
    let check=await fetch(a);
    
    console.log(check)
    result= await check.json();
     book2.style.display="block"
    console.log(result)
    console.log(result.items[2])
    console.log(result.items[2].volumeInfo.title  );
    t2.innerText=result.items[2].volumeInfo.title;
    img2.src=result.items[2].volumeInfo.imageLinks.thumbnail;
    p2.href=result.items[2].volumeInfo.previewLink
    page2.innerText=`${result.items[2].volumeInfo.pageCount} Pages`
    pd2.innerText=`Publish:${result.items[2].volumeInfo.publishedDate}`
    authar2.innerText=`Author:${result.items[2].volumeInfo.authors}`;
    

}

let s3=async (a)=>{
   
    let check=await fetch(a);
    
    console.log(check)
    result= await check.json();
     book3.style.display="block"
    console.log(result)
    console.log(result.items[3])
    console.log(result.items[3].volumeInfo.title  );
    t3.innerText=result.items[3].volumeInfo.title;
    img3.src=result.items[3].volumeInfo.imageLinks.thumbnail;
    p3.href=result.items[3].volumeInfo.previewLink
    page3.innerText=`${result.items[3].volumeInfo.pageCount} Pages`
    pd3.innerText=`Publish:${result.items[3].volumeInfo.publishedDate}`
    authar3.innerText=`Author:${result.items[3].volumeInfo.authors}`;
    

}

let s4=async (a)=>{
   
    let check=await fetch(a);
    
    console.log(check)
    result= await check.json();
     book4.style.display="block"
    console.log(result)
    console.log(result.items[4])
    console.log(result.items[4].volumeInfo.title  );
    t4.innerText=result.items[4].volumeInfo.title;
    img4.src=result.items[4].volumeInfo.imageLinks.thumbnail;
    p4.href=result.items[4].volumeInfo.previewLink
    page4.innerText=`${result.items[4].volumeInfo.pageCount} Pages`
    pd4.innerText=`Publish:${result.items[4].volumeInfo.publishedDate}`
    authar4.innerText=`Author:${result.items[4].volumeInfo.authors}`;
    

}

let s5=async (a)=>{
   
    let check=await fetch(a);
    
    console.log(check)
    result= await check.json();
     book5.style.display="block"
    console.log(result)
    console.log(result.items[5])
    console.log(result.items[5].volumeInfo.title  );
    t5.innerText=result.items[5].volumeInfo.title;
    img5.src=result.items[5].volumeInfo.imageLinks.thumbnail;
    p5.href=result.items[5].volumeInfo.previewLink
    page5.innerText=`${result.items[5].volumeInfo.pageCount} Pages`
    pd5.innerText=`Publish:${result.items[5].volumeInfo.publishedDate}`
    authar5.innerText=`Author:${result.items[5].volumeInfo.authors}`;
    

}

search.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let v1=input.value
    bookApi=`https://www.googleapis.com/books/v1/volumes?q=${v1}&key=AIzaSyCtVFZGYnjylyzXQhlsQ48i8LgMHVL892I`
   
    console.log(bookApi)
   s(bookApi);
   s1(bookApi);
   s2(bookApi);
   s3(bookApi);
   s4(bookApi);
   s5(bookApi);
   
    
})