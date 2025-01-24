//step-1  Array to store colors
let colorArray = [];

// Step-2 Select DOM elements
const colorInput = document.getElementById('colorInput');
const storeColorBtn = document.getElementById('storeColorBtn');
const showColorsBtn = document.getElementById('showColorsBtn');
const colorButtonsContainer = document.getElementById('colorButtons');

//step-3 Store color button click event
storeColorBtn.addEventListener('click', function() {
    const colorValue = colorInput.value;
    if (colorValue) {
        // Store color in array
        colorArray.push(colorValue);

        // Create a button for this color
        createColorButton(colorValue);
        
        // Clear the input field after storing the color
        colorInput.value = '';
    }
});

//step-4 Show stored colors button click event
showColorsBtn.addEventListener('click', function() {
    displayStoredColors();
});

// Function to create a button for each color stored
function createColorButton(color) {
    const colorButton = document.createElement('button');
    colorButton.textContent = color;
    colorButton.style.backgroundColor = color;
    colorButton.style.color = '#fff'; // text color for contrast
    colorButton.style.border = 'none';
    
    colorButton.addEventListener('click', function() {
        // Update background color of the body to the clicked color
        document.body.style.backgroundColor = color;
        
        // Remove the button after clicking
        colorButton.remove();
    });

    // Append the color button to the container
    colorButtonsContainer.appendChild(colorButton);
}

// Function to display all stored color buttons
function displayStoredColors() {
    // Clear the container before showing new buttons
    colorButtonsContainer.innerHTML = '';

    // Loop through all stored colors and create buttons for each
    colorArray.forEach(color => {
        createColorButton(color);
    });
}
