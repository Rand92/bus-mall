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


function bussMall(prductName, productPath,NumOfShown =0,NumOfClicks=0) {
  this.prductName = prductName;
  this.productPath = 'images/' + productPath;
  this.NumOfShown = NumOfShown;
  this.NumOfClicks =NumOfClicks;
  bussMall.all.push(this);

}
bussMall.all = [];

// for (let i = 0; i < imageArray.length; i++) {
//   new bussMall(imageArray[i].split('.')[0], imageArray[i]);
// }

console.log(bussMall.all);
let leftRandom = gitRandomImg(0, imageArray.length - 1);
let MiddleRandom = gitRandomImg(0, imageArray.length - 1);
let RightRandom = gitRandomImg(0, imageArray.length - 1);
getData();
function randomImg() {

  do {
    leftRandom = gitRandomImg(0, imageArray.length - 1);
    MiddleRandom = gitRandomImg(0, imageArray.length - 1);
    RightRandom = gitRandomImg(0, imageArray.length - 1);
  
  } while( leftRandom===RightRandom || RightRandom===MiddleRandom || MiddleRandom===leftRandom);


  MiddleImage.src = './' + bussMall.all[RightRandom].productPath;
  RightImage.src = './' + bussMall.all[MiddleRandom].productPath;
  leftImage.src = './' + bussMall.all[leftRandom].productPath;
  bussMall.all[leftRandom].NumOfShown++;
  bussMall.all[MiddleRandom].NumOfShown++;
  bussMall.all[RightRandom].NumOfShown++;
  

localStorage.data=JSON.stringify(bussMall.all);

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
     if (counter >= numberOfRound){
      stopButton.remove()
      const ulResult = document.getElementById('Result');

      
      for (let i = 0; i < imageArray.length; i++) {
        
        let liResult = document.createElement('li');
        
        liResult.textContent = `${bussMall.all[i].prductName} had ${bussMall.all[i].NumOfClicks} votes, and was seen ${bussMall.all[i].NumOfShown} times.`
        ulResult.appendChild(liResult);

      }
      stopButton.removeEventListener('click', ResultOnClick);
      chart();
    }
  else (alert('Pick up your 25 favorite products to view the results!^^'));}
   
  function removelist() {
    document.getElementById('imageSection').removeEventListener('click', changingImg);
  }


function chart (){
  let NameOfProduct =[];
  let ProductShown=[];
  let ProductClicks =[];
  for (let i=0;i<bussMall.all.length;i++){
    NameOfProduct.push(bussMall.all[i].prductName);
    ProductShown.push(bussMall.all[i].NumOfShown);
    ProductClicks.push(bussMall.all[i].NumOfClicks);
  }
  var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: NameOfProduct,
        datasets: [{
            label: 'apperance',
            data: ProductShown ,
            backgroundColor: [
                'rgba(20, 9, 132, 0.2)',
                'rgba(54, 162, 35, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(153, 102, 5, 1)',
               
            ],
            borderWidth: 1
        },{label: 'vots',
        data: ProductClicks,
        backgroundColor: [
            'rgba(66, 99, 5, 0.2)',
            'rgba(54, 162, 235, 0.2)',
        
        ],
        borderColor: [
            'rgba(8, 99, 132, 1)',
            'rgba(54, 162, 8, 1)',
           
        ],
        borderWidth: 1} 
      ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}
function getData() {
  if( localStorage.data ) {
    let data = JSON.parse( localStorage.data );
    for( let i = 0; i < data.length; i++ ) {
      new bussMall( data[i].prductName, data[i].productPath, data[i].NumOfShown,data[i].NumOfClicks );
    }}
   else {
    for( let i = 0; i < imageArray.length; i++ ) {
      new bussMall( imageArray[i].split( '.' )[0], imageArray[i] );
    }
   }
  console.log('dssdf');

  }