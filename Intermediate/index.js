//loop functions in javascript
//for each loop function
// This function iterates over an array of dance styles and logs each style to the console.
// It uses the forEach method to apply a function to each element in the array.
const shiri = ()=> {
     var dance=["gussadi","perini","kuchipudi","bharatanatyam"];
      dance.forEach(team => {
            console.log(team);
        });
    }
shiri();


//map loop function
// This function creates a new array by multiplying each number in the original array by 2.
// It uses the map method to apply a function to each element in the array, returning a new array with the results.
// The result is logged to the console.
const shiri = ()=> {
     var arr=[1,2,3,4,5];
      var newarr=arr.map(num => num*2)
            console.log(newarr);
}
shiri();


//filter loop function
// This function filters an array to include only even numbers.
// It uses the filter method to apply a condition to each element in the array, returning a new array with elements that satisfy the condition.
// The result is logged to the console.
const shiri = ()=> {
     var arr=[1,2,3,4,5,6,7,8,9];
      var newarr=arr.filter(num => num%2===0)
            console.log(newarr);
}
shiri();



//reduce loop function
// This function calculates the sum of all numbers in an array.
// It uses the reduce method to apply a function that accumulates the sum of the elements in the array.
// The initial value for the accumulation is set to 0.
const shiri = ()=> {
     var arr=[1,2,3,4];
      var newarr=arr.reduce((a,b) => a+b,0)
            console.log(newarr);
}
shiri();

