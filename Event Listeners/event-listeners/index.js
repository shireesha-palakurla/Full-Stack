//event listeners


//mouse click
document.querySelector("button").addEventListener("click",()=>{
alert(" Jai Babuuu!!!");
var a=document.querySelector("h1");
a.innerHTML="Babbuu!!";
});


//mouse click
// open inspect and type letter on browser,letter will be displayed on console.
document.querySelector("body").addEventListener("keydown",(key)=>{
console.log(key);
});
 


//keyboard click

document.querySelector("body").addEventListener("keydown",(e)=>{
    var a=document.querySelector("h1");
    a.innerHTML=e.key;
});

//mouse over
document.querySelector("h1").addEventListener("mouseover",()=>{
    var a=document.querySelector("h1");
   a.style.color="red";
});
