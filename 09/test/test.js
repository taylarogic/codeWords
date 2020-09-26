function preload () {
  grotesk = loadFont('data/SpaceGrotesk-Medium.otf');
}
function setup() {
  createCanvas(600,600);
  background(255);
  fill(0);
  textSize(45);
  textFont(grotesk);
}

function draw() {
  translate(300,300);
  textFont(grotesk);
  textAlign(CENTER);
  text('a',0,0);
  textAlign(LEFT);
  text('secret', 5,20);
  text('is', 50, 165);
  text('waiting',60,140); 
  rotate(PI / 2); 
  text('world', 20,-30); 
}
