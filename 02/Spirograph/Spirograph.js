
var spin=0;

function setup() {
  createCanvas(600,600);
  frameRate(15);
}

function draw() {
  translate(300,300);
  rotate(spin);
  spin=spin+3;
  
  stroke(0);
  strokeWeight(1);
  fill(240,0);
  rect(100,100,500,500);
  stroke(255,0,0);
  rect(100,200,500,500);
  stroke(255,0,255);
  rect(100,0,500,500);
  stroke(0);
  rect(100,-100,500,500);
  stroke(255,0,0);
  rect(100,-200,500,500);
  
}
