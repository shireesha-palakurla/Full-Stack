Note:Execute seperately.


// Event listener for mouse click on the button
document.querySelector("button").addEventListener("click", () => {
    // When the button is clicked, an alert box will pop up with the message
    alert(" Welcome to this page!!!");
    
    // Select the first <h1> element in the document
    var a = document.querySelector("h1");
    
    // Change the inner HTML of the <h1> element to "Babbuu!!"
    a.innerHTML = "Thank you!!";
});



// Event listener for keydown events on the body
// This will log the key event object to the console whenever a key is pressed
document.querySelector("body").addEventListener("keydown", (key) => {
    // Log the entire key event object to the console
    console.log(key);
});



// Event listener for keydown events on the body
// This will change the <h1> text to the key that was pressed
document.querySelector("body").addEventListener("keydown", (e) => {
    // Select the first <h1> element in the document
    var a = document.querySelector("h1");
    
    // Change the inner HTML of the <h1> element to the key that was pressed
    a.innerHTML = e.key; // e.key contains the value of the key pressed
});



// Event listener for mouse over on the <h1> element
document.querySelector("h1").addEventListener("mouseover", () => {
    // Select the <h1> element
    var a = document.querySelector("h1");
    
    // Change the text color of the <h1> element to red when the mouse hovers over it
    a.style.color = "red";
});
