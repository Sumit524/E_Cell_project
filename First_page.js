// Select all elements with class .small-box
const smallBoxes = document.querySelectorAll('.thirdcontainer .small-box');

// Select the special box
const specialBox = document.querySelector('.thirdcontainer .small-box_special');

// Function to generate a random color in hexadecimal format
function getRandomColor() {
  
  for (let i = 0; i < 6; i++) {
    color = "red";
  }
  return color;
}

// Function to change the background color of a box
function changeBoxColor(box) {
  box.style.backgroundColor = getRandomColor();
}

// Add a click event listener to the special box
specialBox.addEventListener('click', () => {
  // Change the color of all small boxes when the special box is clicked
  smallBoxes.forEach(box => {
    changeBoxColor(box);
  });
});

// Add a click event listener to each small box (except the special box)
smallBoxes.forEach(box => {
  box.addEventListener('click', () => {
    // Change the color of the clicked box
    changeBoxColor(box);
  });
});



