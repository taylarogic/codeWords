function preload () {
  grotesk = loadFont('data/SpaceGrotesk-Medium.otf');
}
var spin=0;
var letterSize;

function setup() {
  createCanvas(600,600);
  background(255);
  fill(0);
  angleMode(DEGREES);
  textSize(45);
  textFont(grotesk);
  textAlign(CENTER);
  frameRate(10);
}

function draw() {
  fill(0);
  translate(300,300);
  rotate(spin);
  textSize(letterSize);
  textFont(grotesk);
  text('hello world',0,0);
  spin+=map(mouseX,0,600,-3,3);
  letterSize=map(mouseY,0,600,8,72);
  
  stroke(0);
  fill(240,20);
  //rect(100,100,500,500);
  
  //rotate(0)
  noStroke();
  fill(240);
  pop();
  background(240,30)
  //translate(0,0);
  //rect(0,0,600,600);
}
