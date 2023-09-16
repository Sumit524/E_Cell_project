// Select all elements with class .small-box
const smallBoxes = document.querySelectorAll('.thirdcontainer .small-box');


const specialBox = document.querySelector('.thirdcontainer .small-box_special');


function getRandomColor() {
  
  for (let i = 0; i < 6; i++) {
    color = "red";
  }
  return color;
}


function changeBoxColor(box) {
  box.style.backgroundColor = getRandomColor();
}


specialBox.addEventListener('click', () => {

  smallBoxes.forEach(box => {
    changeBoxColor(box);
  });
});


smallBoxes.forEach(box => {
  box.addEventListener('click', () => {
    
    changeBoxColor(box);
  });
});



