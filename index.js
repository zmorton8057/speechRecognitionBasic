// Set the window to record wether it is in FireFox or Chrome
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
// Instantiate Speech Recognition Interface
const recognition = new SpeechRecognition();

/// Whenever the microphone is clicked on the page we want to paly the sound and start the speech recognition service
const icon = document.querySelector('i.fa.fa-microphone')
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
container.appendChild(paragraph);
const sound = document.querySelector('.sound');

// The dictate function starts the speech recognition service by calling the start method and returns the result and creates a paragraph element in the DOM
const dictate = () => { recognition.start(); recognition.onresult = (event) => { 
    const speechToText = event.results[0][0].transcript; 
    paragraph.textContent = speechToText; 
    } 
}