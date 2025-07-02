// Promise example
// This function simulates a delay and returns a promise that resolves with the sum of two numbers
var a= new Promise(function(resolve){
    var b=true;
    if(b){
        resolve("work done");
    }else{
revoke("not done");
    }
    });
    a.then((x)=>{
        console.log(x);
    }).catch((y)=>{
        console.log(y);
    });


// async function to return a promise
// This function simulates a delay and then resolves with the sum of two numbers
var a= async function(){
        try{
            var c = await sum(1,2);
        }
        catch(err){
            console.log(err);
        }
    }
