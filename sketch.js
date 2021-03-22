var canvas;
var music;
var Blue;
var orange;
var red;
var green;
var Box,edges;
var Touching;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   Blue = createSprite(92,587,180,20);
   Blue.shapeColor="blue";

   orange = createSprite(295,587,180,20);
   orange.shapeColor="orange";

   red = createSprite(500,587,190,20);
   red.shapeColor="red"

   green = createSprite(708,587,180,20);
   green.shapeColor="green";

    //create box sprite and give velocity
    Box=createSprite(200,200,30,30);
    Box.shapeColor="white";
    Box.velocityY=7;
    Box.velocityX=7;
     
}

function draw() {
    background("black");
    //create edgeSprite
    edges=createEdgeSprites();
    Box.bounceOff(edges);
    //add condition to check if box touching surface and make it box
  

   if(Box.isTouching(red) &&  Box.bounceOff(red)){
   Box.shapeColor="red";
   music.play();

   }
   
   if(Box.isTouching(green) &&  Box.bounceOff(green)){
   Box.shapeColor="green";
   
   }  
 
   if(Box.isTouching(Blue) &&  Box.bounceOff(Blue)){
   Box.shapeColor="Blue";
   
   }

   if(Box.isTouching(orange) &&  Box.bounceOff(orange)){
    Box.velocityY=0;
    Box.velocityX=0;
    Box.shapeColor="orange";
    music.stop();
   }
   
 // if(Box.isTouching(red) &&  Box.bounceOff(red)){
  // music.play();
 // }
   
   
    drawSprites();
}
