const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var attempt=0

var gameState="onsling"
function preload()
{
	backgroundImg=loadImage("bg2.jpg")
 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy1=new Boy(100,600);
	sling1=new Slingshot(boy1.body,{x:200,y:500})
	//ground1=new Ground(400,685)
    basket1=new Basket(720,100,100,20)
	basket2=new Basket(760,160,20,100)
	basket3=new Basket(720,220,100,20)
  basket4=new Basket(680,120,20,20)
  basket5=new Basket(680,200,20,20)
  obstacle1=new Obstacle(500,80,20,100)
	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(backgroundImg)

  



  boy1.display()
  sling1.display()
  //ground1.display()
  basket1.display()
  basket2.display()
  basket3.display()
  basket4.display()
  basket5.display()

  obstacle1.display()
  
  if (boy1.body.position.x>680 && boy1.body.position.x<780 && boy1.body.position.y>100 && boy1.body.position.y<200 && gameState!=="onsling" && boy1.body.velocity.x<25){
   basket6=new Basket(680,160,20,60)
    gameState="Win"
    Matter.Body.setStatic(obstacle1.body,true)
    basket6.display()
  }


 
  Matter.Body.setVelocity(obstacle1.body,{x:0,y:6})
  
  if(frameCount%60===0){
    Matter.Body.setPosition(obstacle1.body,{x:500,y:80})
  }


  console.log(gameState)
 
  textSize(30)
  fill((boy1.body.position.x+boy1.body.position.y)/6)
 text("Number of attempts = "+attempt,50,50)


 fill(random(200,255))
 text("Velocity: "+Math.round(boy1.body.velocity.x)+","+Math.round(boy1.body.velocity.y),50,200)

 text(Math.round(boy1.body.position.x)+","+Math.round(boy1.body.position.y),50,400)

 if (gameState==="Win"){
   text("You Won!!!!Congrats!!!!",50,250)
   text("Attempts required = "+attempt,50,320)
 
 }


    }


function mouseDragged(){
	if(gameState==="onsling"){

	Matter.Body.setPosition(boy1.body,{x:mouseX,y:mouseY})
 
  }
}


function mouseReleased(){
	sling1.fly()
  if(gameState!=="Win"){
  attempt=attempt+1
  }
  gameState="offsling"



}

function keyPressed(){
  if (gameState!=="Win"){
	if(keyCode === 32){ 
		sling1.attach(boy1.body)
    boy1.trajectory=[]
    gameState="onsling"
	}
}
}

async function getTime(){

  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJson=await response.json()
  var time=responseJson.datetime.slice(11,13)

  if (time>7 && time<19){
      backgroundImg=loadImage("sprites/bg1.png")
  }else
  {
      backgroundImg=loadImage("sprites/bg2.jpg")
  }

  
}