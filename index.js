// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const button = document.querySelector('button');

const array1 = [23, 54, 4, 97, 432, 35, 16];
const array2 = [9, 20, 58, 1000, 67, 86, 43, 21, 99, 154, 222, 11];

for (let ele of array1) {
  appDiv.innerHTML += `<div class="circle">
                        <span>${ele}</span>
                      </div>`;
}

button.addEventListener('click', clickHandler);

function findMax(number, arr) {
  // Get a copy of the original array
  const arrayCopy = [...arr];
  const maxNumArr = [];
  let maxNum = 0;
  let positionArray = [];
  const colorArray = [
    'rgb(212,175,55)',
    'rgb(170,169,173)',
    'rgb(169,113,66)',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
  ];

  // Get max number of copied array, push to maxNumArr and splice it.
  for (let i = 0; i < number; i++) {
    maxNum = Math.max(...arrayCopy);
    maxNumArr.push(maxNum);
    arrayCopy.splice(arrayCopy.indexOf(maxNum), 1);
  }

  // Get the indexes of max numbers
  for (let ele of maxNumArr) {
    positionArray.push(arr.indexOf(ele) + 1);
  }

  // Set the max numbers' background to the color in the colorArray, looping through 10 different colors.
  for (let i = 0; i < positionArray.length; i++) {
    const selector = `div#app > div:nth-child(${positionArray[i]})`;
    const circle = document.querySelector(selector);
    circle.style.backgroundColor = colorArray[i % 10];
  }
}

function clickHandler() {
  findMax(3, array1);
  //findMax(10, array2);
}
