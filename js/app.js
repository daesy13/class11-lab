
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

var dictionaryOfViews = {

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

  

  var leftProduct;
  var leftProductImage = document.getElementById('leftProduct_img');
  var leftProductNameElement = document.getElementById('leftProduct_heading');
  
  leftProductImage.addEventListener('click', clickHandler);

  var centerProduct;
  var centerProductImage = document.getElementById('centerProduct_img');
  var centerProductNameElement = document.getElementById('centerProduct_heading');
  
  centerProductImage.addEventListener('click', clickHandler);

  rightProduct;
  rightProductImage = document.getElementById('rightProduct_img');
  rightProductNameElement = document.getElementById('rightProduct_heading');
  
  rightProductImage.addEventListener('click', clickHandler);


function randomTres(){

    var arrayOfTresNumbers = [];

    while(arrayOfTresNumbers.length < 3){
        var newNumber = Math.floor(Math.random() * arrayOfAll.length) + 0;
        if (!arrayOfTresNumbers.includes(newNumber)){
            arrayOfTresNumbers.push(newNumber);
         }
    }
    return arrayOfTresNumbers
}

function drawIt(){


    var new3 = randomTres();

    leftProduct = new Producto(arrayOfAll[new3[0]]);
    leftProductImage.setAttribute('src', leftProduct.imgUrl);
    leftProductNameElement.textContent = leftProduct.name;
    dictionaryOfViews[leftProduct.name] += 1;
  
    centerProduct = new Producto(arrayOfAll[new3[1]]);
    centerProductImage.setAttribute('src', centerProduct.imgUrl);
    centerProductNameElement.textContent = centerProduct.name;
    dictionaryOfViews[centerProduct.name] += 1;

    rightProduct = new Producto(arrayOfAll[new3[2]]);
    rightProductImage.setAttribute('src', rightProduct.imgUrl);
    rightProductNameElement.textContent = rightProduct.name;
    dictionaryOfViews[rightProduct.name] += 1;

}



function clickHandler(event) {
    
    var id = event.target.id;
  
    if(id == 'leftProduct_img') {
        dictionaryOfClicks[leftProduct.name] += 1;
        leftProduct.clickCountPlus();
    }else if(id == 'centerProduct_img') {
        dictionaryOfClicks[centerProduct.name] += 1;
        centerProduct.clickCountPlus();
    }else if(id == 'rightProduct_img'){
        dictionaryOfClicks[rightProduct.name] += 1;
        rightProduct.clickCountPlus();
    }
    
    // console.log(`${leftProduct.name}:${dictionaryOfClicks[leftProduct.name]} clicks`);
    // console.log(`${leftProduct.name}:${dictionaryOfViews[leftProduct.name]} views`);
    // console.log(`${centerProduct.name}:${dictionaryOfClicks[centerProduct.name]} clicks`);
    // console.log(`${leftProduct.name}:${dictionaryOfViews[centerProduct.name]} views`);
    // console.log(`${rightProduct.name}:${dictionaryOfClicks[rightProduct.name]} clicks`);
    // console.log(`${leftProduct.name}:${dictionaryOfViews[rightProduct.name]} views`);

    for (key in dictionaryOfClicks){
        if (dictionaryOfClicks[key] < 25){
            drawIt();
        }else if(dictionaryOfClicks[key] === 25){
            window.alert(`${dictionaryOfClicks[key]} voted 25 times!`);
            leftImageElem.removeEventListener('click', clickHandler);
            centerImageElem.removeEventListener('click', clickHandler);
            rightImageElem.removeEventListener('click', clickHandler);
            break;
        }
    }
}

drawIt();
