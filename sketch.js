//Create variables here
var dog,dogImage;
var dogImage2;
var foodStock;

function preload(){
 var dogImage= loadImage("image/dogImg.png");
 var dogImage2=loadImage("image/dogImg1.png");
}

	

function setup() {
  createCanvas(500,500)
 
  dog=createSprite(250,250,10,10);
  dog.addImage("d1",dogImage);
  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  

  background(46,139,87);

  Text("press UP_ARROW to feed milk",300,300);
  stroke (10);
  Fill ("purple");

  if(keyWentDown(UP_ARROW)){
     writeStock(foods)
     dog.addImage("d2",dogImage2);
  }

  drawSprites();
  //add styles here

}



