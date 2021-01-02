var hi=0;
var gameState="play"
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200,200);
  rotate(-90)
  if(gameState==="play"){
  
   hr = hour();

   mn = minute();

   sc = second();

  
   secondAngle = map(sc, 0, 60, 0, 360);
  }
   
   stroke("pink")
   strokeWeight(8);
   noFill();
   arc(0, 0, 300, 300, 0, secondAngle);
   minuteAngle = map(mn, 0, 60, 0, 360);
   stroke("yellow")
   strokeWeight(8);
   noFill();
   arc(0, 0, 280, 280, 0, minuteAngle);
   hourAngle = map(hr % 12, 0, 12, 0, 360);
   stroke("lightblue")
   strokeWeight(8);
   noFill();
   arc(0, 0, 260, 260, 0, hourAngle);
  

  push();
  rotate(secondAngle);
  stroke("pink");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("blue");
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("red");
  line(0, 0, 50, 0);
  pop();

  if(keyDown("space")){
    nut();
  }
  if(hi%2!==0){
    gameState="end"
  }
  else{
    gameState="play"
  }
  
  if(gameState==="end"){
    
  }
  
}
function nut(){
  hi=hi+1
  
}