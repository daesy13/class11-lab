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

function Product(producto) {

    this.name = producto;
    this.imgUrl = `assets/${producto}.jpg`;
    this.clickCtr = 0;
    this.shownCtr = 0;
  }
  
  Product.voteCount = 0;
  Product.maxVote = 25;

  Product.prototype.clickCountPlus = function(){
      this.clickCtr++;
  }

function randomTres(){

    var arrayOfTresNumbers = [];

    for(i = 0; i < 3; i++){
        arrayOfTresNumbers.push(Math.floor(Math.random() * arrayOfAll.length) + 0);
    }

    arrayOf3Products = [];

    var leftProduct = new Product(arrayOfAll[arrayOfTresNumbers[0]]);
    var leftProductImage = document.getElementById('leftProduct_img');
    leftProductImage.setAttribute('src', leftProduct.imgUrl);
    var leftProductNameElement = document.getElementById('leftProduct_heading');
    leftProductNameElement.textContent = leftProduct.name;
    leftProductImage.addEventListener('click', clickHandler);

    arrayOf3Products.push(leftProduct);

    var centerProduct = new Product(arrayOfAll[arrayOfTresNumbers[1]]);
    var centerProductImage = document.getElementById('centerProduct_img');
    centerProductImage.setAttribute('src', centerProduct.imgUrl);
    var centerProductNameElement = document.getElementById('centerProduct_heading');
    centerProductNameElement.textContent = centerProduct.name;
    centerProductImage.addEventListener('click', clickHandler);

    arrayOf3Products.push(centerProduct);

    var rightProduct = new Product(arrayOfAll[arrayOfTresNumbers[2]]);
    var rightProductImage = document.getElementById('rightProduct_img');
    rightProductImage.setAttribute('src', rightProduct.imgUrl);
    var rightProductNameElement = document.getElementById('rightProduct_heading');
    rightProductNameElement.textContent = rightProduct.name;
    rightProductImage.addEventListener('click', clickHandler);

    arrayOf3Products.push(rightProduct);

    return arrayOf3Products
}

randomTres();

function clickHandler(event) {
    
    var products = randomTres();

    var id = event.target.id;

    products[0].shownCtr++;
    products[1].shownCtr++;
    products[2].shownCtr++;

    console.log(products[0].shownCtr);
    console.log(products[1].shownCtr);
    console.log(products[1].shownCtr);
  
    if(id == 'leftProduct_img') {
        products[0].clickCountPlus();
    } else if('centerProduct_img') {
        products[1].clickCountPlus();
    }else if('rightProduct_img'){
        products[2].clickCountPlus();
    }
    Product.voteCount++;

    if(Product.voteCount == Product.maxVote) {
        leftImageElem.removeEventListener('click', clickHandler);
        centerImageElem.removeEventListener('click', clickHandler);
        rightImageElem.removeEventListener('click', clickHandler);
      }
 }


