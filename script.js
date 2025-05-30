// Select the HTML element that will contain the hour numbers (1-12) on the clock face
const numberHours = document.querySelector('.number-hours');
// Select the HTML element that will contain the second markers around the clock face
const barSeconds = document.querySelector('.bar-seconds');

// Initialize empty arrays to store the HTML elements that will be created
const numberElement = []; // Will store the hour number elements (1-12)
const barElement = []; // Will store the second marker elements (1-60)

// Create the HTML elements for each hour number on the clock face
for (let i = 1; i <= 12; i++) {
    // For each hour number (1-12), create a span element with:
    // - CSS variable "--index" to position it around the clock (used in CSS for rotation)
    // - A paragraph element containing the hour number
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
    // Log the current state of the numberElement array after each addition
    console.log(numberElement);
}

// Insert all the hour number elements into the clock face at once
// Using join("") to convert the array to a single HTML string without separators
numberHours.insertAdjacentHTML('afterbegin', numberElement.join(""));

// Create the HTML elements for each second marker on the clock face
for (let i = 1; i <= 60; i++) {
    // For each second marker (1-60), create a span element with:
    // - CSS variable "--index" to position it around the clock (used in CSS for rotation)
    // - An empty paragraph element (visual marker only, no text needed)
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
    // Log the current state of the barElement array after each addition
    console.log(barElement);
}

// Insert all the second marker elements into the clock face at once
// Using join("") to convert the array to a single HTML string without separators
barSeconds.insertAdjacentHTML('afterbegin', barElement.join(""));


// Select the HTML elements that represent the hour, minute, and second hands of the clock
const handHours = document.querySelector('.hand.hours');    // Hour hand element
const handMinutes = document.querySelector('.hand.minutes'); // Minute hand element
const handSeconds = document.querySelector('.hand.seconds'); // Second hand element

// Function to get the current time and update the clock hands' positions
function getCurrentTIme() {
    // Create a new Date object to get the current time
    let date = new Date();
    // Extract the current hours (0-23)
    let currentHours = date.getHours();
    // Extract the current minutes (0-59)
    let currentMinutes = date.getMinutes();
    // Extract the current seconds (0-59)
    let currentSeconds = date.getSeconds();

    // Calculate and set the rotation for the hour hand:
    // Each hour = 30 degrees (360° ÷ 12 hours)
    // Add minutes/2 for smooth movement between hours (minutes * 0.5)
    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
    
    // Calculate and set the rotation for the minute hand:
    // Each minute = 6 degrees (360° ÷ 60 minutes)
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    
    // Calculate and set the rotation for the second hand:
    // Each second = 6 degrees (360° ÷ 60 seconds)
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}

// Call the function once immediately to set the clock hands to the current time
getCurrentTIme();

// Set the function to run every second (1000 milliseconds)
// This creates the ticking effect of the clock by continuously updating the hand positions
setInterval(getCurrentTIme, 1000);