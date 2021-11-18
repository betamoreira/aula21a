function setup() {
  createCanvas(1400,400);
  retFixo = createSprite(200,200,50,80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  retMovendo = createSprite(1200,200,80,30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;

  retFixo.velocityX = 4;
  retMovendo.velocityX = -5;

  /*obj1 = createSprite(100,100,50,50);
  obj1.shapeColor = "green";
  obj2 = createSprite(200,100,50,50);
  obj2.shapeColor = "green";
  obj3 = createSprite(300,100,50,50);
  obj3.shapeColor = "green";
  obj4 = createSprite(400,100,50,50);
  obj4.shapeColor = "green";*/
  

}

function draw() {
  background(255,255,255); 
  
  //retMovendo.x = World.mouseX;
  //retMovendo.y = World.mouseY;



  drawSprites();
}

function isTouching(retangulo1, retangulo2){

  if(retangulo1.x - retangulo2.x < retangulo2.width/2 + retangulo1.width/2
    && retangulo2.x - retangulo1.x < retangulo2.width/2 + retangulo1.width/2
    && retangulo1.y - retangulo2.y < retangulo2.height/2 + retangulo1.height/2
    && retangulo2.y - retangulo1.y < retangulo2.height/2 + retangulo1.height/2){
      return true;
  }
  else{
    
    return false;
  }

}