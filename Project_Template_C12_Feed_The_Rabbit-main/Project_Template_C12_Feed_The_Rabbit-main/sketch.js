var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;
var apples=[];
var leaves=[];

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.08;
  apple.velocityY = 4;
  apple.lifetime = 100;
  return apple;
}
function createLeaves(){
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.08;
  leaf.velocityY = 4;
  leaf.lifetime = 100;
  return leaf;
}


function draw() {
  background(0);
  


  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;
  rabbit.y = mouseY;

  

  var select_sprites = Math.round(random(1,2));

  

  if (frameCount % 80 == 0){
    if (select_sprites == 1){
      apples.push(createApples());
    }
    else {
      leaves.push(createLeaves());
    }
  }
  for(var thisapple of apples){
    if(thisapple.isTouching(rabbit)){
      console.log(thisapple.lifetime);
      thisapple.lifetime = 0;
    }
  }
  for(var thisleaf of leaves){
    if(thisleaf.isTouching(rabbit)){
      console.log(thisleaf.lifetime);
      thisleaf.lifetime = 0; 
    }
  }
  var count = 0;
  //console.log(apples)
  drawSprites();
}


