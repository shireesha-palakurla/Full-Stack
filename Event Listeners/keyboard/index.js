//when we type c we get the text given.....Event listener-keyboard
document.querySelector("body").addEventListener("keydown", (e) => {
  var a = document.querySelector("h1");

  if (e.key === 'c' || e.key === 'C') {
    a.style.color = "red";
    a.textContent = "Whenever a Targaryen is born, God flips the coin.";
  } else {
    a.textContent = "Press 'c' to see the Targaryen quote.";
    a.style.color = "black";
  }
});
