import {clearCanvas} from './canvas.js'; // Function to clear the canvas
import {handleKey} from './handlers.js'; // function to handle keypresses
// Select the elements of the page  - shake button

const shakebutton = document.querySelector('.shake');

// listen for arrow keys
window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);

