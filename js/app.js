
var leftTarget, middleTarget, rightTarget;

var arrayOfAll = [
    'bag',
    'banana',
    'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-duck',
    'dragon',
    'pen',
    'pet-sweep',
    'scissors',
    'shark',
    'tauntaun',
    'unicorn',
    'water-can',
    'wine-glass'
];

var dictionaryOfClicks = {

    'bag':0,
    'banana':0,
    'bathroom':0,
    'boots':0,
    'breakfast':0,
    'bubblegum':0,
    'chair':0,
    'cthulhu':0,
    'dog-duck':0,
    'dragon':0,
    'pen':0,
    'pet-sweep':0,
    'scissors':0,
    'shark':0,
    'tauntaun':0,
    'unicorn':0,
    'water-can':0,
    'wine-glass':0}

function Producto(producto) {

    this.name = producto;
    this.imgUrl = `assets/${producto}.jpg`;
    this.clickCtr = 0;
    this.shownCtr = 0;
  }
  
  Producto.voteCount = 0;
  Producto.maxVote = 25;

  Producto.prototype.clickCountPlus = function(){
      this.clickCtr++;
  }

  var firstThree = randomTres();

  var leftProduct = new Producto(arrayOfAll[firstThree[0]]);
  var leftProductImage = document.getElementById('leftProduct_img');
  leftProductImage.setAttribute('src', leftProduct.imgUrl);
  var leftProductNameElement = document.getElementById('leftProduct_heading');
  leftProductNameElement.textContent = leftProduct.name;
  leftProductImage.addEventListener('click', clickHandler);

  var centerProduct = new Producto(arrayOfAll[firstThree[1]]);
  var centerProductImage = document.getElementById('centerProduct_img');
  centerProductImage.setAttribute('src', centerProduct.imgUrl);
  var centerProductNameElement = document.getElementById('centerProduct_heading');
  centerProductNameElement.textContent = centerProduct.name;
  centerProductImage.addEventListener('click', clickHandler);


  var rightProduct = new Producto(arrayOfAll[firstThree[2]]);
  var rightProductImage = document.getElementById('rightProduct_img');
  rightProductImage.setAttribute('src', rightProduct.imgUrl);
  var rightProductNameElement = document.getElementById('rightProduct_heading');
  rightProductNameElement.textContent = rightProduct.name;
  rightProductImage.addEventListener('click', clickHandler);


function randomTres(){

    var arrayOfTresNumbers = [];

    while(arrayOfTresNumbers.length < 3){
        var newNumber = Math.floor(Math.random() * arrayOfAll.length) + 0;
        if (arrayOfTresNumbers.includes(newNumber)){
            arrayOfTresNumbers.pop();
        }else{
            arrayOfTresNumbers.push(newNumber);
        }
    }
    // for (i = 0; i < arrayOfTresNumbers.length; i++){
    //     for(x = 0; x < arrayOfTresNumbers.length; x++){
    //         if (arrayOfTresNumbers[i] === arrayOfTresNumbers[x]){
    //             arrayOfTresNumbers[i] = (Math.floor(Math.random() * arrayOfAll.length) + 0);
    //         }
    //     }
    return arrayOfTresNumbers
     }

    // return arrayOfTresNumbers
// }

function drawIt(){

    // var products = [];

    var new3 = randomTres();

    leftProduct = new Producto(arrayOfAll[new3[0]]);
    leftProductImage = document.getElementById('leftProduct_img');
    leftProductImage.setAttribute('src', leftProduct.imgUrl);
    leftProductNameElement = document.getElementById('leftProduct_heading');
    leftProductNameElement.textContent = leftProduct.name;
  
    centerProduct = new Producto(arrayOfAll[new3[1]]);
    centerProductImage = document.getElementById('centerProduct_img');
    centerProductImage.setAttribute('src', centerProduct.imgUrl);
    centerProductNameElement = document.getElementById('centerProduct_heading');
    centerProductNameElement.textContent = centerProduct.name;

    rightProduct = new Producto(arrayOfAll[new3[2]]);
    rightProductImage = document.getElementById('rightProduct_img');
    rightProductImage.setAttribute('src', rightProduct.imgUrl);
    rightProductNameElement = document.getElementById('rightProduct_heading');
    rightProductNameElement.textContent = rightProduct.name;

}



function clickHandler(event) {
    console.log(`${leftProduct.name}:${dictionaryOfClicks[leftProduct.name]}-1`);
    console.log(`${centerProduct.name}:${dictionaryOfClicks[centerProduct.name]}-2`);
    console.log(`${rightProduct.name}:${dictionaryOfClicks[rightProduct.name]}-3`);
    var id = event.target.id;
  
    if(id == 'leftProduct_img') {
        dictionaryOfClicks[leftProduct.name] += 1;
        console.log(`${leftProduct.name}:${dictionaryOfClicks[leftProduct.name]}`);
    } else if('centerProduct_img') {
        dictionaryOfClicks[centerProduct.name] += 1;
        console.log(`${centerProduct.name}:${dictionaryOfClicks[centerProduct.name]}`);
    }else if('rightProduct_img'){
        dictionaryOfClicks[rightProduct.name] += 1;
        console.log(`${rightProduct.name}:${dictionaryOfClicks[rightProduct.name]}`);
    }
    

    if(Producto.voteCount == Producto.maxVote) {
        leftImageElem.removeEventListener('click', clickHandler);
        centerImageElem.removeEventListener('click', clickHandler);
        rightImageElem.removeEventListener('click', clickHandler);
      }

    drawIt();
}


    // for(i =0; i < dictionaryOfClicks.length; i++){
    //     console.log(dictionaryOfClicks)
    //}
