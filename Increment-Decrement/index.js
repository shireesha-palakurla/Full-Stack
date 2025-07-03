
// This function increments the number displayed in the <h1> element by 1 when called.
// It selects the <h1> element, retrieves its current inner HTML, converts it to a number, adds 1, and updates the inner HTML with the new value.
// It is typically called when a button is clicked to increase the count displayed on the page.
const alpha = () => {
     var a= document.querySelector("h1");
     a.innerHTML=Number(a.innerHTML) + 1;
}

// This function increments the number displayed in the <h1> element by 1 when called.
// It selects the <h1> element, retrieves its current inner HTML, converts it to a number, adds 1, and updates the inner HTML with the new value.
// It is typically called when a button is clicked to increase the count displayed on the page.
const beta = () => {
    var b=document.querySelector("h1");
    b.innerHTML=Number(b.innerHTML) - 1;
}


 
