const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;

// Define a function to show and hide the fox image
document.getElementById("foxbutton").addEventListener("click",
 function (event) {
 	if (event.target.value === "Check Out Our Fox") {
 		document.getElementById('foximg').style.display = "block"
 		event.target.value = "Hide Our Fox";
 	} else {
 		document.getElementById('foximg').style.display = "none"
 		event.target.value = "Check Out Our Fox"
 	}
 },
 false
 );