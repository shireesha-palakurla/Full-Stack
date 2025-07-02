// Function demonstrating DOM manipulation
        function alpha(){
            // Select element with class 'a' and modify its style
            var a = document.querySelector(".a");
            a.style.fontSize = '100px';  // Sets font size to 100px 
            a.style.color = "blue";      // Changes text color to blue
            
            // Select element with id 'b' and change its text content
            var b = document.querySelector("#b");
            b.textContent = "World!!!!"; // Updates inner text
        }
