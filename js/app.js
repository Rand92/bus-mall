'use strict';
let imageArray = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'water-can.jpg',
  'wine-glass.jpg',
];
let counter = 0;
let numberOfRound = 25;
const imageSection = document.getElementById('imageSection');
// let leftImage = document.getElementById('leftImage') ;
// let MiddleImage = document.getElementById('MiddleImage');
// let RightImage = document.getElementById('RightImage');


function bussMall(prductName, productPath) {
  this.prductName = prductName;
  this.productPath = 'images/' + productPath;
  this.NumOfShown = 0;
  this.NumOfClicks = 0;
  bussMall.all.push(this);
}
bussMall.all = [];;

for (let i = 0; i < imageArray.length; i++) {
  new bussMall(imageArray[i].split('.')[0], imageArray[i]);
}
console.log(bussMall.all);
let leftRandom;
let MiddleRandom;
let RightRandom;

function randomImg() {
  leftRandom = gitRandomImg(0, imageArray.length - 1);
  MiddleRandom = gitRandomImg(0, imageArray.length - 1);
  RightRandom = gitRandomImg(0, imageArray.length - 1);


  MiddleImage.src = './' + bussMall.all[RightRandom].productPath;
  RightImage.src = './' + bussMall.all[MiddleRandom].productPath;
  leftImage.src = './' + bussMall.all[leftRandom].productPath;
  bussMall.all[leftRandom].NumOfShown++;
  bussMall.all[MiddleRandom].NumOfShown++;
  bussMall.all[RightRandom].NumOfShown++;
  console.log(bussMall.all)
}

randomImg();

let ulel = document.getElementById('Result');

// console.log(bussMall.all[leftRandom].NumOfClicks);
function gitRandomImg(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let stopButton = document.getElementById('stopButton');

imageSection.addEventListener('click', changingImg);
function changingImg(jump) {
  counter++;
  if ((jump.target.id === 'leftImage'  || jump.target.id === 'MiddleImage' || jump.target.id === 'RightImage') && counter < numberOfRound) {

  if (jump.target.id === 'leftImage' && counter < numberOfRound) {
    bussMall.all[leftRandom].NumOfClicks++;

  }
   if (jump.target.id === 'MiddleImage' && counter < numberOfRound) {
    bussMall.all[MiddleRandom].NumOfClicks++;
  }
 if (jump.target.id === 'RightImage' && counter < numberOfRound) {
    bussMall.all[RightRandom].NumOfClicks++;
  }

  randomImg();
  console.log(bussMall.all); 
  }}
  stopButton.addEventListener('click', ResultOnClick);
    function ResultOnClick() {
      removelist()
      const ulResult = document.getElementById('Result');

      
      for (let i = 0; i < imageArray.length; i++) {
        
        let liResult = document.createElement('li');
        
        liResult.textContent = `${bussMall.all[i].prductName} had ${bussMall.all[i].NumOfClicks} votes, and was seen ${bussMall.all[i].NumOfShown} times.`
        ulResult.appendChild(liResult);

      }
      stopButton.removeEventListener('click', ResultOnClick);
    }
   
  function removelist() {
    document.getElementById('imageSection').removeEventListener('click', changingImg);
  }























// 'use strict';
// let imageArray = [
//   'bag.jpg',
//   'banana.jpg',
//   'bathroom.jpg',
//   'boots.jpg',
//   'breakfast.jpg',
//   'bubblegum.jpg',
//   'chair.jpg',
//   'cthulhu.jpg',
//   'dog-duck.jpg',
//   'dragon.jpg',
//   'pen.jpg',
//   'pet-sweep.jpg',
//   'scissors.jpg',
//   'shark.jpg',
//   'sweep.png',
//   'tauntaun.jpg',
//   'unicorn.jpg',
//   'water-can.jpg',
//   'wine-glass.jpg',
// ];
// let counter = 0;
// let numberOfRound = 25;
// const imageSection = document.getElementById('imageSection');
// // let leftImage = document.getElementById('leftImage') ;
// // let MiddleImage = document.getElementById('MiddleImage');
// // let RightImage = document.getElementById('RightImage');

// function bussMall(prductName, productPath) {
//   this.prductName = prductName;
//   this.productPath = 'images/' + productPath;
//   this.NumOfShown = 0;
//   this.NumOfClicks = 0;
//   bussMall.all.push(this);
// }
// bussMall.all = [];;

// for (let i = 0; i < imageArray.length; i++) {
//   new bussMall(imageArray[i].split('.')[0], imageArray[i]);
// }
// console.log(bussMall.all);
// let leftRandom;
// let MiddleRandom;
// let RightRandom;

// function randomImg() {
//   leftRandom = gitRandomImg(0, imageArray.length - 1);
//   MiddleRandom = gitRandomImg(0, imageArray.length - 1);
//   RightRandom = gitRandomImg(0, imageArray.length - 1);


//   MiddleImage.src = './' + bussMall.all[RightRandom].productPath;
//   RightImage.src = './' + bussMall.all[MiddleRandom].productPath;
//   leftImage.src = './' + bussMall.all[leftRandom].productPath;
//   bussMall.all[leftRandom].NumOfShown++;
//   bussMall.all[MiddleRandom].NumOfShown++;
//   bussMall.all[RightRandom].NumOfShown++;
//   console.log(bussMall.all)
// }

// randomImg();

// let ulel = document.getElementById('Result');

// // console.log(bussMall.all[leftRandom].NumOfClicks);
// function gitRandomImg(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let stopButton = document.getElementById('stopButton');

// imageSection.addEventListener('click', changingImg);
// function changingImg(jump) {
//   counter++;
//   if ((jump.target.id === 'leftImage'  || jump.target.id === 'MiddleImage' || jump.target.id === 'RightImage') && counter < numberOfRound) {

//   if (jump.target.id === 'leftImage' && counter < numberOfRound) {
//     bussMall.all[leftRandom].NumOfClicks++;

//   }
//    if (jump.target.id === 'MiddleImage' && counter < numberOfRound) {
//     bussMall.all[MiddleRandom].NumOfClicks++;
//   }
//  if (jump.target.id === 'RightImage' && counter < numberOfRound) {
//     bussMall.all[RightRandom].NumOfClicks++;
//   }

//   randomImg();
//   console.log(bussMall.all); 
//   }}
//   stopButton.addEventListener('click', ResultOnClick);
//     function ResultOnClick() {

//       for (let i = 0; i < imageArray.length; i++) {
//         const ulResult = document.createElement('ul');
//         ulel.appendChild(ulResult)

//         let liResult = document.createElement('li');
//         ulResult.appendChild(liResult);

//         liResult.textContent = `${bussMall.all[i].prductName} had ${bussMall.all[i].NumOfClicks} votes, and was seen ${bussMall.all[i].NumOfShown} times.`
//       }
//     }
  
 
//   function removelist() {
//     document.getElementById('imageSection').removeEventListener('click', changingImg);
//   }

//   console.log(bussMall.all);

