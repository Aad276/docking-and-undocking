var iss,spacecraft,bg,issImg,scimg
var hasdocked=false


function preload(){
  bg=loadImage("spacebg.jpg")
  scimg1=loadImage("spacecraft1.png")
  scimg2=loadImage("spacecraft2.png")
  scimg3=loadImage("spacecraft3.png")
  scimg4=loadImage("spacecraft4.png")
  issImg=loadImage("iss.png")

}

function setup() {

  canvas=createCanvas(600,400)
  spacecraft=createSprite(285,240)
  spacecraft.addImage(scimg1)
  spacecraft.scale=0.15

  iss=createSprite(330,130)
  iss.addImage(issImg)
  iss.scale=0.25
}

function draw() {
  background(bg);  
  spacecraft.addImage(scimg1)
  if(!hasdocked){
    spacecraft.x=spacecraft.x+random(-1,1)

  if(keyDown("UP_ARROW")){
    spacecraft.y=spacecraft.y-2
  }

  
  if(keyDown("LEFT_ARROW")){
    spacecraft.x=spacecraft.x-2
    spacecraft.addImage(scimg4)
  }

  
  if(keyDown("RIGHT_ARROW")){
    spacecraft.x=spacecraft.x+2
    spacecraft.addImage(scimg3)
  }

  if(keyDown("DOWN_ARROW")){
   spacecraft.addImage(scimg2)
  }

   }

   if(spacecraft.y<=(iss.y+70)&& spacecraft.x<=(iss.x-10)){
     hasdocked=true 
     textSize(25)
     fill("white")
     text ("Docking Successful",200,300)
   }

  drawSprites();
}

