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

 function displayfox() {
	var sourceOfPicture = "images/firefox-icon.png";
  	var img = document.getElementById('foximg')
  	img.src = sourceOfPicture;
  	img.style.display = "block";
 }

 function hidefox() {
  	var img = document.getElementById('foximg')
  	img.style.display = "none";
 }