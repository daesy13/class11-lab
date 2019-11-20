


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


var workingProducts = [];
var previouslyPickedProduct = [];

function Producto(producto) {

    this.name = producto;
    this.imgUrl = `assets/${producto}.jpg`;
    // this.clickCtr = 0;
    // this.shownCtr = 0;
  }
  

//   Producto.prototype.clickCountPlus = function(){
//       this.clickCtr++;
//   }

  
  var ctx = document.getElementById('graphContainer');
  
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

  

function randomTres(forbidden){

    var arrayOfTresNumbers = [];

    while(arrayOfTresNumbers.length < 3){
        var newNumber = Math.floor(Math.random() * arrayOfAll.length) + 0;
        if (!arrayOfTresNumbers.includes(newNumber) || !workingProducts.includes(newNumber)){
            arrayOfTresNumbers.push(newNumber);
         }
    }
    return arrayOfTresNumbers;    
}


function drawIt(){


    var new3 = randomTres(workingProducts);

    leftProduct = new Producto(arrayOfAll[new3[0]]);
    leftProductImage.setAttribute('src', leftProduct.imgUrl);
    leftProductNameElement.textContent = leftProduct.name;
    dictionaryOfViews[leftProduct.name]++;

    
  
    centerProduct = new Producto(arrayOfAll[new3[1]]);
    centerProductImage.setAttribute('src', centerProduct.imgUrl);
    centerProductNameElement.textContent = centerProduct.name;
    dictionaryOfViews[centerProduct.name]++;

    

    rightProduct = new Producto(arrayOfAll[new3[2]]);
    rightProductImage.setAttribute('src', rightProduct.imgUrl);
    rightProductNameElement.textContent = rightProduct.name;
    dictionaryOfViews[rightProduct.name]++;

    workingProducts.push(arrayOfAll.indexOf(leftProduct.name));
    workingProducts.push(arrayOfAll.indexOf(centerProduct.name));
    workingProducts.push(arrayOfAll.indexOf(rightProduct.name));

}




function clickHandler(event) {
    
    var id = event.target.id;
  
    if(id == 'leftProduct_img') {
        dictionaryOfClicks[leftProduct.name] += 1;
        // leftProduct.clickCountPlus();
    }else if(id == 'centerProduct_img') {
        dictionaryOfClicks[centerProduct.name] += 1;
        // centerProduct.clickCountPlus();
    }else if(id == 'rightProduct_img'){
        dictionaryOfClicks[rightProduct.name] += 1;
        // rightProduct.clickCountPlus();
    }
    

    for (key in dictionaryOfClicks){
        if (dictionaryOfClicks[key] < 25){
            drawIt();
        }else if(dictionaryOfClicks[key] === 25){
            console.log(`key test: ${dictionaryOfClicks[key]}`);
            drawTheGraph();
            leftProductImage.removeEventListener('click', clickHandler);
            centerProductImage.removeEventListener('click', clickHandler);
            rightProductImage.removeEventListener('click', clickHandler);
            console.log(`left elem: ${leftProductImage}`);
        }
    }
}

function drawTheGraph(){
    var arrayOfClickValues = [];
    for (key in dictionaryOfClicks){
        arrayOfClickValues.push(dictionaryOfClicks[key]);
    }

    var arrayOfViewValues = [];
    for (key in dictionaryOfViews){
        arrayOfViewValues.push(dictionaryOfViews[key]);
        dictionaryOfViews[key] = 0;
    }

    var chart = new Chart(ctx.getContext('2d'), {
  
  type: 'bar',

  // The data for our dataset
  data: {
    labels: arrayOfAll,
    datasets: [{
      label: 'Clicking Dataset',
      backgroundColor: 'blue',
      borderColor: 'rgb(255, 99, 132)',
      data: arrayOfClickValues
    }, {
        label: 'Views Dataset',
        backgroundColor: 'red',
        borderColor: 'rgb(255, 99, 132)',
        data: arrayOfViewValues
      }]
  },

  // Configuration options go here
  options: {}
});
}

drawIt();