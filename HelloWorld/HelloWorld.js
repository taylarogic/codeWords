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
  translate(300,300);
  rotate(spin);
  textSize(letterSize);
  textFont(grotesk);
  stroke(0);
  text('hello world',0,0);
  fill(0);
  text('hello world',5,0);
  spin+=map(mouseX,0,600,-3,3);
  letterSize=map(mouseY,0,600,8,72);
  
 
  fill(240);
  pop();


}
