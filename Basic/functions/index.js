// Function to alert a message
function a(){
var a=prompt("enter first number");
a=parseInt(a);
var b=prompt("enter second number");
 b=parseInt(b);
var c=a+b;
alert(c);
}

//functions and types
// Function declaration
function ccc(a,b){
    return a+b;
}
var c=ccc(4,6);
console.log(c);

 // Function expression
 var beta=function(a,b){
     return a+b;
 }
 var c=beta(4,6);
 console.log(c);
 
 
 // Function expression with arrow function syntax
 // This is a concise way to write functions in JavaScript
 var beta=(a,b)=> console.log(a+b)
 var c=beta(4,6)
 
 
 // Function expression with arrow function syntax
 // This is a concise way to write functions in JavaScript
 var peta=(a,b)=>{
     return a+b;
 }
 var c=peta(4,6);
 console.log(c);
